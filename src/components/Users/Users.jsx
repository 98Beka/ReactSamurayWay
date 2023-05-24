import React from 'react';
import s from './users.module.css'
import axios from 'axios';

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get()
        props.setUsers([
            { id: 1, photoUrl: 'https://runews24.ru/assets/components/phpthumbof/cache/7d67e0ff3f082b6848ca1340006b2b6e.e7b3df8d2521429058af50ff07f8cef7.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://runews24.ru/assets/components/phpthumbof/cache/7d67e0ff3f082b6848ca1340006b2b6e.e7b3df8d2521429058af50ff07f8cef7.jpg', followed: false, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://runews24.ru/assets/components/phpthumbof/cache/7d67e0ff3f082b6848ca1340006b2b6e.e7b3df8d2521429058af50ff07f8cef7.jpg', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
            { id: 4, photoUrl: 'https://runews24.ru/assets/components/phpthumbof/cache/7d67e0ff3f082b6848ca1340006b2b6e.e7b3df8d2521429058af50ff07f8cef7.jpg', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;