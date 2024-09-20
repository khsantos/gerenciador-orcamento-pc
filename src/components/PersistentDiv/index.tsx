import { Link } from "react-router-dom";
import * as C from "./styles";

export const PersistentDiv = () => {
  return (
    <C.persistentDiv>
      <C.linkText>
        <Link to="" style={{textDecoration: 'none', color: 'black'}}>Dashboard</Link>
      </C.linkText>
      <C.linkText>
        <Link to="/about" style={{textDecoration: 'none', color: 'black'}}>About</Link>
      </C.linkText>
      <C.linkText>
        <Link to="/home" style={{textDecoration: 'none', color: 'black'}}>Home</Link>
      </C.linkText>
      <C.linkText>
        <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>Login</Link>
      </C.linkText>
    </C.persistentDiv>
  );
};
