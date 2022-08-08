import React from 'react';

const AddProducts = () => {
    return (
        <div>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-6 offset-3">
                        <main className="form-signin">
                            <form>
                                <h1 className="h3 mb-3 fw-normal">Add Products</h1>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder="title"
                                    />
                                    <label htmlFor="floatingInput">Title</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        name="context"
                                        className="form-control"
                                        placeholder="context"
                                    />
                                    <label htmlFor="floatingInput">Context</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        name="price"
                                        className="form-control"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInput">Price</label>
                                </div>
                                <div className='form-floating mb-3'>
                                    <button
                                        className='btn btn-warning'
                                        type='button'
                                    >Random image
                                    </button>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Add</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;