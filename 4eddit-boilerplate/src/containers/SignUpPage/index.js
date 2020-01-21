import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux"; 
//import { push } from "connected-react-router";
//import { routes } from '../Router';
import Button from '@material-ui/core/Button';
import Logo from '../../4eddit.png';
import styled from 'styled-components';
import { createUser } from "../../actions/signUp"

const MainContainer = styled.div`
  text-align: center;
`

const StyledImg = styled.img`
  width: 30vw;
  height: auto;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledButton = styled(Button)`
  color: white;
  font-weight: bold;
  margin-top: 20px;
  background: #b65036;
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
    this.setState({form: {...this.state.form, [name]: value} });
  }

  handleCreateUser = () => {
    const { email, password, username } = this.state.form
    this.props.createUser(email,password,username)
  }
  
  render() {
    return (
      <MainContainer> 
        <StyledImg src={Logo} alt="imagem da logo"/> 
          <FormContainer onSubmit={this.handleInputChanges}>
            {signUpForm.map(input => (          
                <StyledTextField
                  name={input.name} 
                  value={this.state.form[input.name] || ""} 
                  id={input.name} 
                  label={input.label}                
                  onChange={this.handleInputChanges}
                  variant={input.variant} 
                  type={input.type}
                />
            ))}
            <StyledButton onClick={this.handleCreateUser} variant="contained" color="primary">Cadastrar</StyledButton>
          </FormContainer>
      </MainContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
      createUser: (email, password, username) => dispatch(createUser(email, password, username)),
  }  
}

export default connect(null, mapDispatchToProps)(SignUpPage);