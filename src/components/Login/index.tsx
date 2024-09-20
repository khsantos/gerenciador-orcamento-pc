import * as C from "./styles";

export const Login = () => {
  return (
    <C.Container>
      <C.FormContainer>
        <C.FormH3>Entre Aqui</C.FormH3>
        <C.Label> Usuário</C.Label>

        <C.Input placeholder="Email ou Phone"></C.Input>
        <C.Label>Senha</C.Label>

        <C.Input placeholder="Password"></C.Input>
        <C.Button>Entrar</C.Button>
        <C.SocialDiv>
          <C.SocialI>Google</C.SocialI>
          <C.SocialFB>Facebook</C.SocialFB>
        </C.SocialDiv>
      </C.FormContainer>
    </C.Container>
  );
};
