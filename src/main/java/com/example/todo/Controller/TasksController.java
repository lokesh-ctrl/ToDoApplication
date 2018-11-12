package com.example.todo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TasksController {
    @GetMapping(value = "/tasks")
    public String returnTasks(){
        return "";
    }
}
