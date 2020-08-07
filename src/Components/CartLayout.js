import React from 'react';

export default function CartLayout() {
   
    return (
         <div className="container-fluid text-center d-none d-lg-block">
             <div className="row">
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase">products</p>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase">title</p>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase">price</p>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase">quantity</p>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase"></p>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <p className="text-uppercase">total</p>
                 </div>
             </div>
                
        </div>
    
    )
}