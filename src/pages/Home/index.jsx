import { Button, Header, SupportButton, Title } from "../../components";

import { ContainerBody, Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription, ContainerMain, ContainerAbout, Text, CircleWrapper, RotatingText, ImageBox } from "./styles";

import Logo from '../../assets/Logo.png'
import videoBanner from '../../assets/videoBanner.mp4'

export function Home() {
    return (
        <ContainerBody>
            <Header />
            <ContainerTop>
                <SupportButton />
                <Banner>
                    <video src={videoBanner} preload="none" autoPlay muted loop></video>
                    <div className="mask"></div>
                    <div className="containerBanner">
                        <ContentLeft>
                            <img src={Logo} alt='Logo da Empresa' />
                            <FirstDescription>
                                Fortaleça sua empresa com nossa experiência especializada.
                            </FirstDescription>
                            <SecondDescription>
                                Desenvolvemos soluções personalizadas com preço acessível para levar sua empresa ao próximo nível.
                            </SecondDescription>

                            <Button>Veja mais <i className="ri-arrow-right-down-long-line"></i></Button>

                        </ContentLeft>
                        <ContentRight>
                            <i className="ri-whatsapp-line"></i>
                            <i className="ri-google-line"></i>
                            <i className="ri-instagram-line"></i>
                        </ContentRight>
                    </div>
                </Banner>
            </ContainerTop>
            <ContainerMain>
                <ContainerAbout>
                    <div>
                        <Title>Sobre</Title>
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantium autem quisquam possimus debitis officiis sapiente, et quas eligendi totam?et consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantiu
                            <br /><br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantium autem quisquam possimus debitis officiis sapiente, et quas eligendi totam?
                        </Text>
                    </div>
                    <CircleWrapper>
                        <ImageBox>IMG</ImageBox>

                        <RotatingText>
                            <svg viewBox="0 0 100 100">
                                <path
                                    id="circlePath"
                                    d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                                />
                                <text>
                                    <textPath href="#circlePath">digital solutions • digital solutions •</textPath>
                                </text>
                            </svg>
                        </RotatingText>
                    </CircleWrapper>
                </ContainerAbout>
            </ContainerMain>
        </ContainerBody>
    )
}