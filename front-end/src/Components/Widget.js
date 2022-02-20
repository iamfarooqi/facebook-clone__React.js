import React from 'react';

const Widget = () => {
    return (
        <div className='widgets'>

            <iframe src='https://www.facebook.com/'
            title='widgets'
            width='300px'
            height='1500'
            style={{ border: 'none', overflow:'hidden'}}
            scrolling='no'
            frameBorder='no'
            allowTransparency='true'
            allow='encrypted-media'
            >

            </iframe>
            
        </div>
    );
}

export default Widget;
