import React from 'react';
import Story from './Story';
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story 
            image='https://www.advertisemint.com/wp-content/uploads/2019/08/fb-stories-poll-599x1024.jpg'
            profileSrc='https://www.propertytwinsswfl.com/wp-content/uploads/2018/09/dummy-profile-pic-male.jpg'
            title='Farooqi 01'
            />
            <Story 
            image='https://www.advertisemint.com/wp-content/uploads/2019/08/fb-stories-poll-599x1024.jpg'
            profileSrc='https://www.propertytwinsswfl.com/wp-content/uploads/2018/09/dummy-profile-pic-male.jpg'
            title='Farooqi 02'
            />
            <Story 
            image='https://www.advertisemint.com/wp-content/uploads/2019/08/fb-stories-poll-599x1024.jpg'
            profileSrc='https://www.propertytwinsswfl.com/wp-content/uploads/2018/09/dummy-profile-pic-male.jpg'
            title='Farooqi 03'
            />
            
        </div>
    );
};


export default StoryReel;
