import React from 'react';
import {NavLink} from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <div className="container">
                <div className="row pt-5 mt-5">
                    <div className="col-6 offset-3">
                        <main className="form-signin">
                            <form>
                                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className='form-control'
                                        name="email"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className='form-control'
                                        name="password"
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
                                    <NavLink to='/signUp' className='text-decoration-none'>Registration</NavLink>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;