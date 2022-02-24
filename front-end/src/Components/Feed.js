import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
// import axios from '../axios'
// import Pusher from '../'
// import db from '../firebase'
// import {useStateValue} from '../StateProvider';
import { db } from '../firebase'
import { firestore } from 'firebase'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        firestore().collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data(),
            })))
        })
    },[]);

    // console.log(posts.image)
    // console.log(posts)
      
        
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {
                posts.map(post=>(
                    <Post
                    photoURL={post.data.photoURL}
                    image={post.data.image}
                    username={post.data.username}
                    timestamp='12:00'
                    message={post.data.message}
                    />
                ))
            }


        </div>
    );
};




export default Feed;
