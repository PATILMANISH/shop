import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60vh;
  background-color: #f5fafd;
  /* background-color: indianred; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.p`
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign:"center"})}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 45px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 0.5px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
border:none;
flex:8;
padding-left: 20px;
`;
const Button = styled.button`
flex:1;
background-color: teal;
color:white;
border:none;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timly updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
