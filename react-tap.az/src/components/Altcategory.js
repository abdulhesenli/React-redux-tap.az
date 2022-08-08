import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { ProductData } from '../store/action/ProductAction';


const Altcategorygoster = () => {

    // const product = useSelector( (state) => state.allProducts.Products);
    // const dispatch = useDispatch();


    // useEffect( ()=>{
    //     dispatch(ProductData())
    // },[product]);




    return (
        <div>
            {/*-- --------------- PRODUCTS --------------- --*/}
            <section className="products">
                <div className="container">
                    <div className="row">



                        <div className="col-md-3 mb-3" >
                            <div className="product">
                                <div className="product_image">
                                    <img src='' alt="" />
                                    <div className="product_image_store">
                                        {/* <img src="../img/products/store.svg" alt=""/> */}
                                    </div>
                                </div>
                                <div className="product_price">
                                    <span className="product_price_val"> </span>
                                    <span className="product_price_cur">AZN</span>
                                </div>
                                <div className="product_name">



                                </div>

                                <div className="product_created">Bakı, bugün, 14:20</div>
                            </div>
                        </div>






                    </div>
                </div>
            </section>
        </div>
    )
        
};

export default Altcategorygoster;