import React, {Component} from 'react'
import classes from './Authority.css'

export default class Authority extends Component {

    state = {
        flag:false
        // input: Array.from(
        //     document.getElementsByClassName('name')
        //   )[0],
    };

    submitHandler = () => {

    }

    onFocusHandler = (event) => {
        console.log( event);
    }

    handleSubmit = (event) =>  {
        event.preventDefault();
        console.log('Відправлено');
    }

    onChangeLoginHandler = (event) => {      
        console.log( event.target.value);
        const logPass = "Sasha3";
       // if (event.target.value == logPass)

        this.setState({
        flag:true
        })
        //his.setState({input: this.state.input.setAttribute('border-color', 'red')});
    }

    onChangePassHandler = (event) => {
        console.log( event.target.value);
    }

    render() {
        return(
            <div className='Authority'>
                <div>
                    <h1>Log to Web App</h1>
                    <form className='AuthorityForm' onSubmit={this.handleSubmit}>
                        <label htmlFor="name">E-mail</label>
                        <input type='email' id="name" className="name" name="name" 
                            onChange={event => this.onChangeLoginHandler(event)} 
                            //onFocus={this.onFocusHandler(this)}
                            //errorMessage='Incorrect email'
                            border-color={this.state.flag === true ? 'red': 'blue'}
                            />

                        <label htmlFor="password">Password</label>
                        <input type='password' id="password" name="password" 
                            onChange={event => this.onChangePassHandler(event)} 
                        //errorMessage='Incorrect passoword'
                        />
                        
                        <button type='submit' onClick={this.submitHandler}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}