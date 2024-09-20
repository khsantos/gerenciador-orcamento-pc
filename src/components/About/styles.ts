import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background-color: #eee;
    padding-top: 100px;
    display: flex;
`;

export const RectangleInfo = styled.div`
    opacity: 0.7;
    background-color: blue;
    width: 420px;
    height: 520px;
    margin-left: 100px;
    margin-top: 80px;
    border-radius: 5px;
`;

export const RectangleAboutMe = styled.div`
    width: 840px;
    height: 480px;
    min-height: 40vh;
    background-color: whitesmoke;
    margin-left: 150px;
    margin-top: 100px;
    display: inline-block;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ccc;
`;

export const Image = styled.div`
    width: 40px;
    height: 40px;
    margin-left: 160px;
    margin-top: -50px;
    z-index: 1;
    display: block;
`;

export const Info = styled.div`
    font-weight: 900;
    font-size: 40px;
    padding: 10px;
    text-align: left;
    margin-top: 25px;
    opacity: 0.8;
    color: blue;
    :hover {

    }
`;

export const NormalText = styled.div`
    font-weight: 500;
    font-size: 28px;
    padding: 10px;
    text-align: left;
`;

export const InfoText = styled.p`
    text-align: center;
    color: white;
    font-size: 24px;
    width: 260px;
    margin-left: -75px;
`;

export const Social = styled.div`
    padding: 20px;
    border: 2px solid azure;
    align-self: center;
    margin-top: 270px;
    margin-left: -86px;
    bottom: 1px;
    width: 230px;
    display: inline-flex;
    align-items: center;
`;

export const Github = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 60px;
    cursor: pointer;
`;

export const Linkedin = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 45px;
    cursor: pointer;
`;

export const Facebook = styled.img`
    width: 60px;
    height: 60px;
    cursor: pointer;
`;
