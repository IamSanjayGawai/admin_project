import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct, addProduct, } from "../../redux/reducer/productReducer";
import EditModal from "./EditModal";

function Card({ product }) {

   const dispatch = useDispatch();




   const handleDeleteClick = (id) => {
      // Pass the product.id as an argument to deleteProduct action
      dispatch(deleteProduct({ id }));
      console.log("delete");
   };



   return (
      <>

         <div className="col  col-sm-6 col-lg-3 p-2  " style={{ maxHeight: '290px' }} >
            <div className="col-11 p-2 d-flex flex-column justify-content-between  box-shadow4" style={{ maxHeight: '280px' }}>
               <div>
                  <img src={product.image} className="card-img-top border  " style={{ height: '140px', width: '100%' }} alt="Hollywood Sign on The Hill" />
               </div>
               <div className="d-flex flex-column">
                  <span>{product.name}</span>
                  <span>₹{product.price}</span>
                  <span>{product.description}</span>
               </div>

               <div className="d-flex justify-content-between mt-2">
                  {/* Edit product modal button */}
                  
                  <button
                     // Pass the product ID here
                     type="button"
                     className="btn btn-success"
                     data-bs-toggle="modal"
                     data-bs-target={`#editModal-${product.id}`} // Use a unique ID for each product
                  >
                     <i className="bi bi-pencil-square"></i>
                  </button>

               

                  {/* Delete product button */}
                  <button onClick={() => handleDeleteClick(product.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button>
               </div>
            </div>
         </div>

         {/* render modal otside the card */}
         <EditModal product={product} />

      </>
   );
}

export default Card;
