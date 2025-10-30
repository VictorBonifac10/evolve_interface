import { ContainerFooter, Text } from "./styles";

import Logo from '../../assets/Logo.png'

export function Footer() {
    return (

        <ContainerFooter>
            <img src={Logo} alt='Logo da Empresa' />
            <Text>
                Lorem, ipsum dolor sit am Laudantium autem quisquam possimus debitis officiis sapiente, et quas eligendi totam!
            </Text>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Portfólio
                </li>
                <li>
                    Contato
                </li>
                <li>
                    Termos e Condições
                </li>
            </ul>
            <div>
                <i className="ri-whatsapp-line"></i>
                <i className="ri-google-line"></i>
                <i className="ri-instagram-line"></i>
            </div>
            <Text>
                © 2025 evolve solutions - All rights reserved.
            </Text>
        </ContainerFooter>

    )
}