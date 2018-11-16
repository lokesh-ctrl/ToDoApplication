package com.example.todo.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Task {
    private String id;
    private String taskName;
    private boolean isCompleted;

    public Task() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    public Task(String id, String taskName, boolean isCompleted) {
        this.id = id;
        this.taskName = taskName;
        this.isCompleted = isCompleted;
    }

    @Override
    public String toString() {
        return "{" +
                "id:" + id + "," +
                "\ttaskName:" + taskName +
                "," + "\tisCompleted:" + isCompleted + "}";
    }
}
