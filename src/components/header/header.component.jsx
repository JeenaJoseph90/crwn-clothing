import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import CardIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {auth} from '../../firebase/firebase.util';

import {connect} from 'react-redux';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className="options">
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/contact">
                CONTACT
            </Link>
            {
                currentUser ? <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CardIcon/>
        </div>
        { hidden ? null : <CartDropdown /> }
        
    </div>
)

const mapStateToProps = ({user : { currentUser }, cart : { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);