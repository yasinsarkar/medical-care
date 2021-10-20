import React from 'react';
import useAuth from '../hooks/useAuth';
import './Login.css';
import img from '../../images/istockphoto-1189304032-612x612.jpg'

const Login = () => {
    const {signInWithGoogle, handleRegistration,handleEmailChange,handlePasswordChange,error,toggolLogin,isLogin,handleNameChange} = useAuth();
    return (
        <div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                    <form onSubmit={handleRegistration}>
                <h3>Please {isLogin? "Login": "Register"} </h3>
               {!isLogin && <div className="row mb-3">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input type="text"  onBlur={handleNameChange} className="form-control" id="name" required/>
                    </div>
                </div>}
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email"  onBlur={handleEmailChange} className="form-control" id="inputEmail3" required/>
                    </div>
                </div>
               
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    
                    <div className="col-sm-10">
                    <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required/>
                    </div>
                </div> 
                <div><p>{error}</p></div>
                <div className="row mb-3 register">
                    <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                        <input onClick={toggolLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label className="form-check-label " for="gridCheck1">
                         Already Register?
                        </label>
                        
                    </div>
                    </div>
                </div>
                <button type="submit" className="g-button">{isLogin? "Login": "Register"}</button>
                <br />
                <button onClick={signInWithGoogle} className="mt-2 g-button">sign in with google</button>
            </form>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>

                </div>
            </div>


           
            
        </div>
    );
};

export default Login;