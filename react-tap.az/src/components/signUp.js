import React from 'react';
import {NavLink} from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-6 offset-3">
                        <main className="form-signin">
                            <form>
                                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                                <div className="form-floating mb-3">
                                    <input
                                        type="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="name"
                                    />
                                    <label htmlFor="floatingInput">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="surname"
                                        name="surname"
                                        className="form-control"
                                        placeholder="surname"
                                    />
                                    <label htmlFor="floatingInput">Surname</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                </div>
                                <div className="checkbox mb-3">
                                    <NavLink to='/signIn' className='text-decoration-none'>Sign In</NavLink>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;