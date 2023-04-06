import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import Note from "../../main/js/Note.jsx";

expect.extend(matchers);

describe("Note", () => {
    it("shows the text of the note", () => {
        const testNote = { text: "This is the text I want to test", done: false }
        render(<Note note={testNote}></Note>)
        expect(screen.queryByText(testNote.text)).not.toBeNull().toBeUndefined();
    });

    it("checkbox is unchecked if the note is not done", () => {
        const testNote = { text: "This is the text I want to test", done: false }
        render(<Note note={testNote}></Note>)
        expect(screen.queryByRole("checkbox").checked).toBe(false);
    });

    it("checkbox is checked if the note is done", () => {
        const testNote = { text: "This is the text I want to test", done: true }
        render(<Note note={testNote}></Note>)
        expect(screen.queryByRole("checkbox").checked).toBe(true);
    })
});