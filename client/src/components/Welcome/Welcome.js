import React from 'react'

const Welcome = ({user, handleLogout}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>Welcome, {user}</p>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
