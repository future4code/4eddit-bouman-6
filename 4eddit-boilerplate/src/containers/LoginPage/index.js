import React, { Component } from 'react';
import { login } from '../../actions/login';
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import { routes } from '../Router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Logo from '../../4eddit.png';

const HeaderContainer = styled.div`
  text-align: center;
  color: white;
  text-shadow: 1px 1px black;
  font-size: 12pt;  
`

const StyledImg = styled.img`
   width: 15vw;
   height: auto;
`

const StyledInputContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 150px;
  align-items: center;
`

const StyledTextField = styled(TextField)`
  margin: 0 0 30px 0;
`

const StyledButton = styled(Button)`
  width: 150px;
  margin: 30px 15px 0px 15px;
  padding: 10px;
  font-weight: bold;
  
`

const StyledDiv = styled.div`
  padding: 5px 0;
  background: #ffb08f;
  color: transparent;
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
      <div>
        <HeaderContainer>
          <StyledImg src={Logo} alt="imagem da logo" />
        </HeaderContainer>
        <StyledDiv>div faixa</StyledDiv>

        <StyledInputContainer>
          <h1>Login</h1>
          <StyledTextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
            variant="outlined"
            color="secondary"
          />

          <StyledTextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
            variant="outlined"
            color="secondary"
          />

          <div>
            <StyledButton onClick={this.handleLoginButton} color="secondary" variant="contained">Entrar</StyledButton>
            <StyledButton onClick={this.props.goToRegister} color="secondary" variant="contained">Cadastrar</StyledButton>
          </div>

        </StyledInputContainer>

        <StyledDiv>div faixa</StyledDiv>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  goToRegister: () => dispatch(push(routes.signup))
})

export default connect(null, mapDispatchToProps)(LoginPage);
