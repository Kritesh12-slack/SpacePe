
import { Fragment } from "react";
import { Switch } from "react-router-dom";

// import { Route, Routes, Switch, useLocation } from "react-router-dom";
import routes from "./routes/index";
import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./pages/Layout";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/Home/Home";

function App() {
  const isAuth = true
  return (
    <Fragment>
      <Navbar></Navbar>
      
      {isAuth && (
        <Layout>
          
          <Switch>
            {routes.map((route, index) => (
              <ProtectedRoute key={index} exact path={route.path} {...route} />
            ))}
          </Switch>
        </Layout>
      )}
    </Fragment>
  );
}

export default App;
