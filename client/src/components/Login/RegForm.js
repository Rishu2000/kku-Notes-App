import React, {useState} from 'react'
import FormGroup from '../form/FormGroup'

const RegForm = ({handleReg, errorReg, regUser}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        handleReg(username, password);
    }

    return (
        <form className="LoginForm" onSubmit={handleSubmit}>       {/**Purpose of using onSubmit is when we click enter it will triger. */}
            <h2>Register</h2>
            {errorReg && (
                <div className="alert alert-danger">{errorReg}</div>
            )}
            {regUser && (
                <div className="alert alert-success">{regUser} has been created.</div>
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
            <input type="submit" value="Register" className="btn btn-primary"/>
        </form>
    )
}

export default RegForm
