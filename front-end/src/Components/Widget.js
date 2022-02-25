import React from 'react';
import './widget.css'
import {Avatar} from '@material-ui/core'


const Widget = () => {
    return (
        <div className='widgets'>


            <div>
                <h3>Sponsors</h3>

                <div className='sponsors_'>
                    <img src='https://scontent.fkhi11-2.fna.fbcdn.net/v/t45.1600-4/272628070_23850322733580705_6546792031305336744_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=102&ccb=1-5&_nc_sid=67cdda&_nc_ohc=2KHl_3sWnTAAX9UxWef&_nc_ht=scontent.fkhi11-2.fna&oh=00_AT_yKCYHpNA0G7N_gUfWW9-MYMEJAqCHFlobpkWPRgeqow&oe=621E7D48'/>
                    <p><h4>Sponsor 01</h4>Sponsor area on facebook</p>
                </div>
                <div className='sponsors_'>
                <img src='https://scontent.fkhi11-2.fna.fbcdn.net/v/t45.1600-4/272628070_23850322733580705_6546792031305336744_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=102&ccb=1-5&_nc_sid=67cdda&_nc_ohc=2KHl_3sWnTAAX9UxWef&_nc_ht=scontent.fkhi11-2.fna&oh=00_AT_yKCYHpNA0G7N_gUfWW9-MYMEJAqCHFlobpkWPRgeqow&oe=621E7D48'/>

                    <p><h4>Sponsor 01</h4>Sponsor area on facebook</p>
                </div>
            </div>


            <h3>Contacts</h3>
            <div className='message_info'>
                <Avatar/> <h3>Contact 01</h3>
            </div>
            <div className='message_info'>
                <Avatar/> <h3>Contact 02</h3>
            </div>
            <div className='message_info'>
                <Avatar/> <h3>Contact 03</h3>
            </div>
            <div className='message_info'>
                <Avatar/> <h3>Contact 04</h3>
            </div>
            <div className='message_info'>
                <Avatar/> <h3>Contact 05</h3>
            </div>
            <div className='message_info'>
                <Avatar/> <h3>Contact 06</h3>
            </div>
            <div className='message_info'>
                <Avatar/> <h3>Contact 07</h3>
            </div>

            

            {/* <iframe src=''
            title='widgets'
            width='300px'
            height='1500'
            style={{ border: 'none', overflow:'hidden'}}
            scrolling='no'
            frameBorder='no'
            allowTransparency='true'
            allow='encrypted-media'
            >

            </iframe> */}
            
        </div>
    );
}

export default Widget;
