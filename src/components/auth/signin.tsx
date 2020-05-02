import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../../css/theme.css'
import { emit } from 'cluster';


interface SigninProps {
    history: any
}

interface SigninState {
    email: string
    pwd: string
}

export default class Signin extends Component<SigninProps, SigninState>{


    goToHome() {
        const { history } = this.props;
        history.push('/home');
    }

    handleEmailOnChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePwdOnChange(event) {
        this.setState({ pwd: event.target.value });
    }

    onChangeHandler(e) {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "email":
                this.setState({ email: value });
                break;
            case "pwd":
                this.setState({ pwd: value });
                break;
        }

    }

    render() {
        return (
            <div id="root">
                <h1></h1>


                <form className="form-group">
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={(e) => this.onChangeHandler(e)} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="pwd" className="form-control" placeholder="Enter password" onChange={(e) => this.onChangeHandler(e)} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmitForm}>Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        )
    }

    handleSubmitForm = (e) => {

        e.preventDefault();
        this.firebaseSignIn(this.state.email, this.state.pwd);
    }


    firebaseSignIn(email: string, pwd: string) {

        firebase.auth().signInWithEmailAndPassword(email, pwd).then((success) => {
            this.goToHome();
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
                return
            }

            alert("Error :" + errorMessage);

        });

    }

}
