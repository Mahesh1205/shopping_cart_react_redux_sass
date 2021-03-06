import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/footer';
import Header from '../common/header';
import './login.scss';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.history.push('/');
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="row login">
                <Header showCartAndLoginInfo={false}></Header>
                <div className="col-md-4 col-md-offset-4 login-top-spacing">

                    <h2>Login</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                            {submitted && !username &&
                                <div className="help-block">Username is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn login-btn">Login</button>
                            <Link to="/register" className="btn btn-link green-link ">Register</Link>
                        </div>
                    </form>
                    <Footer />
                </div>
            </div>
        );
    }
}

