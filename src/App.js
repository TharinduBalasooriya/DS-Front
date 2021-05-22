import React from "react";
import Login from './component/login.component'
import AddItem from './component/addItem'
import ItemList from './component/itemList'
import SellerHome from './component/sellerhome.component'
import EditItem from './component/editItem.component'
import Register from './component/signUP.component'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as  Router,Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/sellerhome" component={SellerHome} />
        <Route path="/itemlist" component={ItemList} />
        <Route path="/additem" component={AddItem} />
        <Route path="/ediitem/:id" component={EditItem} />
        <Route path="/signup" component={Register} />
      </Router>
    </div>
  );
}

export default App;
