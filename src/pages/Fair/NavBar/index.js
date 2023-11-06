import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCartContext } from 'commom/context/Cart';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const { quantityProduct } = useCartContext();
  const history = useHistory();
  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={quantityProduct === 0}
        onClick={() => history.push ('/cart')}
      >
        <Badge
          color="primary"
          badgeContent={quantityProduct}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}