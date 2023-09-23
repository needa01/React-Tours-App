import { useState } from "react";


function Card({id,name,info,price,image,removetour}) {
    const[readmore,setreadmore]=useState(true);

    const description=readmore?`${info.substring(0,200)}...`:info;
    function readHandler(){
        setreadmore(!readmore);
    }
    
    return (

        <div className="card">

            <img src={image} alt="" className="image"/>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">{description}
                    <span className="readmore" onClick={readHandler}> {readmore?`Read more`:`Show less`}</span>
                </div>
            </div>
            
            <button className="btn-red" onClick={() => removetour(id)}>
                Not Interested
            </button>
        </div>
    );
}
export default Card;