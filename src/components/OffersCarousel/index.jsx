import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getProduct } from '../../utils/dataAPi';
import { Container, ContainerItems, Title } from './styles';

export default function OffersCarousel() {
	const [offers, setOffers] = useState([]);

	useEffect(() => {
		async function loadCatefories() {
			const data = await getProduct();

			//faz o filtro com todas as ofertas disponivel
			// const onlyOffers = data.filter((products) => products.offer === true);
			const onlyOffers = data.filter((products) => products.offer);
			console.log(onlyOffers);

			setOffers(onlyOffers);
		}

		loadCatefories();
	}, []);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1280 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1280, min: 690 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 690, min: 0 },
			items: 2,
		},
	};

	return (
		<Container>
			<Title>Ofertas do dia</Title>
			<Carousel responsive={responsive} infinite={true} partialVisbile={false} itemClass="carousel-item">
				{offers.map((category) => (
					<ContainerItems key={category.id} imageUrl={category.url}>
						<p>{category.name}</p>
					</ContainerItems>
				))}
			</Carousel>
		</Container>
	);
}