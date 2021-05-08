import React,{useState,useEffect} from "react";
import Item from './singleItem.component'

import axios from 'axios'

const List =  function(props){
    const [allItems,setItems] = useState();
    useEffect(() => {
        retriveAllItems();
       
    }, [])

    const retriveAllItems = ()=>{
        axios.get('http://localhost:5000/stock-api/items/')
        .then((res)=>{
            setItems(res.data);
            
        }).catch(e=>{
            console.log(e)
        })

    }
    
    return(<div className="container-sm mt-5">
        <div className="row">
             {
            allItems ?(
                allItems.map(item=>{
                    return(
                        <Item {...item} key={item._id}></Item>
                    );
                })
            ):(<div>Stil loading ...</div>)
        }

        </div>
       
    </div>);
}
export default List