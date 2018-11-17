package com.example.todo.Controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class TasksControllerTest {
    @Autowired
    private MockMvc mvc;

    @Test
    public void shouldReturnCorrectReponseWhileCallinggetTasks() throws Exception {
        mvc.perform ( MockMvcRequestBuilders.get ( "/tasks" ).accept ( MediaType.APPLICATION_JSON_VALUE ) )
                .andExpect ( status ( ).isOk ( ) )
                .andReturn ( );
    }

}