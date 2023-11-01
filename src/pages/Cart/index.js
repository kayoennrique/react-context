import { Button, Snackbar, InputLabel } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { Container, Back, TotalContainer, PaymentContainer} from './styles';
import { useCartContext } from 'commom/context/Cart';
import Product from 'components/Product';

function Cart() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { cart } = useCartContext();
  return (
    <Container>
      <Back />
      <h2>
        Carrinho
      </h2>
      {cart.map(product =>(
        <Product 
        {...product}
        key={product.id}
        />
      ))}
      <PaymentContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PaymentContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ </span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ </span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default Cart;