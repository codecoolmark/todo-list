package com.codecool.mark.strempel.todolist;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String resourceType, int id) {
        super(resourceType + " with id=" + id + " could not be found!");
    }
}
