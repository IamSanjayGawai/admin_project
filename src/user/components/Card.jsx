// User Card Component 


function Card({ product }) {
    return ( 
        <>
           {/* create card */}
           <div className="col  col-sm-4 col-lg-2 p-2  " style={{ minHeight: '350px' }} >
            <div className="col-11 p-2 d-flex flex-column justify-content-between  box-shadow4" style={{ minHeight: '300px' }}>
               <div>
                  <img src={product.image} className="card-img-top border  " style={{ height: '140px', width: '100%' }} alt="Hollywood Sign on The Hill" />
               </div>
               <div className="d-flex flex-column">
                  <span style={{fontWeight: '700'}}>{product.name}</span>
                  <span className="fs-4" >₹{product.price}</span>
                  <span>{product.description}</span>
               </div>

               <div className="d-flex justify-content-between mt-2">
                 <button type="button" className="btn btn-success">Cart</button>
                 <button type="button" className="btn btn-warning">Buy</button>
        
               </div>
            </div>
         </div>   
        </>
    );
}

export default Card;