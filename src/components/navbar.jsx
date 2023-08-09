import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router-dom'
import logo from '../img/logo.png'
import profile from '../img/profile.png'

const Navbar = () => {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>
            <img src={logo} alt="" />
            <ul>
                <Link to='/'>
                    <li><a className="active" href="#">Asosiy sahifa</a></li>
                </Link>
                <Link to='/batafsil'>
                    <li><a href="#">Biz haqimizda</a></li>
                </Link>
                <li><a href="#">Kurslar</a></li>
                <li><a href="#">Bog'lanish</a></li>
                <li><select className="tillar">
                    <option value="">uz</option>
                    <option value="">ru</option>
                </select></li>
                <div className="acount">
                    <img src={profile} alt="" />
                    <p>Rustam</p>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
