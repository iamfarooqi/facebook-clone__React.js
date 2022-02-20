import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryICon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
// import { useStateValue } from './stateProvider';


const Sidebar = () => {
    return (
        <div className='sidebar'>

        <SidebarRow src='https://www.propertytwinsswfl.com/wp-content/uploads/2018/09/dummy-profile-pic-male.jpg' 
        title='Farooqi'/>
        <SidebarRow Icon={LocalHospitalIcon} 
        title='COVID-19'/>
        <SidebarRow Icon={EmojiFlagIcon} 
        title='Pages'/>
        {/* <EmojiFlagIcon title='Flag'/> */}
        <SidebarRow Icon={PeopleIcon} 
        title='Friends'/>
        <SidebarRow Icon={ChatIcon}
        title='Messenger'/>
        <SidebarRow Icon={StorefrontIcon}
        title='Marketplace'/>
        <SidebarRow Icon={VideoLibraryICon}
        title='Videos'/>
        <SidebarRow Icon={ExpandMoreOutlined}
        title='More'/>

        
            
        </div>
    );
};




export default Sidebar;
