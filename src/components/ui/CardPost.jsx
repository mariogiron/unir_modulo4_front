import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: lightblue;
    border: 1px solid dodgerblue;
    width: 300px;
    border-radius: 10px;
    margin: 10px;
`

const CardPost = ({ post }) => {
    return <Wrapper>
        <h2>{post.title}</h2>
        <p>{post.author}</p>
        <p>{post.category}</p>
        <NavLink to={`/posts/${post._id}`}>
            <button>Ver Post</button>
        </NavLink>
    </Wrapper>
}

export default CardPost;