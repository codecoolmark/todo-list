package com.codecool.mark.strempel.todolist;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Optional;

@RestController
public class NotesController {
    private final NotesServices notesServices;

    public NotesController(NotesServices newNotesServices) {
        notesServices = newNotesServices;
    }

    @GetMapping("/lists")
    public Collection<NoteList> getLists() {
        return notesServices.getNoteLists();
    }

    @GetMapping("/lists/{id}")
    public NoteList getListsId(@PathVariable int id) {
        var noteList = notesServices.getNoteListById(id);
        return noteList.orElseThrow(() -> new ResourceNotFoundException("NotesList", id));
    }

    @GetMapping("/lists/{id}/notes")
    public Collection<Note> getListsIdNotes(@PathVariable int id) {
        var notes = notesServices.getNotesByListId(id);
        return notes.orElseThrow(() -> new ResourceNotFoundException("NotesList", id));
    }
}
