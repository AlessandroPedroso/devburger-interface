import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { createRegister } from "../../utils/dataAPi.js";

import Logo from "../../assets/logo.svg";
import Button from "../../components/Button/index.jsx";
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RigthContainer,
  Titile,
} from "./style.js";

export function Register() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup.string().required("O nome é Obrigatório"),
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Digite uma senha"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As Senhas devem ser iguais")
        .required("Confirma sua senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // try {
    Promise.all([createRegister(data)])
      .then(([registerStatus]) => {
        if (registerStatus === 200 || registerStatus === 201) {
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          toast.success("Conta criado com sucesso!");
        } else if (registerStatus === 400) {
          toast.error("Email já cadastrado! Faça o login.");
        } else {
          throw new Error(); //qualquer outro erro manda o erro para o catch
        }
      })
      .catch(() => {
        toast.error("Falha no Sistema! Tente novamente");
      });
    // const { status } = await api.post(
    // 	'users',
    // 	{
    // 		name: data.name,
    // 		email: data.email,
    // 		password: data.password,
    // 	},
    // 	{
    // 		validateStatus: () => true,
    // 	},
    // );

    // if (status === 200 || status === 201) {
    // 	toast.success('Conta criado com sucesso!');
    // } else if (status === 400) {
    // 	toast.error('Email já cadastrado! Faça o login para condi');
    // } else {
    // 	throw new Error(); //qualquer outro erro manda o erro para o catch
    // }
    // } catch (error) {
    // 	toast.error('Falha no Sistema! Tente novamente');
    // }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devBurguer" />
      </LeftContainer>
      <RigthContainer>
        <Titile>Criar Conta</Titile>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="name" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <Button type="submit" red={false}>
            Criar conta
          </Button>
        </Form>
        <p>
          Não possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RigthContainer>
    </Container>
  );
}
