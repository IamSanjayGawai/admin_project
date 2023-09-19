import Card from "../components/Card";

function HomeDashboard() {
   return (
      <>
         {/* row inside main column */}
         <div className="row mt-4 r" style={{ height: '85vh' }}>
            <h1>Dashboard</h1>
            <div className="col " >
               {/* row inside new row column */}
               <div className="row gap-2 d-flex  p-4 " style={{ height: '75vh', overflowX: 'auto' }} >

                  {/* counting row */}
                  <div className="row d-flex  justify-content-between ">

                     <div className="col col-sm-12 col-lg-4 border border-primary rounded" style={{ height: '80px' }}>
                       <div className="row">
                          <div className="col-3 border border-warning " style={{ height: '80px' }}>
                          </div>
                          <div className="col-9 border border-warning" style={{ height: '80px' }}>
                           Total Users
                          </div>
                       </div>
                     </div>

                     <div className="col col-sm-12 col-lg-4 border border-primary rounded" style={{ height: '80px' }}>
                     <div className="row">
                          <div className="col-3 border border-warning" style={{ height: '80px' }}></div>
                          <div className="col-9 border border-warning" style={{ height: '80px' }}>
                           Total Orders
                          </div>
                       </div>
                     </div>

                     <div className="col  col-sm-12 col-lg-4 border border-primary rounded" style={{ height: '80px' }}>
                     <div className="row">
                          <div className="col-3 border border-warning" style={{ height: '80px' }}></div>
                          <div className="col-9 border border-warning" style={{ height: '80px' }}>
                           Total Products
                          </div>
                       </div>
                     </div>
                  </div>

                  {/* charts row */}
                  <div className="row " style={{ height: '500px' }} >


                     <div className="col col-sm-12 col-lg-6 border border-primary"style={{ height: '350px'}} >

                     </div>
                     <div className="col col-sm-12 col-lg-6  border border-primary" style={{ height: '350px' }}>

                     </div>


                  </div>

               </div>

            </div>
         </div>
      </>
   );
}

export default HomeDashboard;