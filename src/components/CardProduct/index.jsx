import PropTypes from 'prop-types';
import CartButton from '../CartButton';
import { CardImage, Container } from './styles';

export default function CardProduct({ products }) {
	console.log(products);
	return (
		<Container>
			<CardImage src={products.url} alt={products.name} />
			<div>
				<p>{products.name}</p>
				<strong>{products.currencyValue}</strong>
			</div>
			<CartButton />
		</Container>
	);
}

CardProduct.propTypes = {
	products: PropTypes.object,
};