package com.example.todo.Firebase;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FirebasePropertiesTest {
    @Test
    public void firebaseproperties_shouldReturnCorrectProjectURL() {
        String expectedURL = "https://todoapp-6c35d.firebaseio.com/";
        FireBaseProperties fireBaseProperties = new FirebasePropertiesFromFile ( );
        String actialURL = fireBaseProperties.getProjectURL ( );
        assertEquals ( actialURL, expectedURL );
    }

    @Test
    public void firebaseProperties_shouldReturnCorrectProjectID() {
        String expectedID = "todoapp-6c35d";
        FireBaseProperties fireBaseProperties = new FirebasePropertiesFromFile ( );
        String actualId = fireBaseProperties.getProjectId ( );
        assertEquals ( expectedID,actualId );
    }
}