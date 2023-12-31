import { Container } from './styles';
import { memo, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCartContext } from 'commom/context/Cart';

function Product({
  name,
  photo,
  id,
  worth,
  unity
}) {
  const { cart, addProduct, removeProduct } = useCartContext();
  const productInCart = cart.find(itemFromCart => itemFromCart.id === id);

  return (
    <Container>
      <div>
        <img
          src={`/assets/${photo}.png`}
          alt={`photo de ${name}`}
        />
        <p>
          {name} - R$ {worth?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          color="secondary"
          disabled={!productInCart}
          onClick={() => removeProduct(id)}
        >
          <RemoveIcon />
        </IconButton>
        {productInCart?.amount || 0}
        <IconButton
          color="primary"
          onClick={() => addProduct({ name, photo, id, worth })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Product);