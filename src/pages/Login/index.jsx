import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Button from "../../components/Button";
import { userUser } from "../../hooks/UserContext.jsx";
import { api } from "../../services/api.js";
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RigthContainer,
  Titile,
} from "./style";

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = userUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Digite uma senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { data: userDate } = await toast.promise(
        api.post("session", {
          email: data.email,
          password: data.password,
        }),

        {
          pending: "Verificando seus dados",

          success: {
            render() {
              setTimeout(() => {
                navigate("/");
              }, 2000);
              return "Seja Bem-vinda(a)👌";
            },
          },

          error: "Email ou Senha Incorretos 🤯",
        }
      );
      putUserData(userDate);
      // localStorage.setItem('token', token);
    } catch (error) {
      toast.error("Falha no Sistema! Tente novamente");
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devBurguer" />
      </LeftContainer>
      <RigthContainer>
        <Titile>
          Olá, seja bem vindo ao{" "}
          <span>
            Dev Burguer!
            <br />
          </span>
          Acesse com seu <span>Login e senha.</span>
        </Titile>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit" red={false}>
            Entrar
          </Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RigthContainer>
    </Container>
  );
}
