import { expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import NoteList from "../../main/js/components/NoteList.jsx";

let testList;

describe("NoteList", () => {

    vi.mock("../../main/js/api.js", () => {
        return {
            default: {
                fetchNoteList: vi.fn((signal, noteListId) => {
                    return Promise.resolve(testList);
                })
            }
        }
    });

    it("shows the title of the note", async () => {
        testList = {
            name: "Test list",
            notes: []
        }

        render(<NoteList noteListId={1}></NoteList>)
        await waitFor(() => {
            expect(screen.queryByText(testList.name)).not.toBeNull();
        })
    });

    it("shows title of each note", async () => {
        testList = {
            name: "Test list",
            notes: [{
                id: 0,
                title: "testing workshop",
                text: "finish preparation of the testing ws",
                isDone: false
            }, {
                id:1,
                title: "organize consultations",
                text: "check the calendar for consultations",
                isDone: true
            }]
        }

        render(<NoteList noteListId={1}></NoteList>)
        await waitFor(() => {
            testList.notes.forEach(note => {
                expect(screen.queryByText(note.text)).not.toBeNull();
            })
        })
    });
});