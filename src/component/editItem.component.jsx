import React ,{useState,useEffect}from 'react'
import axios from 'axios';


function EditItem(props){
     
   const intialState ={
        "Code": "",
        "Name": "",
        "Quantity": 0,
        "Price": 0,
        "Status": "Available",
        "ImgUrl": ""
       

   }
    const [gotData,setTrue] =useState(false);
    const [item, setItem] = useState(intialState);
    // const[code,setCode] =useState(item.Code);
    // const[name,setName] = useState(item.Name);
    // const[quantity,setQuantity] = useState(item.Quantity);
    // const[price, setPrice] =  useState(item.Price);
    // const[status ,setStatus] = useState(item.Price);
    // const[url,setUrl] =  useState(item.ImgUrl);
    useEffect(()=>{
        axios.get('http://localhost:5000/stock-api/items/'+props.match.params.id)
        .then(res=>{
            setItem(res.data)
            
            setTrue(true);
            

        }).catch(e=>{
            console.log(e)

        })
    },[props.match.params.id]);




   

    const handleCode = e =>{
        let newItem ={ ...item}

        newItem.Code = e.target.value;
        setItem(newItem); 
    }

    const handleName = e =>{
        let newItem ={ ...item}

        newItem.Name = e.target.value;
        setItem(newItem); 

    }

    const handleQuntity = e =>{
        let newItem ={ ...item}

        newItem.Quantity = e.target.value;
        setItem(newItem); 

    }

    const handlePrice = e =>{
        let newItem ={ ...item}

        newItem.Price = e.target.value;
        setItem(newItem); 

    }

    const handleStatus = e =>{
        let newItem ={ ...item}

        newItem.Status = e.target.value;
        setItem(newItem); 

    }

    const handleUrl =  e =>{
        let newItem ={ ...item}

        newItem.ImgUrl = e.target.value;
        setItem(newItem); 
    }



    const updateIetm = ()=>{
    let data = {
        Code : item.Code,
        Name : item.Name,
        Quantity : item.Quantity,
        Price : item.Price,
        Status:item.Status,
        ImgUrl:item.ImgUrl
    }
    axios.put('http://localhost:5000/stock-api/items/'+props.match.params.id,data)
         .then(function (response){
             console.log(response.data)
             window.location = '/list';
         }).catch(function(er){
             console.log(er)
         })


}

    return(<div>
        {
            gotData ?(
            <form className="submit-form m-5" style={{color:"#52ab98"}} onSubmit={updateIetm}>
            <div className="mb-3">
                <label htmlFor="itemCode" className="form-label">Item Code</label>
                
                <input type="text" className="form-control" id="itemCode"  value={item.Code} onChange={handleCode}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemName" className="form-label">Item name</label>
                <input type="text" className="form-control" id="itemCode" value={item.Name}  onChange={handleName}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Item quantity</label>
                <input type="number" className="form-control" id="itemQuantity" value={item.Quantity} onChange={handleQuntity}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Item Price</label>
                <input type="text" className="form-control" id="itemQuantity" value={item.Price} onChange={handlePrice}/>
            </div>
            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Image Url</label>
                <input type="text" className="form-control" id="itemQuantity"  value={item.ImgUrl} onChange={handleUrl} />
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Select Status</label>
            <select  className="form-control" aria-label="Default select example"  onChange={handleStatus}>
                <option value="Available" defaultValue="Available">{item.Status}</option>
                <option value="Out of stock" >Out of stock</option>
            </select>
            </div>
            
            <div className="col-md-12 text-center">
                <button  className="btn  mt-3 " style={{backgroundColor:"#2b6777",color:"white"}} type="submit">Submit</button>
            </div>
            
        </form>

            ):(<p></p>)
        }
    </div>);

}
export default EditItem;