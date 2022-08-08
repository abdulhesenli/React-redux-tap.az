import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { DetailDataID } from '../store/action/DetailAction';
import { useSelector,useDispatch } from 'react-redux';

function Details() {
    let {id} =useParams();
    const ProductDataDetail =useSelector((state)=>state.allDetail)
    const dispatchProduct =useDispatch();

    useEffect (()=>{
        dispatchProduct(DetailDataID(id));
       
    },[])

    
  return (
    <div>
    <div className="view-products">
        <div className="view-products_coteqories-title">
            <div className="container"></div>
        </div>
        <div className="view-products_image">
            <div className="container">
                <div className="view-products_image-container">
                    <img src ={ProductDataDetail.images}/>
                </div>
            </div>
        </div>
        <div className="view-products_context-title">
            <div className="container">
                <div className="view-products_context-title_flex">
                    <div className="price">
                        <div className="price-width">
                            <div className="price-width_position">
                                <span className='price-one'> {ProductDataDetail.price} </span>
                                <span className='price-two'>azn</span>
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        <h1>{ProductDataDetail.title} </h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="view-products_context-body">
            <div className="container d-flex">
                <aside className='aside'>
                    <div className="author">
                        {/* <a className="author_phone" href="">(070) 684-36-36</a> */}
                        <div className="author_name">Seymur</div>
                        {/* <a className="author_profile" href="">İstifadəçinin bütün elanları</a> */}
                    </div>
                    <button className="message">
                        <i className="fa-solid fa-comment-dots"></i>Mesaj yaz
                    </button>
                    <div className="time">
                        <p>Elanin nömrəsi:33548678</p>
                        <p>Baxişlarin sayi: 231</p>
                        <p>Yeniləndi: Bugün, 12:08</p>
                    </div>
                    <div className="bookmaking">
                        {/* <i className="fa-solid fa-heart"></i><a href="">Seçilmişlərə əlavə et</a> */}
                    </div>
                    <div className="report">
                        {/* <i className="fa-solid fa-flag"></i><a href="#">Elandan şikayət et</a> */}
                    </div>
                </aside>
                <main className="main">
                    <table className="table">
                        <tbody>
                        <tr>
                            <th scope="col">Adi</th>
                            <th scope="col">{ProductDataDetail.title}</th>
                        </tr>
                        <tr>
                            <th scope="col">Qiymeti</th>
                            <th scope="col">{ProductDataDetail.price}</th>
                        </tr>
                        {/* <tr>
                            <th scope="col">Nümunə</th>
                            <th scope="col">Nümunə</th>
                        </tr>
                        <tr>
                            <th scope="col">Nümunə</th>
                            <th scope="col">Nümunə</th>
                        </tr>
                        <tr>
                            <th scope="col">Nümunə</th>
                            <th scope="col">Nümunə</th>
                        </tr> */}
                        </tbody>
                    </table>
                    <p ></p>
                   
                </main>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Details;