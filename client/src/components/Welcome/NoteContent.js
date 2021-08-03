import React from 'react'

const NoteContent = ({match, NotesApi}) => {
    if(!NotesApi) {
        return (
            <>
            <pre className="border rounded p-4 bg-light">
                <h3 className="mb-3">Please Wait</h3>
                <p>Data are beening fetched.</p>
            </pre>
            </>
        )
    }
    const Note = NotesApi[+match.params.NoteID.replace("note-","")]
    if(!Note){
        return (
            <>
            <pre className="border rounded p-4 bg-light">
                <h3 className="mb-3">Note not found</h3>
                <p>Note you are looking for is not available.</p>
            </pre>
            </>
        )
    }else{
        const {Title, Desc} = Note;
        return (
            <>
            <pre className="border rounded p-4 bg-light">
                <h3 className="mb-3">{Title}</h3>
                <p>{Desc}</p>
            </pre>
            </>
        )
    }
}

export default NoteContent
