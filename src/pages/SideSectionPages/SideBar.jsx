import React from "react";
import {FaTwitter} from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {HiOutlineHashtag} from "react-icons/hi";
import {MdAccountCircle, MdNotifications} from "react-icons/md";
import {FiMail} from "react-icons/fi";
import {CgMoreO} from "react-icons/cg";




function SideBar (){

    return (
        <section className=" d-flex flex-column  justify-content-end ">

                <div><FaTwitter/></div>
                <br/>
                <div><AiFillHome/></div>
                <br/>
                <div><HiOutlineHashtag/></div>
                <br/>
                <div><MdNotifications/></div>
                <br/>
                <div><FiMail/></div>
                <br/>
                <div><MdAccountCircle/></div>
                <br/>
                <div><CgMoreO/></div>
                <br/>

        </section>


    )
}
export default SideBar;