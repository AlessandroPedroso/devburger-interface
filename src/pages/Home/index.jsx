import CategoriesCarousel from '../../components/CategoriesCarousel';
import OffersCarousel from '../../components/OffersCarousel';
import { Banner, Container } from './style';
export const Home = () => {
	return (
		<main>
			<Banner>
				<h1>Bem-Vindo(a)!</h1>
			</Banner>
			<Container>
				<div>
					<CategoriesCarousel />
					<OffersCarousel />
				</div>
			</Container>
		</main>
	);
};
