import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import Logo from '../../4eddit.png';
import Button from '@material-ui/core/Button'
import styled from 'styled-components';

const StyledMainContainer = styled.div`
   text-align: center;
`

const StyledImg = styled.img`
   max-width: 25%;
   height: auto;
`

const StyledTitle = styled.h1`
   color: white;
   text-shadow: 1px 1px black;
`

const StyledCardsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const PostContainer = styled.div`
   margin: 15px 300px;
   text-align: center;
   border: 1px solid black;
   padding: 20px;
   width: 500px;
   background: white;
`

const AddCommentContainer = styled.div`
   margin: 15px 300px;
   text-align: center;
   border: 1px solid black;
   padding: 20px;
   width: 500px;  
   background: white;
   justify-self: center;
`

const CommentsContainer = styled.div`
   margin: 15px 300px;
   text-align: center;
   border: 1px solid black;
   padding: 20px;
   width: 500px;  
   background: white;
`

class PostDetails extends Component {

   componentDidMount() {
      const token = window.localStorage.getItem("token")
      if(token === null) {
         this.props.goToLoginPage()
      }
   }

   render() {
      return (
         <StyledMainContainer>
            <StyledImg src={Logo} alt="imagem da logo"/> 
         
            <StyledTitle>Post Details</StyledTitle>

            <StyledCardsContainer>
               <PostContainer>
                  <p>Post selecionado</p>              
               </PostContainer>

               <AddCommentContainer>
                  <p>criar comentários no post selecionado</p>
               </AddCommentContainer>

               <CommentsContainer>
                  <p>Lista de comentários no post selecionado</p>               
               </CommentsContainer>
            </StyledCardsContainer>

            <Button onClick={this.props.gotToFeedPage} color="primary" variant="contained">Voltar</Button> 

         </StyledMainContainer>
      );
   }
}

function mapStateToProps(state) {
   return {
      postDetail: state.posts.postDetails,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      goToLoginPage: () => dispatch(push(routes.root)),
      gotToFeedPage: () => dispatch(push(routes.feed)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
