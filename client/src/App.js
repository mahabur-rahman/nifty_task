// main style
import "./style.css";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/home/Home";
import { Switch, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error from "./pages/error/Error";
import Profile from "./pages/profile/Profile";
import Payment from "./pages/payment/Payment";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/payment" component={Payment} />
        <Route path="/*" component={Error} />
      </Switch>
    </>
  );
};

export default App;
