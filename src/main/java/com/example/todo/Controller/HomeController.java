package com.example.todo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping(value = "/")
    public String index(){
        return "home";
    }
}
