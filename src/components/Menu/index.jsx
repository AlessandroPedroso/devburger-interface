import { Banner, CategoryMenu, Container, ProductsContainer } from './styles.js';

export const Menu = () => {
	return (
		<Container>
			<Banner>
				<h1>
					O MELHOR
					<br />
					HAMBURGUER
					<br />
					ESTÁ AQUI!
					<span>Esse cardápio está irresistível!</span>
				</h1>
			</Banner>
			<CategoryMenu>teste</CategoryMenu>

			<ProductsContainer>teste</ProductsContainer>
		</Container>
	);
};
