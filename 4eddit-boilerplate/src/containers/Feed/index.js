import React, { Component } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Posts from '../../components/Posts'

const Container = styled.div`
margin:auto;
text-align:center;
`

const H1 = styled.h1`
font-size:40px;
`

class Feed extends Component {


    render(){
        return(
            <Container>
                <div>
                    <H1>Feed</H1>
                    <TextField  
                        onChange={this.handleFieldChange}
                        label="Novo Post"          
                    />
                    <Posts></Posts>
                </div>
            </Container>
            
        )
    }
}

export default Feed;