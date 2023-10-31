import Cart from 'pages/Cart';
import Fair from 'pages/Fair';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from 'commom/context/User';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <UserProvider>
                    <Route exact path="/" >
                        <Login />
                    </Route>
                    <Route path="/fair">
                        <Fair />
                    </Route>
                </UserProvider>
                    <Route path="/cart">
                        <Cart />
                    </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;