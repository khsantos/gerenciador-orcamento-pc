import * as C from './styles'
import avatarIcon from '../../assets/avatar.png';
import githubLogo from '../../assets/github.png';
import linkedinLogo from '../../assets/linkedin.png';
import facebookLogo from '../../assets/facebook.png';

export const About = () => {
    return (
        <C.Container>

            <C.RectangleInfo>
                <C.Image><img src={avatarIcon} alt='avatar' width='100px' height='100px'></img>
                <C.InfoText>Kauã Heidemann Santos</C.InfoText>
                <C.Social>
                    <C.Github src={githubLogo}></C.Github>
                    <C.Linkedin src={linkedinLogo}></C.Linkedin>
                    <C.Facebook src={facebookLogo}></C.Facebook>
                </C.Social>
                </C.Image></C.RectangleInfo>

            <C.RectangleAboutMe>
                <C.Info>Email</C.Info>
                <C.NormalText>kaauhheidemann@hotmail.com</C.NormalText>

                <C.Info>Cargo</C.Info>
                <C.NormalText>Desenvolvedor</C.NormalText>

                <C.Info>Telefone</C.Info>
                <C.NormalText>(45)9888388187</C.NormalText>
            </C.RectangleAboutMe>
        </C.Container>
    )
}