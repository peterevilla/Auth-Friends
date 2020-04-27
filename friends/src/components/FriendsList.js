import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendsCard from './FriendsCard'


function FriendsList() {
    const [friends, setFriends] = useState([])

   
useEffect(() => {

    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
        console.log(res.data)
        setFriends(res.data)
    })
    .catch(err => console.log(err))

},[])   

    return (
        <div>
        <h1 className='mt-8 text-center' >My Friends</h1>
        <div className="h-64 grid grid-rows-3 grid-flow-col gap-4 mt-16">
           {friends.map(friend => (
               <FriendsCard key={friend.id} friends={friend}/>
           ))}
        </div>
        </div>
    )
}

export default FriendsList;
