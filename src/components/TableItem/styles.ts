import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
    display:inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
    text-align: center;
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
`

export const Button = styled.button`
    width: 45%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: lightblue;
    color: black;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        opacity:0.7;
        background-color: blue;
        color: white;

    }
`;

