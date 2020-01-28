import React from 'react';
import {BrowserRouter as Router,Redirect,Switch,Route,Link} from "react-router-dom";

import Home from "./home/index"
import Layout from "../component/layout/index"
class App extends React.Component {
   render(){
     return (
       <Router>
         <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Redirect from="*" to="/"/>
          </Switch>
          </Layout>
       </Router>
         
    );
   }
}

export default App;
