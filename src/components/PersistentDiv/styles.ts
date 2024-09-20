import styled from "styled-components";

export const persistentDiv = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #eee;
    padding-bottom: 15px;
    padding-top: 15px;
    text-align: center;
    display: inline-flex;
    flex: 1;
    :hover {
        border-style: solid;
        border-color: blue;
        border-radius: 5px;
    }
`;

export const linkText = styled.a`
    color: black;
    margin: 0 10px;
    padding: 5px;
    flex: 1;
    font-weight: bold;
    text-decoration: none;
    border: 2px solid #0000;

    :hover
    {
        border: none;
        color:black;
    }
`;