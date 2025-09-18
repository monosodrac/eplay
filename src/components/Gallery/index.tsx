import Section from '../Section'

import imagemExemp from '../../assets/images/banner-homem-aranha.png'
import { Items, Item } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={imagemExemp} alt="imagem do link" />
      </Item>
      <Item>
        <img src={imagemExemp} alt="imagem do link" />
      </Item>
      <Item>
        <img src={imagemExemp} alt="imagem do link" />
      </Item>
      <Item>
        <img src={imagemExemp} alt="imagem do link" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
