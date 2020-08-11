import React from 'react'

export default function CartItem({item, value}) {
    const { id, title, img, price, total, count } = item;
    const { increase, decrease, remove } = value
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                    src={img} 
                    // style={{ width: "5rem", height: "3.5rem" }} REVISIT
                    className="img-fluid my-2" 
                    alt="product pic" 
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span 
                            className="btn btn-yellow mx-1"
                            onClick={() => decrease(id)}
                        >
                            -
                        </span>
                        <span className="btn btn-yellow mx-1">
                            {count}
                        </span>
                        <span 
                            className="btn btn-yellow mx-1"
                            onClick={() => increase(id)}
                        >
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => remove(id)}>
                    <i className="fas fa-trash-alt" />
                </div>                
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : $ {total}</strong>                
            </div>
        </div>
    )
}
