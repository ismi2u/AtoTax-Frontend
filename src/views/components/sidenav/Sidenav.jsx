import React from 'react'
import './Sidenav.scss'
import { FaTh,FaUserFriends,FaUniversity,FaRegChartBar,FaThList ,FaBars} from "react-icons/fa";
import {Link} from 'react-router-dom'
const Sidenav = () => {
    const menuItem=[
        {
        path:"/",
        name:"Dashboard",
        icon:<FaTh/>
    },
    {
        path:"/about",
        name:"About",
        icon:<FaUniversity/>
    },
    {
        path:"/Gstclient",
        name:"Gstclient",
        icon:<FaUserFriends/>
    },
    {
        path:"/Services",
        name:"Servicecategory",
        icon:<FaThList/>
    },
    {
        path:"/servicetracker",
        name:"Servicetracker",
        icon:<FaRegChartBar/>
    }
]
  return (
    <div className='container-fluid p-2'>
      <div className='row'>
        <div className="col-auto">
            <ul className='justify-content-center ml-2'>
                <li className='list-link'>
                {
            menuItem.map((item,index)=>(
                <a href={item.path} key={index} className='links nav-link px-2' activeclassName='active' >
                    <div className="icon">{item.icon} </div>
                    <div className="name ms-1 d-none d-sm-inline ">{item.name} </div>
                </a>
            ))
        }
                </li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Sidenav