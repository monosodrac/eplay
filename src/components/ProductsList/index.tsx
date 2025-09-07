import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        {/* <Product category="" description="" image="//placehold.co/222x250" infos={['']} system='' title='' />
        <Product category="" description="" image="//placehold.co/222x250" infos={['']} system='' title='' />
        <Product category="" description="" image="//placehold.co/222x250" infos={['']} system='' title='' /> */}
      </List>
    </div>
  </Container>
)

export default ProductsList
