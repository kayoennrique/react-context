import {
  Container,
  Header,
  List,
} from './styles';
import fair from './fair.json';
import Product from 'components/Product';
import NavBar from './NavBar';


function Fair() {
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá!</h2>
          <h3> Saldo: R$</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <List>
        <h2>
          Produtos:
        </h2>
        {fair.map(product => (
          <Product
            {...product}
            key={product.id}
          />
        ))}
      </List>
    </Container>
  )
}

export default Fair;