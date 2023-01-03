import { useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubcriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post.js'

function Feed() {

    const [post, setPosts] = useState([])

    const sendPost = (e) => {
        e.preventDefault();
    }


  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                {/* from material ui */}
                <CreateIcon/>
                <form>
                    <input type='text'/>
                    <button type='submit' onClick={sendPost} >Send</button>
                </form>
            </div>

            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                <InputOption Icon={SubcriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
            </div>
        </div>

        {/* POST */}
        {post.map((post)=> {
            <Post/>
        })}
        <Post 
        name='Oluwadurotimi Fagbuyi' 
        description='This is a test' 
        message='WOW This worked'/>

    </div>
  )
}

export default Feed