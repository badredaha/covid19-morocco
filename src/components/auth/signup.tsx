import React, { Component} from 'react';
import * as firebase from 'firebase';
import '../../css/theme.css'


interface SignunProps{
  history:any
}

interface SignunState{
    email:string
    pwd:string
}

export default class Signin extends Component<SignunProps,SignunState>{


  handleSubmitForm =(e)=>{
    e.preventDefault();
    this.firebaseSignup(this.state.email,this.state.pwd);
  }


  goToHome(){
    const { history } = this.props;
    history.push('/home');
  }
    
    render(){
    return (
        <div id="root">
            <h1></h1>
            

        <form className="form-group">
                <h3>Sign up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) =>this.setState({email:e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"onChange={(e)=>this.setState({pwd:e.target.value})} />
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
  
        firebase.auth().createUserWithEmailAndPassword(email,pwd).then((success) =>{
            this.goToHome();
          }).catch((error) =>{
            alert("Error "+error);
          });
          
    }

}
