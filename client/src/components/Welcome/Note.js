import React from 'react'

const Note = ({currentNote}) => {
    return (
        <div>
          {currentNote !== null?
                "You are looking at Note #" + (currentNote + 1):
                "Click on a note from left side."
            }  
        </div>
    )
}

export default Note
