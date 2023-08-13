import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {RxCross2} from 'react-icons/rx';
import { DataContext } from '../App';
import data from '../data/data';

function NavLinks(props) {

    const productData = useContext(DataContext);

    useEffect(()=>{
        if(props.toggle === true){
            document.getElementById('navbarlinks').classList.toggle('active')
        }
    },[props.toggle])

    function removeToggle(){
        document.getElementById('navbarlinks').classList.remove('active')
    }

    return (
        <>
            <ul id='navbarlinks'>
                <RxCross2 onClick={removeToggle} />
                <li><Link to="/products/mens products">Men</Link></li>
                <li><Link to="/products/womens products">Women</Link></li>
                <li><Link to='/products/kids products'>Kids</Link></li>
                <li><Link to='/products/studio products'>studio</Link></li>
            </ul>
        </>
    )
}

export default NavLinks;