import React from 'react';
import Myprofile from '../../assets/Sanjay_Gawai.png';

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light box-shadow">
    <div class="container-fluid">
       <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
       </form>

       {/* Profile dropdown toggler start */}
       <div class="dropdown nav-item ms-auto">
          <img src={Myprofile} class="rounded-circle me-1" height="35" alt="" loading="lazy" />
          <a class="dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
             <a class="dropdown-item" href="#">Profile</a>
             <a class="dropdown-item" href="#">Setting</a>
             <a class="dropdown-item" href="#">Logout</a>
          </div>
       </div>
       {/* Profile dropdown toggler end */}
    </div>
 </nav>
  );
}

export default Navbar;
