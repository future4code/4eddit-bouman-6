import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import Logo from '../../4eddit.png';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { getPostDetail, postVote } from '../../actions/posts'

const StyledMainContainer = styled.div`
   width:30%;
   margin:20px auto;
   text-align:center;
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
const ContainerPostsCount = styled.div`
margin-left:10px;
margin-right:240px;
`
const ArrowUp = styled.span`
cursor:pointer;
font-size:17px;
margin-right:2px;
color:green;
`

const ArrowDown = styled.span`
cursor:pointer;
font-size:17px;
margin-left:2px;
color:red;
`
const NumberOfComments = styled.span`
margin-left:5px;
`

class PostDetails extends Component {

   componentDidMount() {
      const token = window.localStorage.getItem("token")
      if(token === null) {
         this.props.goToLoginPage()
         window.alert("Área restrita. Faça seu login")
      }

      this.props.getPostDetail(this.props.postIdSelected)
      
   }

   render() {
      const {postDetail} = this.props
      return (
         <StyledMainContainer>
            <StyledImg src={Logo} alt="imagem da logo"/> 
            <StyledTitle>Post Details</StyledTitle>

            <StyledCardsContainer>
               <Card>
                  <CardContent>
                     <Typography variant="h5" gutterBottom>
                        <p>{this.props.postDetail.username}</p>
                     </Typography>
                     <hr/>
                     <Typography>
                        <p>{this.props.postDetail.text}</p>
                     </Typography>
                        
                  </CardContent>
                  <CardActions>
                     <ContainerPostsCount>
                        <ArrowUp onClick={() => {this.props.postVote(+1, this.props.post.id)}}>⬆</ArrowUp>
                        <span>{this.props.postDetail.userVoteDirection}</span>
                        <ArrowDown onClick={() => {this.props.postVote(-1, this.props.post.id)}}>⬇</ArrowDown>
                     </ContainerPostsCount>
                     <div>
                           <span>comentários</span>
                           <NumberOfComments>0</NumberOfComments>
                     </div> 
                  </CardActions>
               </Card>

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
      postIdSelected: state.posts.postIdSelected,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      goToLoginPage: () => dispatch(push(routes.root)),
      gotToFeedPage: () => dispatch(push(routes.feed)),
      getPostDetail: (postId) => dispatch(getPostDetail(postId)), 
      postVote: (direction,postId) => dispatch(postVote(direction,postId)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
