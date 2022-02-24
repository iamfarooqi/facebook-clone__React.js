import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
// import MarketplaceIcon from '@material-ui/icons/Marketplace'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import {Avatar, IconButton} from '@material-ui/core'; 
import NotificationsActiveIcon  from '@material-ui/icons/NotificationsActive';
import ForumIcon from '@material-ui/icons/Forum';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useStateValue } from '../StateProvider'
import './Header.css';


const Header = () => {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className='header'>

            {/* HEader Left */}
            <div className='header__left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png' alt='facebook_logo'/>
            </div>

            <div className='header__input'>
                <SearchIcon/>
                <input placeholder='Facebook Search' type='text'/>
            </div>

            {/* Header Center */}
            <div className='header__center'>
            <div className='header__option'>
                   
                </div>
                <div className='header__option header__option--active'>
                    <HomeIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <FlagIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlinedIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    
                </div>
            </div>

            {/* Header Right */}

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>

                <IconButton>
                    <ForumIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
            
        </div>
    );
};



export default Header;
