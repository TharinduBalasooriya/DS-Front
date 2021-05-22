import React, { useState } from "react";

import axios from 'axios'

import Navbar from './navbar.component'

const AddItem = function(props){
    const[code,setCode] =useState("");
    const[name,setName] = useState("");
    const[quantity,setQuantity] = useState(0);
    const[price, setPrice] =  useState(0);
    const[status ,setStatus] = useState("Available");
    const[url,setUrl] =  useState('https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif');

    const handleCode = e =>{
        setCode(e.target.value);
    }

    const handleName = e =>{
        setName(e.target.value);

    }

    const handleQuntity = e =>{
        setQuantity(e.target.value);

    }

    const handlePrice = e =>{
        setPrice(e.target.value);

    }

    const handleStatus = e =>{
        setStatus(e.target.value);

    }

    const handleUrl =  e =>{
        setUrl(e.target.value);
    }

   

const addIetm = ()=>{
    let data = {
        Code : code,
        Name : name,
        Quantity : quantity,
        Price : price,
        Status:status,
        ImgUrl:url
    }
    axios.post('http://localhost:5000/stock-api/items/',data)
         .then(function (response){
             console.log(response.data)
             window.location = '/itemlist';
         }).catch(function(er){
             console.log(er)
         })


}

    return(

        <React.Fragment>
            <Navbar></Navbar>
                <div className="submit-form m-5" style={{color:"#52ab98"}}>
            <div className="mb-3">
                <label htmlFor="itemCode" className="form-label">Item Code</label>
                <input type="text" className="form-control" id="itemCode"  onChange={handleCode}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemName" className="form-label">Item name</label>
                <input type="text" className="form-control" id="itemCode"  onChange={handleName}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Item quantity</label>
                <input type="number" className="form-control" id="itemQuantity"  onChange={handleQuntity}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Item Price</label>
                <input type="text" className="form-control" id="itemQuantity"  onChange={handlePrice}/>
            </div>
            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Image Url</label>
                <input type="text" className="form-control" id="itemQuantity"  onChange={handleUrl}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Select Status</label>
            <select  className="form-control" aria-label="Default select example"  onChange={handleStatus}>
                <option value="Available" defaultValue="Available">Available</option>
                <option value="Out of stock" >Out of stock</option>
            </select>
            </div>
            
            <div className="col-md-12 text-center">
                <button  className="btn  mt-3 " style={{backgroundColor:"#2b6777",color:"white"}} onClick={addIetm}>Submit</button>
            </div>
            
        </div>
        



        </React.Fragment>
        
   

    );
}
export default AddItem;