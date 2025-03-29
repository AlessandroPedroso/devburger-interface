import PropTypes from "prop-types";
import CartButton from "../CartButton";
import { CardImage, Container } from "./styles";
import { useCart } from "../../hooks/CartContext";
export default function CardProduct({ products }) {
  const { putProductInCart } = useCart();
  return (
    <Container>
      <CardImage src={products.url} alt={products.name} />
      <div>
        <p>{products.name}</p>
        <strong>{products.currencyValue}</strong>
      </div>
      <CartButton onClick={() => putProductInCart(products)} />
    </Container>
  );
}

CardProduct.propTypes = {
  products: PropTypes.object,
};
