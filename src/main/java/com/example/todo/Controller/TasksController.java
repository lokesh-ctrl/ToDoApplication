package com.example.todo.Controller;

import com.example.todo.Model.Task;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TasksController {

    @RequestMapping(value = "/tasks", method = RequestMethod.GET, produces = "application/json")
    public List<Task> returnTasks() {
        return FirebaseDb.getAllTasks ( );
    }

    @RequestMapping(value = "/tasks", method = RequestMethod.POST, consumes = "application/json")
    public void addTask(@RequestBody String body) {
        JSONObject jsonObject = new JSONObject ( body );
        String id = jsonObject.get ( "id" ).toString ( );
        String taskName = jsonObject.get ( "taskName" ).toString ( );
        boolean isCompleted = (boolean) jsonObject.get ( "completed" );
        try {
            FirebaseDb.putTask ( id, new Task ( id, taskName, isCompleted ) );
        } catch ( InterruptedException e ) {
            e.printStackTrace ( );
        }
    }

    @RequestMapping(value = "/tasks/{id}", method = RequestMethod.DELETE)
    public void deleteTask(@PathVariable final String id) {
        FirebaseDb.deleteTask ( id );
    }
}
