import Cart from 'pages/Cart';
import Fair from 'pages/Fair';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from 'commom/context/User';
import { CartProvider } from 'commom/context/Cart';
import { PaymentProvider } from 'commom/context/Payment';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <UserProvider>
                    <Route exact path="/" >
                        <Login />
                    </Route>
                    <CartProvider>
                        <Route path="/fair">
                            <Fair />
                        </Route>
                        <PaymentProvider>
                            <Route path="/cart">
                                <Cart />
                            </Route>
                        </PaymentProvider>
                    </CartProvider>
                </UserProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;