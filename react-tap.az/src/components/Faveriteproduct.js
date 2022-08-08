import React, {useEffect, useState} from "react";

const Favorite = () => {
    const [localpro, setLocalpro] = useState()

    useEffect(() => {
        setLocalpro(JSON.parse(localStorage.getItem('favoriteProdactLocal')));

    }, [localpro])



    const deleteFavorite = (i) => {
        localpro.splice(i, 1);
        localStorage.setItem('favoriteProdactLocal', JSON.stringify(localpro));
    }

    return (
        <div>

            <section className="products">
                <div className="container">
                    <div className="row">

                        {

                            localpro &&
                            localpro.map((item) => (
                                item.favoriteProduct == 1 &&
                                <div className="col-md-3 mb-3">
                                    <div className="product">
                                        <div className="product_image">
                                            <img src={item.images} alt="" />
                                            <i onClick={() => { deleteFavorite(item.id) }} className="fa-solid fa-xmark image_favorite"></i>
                                        </div>
                                        <div className="product_price">
                                            <span className="product_price_val">{item.price}</span>
                                            <span className="product_price_cur">AZN</span>
                                        </div>
                                        <div className="product_name">{item.title}</div>
                                        <div className="product_created">{item.date}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Favorite;