import ProductContainer from "../Containers/ProductContainer";
import OrderContainer from "../Containers/OrderContainer";
import UserContainer from "../Containers/UserContainer";
import TransactionContainer from "../Containers/TransactionContainer";
import HomeDashboard from "../Containers/HomeDashboard";

import { useState } from "react";
import Navbar from "./Navbar";

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
                  <i class="bi bi-pie-chart-fill me-2"></i>
                    Dashboard
                  </div>
                  <div onClick={() => handleClick('Products')} className="col-12 p-1 fs-5 text-light bx-hover" style={{ cursor: 'pointer' }}>
                  <i class="bi bi-box fs-5 me-2 "></i>
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
            <Navbar/>


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




