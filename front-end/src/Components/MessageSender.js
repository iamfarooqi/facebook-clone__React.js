import React from 'react';
import {useState} from 'react';
import {Avatar, IconButton,  Modal} from '@material-ui/core'
import { useStateValue } from '../StateProvider'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import Modal from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
// import axios from '../axios'
// import FormData from 'form-data'
import firebase, { firestore } from 'firebase'
import {db} from '../firebase'
import {storage} from '../firebase';

import './MessageSender.css'



const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue()
    const [open,setOpen] = useState(false)
    const [image, setImage]= useState("")
    const [message, setMessage] = useState("")
    const [progress, setProgress]= useState(0)

    const handleClose =()=>{
        setOpen(false)
    }

    
    const uploadFileWithClick=()=>{
        document.getElementById('imageFile').click()
    }
    
    
    
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload=(e)=>{
        e.preventDefault();

        if(image=== ""){
            db.collection("posts").add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                message:message,
                username:user.displayName,
                photoURL:user.photoURL
            })
        }
        else{
            const uploadTask = storage.ref(`images/${image.name}`).put(image);

            uploadTask.on(
                "state_changed",
                (snapshot)=>{
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*
                    100);
                    setProgress(progress)
                }, (error)=>{
                    console.log(error)
                    alert(error.message)
                },
                ()=>{
                    storage.ref("images").child(image.name).getDownloadURL().then(url=>{
                    firestore().collection("posts").add({
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        message:message,
                        username:user.displayName,
                        photoURL:user.photoURL,
                        image: url
                    })
                })
                })
        }
        handleClose();
        setMessage("");
        setImage(null);
        setProgress(0)
    }
    
    const handleOpen=()=>{
        setOpen(true)
    }
  
    return (

        <>

        <Modal open={open} onClose={handleClose}>
            <div className='modal_pop'>

                <form>
                    <div className='modalHeading'>
                        <h2>Create Post</h2>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>    
                        </IconButton>
                    </div>

                    <div className='modalHeader_top'>
                        <Avatar src={user.photoURL}/>
                        <h5>{user.displayName}</h5>
                    </div>

                    <div className='modalBody'>
                        <textarea rows='5' placeholder='whats on your mind ?' onChange={e=>setMessage(e.target.value)}>{message}</textarea>
                    </div>

                    <div className='modalFooter'>
                        <div className='modalFooterLeft'>
                            <h4>Add your Post</h4>
                        </div>

                        <div className='modalFooterRight'>
                            <IconButton onClick={uploadFileWithClick}>
                                <PhotoLibraryIcon fontSize='large' style={{color:'lightgreen'}}/> 
                            </IconButton>

                            <input type='file' id='imageFile' onChange={handleChange} style={{display:'none'}}/>
                            <IconButton>
                                <VideocamIcon fontSize='large' style={{color:'red'}}/> 
                            </IconButton>
                            <IconButton>
                                <InsertEmoticonIcon fontSize='large' style={{color:'#ffb100'}}/> 
                            </IconButton>
                        </div>

                    </div>
                    {image !=="" && <h2 style={{"fontSize":"15px", "color":"green"}}> image added and will be upload soon </h2>}
                    {
                        progress!=="" && <progress val={progress} max="100%" style={{"width":"100%"}}/>
                    }
                    
                    <input type='submit' onClick={handleUpload} className='post__submit' value='POST'/>
                </form>
            </div>

        </Modal>
        <div className='messageSender'>
           <div className='messageSender__top'>
               <Avatar src={user.photoURL}/>
               <form>
                   <input type="text" placeholder='Whats on Your Mind' onClick={handleOpen}/>
               </form>
           </div>

           <div className='messageSender__bottom'>
               <div className='messageSender__option'>
                    <VideocamIcon style={{color:'red'}}/>
                    <h3>Live Video</h3>
               </div>
               <div className='messageSender__option'>
               <PhotoLibraryIcon style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
               </div>
               <div className='messageSender__option'>
               <InsertEmoticonIcon style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
               </div>
           </div>
            
        </div>
        </>
        );
};


export default MessageSender;
