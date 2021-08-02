import React, {useState} from 'react'
import FormGroup from '../form/FormGroup'

const LoginForm = ({handleAuth, errorAuth}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAuth(username, password);
    }

    return (
        <form className="LoginForm" onSubmit={handleSubmit}>       {/**Purpose of using onSubmit is when we click enter it will triger. */}
            <h2>Login</h2>
            {errorAuth && (
                <div className="alert alert-danger">{errorAuth}</div>
            )}
            {[
                {
                    Id: 'Username',
                    Type: 'text',
                    Value: username,
                    Desc:'Enter your User Name.',
                    onChange:(e) => setUsername(e.target.value)
                },{
                    Id: 'Password',
                    Type: 'password',
                    Value: password,
                    Desc:'Enter your Password.',
                    onChange:(e) => setPassword(e.target.value)
                }
            ].map((input,key) => (
                <FormGroup {...input} key={key} Label={input.Id}/>
            ))
            }
            <input type="submit" value="Login" className="btn btn-primary"/>
        </form>
    )
}

export default LoginForm
