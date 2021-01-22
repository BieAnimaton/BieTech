import React from "react";
import { isAuthenticated } from "./auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Products from "./components/products/Products";
import Gallery from "./components/gallery/Gallery";
import Clients from "./components/clients/Clients";
import TelaPr from "./components/dashboard/Dashboard";
import Messages from "./components/messages/Messages";
import Footer from "./components/footer/Footer";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuthenticated() ? ( <Component {...props} /> ) :
            ( <Redirect to={{ pathname: "/entrar", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/registrar" component={Register} />
                <Route exact path="/entrar" component={Login} />
                <Route exact path="/produtos" component={Products} />
                <Route exact path="/galeria" component={Gallery} />
                <Route exact path="/clientes" component={Clients} />
                <Switch>
                    <PrivateRoute exact path="/tela_principal" component={TelaPr} />
                </Switch>
                <Route exact path="/mensagens" component={Messages} />
                <Footer />
            </div>
        </BrowserRouter>
);

export default Routes;