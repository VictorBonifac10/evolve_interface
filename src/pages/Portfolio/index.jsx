import { products } from "../../data/products";

import { Button, Footer, Header, SupportButton, Title } from "../../components";
import { PortfolioContainer, CardContainer, ProductCard, Mask, Text, ImageProduct, BenefitsContainer } from "./styles";

import videoPortfolio from '../../assets/videoPortfolio3.mp4'

export function Portfolio() {

    return (
        <PortfolioContainer>
            <Header />
            <SupportButton />
            <CardContainer>
                <Title>Portifolio</Title>
                <p className="introduction">Cada negócio tem uma história única e o seu site precisa refletir isso. Oferecemos soluções digitais sob medida para cada objetivo, veja abaixo ▼</p>
                {products.map((data) => (
                    <ProductCard >
                        <video src={videoPortfolio} preload="none" autoPlay muted loop></video>
                        <Mask />
                        <div className="content">
                            <Title>{data.name}</Title>
                            <Text>{data.description}</Text>
                            <BenefitsContainer>
                                <div className="benefits">
                                    {data.benefits.map((benefit, i) => (
                                        <div className="benefit-icon" key={i}>
                                            <i className={data.iconBenefits[i]}></i>
                                            <p>{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </BenefitsContainer>
                            <div className="custom-button">
                                <Button>
                                    Ver modelo
                                    <i className="ri-arrow-right-down-long-line"></i>
                                    <a href={data.link}></a>
                                </Button>
                                <Button variant="secondary">
                                    <i class="ri-whatsapp-line"></i>
                                    Orçamento
                                    <a href="#"></a>
                                </Button>
                            </div>
                        </div>
                        <div className="content-img">
                            <ImageProduct src={data.url} alt="page" />
                        </div>
                    </ProductCard>
                ))}
            </CardContainer>
            <Footer />
        </PortfolioContainer>
    )
}