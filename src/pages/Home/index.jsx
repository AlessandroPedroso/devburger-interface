import CategoriesCarousel from '../../components/CategoriesCarousel';
import OffersCarousel from '../../components/OffersCarousel';
import { userUser } from '../../hooks/UserContext';
import { Banner, Container } from './style';

export const Home = () => {
	console.log(userUser());
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
