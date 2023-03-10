import React from 'react'
import NavLink from 'react-router-dom'
import'./Topbar.scss'
const Topbar = () => {
  return (
    <div className='top'>
       
       <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light  ">
  <a className="navbar-brand" href="#">AtoTax</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
  <ul className="navbar-nav mr-auto justify-content-end">
      <li className="nav-item active">
        <a className="nav-link" to="#">Login <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Logout</a>
      </li>
      <li className="nav-item">
      <img src="" alt="notification"/>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Topbar