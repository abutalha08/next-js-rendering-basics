'use client';
import { use } from "react";


const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);
    console.log('posts in posts component', posts);
    return (
        <div>
            <h2 className="text-4xl">Posts: {posts.length}</h2>
        </div>
    );
};

export default Posts;

// use(postsPromise) ->>> use hook can be used in both client and server side for data fetching