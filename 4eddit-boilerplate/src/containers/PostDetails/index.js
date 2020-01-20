import React, { Component } from "react";
import styled from 'styled-components';

const PostContainer = styled.div`
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
         <PostContainer>
            <p>container= Post Clicado</p>
         </PostContainer>
         <CommentsContainer>
            <p>container= Cometários do Post</p>
         </CommentsContainer>
      </div>
    );
  }
}

export default PostDetails;
