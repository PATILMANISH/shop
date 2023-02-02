import styled from "styled-components";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5 ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  /* background-color: indianred; */
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
// const Circle = styled.div`
//   width: 600px;
//   height: 560px;
//   border-radius: 10%;
//   background-color: indianred;
//   position: absolute;
// `;
const Image = styled.img`
  /* width: 100%; */
  z-index: 2;
  height: 85%;
`;

const Icon = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: white;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5 ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Product = ({ item }) => {
  // console.log(item)
  return (
    <Container key={item.id}>
      {/* <Circle /> */}
      {/*<Image src={require("../images/P" + item.id + ".png")} /> */}
      <Image src={require("../images/P" + item.img + ".png")} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
		<Link to={`/product/${item._id}`}>
		<SearchOutlined />
		</Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
