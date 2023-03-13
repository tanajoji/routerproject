import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import './Products.css'


const Products = (props) => {
    const [products] = useState({
        Hoodies : [0,1,2,3],
        Tees : [4,5,6,7],
        Sneakers : [8,9,10,11],
    })

    if(props.isLoading){
        return(
            <Loader component={"Products"}/>
        )
    }
    if(props.isUserLoggedIn){
        return(
            <div className="content">
                <h3>Hoodies</h3>
                <div className='products'>
                    {products.Hoodies.map((p) => (
                        <div key={p}>
                        <Link to={`/products/${p}/Hoodie`}>
                        <img src="https://via.placeholder.com/250x150" alt="product" />
                        </Link>
                        <p style={{ textAlign: "center" }}>Hoodie : {p}</p>
                        </div>
                    ))}
                </div>
                <h3>Tees</h3>
                <div className='products'>
                    {products.Tees.map((p) => (
                        <div key={p}>
                        <Link to={`/products/${p}/Tee`}>
                        <img src="https://via.placeholder.com/250x150" alt="product" />
                        </Link>
                        <p style={{ textAlign: "center" }}>Tee : {p}</p>
                        </div>
                    ))}
                </div>
                <h3>Sneakers</h3>
                <div className='products'>
                    {products.Sneakers.map((p) => (
                        <div key={p}>
                        <Link to={`/products/${p}/Sneaker`}>
                        <img src="https://via.placeholder.com/250x150" alt="product" />
                        </Link>
                        <p style={{ textAlign: "center" }}>Sneaker : {p}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
   
}

export default Products