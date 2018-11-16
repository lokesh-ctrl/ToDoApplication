package com.example.todo.Controller;

import com.example.todo.Model.Task;
import com.example.todo.Service.FirebaseCallback;
import org.junit.Test;

import java.util.List;

public class FirebaseDbTest {
    @Test
    public void putTask_shouldUploadGivenTaskToDbInFirebase() throws InterruptedException {
        Task task = new Task ( "1", "Bring tablet", false );
        FirebaseDb.putTask ( "2", task );
    }
    @Test
    public void getTasks_shouldReturnAllTasksInTheDb() {
        List<Task> tasks = FirebaseDb.getAllTasks ( new FirebaseCallback ( ) {
            @Override
            public void onCallback(String value) {
                System.out.println ( value );
            }
        } );
        System.out.println ( "*****************" );
        System.out.println ( tasks );
    }
}