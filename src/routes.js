import Cart from 'pages/Cart';
import Fair from 'pages/Fair';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from 'commom/context/User';
import { CartProvider } from 'commom/context/Cart';

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
                    </CartProvider>
                </UserProvider>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;