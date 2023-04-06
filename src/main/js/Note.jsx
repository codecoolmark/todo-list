export default function Note({ note }) {
    return <span>
        <input type={"checkbox"} checked={note.done}/>
        {note.text}
    </span>
}