import React from "react";
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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


function Posts (props){
    return (
        <ContainerPosts>

        
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {props.post.username}
                    </Typography>
                    <hr/>
                    <Typography  >
                       {props.post.text}
                    </Typography>
                   <hr/>
                    <Typography variant="body2" component="p">
                      
                    </Typography>
                </CardContent>
                <CardActions>
                    
                        <ContainerPostsCount>
                            <span>⬆</span>
                            <span>0</span>
                            <span>⬇</span>
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

export default Posts