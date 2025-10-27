import { Button, ClientCarousel, Header, ServicesCards, SupportButton, Title } from "../../components";

import { ContainerBody, Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription, ContainerMain, ContainerAbout, Text, ContainerServices, ContainerPortfolio, Mask, ContainerClients } from "./styles";

import Logo from '../../assets/Logo.png'
import videoBanner from '../../assets/videoBanner.mp4'
import videoPortfolio from '../../assets/videoPortfolio.mp4'
import ImgAboutSection from '../../assets/desenvolvedor.jpg'

export function Home() {

    return (
        <ContainerBody>
            <Header />
            <SupportButton />
            <ContainerTop>
                <Banner>
                    <video src={videoBanner} preload="none" autoPlay muted loop></video>
                    <Mask />
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
                    <div class="scroll-indicator">
                        <div class="mouse">
                            <div class="wheel"></div>
                        </div>
                    </div>
                </Banner>
            </ContainerTop>
            <ContainerMain>
                <ContainerAbout>
                    <div className="aboutText">
                        <Title>Sobre</Title>
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantium autem quisquam possimus debitis officiis sapiente, et quas eligendi totam?et consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantiu
                            <br /><br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantium autem quisquam possimus debitis officiis sapiente, et quas eligendi totam?
                        </Text>
                    </div>
                    <div className="aboutImage">
                        <img src={ImgAboutSection} alt='Desenvolvedor-de-sites' />
                        <div class="rotating-container">
                            <svg viewBox="0 0 300 300" width="200" height="200">
                                <path id="circle-path" d="M 150, 150
                     m -100, 0 
                     a 100,100 0 1,1 200,0
                     a 100,100 0 1,1 -200,0" fill="none" />

                                <circle cx="150" cy="150" r="80" class="inner-circle" />

                                <text id="text-on-path">
                                    <textPath href="#circle-path" startOffset="0%">
                                        • PERFORMANCE • GROWTH • SOLUTIONS • TRENDING
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </ContainerAbout>
                <ContainerServices>
                    <Title>Porque escolher nossa equipe?</Title>
                    <ServicesCards />
                </ContainerServices>
                <ContainerPortfolio>
                    <video src={videoPortfolio} preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="content">
                        <Title>Portfólio</Title>
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantium autem quisquam possimus debitis officiis sapiente, et quas eligendi totam?et consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantiu
                            <br /><br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantium autem quisquam possimus debitis officiis sapiente, et quas eligendi totam?
                        </Text>
                    </div>
                    <br />
                    <Button>Veja mais <i className="ri-arrow-right-down-long-line"></i></Button>
                </ContainerPortfolio>
                <ContainerClients>
                    <Title>Clientes</Title>
                    <ClientCarousel />
                </ContainerClients>
            </ContainerMain>
        </ContainerBody>
    )
}