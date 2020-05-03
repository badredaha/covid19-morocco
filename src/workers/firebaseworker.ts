import * as firebase from 'firebase';

interface IFirebaseworker<T> {
    signIn(email: string, password: string): Promise<T>;
    signUp(email: string, password: string): Promise<T>;
}

export default class FirebaseWorker implements IFirebaseworker<firebase.auth.UserCredential>{
    firebaseInstance = firebase;

   
    /** 
     * Signin User */
    signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return firebase.auth().signInWithEmailAndPassword(email, password);

    }

    /** 
     * Create User */
    signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    

    public static InitAppFirebasex(){
        const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
        const FIREBASE_DATABASE_URL = process.env.REACT_APP_FIREBASE_API_KEY;
        const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
        const config = {
            apiKey: FIREBASE_API_KEY,
            authDomain: 'covid19-morroco',
            databaseURL: FIREBASE_DATABASE_URL,
            projectId: FIREBASE_PROJECT_ID,
            storageBucket: '',
        };

        firebase.initializeApp(config);
    }
 
        
}
