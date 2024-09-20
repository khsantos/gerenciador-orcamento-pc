import styled from "styled-components";

export const Container = styled.div`
    min-height: 85vh;
    max-height: 100vh;
    background-color: #eee;
    padding-top: 100px;
    display: flex;
    align-self: center;
`;

export const HomeBox = styled.div`
    width: 960px;
    height: 640px;
    background-color: white;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ccc;
`;

export const H1 = styled.h1`
    font-size: 32px;
    text-align: center;
`;

export const H2 = styled.div`
    text-align: left;
    font-size: 24px;
    border: 2px solid black;
    opacity: 0.7;
    background-color: blue;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
    color: white;
`;

export const DescriptiveText = styled.div`
    font-size: 18px;
    text-align: center;
    margin-bottom: 90px;
    margin-top: 15px;
`;