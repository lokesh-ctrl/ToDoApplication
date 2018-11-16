package com.example.todo.Controller;

import com.example.todo.Firebase.FireBaseProperties;
import com.example.todo.Firebase.FirebasePropertiesFromFile;
import com.example.todo.Model.Task;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.concurrent.CountDownLatch;

class FirebaseDb {
    private final static FireBaseProperties firebaseProperties = new FirebasePropertiesFromFile ( );
    private static DatabaseReference ref;

    static {
        FileInputStream serviceAccount = null;
        try {
            serviceAccount = new FileInputStream ( "/Users/rlokesh/Documents/Projects/todo/src/main/resources/todoapp-6c35d-firebase-adminsdk-mgzlz-9e8ceadbc7.json" );
        } catch ( FileNotFoundException e ) {
            e.printStackTrace ( );
        }

        FirebaseOptions options = null;
        try {
            options = new FirebaseOptions.Builder ( )
                    .setCredentials ( GoogleCredentials.fromStream ( serviceAccount ) )
                    .setDatabaseUrl ( firebaseProperties.getProjectURL ( ) )
                    .build ( );
        } catch ( IOException e ) {
            e.printStackTrace ( );
        }

        FirebaseApp.initializeApp ( options );
        final FirebaseDatabase database = FirebaseDatabase.getInstance ( );
        ref = database.getReference ( "tasks" );
    }

    public static void putTask(String position, Task task) throws InterruptedException {
        final CountDownLatch sync = new CountDownLatch ( 1 );
        ref.child ( position ).setValueAsync ( task );
        sync.await ( );
    }
}