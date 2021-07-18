import React from 'react'
import LoginForm from './LoginForm'

const Login = ({handleAuth}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <LoginForm handleAuth={handleAuth}/>
                    </div>
                    <div className="col-6">Register</div>
                </div>
            </div>
        </div>
    )
}

export default Login
