import React, { useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

function AddFriend() {
    const [add, setAdd] = useState([])

    const onChangeHandle = (e) => {

        setAdd({...add, [e.target.name]: e.target.value, id: Date.now()})
        
      }
    
      const submitForm = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post("http://localhost:5000/api/friends", add )
        .then(res => {
          console.log(res)    
        })
        .catch(err => console.log(err))
        e.target.reset()
    }


    return (
        <div className="w-full max-w-xs ml-64 mt-16">
              <form onSubmit={submitForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name"
                 type="text" 
                 name='name'
                 placeholder="add name"
                 onChange={onChangeHandle}
                 values={add}
                 />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                type="email" 
                name='email'
                placeholder="email"
                onChange={onChangeHandle}
                values={add}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                  age
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                type="number" 
                name='age'
                placeholder="age"
                onChange={onChangeHandle}
                values={add}
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                 type="submit">
                  Add Friend
                </button>
              </div>
            </form>
        </div>
    )
}

export default AddFriend;
