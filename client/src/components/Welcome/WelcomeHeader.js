import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeHeader = ({user, handleLogout}) => {
    return (
        <div className="row">
            <div className="col-12">
                <p className="mb-1">Welcome, {user}</p>
                <Link to="/">
                    <div className="btn btn-primary mr-2">Home</div>
                </Link>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default WelcomeHeader
