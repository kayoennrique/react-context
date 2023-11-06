import { Button } from '@material-ui/core';
import {
  Container,
  Title,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'commom/context/User';
import { useContext } from 'react';

function Login() {
  const history = useHistory();
  const { name, setName, balance, setBalance } = useContext(UserContext);
  return (
    <Container>
      <Title>
        Insira o seu nome
      </Title>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          value={name}
          onChange={event => setName(event.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          
          type="number"
          value={balance}
          onChange={(event) => setBalance(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              R$
            </InputAdornment>
          }
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={name.length < 4}
        onClick={() => history.push('/fair')}
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;