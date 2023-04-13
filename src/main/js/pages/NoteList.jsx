import components from '../components';
import { useParams } from "react-router-dom";

export default function NoteList() {
    const { noteListId} = useParams()
    return <components.NoteList noteListId={noteListId} />
};