import { useState } from "react"
import "./Offers.css"

export const products = [
    {title:"Hoodie", price:21.99},
    {title:"Sneakers", price:35.99},
    {title:"Tee", price:12.99}
]

const Offers = () => {
    const [items] = useState(products)

    return(
        <div className="offers">
            <h3>Latest Offers</h3>
            <div className="offer">
                {items.map((item)=> (
                    <div key={item.title}>
                        <img src="https://th.bing.com/th/id/OIP.2KdMLsskO-By1dqK2epgegHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="product"/>
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Offers
