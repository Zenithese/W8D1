import { Link } from 'react-router-dom'
import React from 'react'

const Greeting = () => {
  return (<div>
    <Link to="/signup">Sign Up Here</Link>
    <Link to="/login">Login Here</Link>
  </div>)
};

export default Greeting;