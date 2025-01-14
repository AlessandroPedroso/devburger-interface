import { useNavigate, useResolvedPath } from "react-router-dom";
import { userUser } from "../../hooks/UserContext";
import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
} from "./styles";

import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import LogoHeader from "../../assets/logoHeader.png";

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = userUser();
  const { pathname } = useResolvedPath();

  function logoutUsers() {
    logout();
    navigate("/login");
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <img src={LogoHeader} alt="logo do header" />
          <div>
            <HeaderLink to={"/"} $isActive={pathname === "/"}>
              Home
            </HeaderLink>
            <hr></hr>
            <HeaderLink to={"/cardapio"} $isActive={pathname === "/cardapio"}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#fff" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout onClick={logoutUsers}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCart color="#fff" size={24} />
            <HeaderLink to={"/carrinho"}>Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
