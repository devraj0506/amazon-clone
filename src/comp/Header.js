import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider.js'
import {auth} from "./firebase.js"



function Header() {
    const [{basket,user}, dispatch] = useStateValue();

    const login = () =>{
        if (user) {
            auth.signOut();
        }
    }

    

    return (
        <nav className="header">
            

    {/* logo on the left */}
    <Link to='/'>
    <img className='header-img' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
    </Link>


    {/* serch box  */}
    <div className="header-search">
    <input type="text" className="header-searchbox" />
    <SearchIcon className='header-searchicon'/>
    </div>


    {/* 3 links */}
    <div className="header-links">
        {/* 1st link */}
        <Link to={!user && '/login'} className='header-link'>
        <div onClick={login} className="header-option">
        <span className="l1"> Hello {user?.email}</span>
        <span className="l2">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        {/* 2nd link */}
        <Link to={!user && '/login'} className='header-link'>
        <div className="header-option">
        <span className="l1">Returns</span>
        <span className="l2">& Orders</span>
        </div>
        </Link>

        {/* 3rd link */}
        <Link to='/login' className='header-link'>
        <div className="header-option">
        <span className="l1">Your</span>
        <span className="l2">Prime</span>
        </div>
        </Link>
    </div>


        {/* 4th link */}
        <Link to='/checkout' className='header-link'>
            <div className="header-basket">
                {/* basket icon */}
                <ShoppingBasket />

                {/* no. of items */}
                <span className="l2 basket-count">{basket?.length}</span>
            </div>
        </Link>



    
        
    
        </nav>
    )
}

export default Header
