import React from "react";
import { ReactComponent as Homelogo} from '../images/logo.svg';

function Home (){
    return(
        <div className="container-fluid">
            <div className="row" style={{height:"60vh"}}>
                <div className="col-6" style={{ backgroundColor:"#2b6777", color:"white"}} > 
                    <div className="mt-5 text-center">
                        <h1>Welcome to the seller dashboard</h1><br/>
                        <h3 className="fst-italic"> sell smart sell fast with OKISA</h3> <br/>
                        <p >
                            If you want to start your small business and become <br/> part of a renowned online selling<br/> website in Sri Lanka, then Daraz.lk is the place for you. With the Daraz seller ...
                        </p>
                        <button  className="col-6 btn ps-4 pe-4 fw-bold fs-5" style={{backgroundColor:"#52ab98",color:"white",marginTop:"50px"}}>List your Items</button>
                         

                    </div>
                </div>
                <div className="col-6" style={{backgroundColor:"#c8d8e4"}}> 
                
                    <div className="mt-5 text-center">
                        <Homelogo style={{height:"34vh"}}/> <br/>
                        <button  className="col-6 btn ps-4 pe-4 fw-bold fs-5" style={{backgroundColor:"#52ab98",color:"white",marginTop:"50px"}}>Check Insights</button>
                         

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home