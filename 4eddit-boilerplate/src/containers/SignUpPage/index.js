import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Logo from '../../4eddit.png';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 150px;
  height: auto;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class SignUpPage extends Component {
  render() {
    return (
      <InputContainer>
        <StyledImg src={Logo} alt="imagem da logo"/>
        <form>
          <ButtonGroup orientation="vertical" color="primary" aria-label="vertical outlined primary button group">
            <TextField id="username" label="Nome de usuário" variant="outlined"/>
            <TextField id="email" label="Email" variant="outlined"/>
            <TextField id="password" label="Senha" variant="outlined"/>
            <Button variant="contained" color="primary">Cadastrar</Button>
          </ButtonGroup>
        </form>       
      </InputContainer>
    );
  }
}

export default SignUpPage;