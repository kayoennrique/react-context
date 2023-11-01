import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useContext, useMemo, useState } from 'react';
import { Container, Back, TotalContainer, PaymentContainer } from './styles';
import { useCartContext } from 'commom/context/Cart';
import Product from 'components/Product';
import { useHistory } from 'react-router-dom';
import { usePaymentContext } from 'commom/context/Payment';
import { UserContext } from 'commom/context/User';

function Cart() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { cart, valueTotalCart, makePurchase } = useCartContext();
  const { balance = 0 } = useContext(UserContext);
  const { typesPayment, formPayment, changePaymentForm } = usePaymentContext();
  const history = useHistory();
  const total = useMemo(() => balance - valueTotalCart, [balance, valueTotalCart]);
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
          <span>R$ {valueTotalCart.toFixed(2)} </span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {Number(balance).toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {total.toFixed(2)}</span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          makePurchase();
          setOpenSnackbar(true);
        }}
        disabled={total < 0 || cart.length === 0 }
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