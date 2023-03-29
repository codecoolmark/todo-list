package com.codecool.mark.strempel.todolist;

import java.util.Collection;

public record NoteList(int id, String name, Collection<Note> notes, String description) {

}
