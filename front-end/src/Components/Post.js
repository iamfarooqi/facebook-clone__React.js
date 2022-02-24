import React from 'react';
import './Post.css'
import { Avatar } from '@material-ui/core'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIclon from '@material-ui/icons/AccountCircle'
import { useState } from 'react'
import PublicIcon from '@material-ui/icons/Public';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';





const Post = ({photoURL,image,username,timestamp,message}) => {


    return (

        <div className='post' >

            <div className='post_top'>
                <div className='post_topLeft'>
                    <Avatar src={photoURL}/>

                    <div className='postInfo'>
                        <h4>{username}</h4>
                        <p>{timestamp} <PublicIcon/></p>
                    </div>

                {/* <MoreHorizIcon/> */}
                </div>


            </div>
                <div className='post_middle'>
                    <p>
                        {message}
                    </p>

                    {image && <img src={image}/>}

                </div>


            
        

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            
            </div>

        </div>
    );
}

export default Post;
