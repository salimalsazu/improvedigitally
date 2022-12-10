import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import PrimaryButton from '../../Button/PrimaryButton';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Navbar = () => {

    const navigation = <React.Fragment>

        <li><Link to="/" >Home</Link></li>
        <li><Link to="/blogs" >Blogs</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        {/* <li><Link to="/categories" >Sign Out</Link></li> */}

        <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn m-1"> Dashboard</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <Link to='/dashboard/addblogs' >Post Your blog</Link>
            </ul>
        </div>



    </React.Fragment>

    return (
        <div className="navbar bg-white shadow-lg sticky top-0 z-50">
            <div className="navbar-start p-4 ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navigation}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navigation}
                </ul>
            </div>


            <div className="navbar-end">
                <p className='mr-3 font-bold flex items-center' > <span className='text-xl text-[#F87D5E] mr-2' ><BsFillTelephoneFill></BsFillTelephoneFill></span> +91 98712 32887</p>
                <Link> <PrimaryButton>Get A Proposal</PrimaryButton> </Link>
            </div>
        </div>
    );
};

export default Navbar;