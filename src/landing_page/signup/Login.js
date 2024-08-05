import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
    
    return (
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col'>
                    <img src='media/images/landing.png' alt='landing'></img>
                </div>

                <div className='col'>
                    <h3>Signup now</h3>
                    <form>
                        <div class="mb-1">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required />
                        </div>
                        <div class="mb-1">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required />
                        </div>
                        <div class="form-text">Already have an account? <Link to={"/signup"}>signup</Link></div>
                        <button
                            className="btn pl-2 pr-2 fs-5 text-white mt-2"
                            style={{ width: "40%", margin: "0 auto", backgroundColor: "#387ed1" }}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;