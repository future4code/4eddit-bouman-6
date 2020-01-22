import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import Logo from '../../4eddit.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { getPostDetail } from '../../actions/posts'

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

const addComment = [
   {
      name: "comentario",
      type: "text",
      label: "Escreva seu comentário",
      required: true,
      variant: "outlined",
   },
]

class PostDetails extends Component {
   constructor(props) {
      super(props)
      this.state = {
         comments: {},
      }
   }

   componentDidMount() {
      const token = window.localStorage.getItem("token")
      if (token === null) {
         this.props.goToLoginPage()
      }

      this.props.getPostDetail(this.props.postIdSelected)
   }

   handleInputChanges = event => {
      const { name, value } = event.target;
      this.setState({ comments: { ...this.state.comments, [name]: value } });
   };

   handleCreateComment = () => {
      const { postId, text } = this.state.comments;
      this.props.createComment(postId, text)
   }

   render() {
      const { postDetails } = this.props
      return (
         <StyledMainContainer>
            <StyledImg src={Logo} alt="imagem da logo" />

            <StyledTitle>Post Details</StyledTitle>

            <StyledCardsContainer>
               <PostContainer>
                  <p>{postDetails.username}</p>
                  <p>{postDetails.text}</p>
                  <p>{postDetails.votesCount}</p>
                  <p>{postDetails.userVoteDirection}</p>
                  <p>{postDetails.commentsNumber}</p>
               </PostContainer>

               <AddCommentContainer>
                  <form onSubmit={this.handleInputChanges}>
                     {addComment.map(input => (
                        <TextField
                           name={input.name}
                           value={this.state.comments[input.name] || ""}
                           id={input.name}
                           label={input.label}
                           variant={input.variant}
                           type={input.type}
                           onChange={this.handleInputChanges}
                           multiline
                        />
                     ))}
                  </form>
                  <Button onClick={this.handleCreateComment} color="primary" variant="contained">Comentar</Button>
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
      postDetails: state.posts.postDetails,
      postIdSelected: state.posts.postIdSelected,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      goToLoginPage: () => dispatch(push(routes.root)),
      gotToFeedPage: () => dispatch(push(routes.feed)),
      getPostDetail: (postId) => dispatch(getPostDetail(postId)),
      //createComment: (postId, text) => dispatch(createComment(postId, text)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
