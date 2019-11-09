import React from 'react'
import {Link} from 'react-router-dom';

const Nav =() =>{
   return(
      <>
      <Link to='/'>Home</Link>
      <Link to='/characterlist'>Characterlist</Link>
      <Link to='/location'>Locationlist</Link>
      </>
   );
}

export default Nav;