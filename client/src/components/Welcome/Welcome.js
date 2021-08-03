// import React, { Component } from 'react'
import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'
import Axios from 'axios'
import List from './List'
import Note from './Note'
import WelcomeHeader from './WelcomeHeader'

const Welcome = ({user, handleLogout}) => {

    const [NotesApi, setNotesApi] = useState(null);

    useEffect(() => {
        Axios.get('api/note').then((res) => {
            setNotesApi(res.data);
        })
    }, [])

    return (
        <div className="container">
            <WelcomeHeader user={user} handleLogout={handleLogout}/>
            <div className="row mt-3">
                <Route path={['/:NoteID','/']}>
                    <div className="col-3">
                        <List NotesApi={NotesApi} />
                    </div>
                    <div className="col-9">
                        <Note NotesApi={NotesApi} />
                    </div>
                </Route>
            </div>
        </div>
    )
}

export default Welcome

