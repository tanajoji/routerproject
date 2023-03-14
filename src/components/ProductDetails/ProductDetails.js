import { useParams } from "react-router-dom"
import "./ProductDetails.css"


const ProductDetails = () => {

    const { id , name } = useParams()


    return(
        <div className="content">
            <div className="product">
                <div className="image">
                    <img src="https://via.placeholder.com/520x460" alt="Product Details" />
                </div>
                <div className="details">
                    <h2>
                        {name} - {id}
                    </h2>
                    <p>
                        If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple.
                    </p>
                    <p>
                        If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails