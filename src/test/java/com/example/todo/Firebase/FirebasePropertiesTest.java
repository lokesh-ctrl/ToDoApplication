package com.example.todo.Firebase;

import org.junit.Test;

import static org.junit.Assert.*;

public class FirebasePropertiesTest {
    @Test
    public void firebaseproperties_shouldReturnCorrectProjectURL(){
        String expectedURL = "https://todoapp-6c35d.firebaseio.com/";
        String actialURL = FirebaseProperties.getProjectUrl ();
        assertEquals (  actialURL,expectedURL);
    }

}