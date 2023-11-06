import {
  Container,
  Header,
  List,
} from './styles';
import fair from './fair.json';
import Product from 'components/Product';
import NavBar from './NavBar';
import { useContext } from 'react';
import { UserContext } from 'commom/context/User';

function Fair() {
  const {name, balance} = useContext(UserContext);
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá! {name}</h2>
          <h3> Saldo: R${Number(balance).toFixed(2)}</h3>
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