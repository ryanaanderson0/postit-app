import React from 'react'
import Note from './Note.js'


class NotesList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(         
            <>
                <input type="text" placeholder="Write your new note here" />
                <button> Add Note </button>
                <Note data="Note1" />
                <Note data="Note2" />
                <Note data="Note3" />
            </>
        )
    }
}

export default NotesList;