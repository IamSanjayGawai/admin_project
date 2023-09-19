import React from 'react';
import Card from '../components/Card';
import AddProduct from '../components/AddProduct';
import { useSelector } from 'react-redux';

function ProductContainer() {

   const products = useSelector((state) => state.products.products);

    return (
        <>
             {/* row inside main column */}
             <div className="row mt-4" style={{ height: '85vh' }}>
                  <div className="col " >
                  <AddProduct/>
                     {/* row inside new row column */}
                     <div className="row  d-flex  p-4" style={{ height: '75vh', overflowX: 'auto' }} >
                        {/* Card */}
                       {products.map((product) => (
                        <Card key={product.id} product={product} />
                      ))}
         
         
                     </div>
                  </div>
               </div>
        </>
      );
}

export default ProductContainer;