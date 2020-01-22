import React from "react";
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { postVote } from '../../actions/posts';

const ContainerPosts = styled.div`
    width:30%;
    margin:20px auto;
`

const ContainerPostsCount = styled.div`
    margin-left:10px;
    margin-right:160px;
`

const NumberOfComments = styled.span`
    margin-left:5px;
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

function Posts(props) {
    return (
        <ContainerPosts>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {props.post.username}
                    </Typography>
                    <hr />
                    <Typography  >
                        {props.post.text}
                    </Typography>
                    <hr />
                    <Typography variant="body2" component="p">

                    </Typography>
                </CardContent>
                <CardActions>
                    <ContainerPostsCount>
                        <ArrowUp onClick={() => { props.postVote(+1, props.post.id) }}>⬆</ArrowUp>
                        <span>{props.post.userVoteDirection}</span>
                        <ArrowDown onClick={() => { props.postVote(-1, props.post.id) }}>⬇</ArrowDown>
                    </ContainerPostsCount>
                    <div>
                        <span>comentários</span>
                        <NumberOfComments>0</NumberOfComments>
                    </div>
                </CardActions>
            </Card>
        </ContainerPosts>
    )
}

const mapDispatchToProps = dispatch => ({
    postVote: (direction, postId) => dispatch(postVote(direction, postId))
})

export default connect(null, mapDispatchToProps)(Posts);