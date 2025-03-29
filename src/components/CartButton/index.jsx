import Cart from '../../assets/Vector.svg';
import { ContainerButton } from './styles';

export default function CartButton({ ...props }) {
	return (
		<ContainerButton {...props}>
			<img src={Cart} alt="carrinho de compras" />
		</ContainerButton>
	);
}
