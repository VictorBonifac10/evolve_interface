import { Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription } from "./styles";

import Logo from '../../assets/Logo.png'
import videoBanner from '../../assets/videoBanner.mp4'

export function Home() {
    return (
        <>
            <ContainerTop>
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
                            </SecondDescription>|
                        </ContentLeft>
                        <ContentRight>
                            <i class="ri-whatsapp-line"></i>
                            <i class="ri-google-line"></i>
                            <i class="ri-instagram-line"></i>
                        </ContentRight>
                    </div>
                </Banner>
            </ContainerTop>
            <h1>2222</h1>
        </>
    )
}