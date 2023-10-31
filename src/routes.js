import Cart from 'pages/Cart';
import Fair from 'pages/Fair';
import Login from 'pages/Login';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Router() {
    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0);
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <Login
                        name={name}
                        setName={setName}
                        balance={balance}
                        setBalance={setBalance}
                    />
                </Route>
                <Route path="/fair">
                    <Fair />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;