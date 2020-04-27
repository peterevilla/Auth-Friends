import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <ul className="flex">
      <li className="mr-6">
        <Link to='/login' className="text-blue-500 hover:text-blue-800">
          Login
        </Link>
      </li>
      <li className="mr-6">
        <Link to='/friends' className="text-blue-500 hover:text-blue-800">
          Friends
        </Link>
      </li>
      <li className="mr-6">
        <Link to='/add' className="text-blue-500 hover:text-blue-800">
          Add Friend
        </Link>
      </li>
    </ul>
  );
}

export default Header;
