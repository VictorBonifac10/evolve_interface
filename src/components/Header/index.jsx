import { useState, useEffect } from 'react'
import {
    CContainer,
    CNavbarNav,
    CNavItem,
    COffcanvasHeader,
    COffcanvasTitle,
    COffcanvasBody,
    CCloseButton,
} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

import { StyledNavbar, StyledOffcanvas, StyledNavbarToggler, StyledNavLink } from './styles'

export function Header() {
    const [visible, setVisible] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <StyledNavbar className={scrolled ? 'scrolled' : ''}>
            <CContainer fluid className="d-flex justify-content-end align-items-center">
                {/* Links Desktop */}
                <CNavbarNav className="d-none d-lg-flex flex-row gap-5 justify-content-end">
                    <CNavItem>
                        <StyledNavLink href="#">Home</StyledNavLink>
                    </CNavItem>
                    <CNavItem>
                        <StyledNavLink href="#">Portfólio</StyledNavLink>
                    </CNavItem>
                    <CNavItem>
                        <StyledNavLink href="#">Contato</StyledNavLink>
                    </CNavItem>
                </CNavbarNav>

                {/* Botão collapse Mobile */}
                <StyledNavbarToggler
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                    className="d-lg-none ms-3"
                    onClick={() => setVisible(!visible)}
                />

                {/* Collapse Offcanvas */}
                <StyledOffcanvas
                    id="offcanvasNavbar"
                    placement="end"
                    portal={true}
                    visible={visible}
                    onHide={() => setVisible(false)}
                >
                    <COffcanvasHeader>
                        <COffcanvasTitle style={{ color: 'white' }}>Menu</COffcanvasTitle>
                        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                    </COffcanvasHeader>
                    <COffcanvasBody>
                        <CNavbarNav className="flex-column gap-3">
                            <CNavItem>
                                <StyledNavLink href="#">Home</StyledNavLink>
                            </CNavItem>
                            <CNavItem>
                                <StyledNavLink href="#">Portfólio</StyledNavLink>
                            </CNavItem>
                            <CNavItem>
                                <StyledNavLink href="#">Contato</StyledNavLink>
                            </CNavItem>
                        </CNavbarNav>
                    </COffcanvasBody>
                </StyledOffcanvas>
            </CContainer>
        </StyledNavbar>
    )
}
