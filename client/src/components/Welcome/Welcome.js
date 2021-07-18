import React from 'react'
import List from './List'

const Welcome = ({user, handleLogout}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="mb-1">Welcome, {user}</p>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <List Notes={["Note 1","Note 2","Note 3"]}/>
                </div>
                <div className="col-9">Right Sidebar</div>
            </div>
        </div>
    )
}

export default Welcome
