package com.example.todo.Firebase;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

class FirebasePropertiesFromFile implements FireBaseProperties {

    private static final String PROJECT_URL;
    private static final String PROJECT_ID;

    static {
        Properties properties = new Properties ( );
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream ( "/Users/rlokesh/Documents/Projects/todo/src/main/resources/configuration.properties" );
            properties.load ( inputStream );
        } catch ( java.io.IOException e ) {
            e.printStackTrace ( );
        }
        PROJECT_URL = properties.getProperty ( "PROJECT_URL" );
        PROJECT_ID = properties.getProperty ( "PROJECT_ID" );
    }

    @Override
    public String getProjectURL() {
        return PROJECT_URL;
    }

    @Override
    public String getProjectId() {
        return PROJECT_ID;
    }

}
