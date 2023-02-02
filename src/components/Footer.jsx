import {
  Instagram,
  Facebook,
  Twitter,
  Reddit,
  YouTube,
  Room,
  Phone,
  MailOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: space-between; */
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.7 ease;
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
const ListItem = styled.div`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Payment = styled.img`
  width: 70%;
  margin-left: -15px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MANISH.</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          expedita officiis dignissimos, ea libero repellendus molestiae quasi
          vel quos provident? Nemo ratione cumque in officia numquam, cum
          assumenda animi nobis.
        </Desc>
        <SocialContainer>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="ff4500">
            <Reddit />
          </SocialIcon>
          <SocialIcon color="FF0000">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>New Fashion</ListItem>
          <ListItem>Season Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "07px" }} />
          26 Shivanagar, Near Sonu Gas Agency, Surat 394221
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "07px" }} />
          +91 74057 81078
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: "07px" }} />
          patilmanish120@gmail.com
        </ContactItem>
        <Payment src="https://www.speedypandit.com/pune/images/img/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png" />
      </Right>
    </Container>
  );
};

export default Footer;
