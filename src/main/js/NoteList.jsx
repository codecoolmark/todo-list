import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import api from "./api.js";

function NoteList() {
    const { noteListId } = useParams()
    const [noteList, setNoteList] = useState(null);


    useEffect(() => {
        const abortController = new AbortController();

        api.fetchNoteList(abortController.signal, noteListId)
            .then(noteList => setNoteList(noteList));
        return () => abortController.abort();
    }, [noteListId])



    return <div>
        <h1>{noteList?.name ?? "Loading..."}</h1>
        <ul>
            {noteList?.notes?.map(note => <li key={note.id}>{note.text}</li>)}
        </ul>
        <Link to={"/"}>All lists</Link>
    </div>;
}

export default NoteList;