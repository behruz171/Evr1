import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { json, Link, Outlet } from 'react-router-dom'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { GoogleLoginButton } from 'react-social-login-buttons'
import logo from '../img/logo.png'
import profile from '../img/profile.png'
function reload() {
    setTimeout(() => {
        window.location.reload()
    }, 1);
}
const Navbar = () => {
    function sign(data) {
        let data1 = { "name": data.name, "img": data.picture }
        localStorage.setItem('data', JSON.stringify(data1))
        let a = JSON.parse(localStorage.getItem('data'))
        console.log(JSON.parse(localStorage.getItem('data')).name)
        window.location.reload()
    }

    function logout(){
        localStorage.setItem('data','')
        window.location.reload()
    }
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>
            <img src={logo} alt="" />
            <ul>
                <Link to='/' onClick={reload}>
                    <li><a className="active" href="#">Asosiy sahifa</a></li>
                </Link>
                <Link to='/batafsil' onClick={reload}>
                    <li><a href="#">Biz haqimizda</a></li>
                </Link>
                <Link to='/' onClick={reload}>
                    <li><a href="#">Kurslar</a></li>
                </Link>
                <Link to='/' onClick={reload}>
                    <li><a href="#">Bog'lanish</a></li>
                </Link>
                <li><select className="tillar">
                    <option value="">uz</option>
                    <option value="">ru</option>
                </select></li>
                {(localStorage.getItem('data')) ?
                    <li>

                        <div className="acount">
                            <img src={JSON.parse(localStorage.getItem('data')).img} alt="" />
                            <p>{JSON.parse(localStorage.getItem('data')).name}</p>
                            <div onClick={logout} className='logout'><h3>logout</h3></div>
                        </div>
                    </li> :
                    <li>
                        <div className='sign'>

                            <LoginSocialGoogle
                                client_id={"1017279439046-c91kifk4o07mcfkr991pe02lm33u19ov.apps.googleusercontent.com"}
                                access_type="offline"
                                onResolve={({ provider, data }) => {
                                    console.log(provider, data);
                                    sign(data)
                                }}

                                onReject={(err) => {
                                    console.log(err);
                                }}
                            >
                                <img src={profile} alt="" />
                            </LoginSocialGoogle>
                        </div>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Navbar;
