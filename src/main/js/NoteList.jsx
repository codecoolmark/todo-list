import { useParams } from "react-router-dom";

function NoteList() {
    const { noteListId } = useParams()
    console.log(noteListId);

    return <h1>Notelist</h1>;
}

export default NoteList;