import React from 'react'
import {Link, withRouter} from 'react-router-dom'   //withRouter

const List = ({Notes, match}) => (
    <>
        <h3>Notes List</h3>
        <div className="list-group">
            {Notes.map((note,key) => (
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

export default withRouter(List)
