import React from 'react';
import { deleteProduct, addProduct } from "../../redux/reducer/productReducer";
import { useDispatch } from "react-redux";
import { useState } from 'react';

function AddProduct() {

   const dispatch = useDispatch();

   // Define state for form inputs
   const [product, setProduct] = useState({
      name: "",
      price: 0,
      description: "",
      image: ""
   });

   // Handle form input changes
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProduct({
         ...product,
         [name]: value
      });
   }

   const handleAddClick = () => {
      // Validate form inputs before adding
      if (!product.name || product.price <= 0 || !product.description || !product.image) {
         // Display an error message or handle the validation error as needed
         alert("Please fill in all fields and ensure the price is greater than 0.");
         return;
      }
   
      // Dispatch the addProduct action with the product object
      dispatch(addProduct(product));
   
      // Clear form inputs after adding
      setProduct({
         name: "",
         price: 0,
         description: "",
         image: ""
      });
   }
   


   return (
      <>
         <div className="row  mt-2 mb-2">
            <div className="col-6">
               <h2>Products</h2>
            </div>
            <div className="col-6  d-flex justify-content-end align-items-center">
               {/* Edit product modal button */}
               <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Add
               </button>

               <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                     <div className="modal-content">
                        <div className="modal-header">
                           <h5 className="modal-title" id="staticBackdropLabel">Add Product</h5>
                           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {/* product modal */}
                        <div className="modal-body">
                           <div className=" ">
                              <form className="d-flex flex-column gap-2" id="product-form">

                                 <div className="form-group  d-flex justify-content-between  ">
                                    <label for="product-price">Product Name: </label>
                                    <input
                                       type="text"
                                       id="product-name"
                                       name="name"
                                       value={product.name}
                                       onChange={handleInputChange}
                                       required
                                       style={{ width: '70%' }}
                                    />
                                 </div>
                                 <div className="form-group  d-flex justify-content-between  ">
                                    <label for="product-price">Price: </label>
                                    <input
                                       type="number"
                                       id="product-price"
                                       name="price"
                                       value={product.price}
                                       onChange={handleInputChange}
                                       step="0.01"
                                       required
                                       style={{ width: '70%' }}
                                    />
                                 </div>
                                 <div className="form-group  d-flex justify-content-between">
                                    <label for="product-description">Description: </label>
                                    <textarea
                                       id="product-description"
                                       name="description"
                                       value={product.description}
                                       onChange={handleInputChange}
                                       rows="3"
                                       style={{ width: '70%' }}
                                       required
                                    ></textarea>
                                 </div>
                                 <div className="form-group d-flex justify-content-between">
                                    <label for="product-image">Product Image: </label>
                                    <input
                                       type="file"
                                       id="product-image"
                                       name="image"
                                       accept="image/*"
                                       style={{ width: '70%' }}
                                       onChange={handleInputChange}
                                    />
                                 </div>
                                 <div className="form-group d-flex justify-content-between">
                                    <label htmlFor="product-image">Product Image URL: </label>
                                    <input
                                       type="text"
                                       id="product-image"
                                       name="image"
                                       value={product.image}
                                       onChange={handleInputChange}
                                       style={{ width: '70%' }}
                                    />
                                 </div>
                                 <div className="modal-footer">
                                    <button onClick={handleAddClick} type="submit" class="btn btn-primary">Add</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                 </div>
                              </form>
                           </div>
                        </div>

                        {/* product modal end */}

                     </div>
                  </div>
               </div>
               {/* Add Product Modal end */}

            </div>
         </div>


      </>
   );
}

export default AddProduct;