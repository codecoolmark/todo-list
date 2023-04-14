import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Note from "../../main/js/components/Note.jsx";

expect.extend(matchers);

describe("Note", () => {
    it("shows the text of the note", () => {
        const testNote = { text: "This is the text I want to test", done: false }
        render(<Note note={testNote}></Note>)
        expect(screen.queryByText(testNote.text)).not.toBeNull();
    });

    it("checkbox is unchecked if the note is not done", () => {
        const testNote = { text: "This is the text I want to test", done: false };
        render(<Note note={testNote}></Note>);
        expect(screen.queryByRole("checkbox").checked).toBe(false);
    });

    it("checkbox is checked if the note is done", () => {
        const testNote = { text: "This is the text I want to test", done: true };
        render(<Note note={testNote}></Note>);
        expect(screen.queryByRole("checkbox").checked).toBe(true);
    })

    it("clicking the checkbox calls the onChanged callback (selected - deselect)", async () => {
        const testNote = { text: "This is the text I want to test", done: true };
        const onChange = vi.fn();

        const user = userEvent.setup();
        render(<Note note={testNote} onChange={onChange}></Note>);
        let checkBox = screen.getByRole("checkbox");

        await user.click(checkBox);
        expect(onChange).toHaveBeenCalled(1)
        expect(onChange).toHaveBeenCalledWith({ text: testNote.text, done: !testNote.done });
    });

    it("clicking the checkbox calls the onChanged callback (deselected - selected)", async () => {
        const testNote = { text: "This is the text I want to test", done: false };
        let changedNote;
        const onChange = vi.fn()

        const user = userEvent.setup();
        render(<Note note={testNote} onChange={onChange}></Note>);
        const checkBox = screen.queryByRole("checkbox");

        await user.click(checkBox);
        expect(onChange).toHaveBeenCalled(1);
        expect(onChange).toHaveBeenCalledWith({ text: testNote.text, done: !testNote.done });
    });
});