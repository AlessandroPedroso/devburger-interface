import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../utils/dataAPi";
import { CategoryButton, Container, ContainerItems, Title } from "./styles";

function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadCatefories() {
      const response = await getCategories();
      setCategories(response.data);
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
      <Title>Categorias</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {categories.map((category) => (
          <ContainerItems key={category.id} imageUrl={category.url}>
            <CategoryButton
              onClick={() => {
                navigate({
                  pathname: "/cardapio",
                  search: `?categoria=${category.id}`,
                });
              }}
            >
              {category.name}
            </CategoryButton>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}

export default CategoriesCarousel;
