import * as firebase from 'firebase';


interface IFirebaseworker<T>{
    signIn(email: string,password: string): Promise<T>;
    signUp(email: string,password: string): Promise<T>;
}

export default class Firebaseworker implements IFirebaseworker<firebase.auth.UserCredential>{

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
}