import React from 'react';
import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';

function HomeDashboard() {
   
   return (
      <>
         {/* row inside main column */}
         <div className="row mt-4 " style={{ height: '85vh' }}>
            <h2>Dashboard</h2>
            <div className="col " >
               {/* row inside new row column */}
               <div className="row gap-2 d-flex  p-4 " style={{ height: '80vh', overflowX: 'auto' }} >

                  {/* counting row */}
                  <div className="row d-flex  justify-content-around  ">

                     <div className="col col-sm-12 col-lg-4 mt-1" style={{ height: '80px' }}>
                       <div className="row">
                          <div className="col col-lg-11  col-sm-12  box-shadow  d-flex justify-content-center align-items-center text-light" style={{ height: '80px', backgroundColor: '#DE425B' }}>
                          <i class="bi bi-people fs-5 me-2"></i> Total User: 100
                          </div>
                         
                       </div>
                     </div>

                     
                     <div className="col col-sm-12 col-lg-4 mt-1" style={{ height: '80px' }}>
                       <div className="row">
                          <div className="col col-lg-11  col-sm-12   box-shadow  d-flex justify-content-center align-items-center text-light" style={{ height: '80px',backgroundColor: '#A4C126'}}>
                          <i class="bi bi-bag fs-5 me-2"></i>
                         Total Order:  200
                          </div>
                          
                       </div>
                     </div>

                     <div className="col col-sm-12 col-lg-4 mt-1 " style={{ height: '80px' }}>
                       <div className="row">
                          <div className="col col-lg-12 col-sm-12  box-shadow  d-flex justify-content-center align-items-center text-light" style={{ height: '80px', backgroundColor: '#4CB5F5'}}>
                          <i class="bi bi-box fs-5 me-2 "></i>
                             Total Products: 1500
                          </div>
                     
                       </div>
                     </div>


                  </div>

                  {/* charts row */}
                  <div className="row   mt-2  d-flex justify-space-between" style={{ height: '500px' }} >


                     <div className="col col-sm-12 col-lg-6 box-shadow5 d-flex justify-content-center align-items-center "style={{ height: '350px',  }} >
                     
                        <BarChart />
                              
                     </div>
                     <div className="col col-sm-12 col-lg-6 box-shadow5 d-flex justify-content-center align-items-center" style={{ height: '350px',backgroundColor: '#484848' }}>

                        <PieChart />

                     </div>


                  </div>

               </div>

            </div>
         </div>
      </>
   );
}

export default HomeDashboard;