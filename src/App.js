import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Products from "./components/products/Products"
import Gallery from "./components/gallery/Gallery"
import Clients from "./components/clients/Clients";
import Messages from "./components/messages/Messages";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer"
import Routes from "./routes";

const App = () => <Routes />;

export default App;