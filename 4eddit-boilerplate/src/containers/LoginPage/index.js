import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { login } from '../../actions/login';
import { connect } from "react-redux";  



const Container = styled.form`
 width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`

const P = styled.p`
font-size:12px;
`

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginButton = () => {
    this.props.login(this.state.email, this.state.password)
  }


  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <h1>Login</h1>
        <TextField  
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email} 
        />

        <TextField  
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password} 
        />
        <Button onClick={this.handleLoginButton} color="primary" variant="contained">Entrar</Button>
        <Button>Cadastrar</Button>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  login: (email,password) => dispatch(login(email,password))
})

export default connect(null, mapDispatchToProps)(LoginPage);
