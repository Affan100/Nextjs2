import React from 'react';


const Products = props => {
    const { name, Descrition, Price, Quanty, ImageUrl } = props.data;
    return (
        <div>
            <img scr={ImageUrl} />
            <h3>{name}</h3>
            <p>{Descrition}</p>
            <p>{Quanty} Lefts</p>
            <p>{Price} Baht</p>
            <p>{ImageUrl}</p>
        </div>
    )
}

export default Products;