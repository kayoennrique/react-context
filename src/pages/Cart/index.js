import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useContext, useState } from 'react';
import { Container, Back, TotalContainer, PaymentContainer } from './styles';
import { useCartContext } from 'commom/context/Cart';
import Product from 'components/Product';
import { useHistory } from 'react-router-dom';
import { PaymentContext, usePaymentContext } from 'commom/context/Payment';

function Cart() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { cart } = useCartContext();
  const { typesPayment, formPayment, changePaymentForm } = usePaymentContext();
  const history = useHistory();
  return (
    <Container>
      <Back onClick={() => history.goBack()} />
      <h2>
        Carrinho
      </h2>
      {cart.map(product => (
        <Product
          {...product}
          key={product.id}
        />
      ))}
      <PaymentContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={formPayment.id}
          onChange={(event) => changePaymentForm(event.target.value)}
        >
          {typesPayment.map(payment => (
            <MenuItem value={payment.id} key={payment.id}>
              {payment.name}
            </MenuItem>
          ))}
        </Select>
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