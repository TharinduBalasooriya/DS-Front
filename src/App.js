import React from "react";
import Navbar from "./component/navbar.component";
import AddItem from './component/addItem'
import ItemList from './component/itemList'
import Home from './component/home.component'
import EditItem from './component/editItem.component'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Navbar></Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={ItemList} />
        <Route path="/add" component={AddItem} />
        <Route path="/edit/:id" component={EditItem} />
      </Router>
    </div>
  );
}

export default App;
