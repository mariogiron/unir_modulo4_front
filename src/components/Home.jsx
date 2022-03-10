import { useEffect, useState } from "react";
import CardPost from "./ui/CardPost";
import FlexWrapper from "./ui/FlexWrapper";

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return <>
        <h1>Listado de Posts</h1>
        <FlexWrapper>
            {posts.map(post => (
                <CardPost post={post} key={post._id} />
            ))}
        </FlexWrapper>
    </>;
}

export default Home;