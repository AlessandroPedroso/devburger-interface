import { Banner, Container, Content } from './style';

export const Home = () => {
	return (
		<main>
			<Banner>
				<h1>Bem-Vindo(a)!</h1>
			</Banner>
			<Container>
				<Content>
					<div>Carrosel Categorias</div>
					<div>Carrosel Produtos</div>
				</Content>
			</Container>
		</main>
	);
};
