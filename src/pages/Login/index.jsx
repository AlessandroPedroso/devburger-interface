import Logo from '../../assets/logo.svg';
import { Button, Container, Form, InputContainer, LeftContainer, Link, RigthContainer, Titile } from './style';

export default function Login() {
	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devBurguer" />
			</LeftContainer>
			<RigthContainer>
				<Titile>
					Olá, seja bem vindo ao <span>Dev Burguer!</span>Acesse com seu <span>Login e senha.</span>
				</Titile>
				<Form>
					<InputContainer>
						<label>Email</label>
						<input type="email" />
					</InputContainer>
					<InputContainer>
						<label>Senha</label>
						<input type="password" />
					</InputContainer>
					<Link>Esqueci minha senha.</Link>
					<Button>Entrar</Button>
				</Form>
				<Link>Não possui conta? Clique aqui.</Link>
			</RigthContainer>
		</Container>
	);
}
