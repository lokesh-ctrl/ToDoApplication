package com.example.todo.Controller;

import com.example.todo.Model.Task;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

@RestController
public class TasksController {
    private final static Logger LOGGER = Logger.getLogger ( Logger.GLOBAL_LOGGER_NAME );

    @RequestMapping(value = "/tasks", method = RequestMethod.GET, produces = "application/json")
    public List<Task> returnTasks() {
        return FirebaseDb.getAllTasks ( );
    }
}
