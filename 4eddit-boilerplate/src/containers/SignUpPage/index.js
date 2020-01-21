import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux"; 
import { push } from "connected-react-router";
import { routes } from '../Router';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Logo from '../../4eddit.png';
import styled from 'styled-components';
import { createUser } from "../../actions/signUp"

const StyledImg = styled.img`
  width: 150px;
  height: auto;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    type: "text",
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
    this.setState({form: {...this.state.form, [name]: value} });
  }

  handleCreateUser = () => {
    const { email, password, username } = this.state.form
    this.props.createUser(email,password,username)
  }
  
  render() {
    return (
      <InputContainer>      
        <StyledImg src={Logo} alt="imagem da logo"/>

        <form onSubmit={this.handleInputChanges}>
          {signUpForm.map(input => (
            <ButtonGroup orientation="horizontal" color="primary" aria-label="vertical outlined primary button group">
              <TextField
                name={input.name} 
                value={this.state.form[input.name] || ""} 
                id={input.name} 
                label={input.label}                
                onChange={this.handleInputChanges}
                variant={input.variant}               
              />
            </ButtonGroup>
          ))}
          
          <Button onClick={this.handleCreateUser} variant="contained" color="primary">Cadastrar</Button>
        </form>
      </InputContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
      createUser: (email, password, username) => dispatch(createUser(email, password, username)),
  }  
}

export default connect(null, mapDispatchToProps)(SignUpPage);