import React, { Component } from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';

const PostContainer = styled.div`
   margin: 15px 300px;
   text-align: center;
   border: 1px solid black;
`

const AddCommentContainer = styled.div`
   margin: 15px 300px;
   text-align: center;
   border: 1px solid black;
`

const CommentsContainer = styled.div`
   margin: 15px 300px;
   text-align: center;
   border: 1px solid black;
`

class PostDetails extends Component {

   render() {
      return (
         <div>
            <h1>Post Details</h1>

            <PostContainer>
               <p>{this.props.postDetail.postId}</p>
               <p>{this.props.postDetail.username}</p>
               <div>
                  {this.props.postDetail.text}
               </div>
               <p>{this.props.postDetail.votesCount}</p><p>{this.props.postDetail.commentsNumber}</p>
            </PostContainer>


            <AddCommentContainer>
               criar comentários
            </AddCommentContainer>

            <CommentsContainer>
               <p>container= Cometários do Post</p>
            </CommentsContainer>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      postDetail: state.posts.postDetails
   }
}


export default connect(mapStateToProps)(PostDetails);
