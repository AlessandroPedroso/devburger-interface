import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';
import Button from '../../components/Button/index.jsx';
import { api } from '../../services/api.js';
import { Container, Form, InputContainer, LeftContainer, RigthContainer, Titile } from './style.js';

export default function Register() {
	const schema = yup
		.object({
			name: yup.string().required('O nome é Obrigatório'),
			email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
			password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password')], 'As Senhas devem ser iguais')
				.required('Confirma sua senha'),
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
		const response = await toast.promise(
			api.post('users', {
				name: data.name,
				email: data.email,
				password: data.password,
			}),

			{
				pending: 'Verificando seus dados...',
				success: 'Cadastro efetuado com sucesso! 👌',
				error: 'Ops, algo deu errado! Tente Novamente. 🤯',
			},
		);

		console.log(response);
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
						<input type="name" {...register('name')} />
						<p>{errors?.name?.message}</p>
					</InputContainer>
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
					<InputContainer>
						<label>Confirmar Senha</label>
						<input type="password" {...register('confirmPassword')} />
						<p>{errors?.confirmPassword?.message}</p>
					</InputContainer>
					<Button type="submit" red={false}>
						Entrar
					</Button>
				</Form>
				<p>
					Não possui conta? <a>Clique aqui.</a>
				</p>
			</RigthContainer>
		</Container>
	);
}