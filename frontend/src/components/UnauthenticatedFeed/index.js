import "./style.css";
import postApis from "../../apis/post";
import { useEffect, useState } from "react";
import FeedPostUnauthenticated from "../FeedPostUnauthenticated";

const UnauthenticatedFeed = () => {
    const [posts, setposts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllPosts = async () => {
            const posts = await postApis.getAllUnauthPosts();
            setposts(posts.reverse());
        };
        getAllPosts();
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [posts]);

    // useEffect(() => {
    //     const getAllPosts = async () => {
    //         setLoading(true);
    //         const posts = await postApis.getAllUnauthPosts();
    //         setposts(posts.reverse());
    //         setLoading(false);
    //     };
    //     if (posts.length === 0) {
    //         getAllPosts();
    //     }
    // }, [posts]);

    return (
        {
            loading?
            <h4 style={{padding: '20px'}}>Loading...</h4>:
            <div className="UnauthenticatedFeed_container">
                {posts.map((post) => (
                    <FeedPostUnauthenticated key={post._id} post={post} />
                ))}
            </div>
        }
    );
};

export default UnauthenticatedFeed;
