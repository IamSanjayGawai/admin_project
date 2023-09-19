import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../redux/reducer/productReducer';

function EditModal({ product }) {
  const dispatch = useDispatch();
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });


const handleUpdate = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Dispatch the updateProduct action with the updated product data
  dispatch(updateProduct(updatedProduct));

  // Close the modal or perform any other necessary actions
  // (You may need to use a state variable to manage the modal's visibility)
  // closeModal();
};

const handleChange = (e) => {
  const { name, value } = e.target;
  // Update the updatedProduct state directly when an input field changes
  setUpdatedProduct((prevProduct) => ({
    ...prevProduct,
    [name]: value,
  }));
};


  return (
    <>


    <div
      className="modal fade"
      id={`editModal-${product.id}`} // Use a unique ID for each product
      data-bs-backdrop="true"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby={`editModalLabel-${product.id}`} // Use a unique ID for each product
      aria-hidden="true"
    >
    {/* Rest of your modal code */}


        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">
                Update
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* Edit modal */}
            <div className="modal-body">
              <div className=" ">
                <form className="d-flex flex-column gap-2" id="edit-form">
                  <div className="form-group  d-flex justify-content-between  ">
                    <label htmlFor="product-name">Product Name: </label>
                    <input
                      type="text"
                      id="product-name"
                      name="name"
                      value={updatedProduct.name}
                      onChange={handleChange}
                      required
                      style={{ width: '70%' }}
                    />
                  </div>
                  <div className="form-group  d-flex justify-content-between  ">
                    <label htmlFor="product-price">Price: </label>
                    <input
                      type="number"
                      id="product-price"
                      name="price"
                      value={updatedProduct.price}
                      onChange={handleChange}
                      step="0.01"
                      required
                      style={{ width: '70%' }}
                    />
                  </div>
                  <div className="form-group d-flex justify-content-between">
                    <label htmlFor="product-description">Description: </label>
                    <textarea
                      id="product-description"
                      name="description"
                      value={updatedProduct.description}
                      onChange={handleChange}
                      rows="3"
                      style={{ width: '70%' }}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group d-flex justify-content-between">
                    <label htmlFor="product-image">Product Image: </label>
                    <input
                      type="file"
                      id="product-image"
                      name="image"
                      accept="image/*"
                      style={{ width: '70%' }}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group d-flex justify-content-between">
                    <label htmlFor="product-image-url">Product Image URL: </label>
                    <input
                      type="text"
                      id="product-image-url"
                      name="image"
                      value={updatedProduct.image}
                      onChange={handleChange}
                      style={{ width: '70%' }}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={handleUpdate}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Edit modal end */}
          </div>
        </div>
      </div>
      {/* Edit Button Modal end */}
    </>
  );
}

export default EditModal;
