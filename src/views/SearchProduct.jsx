import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function SearchProduct() {
    const {id} = useParams();
    useEffect(() => {
        fetchitem();
    }, []);
    
    const [item, setItem] = useState({});
    const fetchitem = async () => {
        const [data, description] = await Promise.all(
            [
                fetch(`//localhost:3001/api/items/${id}`),
                fetch(`//localhost:3001/api/items/${id}/description`)
            ]).then(([r1,r2])  => Promise.all([r1.json(), r2.json()]));
        setItem({...data.item,description: description.description});
    };

    return item?.pictures?.[0] ? (
    <section>
        <div className="body-content">
        <section className="product-body">
            <div className="product-image">
            <img
                src={item.pictures[0].secure_url}
                alt="Imagen del Producto"
            />
            </div>
            <div className="product-resume">
            <div>
                <small className="product-usage">
                {item.condition === 'new'
                    ? 'Nuevo'
                    : 'Usado'}
                <span>&nbsp;-&nbsp;</span>
                {item.sold_quantity}
                {' '}
    vendidos
                </small>
            </div>
            <p className="product-title">
                {item.title}
            </p>
            <h2 className="product-resume__h2">
                <span>{new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
                }).format(item.price)}</span>
                <span className="meli-supra">
                { 
                // item.price.decimals.toFixed(2)
                }
                </span>
            </h2>
            <button type="button" className="product-resume__button">
                Comprar
            </button>
            </div>
        </section>
        </div>
        <div>


        <div className="product-description">
            <h3 className="description__h3">Descripción del producto</h3>
            <p className="description__p">
            {item.description}
            </p>
        </div>
        </div>
    </section>) : '...';
}