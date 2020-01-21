import React, { Component } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Posts from '../../components/Posts'
import { connect } from "react-redux";
import { getPosts } from "../../actions/posts"

const Container = styled.div`
margin:auto;
text-align:center;
width:80%;
`

const H1 = styled.h1`
font-size:40px;
`

const ContainerButton = styled.div`
margin-top:15px;
padding-bottom:20px;
border-bottom: solid 2px #ED7F61;
`

class Feed extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        console.log("lista de post", this.props.getToPosts)
        return (
            <Container>
                <div>
                    <H1>Feed</H1>
                    <TextField
                        onChange={this.handleFieldChange}
                        label="Novo Post"
                    />
                </div>
                <ContainerButton>
                    <Button color="primary" variant="contained">Postar</Button>
                </ContainerButton>


                {this.props.getToPosts.map(post => (
                    <Posts post={post}></Posts>
                ))}
            </Container>

        )
    }
}

const mapStateToProps = (state) => ({
    getToPosts: state.posts.allPosts,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);