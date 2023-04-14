import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import api from "../api.js";
import Note from "./Note.jsx";

function NoteList({ noteListId }) {
    const [noteList, setNoteList] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        api.fetchNoteList(null, noteListId)
            .then(noteList => setNoteList(noteList));
        return () => abortController.abort();
    }, [noteListId])



    return <div>
        <h1>{noteList?.name ?? "Loading..."}</h1>
        <ul>
            {noteList?.notes?.map(note => <li key={note.id}><Note note={note}></Note></li>)}
        </ul>
        <a href={"/"}>All lists</a>
    </div>;
}

export default NoteList;