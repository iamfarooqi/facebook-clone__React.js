import React from 'react';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post'



const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post
            profilePic='https://www.propertytwinsswfl.com/wp-content/uploads/2018/09/dummy-profile-pic-male.jpg'
            message='Hello World'
            timestamp='1645272354096'
            imgName='imgName'
            username='Farooqi'
            />
            
            {/* {
                PostData.map(entry =>{
                    <Post 
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username={entry.user}
                    />
                })
            } */}
        </div>
    );
};




export default Feed;
