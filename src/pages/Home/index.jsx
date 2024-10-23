import CategoriesCarousel from '../../components/CategoriesCarousel';
import OffersCarousel from '../../components/OffersCarousel';
import { Banner, Container, Content } from './style';
export const Home = () => {
	return (
		<main>
			<Banner>
				<h1>Bem-Vindo(a)!</h1>
			</Banner>
			<Container>
				<Content>
					<CategoriesCarousel />
					<OffersCarousel />
				</Content>
			</Container>
		</main>
	);
};
