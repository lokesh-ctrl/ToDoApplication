package com.example.todo.Controller;

import com.example.todo.Model.Task;
import org.junit.Test;

import static org.junit.Assert.assertTrue;

public class FirebaseDbTest {
    @Test
    public void putTask_shouldUploadGivenTaskToDbInFirebase() throws InterruptedException {
        Task task = new Task ( "1","Bring tablet",false );
        FirebaseDb.putTask ( "2",task);
    }
    @Test
    public void getTasks_shouldReturnAllTasksInTheDb(){

    }
}