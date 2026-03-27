import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "lodash";
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import {
  AlunoContainer,
  ProfilePicture,
  EditLink,
  CloseLink,
  NovoAluno,
} from "./styled";
import axios from "../../services/axios";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import * as exampleActions from "../../store/modules/example/actions";
import { FcNoVideo } from "react-icons/fc";

export default function Alunos() {
  const [alunos, setAlunos] = useState([]); //retorna duas coisas, um valor pro estado e uma funçao pra setar esse estado
  const [isLoading, setIsLoading] = useState("false");

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get("/alunos");
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute("display", "block");
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      e.target.parentElement.remove();
      setIsLoading(false);
    } catch (err) {
      //const errors = get(err, "response.data.errors", []);
      //errors.map((error) => toast.error(error));
      const status = get(err, "response.status", 0);
      if (status === 401) {
        toast.error("Voce precisa fazer login.");
      } else {
        toast.error("Erro ao excluir aluno");
      }
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h2>Alunos</h2>
      <NovoAluno to="/aluno/">
        <button>Novo Aluno</button>{" "}
      </NovoAluno>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, "Fotos[0].url", false) ? (
                <img
                  src={aluno.Fotos[0].url}
                  alt="foto do aluno"
                  crossOrigin="anonymous"
                ></img>
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <EditLink to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </EditLink>

            <CloseLink
              onClick={handleDeleteAsk}
              to={`/aluno/${aluno.id}/delete`}
            >
              <FaWindowClose size={16} />
            </CloseLink>

            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={(e) => handleDelete(e, aluno.id, index)}
            />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
