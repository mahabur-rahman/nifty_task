// main style
import "./style.css";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/home/Home";
import { Switch, Redirect, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error from "./pages/error/Error";
import Profile from "./pages/profile/Profile";
import Payment from "./pages/payment/Payment";
import { useContext } from "react";
import { UserContext } from "./context/Context";

const App = () => {
  // context
  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() => (user ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          exact
          path="/register"
          render={() => (user ? <Redirect to="/" /> : <Register />)}
        />
        <Route path="/profile" component={Profile} />
        <Route path="/payment" component={Payment} />
        <Route path="/*" component={Error} />
      </Switch>
    </>
  );
};

export default App;
