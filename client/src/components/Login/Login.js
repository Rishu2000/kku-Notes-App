import React from 'react'
import LoginForm from './LoginForm'

const Login = ({handleAuth, error}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <LoginForm handleAuth={handleAuth} error={error}/>
                    </div>
                    <div className="col-6">Register</div>
                </div>
            </div>
        </div>
    )
}

export default Login
