function OrderContainer() {
    return (
        <>
           {/* row inside main column */}
           <div className="row mt-4" style={{ height: '85vh' }}>
                  <div className="col " >
                     {/* row inside new row column */}
                     <div className="row  d-flex  p-4" style={{ height: '75vh', overflowX: 'auto' }} >
                        {/* Card */}
                         

                      <h1>Orders</h1>


                     </div>
                  </div>
               </div>
            
        </>
      );
}

export default OrderContainer;