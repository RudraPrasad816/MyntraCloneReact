import { NavLinks, SearchBar } from './index';
import logo from '../assets/icon.png';
import { FaRegUser } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { BsHandbag } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useContext, useState } from "react";
import { DataContext } from '../App';
import { auth } from '../firebase';

function Header() {

    const navigate = useNavigate();

    const condata = useContext(DataContext);

    const [toggle, setToggle] = useState(false);

    const logoutHandle = () => {
        auth.signOut();
        navigate('/login')
    }

    return (
        <div className="header">
            <nav>
                <div className="leftnav" id='leftnav'>
                    <Link to='/'>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className="links" id='navlinks'>
                        <GiHamburgerMenu onClick={() => { setToggle(!toggle) }} />
                        <NavLinks toggle={toggle} />
                    </div>
                </div>
                <div className="rightnav">
                    <SearchBar />
                    <div className="productivity">
                        <div className='usericon'>
                            <Link to='/' className="usericon pointer">
                                <FaRegUser />
                                <p>user</p>
                            </Link>

                            <div className="profile-shortcut">
                                <div>
                                    {
                                        condata.user ?
                                            <div>
                                                <p className='welcome-profile'>welcome {condata.user.displayName}</p>
                                                {
                                                    condata.user &&
                                                    <button onClick={logoutHandle} className='logoutbtn'>
                                                        Logout
                                                    </button>
                                                }
                                            </div>
                                            :
                                            <div className="profile-detail-shourtcut">
                                                <p className='welcome-profile'>welcome</p>
                                                <p className='welcome-profile'>To access account and manage orders</p>
                                                <Link to='/login'>Login / Signup</Link>
                                            </div>
                                    }
                                    <hr />
                                    <ul>
                                        <li><Link to="/">Orders</Link></li>
                                        <li><Link to="/">Wishlist</Link></li>
                                        <li><Link to="/">Gift Cards</Link></li>
                                        <li><Link to="/">Contact Us</Link></li>
                                    </ul>
                                    <hr />
                                    <ul>
                                        <li><Link to="/">Myntra Credit</Link></li>
                                        <li><Link to="/">Coupons</Link></li>
                                        <li><Link to="/">Saved Cards</Link></li>
                                        <li><Link to="/">Saved VPA</Link></li>
                                        <li><Link to="/">Saved Address</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Link to='/' className="wishlisticon pointer">
                            <FiHeart />
                            <p>Wishlist</p>
                        </Link>
                        <Link to='/' className="carticon pointer">
                            <BsHandbag />
                            <p>bag</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;