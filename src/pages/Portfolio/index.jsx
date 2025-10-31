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
                                <Button>Veja mais<i className="ri-arrow-right-down-long-line"></i>
                                    <a href={data.link}></a>
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