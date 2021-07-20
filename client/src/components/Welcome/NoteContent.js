import React from 'react'

const NoteContent = ({match, Notes}) => {
    const {Title, Desc} = Notes[+match.params.NoteID.replace("note-","")]
    return (
        <>
        <pre className="border rounded p-4 bg-light">
            <h3 className="mb-3">{Title}</h3>
            <p>{Desc}</p>
        </pre>
        </>
    )
}

export default NoteContent
