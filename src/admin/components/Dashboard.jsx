import ProductContainer from "../Containers/ProductContainer";
import OrderContainer from "../Containers/OrderContainer";
import UserContainer from "../Containers/UserContainer";
import TransactionContainer from "../Containers/TransactionContainer";
import HomeDashboard from "../Containers/HomeDashboard";

import { useState } from "react";

function Dashboard() {


   const [show, setShow] = useState(true);
   const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

   const handleClick = (menuItem) => {
      setShow(true);
      setActiveMenuItem(menuItem);
      console.log(`${menuItem} clicked`);
   }


   return (
      <div className="container-fluid">
         <div className="row vh-100 border border-success">
            {/* left main column */}
            <div className="col col-sm-3 col-lg-2 box-shadow2 bg-dark ">
               <div className="row d-flex align-items-center py-3 box-shadow3">  <h5 className="text-light"> Admin Panel</h5></div>
               <div className="row mt-5  px-2 gap-3">
                  <div onClick={() => handleClick('Dashboard')} className="col-12 p-1 fs-5 text-light bx-hover" style={{ cursor: 'pointer' }}>  
                  <i class="bi bi-house-fill me-2"></i>
                    Dashboard
                  </div>
                  <div onClick={() => handleClick('Products')} className="col-12 p-1 fs-5 text-light bx-hover" style={{ cursor: 'pointer' }}>
                  <i class="bi bi-bag-fill me-2"></i>
                     Products
                  </div>
                  <div onClick={() => handleClick('Orders')}  className="col-12 p-1 fs-5 text-light bx-hover" style={{ cursor: 'pointer' }}>
                  <i class="bi bi-cart-check-fill me-2"></i>
                     Orders
                  </div>
                  <div  onClick={() => handleClick('Users')}className="col-12 p-1 fs-5 text-light bx-hover" style={{ cursor: 'pointer' }}>
                  <i class="bi bi-people-fill me-2"></i>
                     Users
                  </div>
                  <div onClick={() => handleClick('Transactions')}  className="col-12  p-1 fs-5 text-light bx-hover" style={{ cursor: 'pointer' }}>
                  <i class="bi bi-wallet me-2"></i>
                     Transactions
                  </div>
               </div>
            </div>
            {/* right main column */}
            <div className="col  py-2">
               <nav class="navbar navbar-light bg-light box-shadow">
                  <div class="container-fluid">
                     <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                     </form>

                     {/* Profile dropdown toggler start */}
                     <div class="dropdown nav-item ms-auto">
                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-circle me-1" height="30" alt="" loading="lazy" />
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


               {/* row inside main column */}
               {show && (
                  <>
                     {activeMenuItem === 'Dashboard' && <HomeDashboard />}
                     {activeMenuItem === 'Products' && <ProductContainer />}
                     {activeMenuItem === 'Orders' && <OrderContainer />}
                     {activeMenuItem === 'Users' && <UserContainer />}
                     {activeMenuItem === 'Transactions' && <TransactionContainer />}
                  </>
               )}
            </div>
         </div>
      </div>
   );
}

export default Dashboard;




