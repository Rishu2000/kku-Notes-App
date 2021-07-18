import React, {useState} from 'react'
import FormGroup from '../form/FormGroup'

const LoginForm = ({handleAuth}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAuth(username, password);
    }

    return (
        <form className="LoginForm" onSubmit={handleSubmit}>
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
