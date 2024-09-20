import styled from "styled-components";

export const Container = styled.div`
  background-color: #eee;
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

export const ShapeFirstChild = styled.div`
  background: linear-gradient(#1845ad, #23a2f6);
  left: -80px;
  top: -80px;
`;

export const ShapeLastChild = styled.div`
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -30px;
  bottom: -80px;
`;

export const FormContainer = styled.div`
  height: 520px;
  width: 400px;
  /* background: blue; */
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
`;

export const Form = styled.form`
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
`;

export const FormH3 = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  margin-left: -15px;
`;

export const Input = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  margin-left: -15px;
`;

export const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  opacity: 0.9;
  background-color: blue;
  color: white;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`;

export const Social = styled.div`
  margin-top: 30px;
  display: flex;
`;

export const SocialDiv = styled.div`
  padding-top: 50px;
  display: inline-flex;
`;

export const SocialFB = styled.div`
  margin-left: 240px;
  padding: 10px;
  display: flex;
  color: black;
  flex: 1;
  cursor: pointer;
  background-color: #eee;
  box-shadow: 0px 0px 5px blue;
  border-radius: 5px;
`;

export const SocialI = styled.div`
  color: black;
  border-style: 0px solid #eee;
  padding: 10px;
  flex: 1;
  cursor: pointer;
  background-color: #eee;
  box-shadow: 0px 0px 5px green;
  border-radius: 5px;
`;
