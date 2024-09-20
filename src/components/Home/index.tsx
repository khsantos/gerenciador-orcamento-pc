import * as C from './styles'

export const Home = () => {
    return(
        <C.Container>
            <C.HomeBox>
                <C.H1>Home</C.H1>
                <C.H2>Dashboard</C.H2>
                <C.DescriptiveText>Dashboard permite que você gerencie e veja suas despesas e receitas, 
                    podendo assim adicionar, excluir, atualizar.</C.DescriptiveText>

                <C.H2>About</C.H2>
                <C.DescriptiveText>Página contendo informações do criador do website.</C.DescriptiveText>

                <C.H2>Login</C.H2>
                <C.DescriptiveText>Página de Login sem funções, havendo apenas o design.</C.DescriptiveText>
                
            </C.HomeBox>
        </C.Container>
    )
}