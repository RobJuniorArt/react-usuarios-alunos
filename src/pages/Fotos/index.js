import { useState, useEffect } from "react";
import { get } from "lodash";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import * as actions from "../../store/modules/auth/actions";

import { useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import Loading from "../../components/Loading";
import { Title, Form } from "./styled";
import axios from "../../services/axios";
import history from "../../services/history";

export default function Fotos({ match, history }) {
  const dispatch = useDispatch();
  const id = get(match, "params.id", "");

  const [isLoading, setiSLoading] = useState(false);
  const [foto, setFoto] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setiSLoading(true);
        const { data } = await axios.get(`/alunos/${id}`); //entre chaves estou pulando o response e pegando data direto
        setFoto(get(data, "Fotos[0].url", ""));
        setiSLoading(false);
      } catch (err) {
        toast.error("Erro ao obter imagem.");
        setiSLoading(false);
        history.push("/");
      }
    };
    getData();
  }, [id, history]);

  const handleChange = async (e) => {
    // quando seleciono a foto no computador ela muda onde esta a foto no site.
    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);
    setFoto(fotoURL);

    //axios (arquivos json) por padrao, n envia formularios, o que estamos enviando pra base de dados
    //vamos simular um formulario

    const formData = new FormData();
    formData.append("aluno_id", id);
    formData.append("foto", file);

    try {
      setiSLoading(true);
      await axios.post("/fotos/", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      toast.success("Foto Enviada com sucesso!");
      setiSLoading(false);
    } catch (err) {
      setiSLoading(false);
      const { status } = get(err, "response", "");
      toast.error("Erro ao enviar foto");
      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="foto">
          {foto ? (
            <img src={foto} alt="foto" crossOrigin="anonymous" />
          ) : (
            "Selecionar Foto"
          )}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired,
};
