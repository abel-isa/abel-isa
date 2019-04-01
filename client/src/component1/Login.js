import React, { Component } from 'react'
import AuthService from '../service/authService'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
            .then(response => {
                this.setState({ username: "", password: "" })
                // this.props.setUser(response)
                // window.location.assign('/coasters')
                //con el redirect es mejor porque no te vuelve a cargar la pagina 
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="container">
                <h1>Editar contenido</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="username" className="form-control" value={this.state.username} onChange={e => this.handleChange(e)} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <textarea name="password" className="form-control" value={this.state.password} onChange={e => this.handleChange(e)} />
                            </div>
                            <input type="submit" value="Login" className="btn btn-outline-dark" />
                        </form>

                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;