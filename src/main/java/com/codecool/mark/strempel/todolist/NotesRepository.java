package com.codecool.mark.strempel.todolist;

import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public class NotesRepository {

    private Collection<NoteList> database;

    public NotesRepository() {
        database = List.of(new NoteList(1,"Today",
                        List.of(new Note(0, "testing workshop", "finish preparation of the testing ws", false),
                                new Note(1, "organize consultations", "check the calendar for consultations", true)),
                        "Todos for today"),
                new NoteList(2,"This week", List.of(), "Todos for this week"));
    }

    public Collection<NoteList> getNoteLists() {
        return database;
    }

    public Optional<NoteList> findNoteListById(int id) {
        return database.stream().filter(noteList -> noteList.id() == id).findFirst();
    }

    public Optional<Collection<Note>> filterNotesByListId(int listId) {
        return findNoteListById(listId)
                .map(noteList -> noteList.notes());
    }
}
