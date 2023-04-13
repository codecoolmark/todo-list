export default function Note({ note, onChange }) {
    return <span>
        <input type={"checkbox"}
               checked={note.done}
               onChange={(event) => onChange({ ...note, done: event.target.checked })}/>
        {note.text}
    </span>
}