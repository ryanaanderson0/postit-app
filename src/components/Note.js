import React from 'react'

const Note = (props) => {
    return (
        <>
            <p> The contents of this note is: {props.data} </p>
        </>
    )
}

export default Note;