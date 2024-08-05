import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import { Container, Form, InputContainer, LeftContainer, RigthContainer, Titile } from './style';

export default function Login() {
	const schema = yup
		.object({
			email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
			password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);

	const onSubmit = (data) => console.log(data);

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devBurguer" />
			</LeftContainer>
			<RigthContainer>
				<Titile>
					Olá, seja bem vindo ao{' '}
					<span>
						Dev Burguer!
						<br />
					</span>
					Acesse com seu <span>Login e senha.</span>
				</Titile>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label>Email</label>
						<input type="email" {...register('email')} />
						<p>{errors?.email?.message}</p>
					</InputContainer>
					<InputContainer>
						<label>Senha</label>
						<input type="password" {...register('password')} />
						<p>{errors?.password?.message}</p>
					</InputContainer>
					<Button type="submit">Entrar</Button>
				</Form>
				<p>
					Não possui conta? <a>Clique aqui.</a>
				</p>
			</RigthContainer>
		</Container>
	);
}
