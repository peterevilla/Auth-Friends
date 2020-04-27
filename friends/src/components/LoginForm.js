import React, {useState} from 'react'
import axios from 'axios'

function LoginForm() {
  const [login, setLogin] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [logged, setLogged] = useState(false)


  const onChangeHandle = (e) => {

    setLogin({...login, [e.target.name]: e.target.value})
    
  }

  const submitForm = (e) => {
    e.preventDefault()
    console.log(login)
    axios
    .post("http://localhost:5000/api/login", login )
    .then(res => {
      console.log(res)    
      localStorage.setItem('token', res.data.payload)
      setLogged(true)
    })
    .catch(err => console.log(err))
    e.target.reset()
    setLogin('')
}


  

    return (
        <div className="w-full max-w-xs ml-64 mt-16">
            {logged ? (<h1>Welcome {login.username}</h1>) : (
              <form onSubmit={submitForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"
                 type="text" 
                 name='username'
                 placeholder="Username"
                 onChange={onChangeHandle}
                 values={login}
                 />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                type="password" 
                name='password'
                placeholder="******************"
                onChange={onChangeHandle}
                values={login}
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                 type="submit">
                  Sign In
                </button>
              </div>
            </form>
            )}
  
</div>
    )
}

export default LoginForm;
