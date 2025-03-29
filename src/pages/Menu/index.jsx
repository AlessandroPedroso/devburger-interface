import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonVoltar from "../../components/ButtonVoltar/index.jsx";
import CardProduct from "../../components/CardProduct/index.jsx";
import { getCategories, getProduct } from "../../utils/dataAPi.js";
import { formatPrice } from "../../utils/formatPrice.js";
import {
  Banner,
  CategoryButton,
  CategoryMenu,
  Container,
  ProductsContainer,
} from "./styles.js";
export const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProdutcts] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get("categoria"); // + => converte para number

    if (categoryId) {
      return categoryId;
    }

    return 0;
  });

  useEffect(() => {
    async function loadCategoriesAndProducts() {
      Promise.all([getCategories(), getProduct()]).then(
        ([dataCategories, dataProducts]) => {
          const newCategories = [
            { id: 0, name: "Todas" },
            ...dataCategories.data,
          ];
          setCategories(newCategories);

          const newProducts = dataProducts.map((product) => ({
            currencyValue: formatPrice(product.price),
            ...product,
          })); // realiza os filtros dos produtos verdadeiros
          setProducts(newProducts);
        }
      );
    }
    loadCategoriesAndProducts();

    // async function loadCategories() {
    // 	const { data } = await getCategories();

    // 	setCategories(data);

    // 	const newCategories = [{ id: 0, name: 'Todas' }, ...data];
    // }

    // async function loadProducts() {
    // 	const data = await getProduct();

    // 	const newProducts = data.map((product) => ({ currencyValue: formatPrice(product.price), ...product })); // realiza os filtros dos produtos verdadeiros

    // 	setProducts(newProducts);
    // }

    // loadCategories();

    // loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProdutcts(products);
    } else {
      const newFilteredProducts = products.filter(
        (products) => products.category_id === activeCategory
      );
      setFilteredProdutcts(newFilteredProducts);
    }
  }, [products, activeCategory]);

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
      <ButtonVoltar onClick={() => navigate("/home")} />
      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                { pathname: "/cardapio", search: `?categoria=${category.id}` },
                { replace: true },
                setActiveCategory(category.id)
              );
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.map((products) => (
          <CardProduct products={products} key={products.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
};
