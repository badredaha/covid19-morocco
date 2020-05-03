import React, { Component} from 'react';
import * as firebase from 'firebase';
import '../../css/theme.css'
import FirebaseWorker from '../../workers/firebaseworker';


interface SignunProps{
  history:any
}

interface SignunState{
    email:string
    pwd:string
}

export default class Signin extends Component<SignunProps,SignunState>{
    // Variable class
  firebaseWorker;

  constructor(props:SignunProps){
    super(props);
    this.firebaseWorker = new FirebaseWorker();
  }

  handleSubmitForm =(e)=>{
    e.preventDefault();
    this.firebaseSignup(this.state.email,this.state.pwd);
  }

  goToHome(){
    const { history } = this.props;
    history.push('/home');
  }
    
  handleOnChange(e){
    const {name,value} = e.currentTarget;
    switch (name){
      case "email":
        this.setState({email:value});
        break;
        case "pwd":
          this.setState({pwd:value});
          break;
    }
  }
    render(){
    return (
        <div id="root">
            <h1></h1>
            

        <form className="form-group">
                <h3>Sign up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={(e) =>this.handleOnChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="pwd" className="form-control" placeholder="Enter password"onChange={(e)=>this.handleOnChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmitForm}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
    )
    }

    firebaseSignup(email: string, pwd: string){
  
      this.firebaseWorker.signUp(email, pwd).then((success) => {
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
