package com.codecool.mark.strempel.todolist;

import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class NotesServices {

    private final NotesRepository repository;

    public NotesServices(NotesRepository newRepository) {
        repository = newRepository;
    }

    public Collection<NoteList> getNoteLists() {
        return repository.getNoteLists();
    }

    public Optional<NoteList> getNoteListById(int id) {
        return repository.findNoteListById(id);
    }

    public Optional<Collection<Note>> getNotesByListId(int listId) {
        return repository.filterNotesByListId(listId);
    }
}
