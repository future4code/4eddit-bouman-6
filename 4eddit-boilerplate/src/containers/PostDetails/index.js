import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import TextField from '@material-ui/core/TextField';
import Logo from '../../4eddit.png';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { getPostDetail, postVote, createComment, voteComment } from '../../actions/posts'

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
   color: black;
   
`

const StyledCardsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const AddCommentContainer = styled.div`
   margin: 10px 300px;
   text-align: center;
   padding: 20px;
   width: 500px;  
   justify-self: center;
`

const CommentsContainer = styled.div`
   margin: 15px 300px;
   text-align: center;
   box-shadow: 3px 3px 0px rgba(0,0,0,0.3);
   padding: 20px;
   width: 350px;  
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

const ContainerButtonBack = styled.div`
margin: 50px 0px;
`

const addComment = [
   {
      name: "text",
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
         comments: "",
      }
   }

   componentDidMount() {
      const token = window.localStorage.getItem("token")
      if (token === null) {
         this.props.goToLoginPage()
         window.alert("Área restrita. Faça seu login")
      }

      this.props.getPostDetail(this.props.postIdSelected)
   }

   handleInputChanges = event => {
      const { name, value } = event.target;
      this.setState({ comments: { ...this.state.comments, [name]: value } });
   };

   handleCreateComment = (event) => {
      event.preventDefault()
      const { text } = this.state.comments;
      const { postIdSelected } = this.props
      this.props.createComment(text, postIdSelected)
      this.setState({ comments: "" })
   }

   render() {
      const { postDetails } = this.props
      return (
         <StyledMainContainer key="">
            <StyledImg src={Logo} alt="imagem da logo" />
            <StyledTitle>Post Details</StyledTitle>
               
            <ContainerButtonBack>
               <Button onClick={this.props.gotToFeedPage} color="primary" variant="contained">Voltar para o feed</Button>
            </ContainerButtonBack>   
              
               
            <StyledCardsContainer>
               <Card>
                  <CardContent>
                     <Typography variant="h5" gutterBottom>
                        <span>{this.props.postDetails.username}</span>
                     </Typography>
                     <hr />
                     <Typography>
                        <span>{this.props.postDetails.text}</span>
                     </Typography>

                  </CardContent>
                  <CardActions>
                     <ContainerPostsCount>
                        <ArrowUp onClick={() => { this.props.postVote(+1, this.props.postDetails.id) }}>⬆</ArrowUp>
                        <span>{this.props.postDetails.userVoteDirection}</span>
                        <ArrowDown onClick={() => { this.props.postVote(-1, this.props.postDetails.id) }}>⬇</ArrowDown>
                     </ContainerPostsCount>
                     <div>
                         <span>comentários</span>
                         <NumberOfComments>{this.props.postDetails.commentsNumber}</NumberOfComments>
                     </div>
                  </CardActions>
               </Card>

               <AddCommentContainer>
                  <form>
                     {addComment.map((input, index) => (
                        <TextField
                           key={index}
                           name={input.name}
                           value={this.state.comments[input.name] || ""}
                           id={input.name}
                           label={input.label}
                           variant={input.variant}
                           type={input.type}
                           onChange={this.handleInputChanges}
                        />
                     ))}
                  </form>
                  </AddCommentContainer>     
                  <Button onClick={this.handleCreateComment} color="primary" variant="contained">Comentar</Button>
               


               <StyledTitle>Comentários</StyledTitle>   
               {this.props.postDetails.comments && this.props.postDetails.comments.map((comment, index) => (
                  <CommentsContainer key={index}>
                     <h3>{comment.username}</h3>
                     <p>{comment.text}</p>
                     <p>{comment.votesCount}</p>                 
                        
                      <ArrowUp onClick={() => this.props.voteComment(+1, 
                        this.props.postIdSelected, 
                        comment.id)}>⬆ </ArrowUp>

                      <ArrowDown onClick={() => this.props.voteComment(-1, 
                        this.props.postIdSelected, 
                        comment.id)}>⬇</ArrowDown>

                 </CommentsContainer>
               ))}
               
            </StyledCardsContainer>

            

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
      postVote: (direction, postId) => dispatch(postVote(direction, postId)),
      createComment: (text, postId) => dispatch(createComment(text, postId)),
      voteComment: (direction, postId, commentId) => dispatch(voteComment(direction, postId, commentId))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
