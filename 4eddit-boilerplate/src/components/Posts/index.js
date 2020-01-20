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
function Posts (props){
    return (
        <ContainerPosts>

        
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        CampiotoLucas
                    </Typography>
                    <hr/>
                    <Typography  >
                        estou ouvindo uma musica muito topppppppppppppppppppppppppppppp
                        adaoadkaopsdkkasodpk
                    </Typography>
                   <hr/>
                    <Typography variant="body2" component="p">
                      
                    </Typography>
                </CardContent>
                <CardActions>
                   <span>⬆</span>
                   <span>0</span>
                   <span>⬇</span>
                   <span>comentários</span>
                   <span>0</span>
                </CardActions>
            </Card>
        </ContainerPosts>
    )
}

export default Posts