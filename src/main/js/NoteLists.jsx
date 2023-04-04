import {useEffect, useState} from "react";
import api from "./api.js";
import {Link} from "react-router-dom";

function NotesLists() {
    const [noteLists, setNoteLists] = useState([]);
    const abortController = new AbortController();

    useEffect(()=> {
        api.fetchNoteLists(abortController.signal).then(noteLists => setNoteLists(noteLists))
        return
    }, []);

    return <>
        { noteLists.map(noteList => <h2 key={noteList.id}><Link to={"notelists/" + noteList.id}>{noteList.name}</Link></h2> )}
    </>
}

export default NotesLists;