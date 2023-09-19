import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../user/components/Card';

function Home() {

    const products = useSelector((state) => state.products.products);

    return (

        <>
            <div className='container-fluid'>
                <div className='row '>

                <nav class="navbar navbar-light bg-warning box-shadow py-3">
                  <div class="container-fluid">
                     <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                     </form>

                     {/* Profile dropdown toggler start */}
                     <div class="dropdown nav-item ms-auto">
                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-circle me-1" height="40" alt="" loading="lazy" />
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

{/* Filter section */}
                    <div className='col mt-2 ' style={{minHeight: '20vh'}} >
                          <div className='row'>
                          <div className='col col-sm-12 col-lg-6 box-shadow' style={{minHeight: '20vh'}}>
                            <h3>Filters Right</h3>
                            </div> 
                            <div className='col col-sm-12 col-lg-6  box-shadow' style={{minHeight: '20vh'}}>
                            <h3>Filters Right</h3>
                            </div>  
                            </div>       
                    </div>
                   
                    <div className='col-12  mt-2' style={{minHeight: '70vh'}} >
                        <div className='row m-4'>
                            <div className='col-12'>
                                <h2>Products</h2>
                            </div>
                            <div className='col-12'>
                                <div className='row'>
                                    {products.map((product) => (
                                        <Card key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                      
                </div>
                </div>
            

        </>
    );
}
export default Home;
