import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {

    const { postId } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/posts/${postId}`)
            .then(response => response.json())
            .then(json => setPost(json));
    }, [postId])

    const onClickDelete = () => {
        fetch(`http://localhost:3000/api/posts/${postId}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(json => {
                alert('Post borrado');
                navigate('/');
            });
    }

    return <>
        {post && (
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>Autor: {post.author}</p>
                <p>Categoría: {post.category}</p>
                <button onClick={onClickDelete}>Borrar</button>
            </div>
        )}
    </>
}

export default PostDetail;