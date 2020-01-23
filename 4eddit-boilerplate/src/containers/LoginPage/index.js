import React, { Component } from "react";
import { login } from '../../actions/login';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../../4eddit.png'
import styled from "styled-components";

const StyledImg = styled.img`
   max-width: 50%;
   height: auto;
`

const Container = styled.form`
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`

class LoginPage extends Component {
  constructor(props) {
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
        <StyledImg src={Logo} alt="imagem da logo" />
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
        <Button onClick={this.props.goToRegister} color="primary" variant="contained">Cadastrar</Button>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  goToRegister: () => dispatch(push(routes.signup))
})

export default connect(null, mapDispatchToProps)(LoginPage);
