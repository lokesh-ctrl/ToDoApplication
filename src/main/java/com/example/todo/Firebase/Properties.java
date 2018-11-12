package com.example.todo.Firebase;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

class FirebaseProperties {

    private static final String PROJECT_URL;

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
    }

    public static String getProjectUrl() {
        return PROJECT_URL;
    }
}
