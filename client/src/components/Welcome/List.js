import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'   //withRouter

const List = ({NotesApi, match, user}) => {

    const [filter, setFilter] = useState("All");

    const Filters = [
        'All',
        'My Notes'
    ]

    const handleClick = (e) => {
        e.preventDefault();
        const text = e.target.innerHTML.trim();
        setFilter(text);
    }

    return (
    <>
        <h3>Notes List</h3>
        <div className="btn-group d-flex mb-3">
            {Filters.map((btn,key) => (
                <button className={"btn btn-"+(filter === btn?"primary":"outline-secondary")} key={key}
                    onClick={handleClick}
                >{btn}</button>
            ))}
        </div>
        <div className="list-group">
            {NotesApi && NotesApi
            .filter(note => {
                if(filter === 'My Notes'){
                    return note.User === user;
                }else{
                    return true;
                }
            })
            .map((note,key) => (
                <Link
                to={"note-"+key}
                className={"list-group-item list-group-item-action" + 
                    ( match.params.NoteID === `note-${key}` ? " active" : "")}
                    key={key}
                >
                    {note.Title}
                </Link>
            ))}
        </div>
    </>
    )
}

export default withRouter(List)
