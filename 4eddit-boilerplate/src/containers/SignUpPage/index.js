import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { routes } from '../Router/';
import { push } from 'connected-react-router';
import Button from '@material-ui/core/Button';
import Logo from '../../4eddit.png';
import styled from 'styled-components';
import { createUser } from "../../actions/signUp";

const MainContainer = styled.div`
  text-align: center;
`

const StyledImg = styled.img`
  max-width: 20vw;
  height: auto;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledTextField = styled(TextField)`
  margin: 10px;
  width: 300px;
`

const signUpForm = [
  {
    name: "username",
    type: "text",
    label: "Nome de Usuário",
    required: true,
    variant: "outlined",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    variant: "outlined",
  },
  {
    name: "password",
    type: "password",
    label: "Senha",
    required: true,
    variant: "outlined",
  }
]

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {},
    }
  }

  handleInputChanges = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  }

  handleCreateUser = () => {
    const { email, password, username } = this.state.form
    this.props.createUser(email, password, username)
  }

  render() {
    return (
      <MainContainer>
        <StyledImg src={Logo} alt="imagem da logo" />
        <FormContainer onSubmit={this.handleInputChanges}>
          {signUpForm.map((input, index) => (
            <StyledTextField
              key={index}
              name={input.name}
              value={this.state.form[input.name] || ""}
              id={input.name}
              label={input.label}
              onChange={this.handleInputChanges}
              variant={input.variant}
              type={input.type}
            />
          ))}
          <Button onClick={this.handleCreateUser} variant="contained" color="primary">Cadastrar</Button>          
        </FormContainer>
        <Button onClick={this.props.goToLoginPage} color="primary" variant="contained">Voltar</Button>
      </MainContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (email, password, username) => dispatch(createUser(email, password, username)),
    goToLoginPage: () => dispatch(push(routes.root))
  }
}

export default connect(null, mapDispatchToProps)(SignUpPage);