import { CardGrid, Card, CardTitle } from './styles'

export function ServicesCards() {
  return (
    <CardGrid>
      <Card>
        <CardTitle>
          <i className="ri-earth-line"></i>
          <h4>Design Responsivo</h4>
        </CardTitle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora iure, esse quis similique.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="ri-code-box-line"></i>
          <h4>Desenvolvimento Web</h4>
        </CardTitle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora iure, esse quis similique.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="ri-store-line"></i>
          <h4>Lojas Virtuais</h4>
        </CardTitle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora iure, esse quis similique.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="ri-brush-line"></i>
          <h4>Identidade Visual</h4>
        </CardTitle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora iure, esse quis similique.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="ri-bar-chart-box-line"></i>
          <h4>Marketing Digital</h4>
        </CardTitle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora iure, esse quis similique.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="ri-shield-check-line"></i>
          <h4>Segurança e Performance</h4>
        </CardTitle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora iure, esse quis similique.</p>
      </Card>
    </CardGrid>
  )
}
