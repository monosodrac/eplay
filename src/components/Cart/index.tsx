import Button from '../Button'

import starWars from '../../assets/images/star_wars.png'

import {
  CartContainer,
  Overlay,
  CartItem,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={starWars} alt="" />
          <div>
            <h3>Game title</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={starWars} alt="" />
          <div>
            <h3>Game title</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
            <button type="button" />
          </div>
        </CartItem>
      </ul>
      <Quantity>2 jogo(s)no carrinho</Quantity>
      <Prices>
        Total de R$ 2050,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
