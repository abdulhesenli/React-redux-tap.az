import React, { useEffect, useState } from 'react';
import imgHouse from '../image/categories/house.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getData} from '../store/action/categoryAction';
import { ProductData } from '../store/action/ProductAction';



const Categories = () => {
    const [Topcategory, setTopcategory] = useState();
    // const [CategoryID, setIdcategory] = useState('')
    const category = useSelector((state) => state.allCategory.category);
    const dispatch = useDispatch();

    const product = useSelector((state) => state.allProducts.Products);
    const dispatchproduct = useDispatch();


    useEffect(() => {
        dispatchproduct(ProductData())
    }, []);



    useEffect(() => {
        dispatch(getData())
    }, [category]);

    const AltCategory = (id) => {
       
        const setCategoryAlt = category.filter((item) => {
            return item.TopMenu == id

        })

        setTopcategory(setCategoryAlt)
        console.log(setCategoryAlt);

        setCategoryAlt.map((data) => {
            const leghtCategory = product.filter((item)=>{
                return item.AltCategory == data.id && item.status == 1
            })

            console.log(leghtCategory);

          data.count= leghtCategory.length

          



        })


    }

    let categoryCard = document.querySelectorAll('.categories-card');
    // activ clasini her bir category card ucun gezdirirem 
    categoryCard.forEach((item) => {
        item.addEventListener('click', function () {
            categoryCard.forEach(cat => cat.classList.remove('akt'));
            this.classList.add('akt');
            document.querySelector('.card-flex_active').classList.add('active');
        })
    })


    // akt olan clasi tapib hem akti hemde active silirem
    let activCategory = document.querySelector('.akt');
    if (activCategory) {
        activCategory.addEventListener('click', function () {
            document.querySelector('.card-flex_active').classList.remove('active');
            this.classList.remove('akt')
        })

    }




    return (
        <div>
            {/*-- --------------- CATEGORIES --------------- --*/}
            <section className="categories">
                <div className="container">
                    <div className="card-flex">


                        {
                            category && category.map((item, i) => {
                                return (
                                    item.TopMenu==0 &&
                                    <div key={i} className="categories-card" onClick={() => { AltCategory(item.id) }} >
                                        <div className="categories_circle">
                                            <img src={imgHouse} alt="" />
                                        </div>
                                        <span className="categories_span"> {item.Category} </span>
                                    </div>
                                );
                            })
                        }

                    </div>

                    <div className='card-flex_active'>
                        <div className='row'>
                            


                            {
                                Topcategory &&
                                Topcategory.map((item, i) => (
                                    <div className='col-4 mb-3' key={i}>
                                        <Link  to={`/Altcategorygoster/${item.id}`}>{item.Category }({item.count}) </Link>

                                    </div>
                                ))
                            }









                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};




export default Categories;





    // console.log(Product);
    // console.log(category);
    // const getData = () =>{
    //     axios.get('https://reactproject-e0c89-default-rtdb.firebaseio.com/category.json')
    //     .then( ({data})=>{
    //         let catArr = [];
    //         for(let key in data){
    //             data[key].id = key;
    //             catArr.push(data[key])
    //         }
    //         dispatch(GetCategory(catArr))

    //         }
    //     )
    // }


    // const mapStateToProps = (state, ownProps) => {
//     return {
//      state
//     }
// }

// const  mapDispatchToProps = {
//     GetCategory
// }
