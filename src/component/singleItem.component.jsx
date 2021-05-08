import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function SingleItem(props){
    return(<div className="col-4 mb-4" >
        <div className="card p-3 " style={{width: "18rem",borderColor:"#2b6777",borderWidth:"2px",backgroundColor:"#f2f2f2"}}>
            <img src={props.ImgUrl} className="card-img-top rounded" alt="..." style={{height:"186px"}}/>
            <div className="card-body" style={{color:"#2b6777"}}>
                <h5 className="card-title">{props.Name}</h5>
                <p className="card-text">{props.Price}</p>
                <p className="card-text">Number of Items : {props.Quantity}</p>
                <p className="card-text">Status : {props.Status}</p>
                <div className="row">
                    <Link to={"/edit/" + props._id} className="col btn ps-4 pe-4" style={{backgroundColor:"#2b6777",color:"white"}}>Edit</Link>
                </div>
                <div className="row mt-2">
                    <button  className="col btn btn-danger ps-4 pe-4" onClick={()=>{ deleteItem(props._id)}}>Delete</button>
                </div>
                
            </div>
        </div>

         </div>);
}

let deleteItem = (id)=>{
        axios.delete('http://localhost:5000/stock-api/items/'+id)
      .then(response => { 
          console.log(response.data)
         window.location = '/list';
        })
      .catch(e=>{
          console.log(e)
      });

    }
export default SingleItem;