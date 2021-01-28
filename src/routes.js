import React from "react";
import { isAuthenticated } from "./utils/auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Products from "./components/products/Products";
import Gallery from "./components/gallery/Gallery";
import Clients from "./components/clients/Clients";
import TelaPr from "./components/dashboard/Dashboard";
import ChatMenu from "./components/chat/ChatMenu";
import Footer from "./components/footer/Footer";
import Timeline from "./components/timeline/Timeline";
import ErrorPage from "./components/errorPage/errorPage";
import Admin from "./components/admin/admin";

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
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/registrar" component={Register} />
                <Route exact path="/entrar" component={Login} />
                <Route exact path="/produtos" component={Products} />
                <Route exact path="/galeria" component={Gallery} />
                <Route exact path="/clientes" component={Clients} />
                <Switch>
                    <PrivateRoute exact path="/tela_principal" component={TelaPr} />
                </Switch>
                <Route exact path="/historia" component={Timeline} />
                <Route exact path="/chat-menu" component={ChatMenu}/>                
                <Footer />
            </div>
        </BrowserRouter>
);

export default Routes;