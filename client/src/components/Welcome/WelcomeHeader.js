import React from 'react'

const WelcomeHeader = ({user, handleLogout}) => {
    return (
        <div className="row">
            <div className="col-12">
                <p className="mb-1">Welcome, {user}</p>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default WelcomeHeader
