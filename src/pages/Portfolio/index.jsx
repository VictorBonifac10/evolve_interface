//import { products } from "../../data/products";

import { Button, Footer, Header, SupportButton, Title } from "../../components";
import { PortfolioContainer, CardContainer, ProductCard, Mask, Text, ImageProduct, BenefitsContainer } from "./styles";

import videoPortfolio from '../../assets/videoPortfolio3.mp4'
import page from '../../assets/page.png'


export function Portfolio() {

        return (
            <PortfolioContainer>
                <Header />
                <SupportButton />
                <CardContainer>
                    <ProductCard>
                        <video src={videoPortfolio} preload="none" autoPlay muted loop></video>
                        <Mask />
                        <div className="content">
                                <Title>Site Institucional</Title>
                            <Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantium autem quisquam possimus debitis officiis sapiente, et quas eligendi totam?et consectetur adipisicing elit. Odio nobis sunt sapiente nihil voluptas obcaecati, dolores deserunt id omnis. Laudantiu
                            </Text>
                            <BenefitsContainer>
                                <div className="benefits">
                                    <div className="benefit-icon">
                                        <i class="ri-home-9-fill"></i>
                                        <p>SEO Otimizado</p>
                                    </div>
                                    <div className="benefit-icon">
                                        <i class="ri-home-9-fill"></i>
                                        <p>SEO Otimizado</p>
                                    </div>
                                </div>
                                <div className="benefits">
                                    <div className="benefit-icon">
                                        <i class="ri-home-9-fill"></i>
                                        <p>SEO Otimizado</p>
                                    </div>
                                    <div className="benefit-icon">
                                        <i class="ri-home-9-fill"></i>
                                        <p>SEO Otimizado</p>
                                    </div>
                                </div>
                            </BenefitsContainer>
                            <div className="custom-button">
                                <Button>Veja mais <i className="ri-arrow-right-down-long-line"></i></Button>
                            </div>
                        </div>
                        <div className="content-img">
                            <ImageProduct src={page} alt="page" />
                        </div>
                    </ProductCard>
                </CardContainer>
                <Footer />
            </PortfolioContainer>
        )
    }