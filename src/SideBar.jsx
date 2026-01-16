import { useState } from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SideBar() {

    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-gray-900 text-white shadow-lg">
            <Link to="/">
                <SideBarIcon icon={<FaFire size="28"/>} text="Home" /> 
            </Link>
            <Link to="/about">
                <SideBarIcon icon={<BsPlus size="32"/>} text="About" />
            </Link>
            <Link to ="/projects">
                <SideBarIcon icon={<BsFillLightningFill size="20"/>} text="Projects" />
            </Link>
            <SideBarIcon icon={<FaPoo size="20"/>}/>
        </div>
    )
};

function SideBarIcon ({ icon, text = 'Click 👆' }) {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
};