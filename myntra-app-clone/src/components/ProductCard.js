import { AiOutlineHeart } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export function ProductCard(props) {

    const navigate = useNavigate();

    return (
        <div className="product-card" onClick={()=>{navigate(`/product/${props.data.id}-${props.data.description}`)}}>
            <div className="product-image">
                <img src={props.data.otherImages[0]} alt="" />
                <div className="hover-btns pointer">
                    <div className='hover-icons'>
                        <AiOutlineHeart />
                        <BsHandbag />
                    </div>
                    <button>Buy Now</button>
                </div>
            </div>
            <div className="product-detail">
                <h3>{props.data.name.toLowerCase()}</h3>
                <p className="product-desc">{props.data.description}</p>
                <p>Price : <span><strike style={{ color: "red" }}>{props.data.strickPrice}</strike> {props.data.discount}% {props.data.finalPrice}</span></p>
            </div>
        </div>
    )
}