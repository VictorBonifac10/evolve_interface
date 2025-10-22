import { Button } from './styles'

export function SupportButton() {
    return (
        <Button>
            <i className="ri-customer-service-2-fill"></i>
            <div>
                <h2>Precisa de ajuda?</h2>
                <p>Entre em contato com a nossa equipe de Suporte.</p>
            </div>
            <i className="ri-arrow-right-s-fill"></i>
        </Button>
    )
}