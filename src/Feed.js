import { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubcriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post';
import { db } from './firebase'
import firebase from 'firebase/compat/app';


function Feed() {

    const [post, setPosts] = useState([])
    const [input, setInput] = useState([])

    useEffect(()=> {
        db.collection("post").orderBy("timestamp", "desc").
        onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ));

    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('post').add({
            name: 'Oluwadurotimi Edmond Fagbuyi',
            description: 'this is just a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });


        setInput("");
    }


  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                {/* from material ui */}
                <CreateIcon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text'/>
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
        {post.map(({id , data :{ name, description, message, photoUrl}}) => (
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            />
        ))}

    </div>
  )
}

export default Feed