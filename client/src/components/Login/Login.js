import React from 'react'
import LoginForm from './LoginForm'
import RegForm from './RegForm'

const Login = ({handleAuth, errorAuth, handleReg, errorReg, regUser}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <LoginForm handleAuth={handleAuth} errorAuth={errorAuth}/>
                    </div>
                    <div className="col-6">
                        <RegForm handleReg={handleReg} errorReg={errorReg} regUser={regUser}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
