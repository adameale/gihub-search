import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-gray-700 
     text-neutral-content bg-fixed'>
        <div className='container mx-auto ' >
            <div className='flex-none px-2 mx-2'>
                <FaGithub className='inline pr-2 text-3xl text-cyan-50 '/>
                <Link to='/'className='text-lg font-bold align-middle'>

                <div className='text-cyan-50 inline'>{title }</div>
                </Link>
            </div>
            <div className='flex-1 px-2 mx-2 mb-7'>
                <div className='flex justify-end text-cyan-50 m-2 text-center '>
                    <Link to='/' className='btn btn-ghost btn-sm rounded-btn mr-2'>
                        HOME
                    </Link>

                    <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                        ABOUT
                    </Link>
                </div>
            </div>
        </div>
      

    </nav>
  )
}
Navbar.defaultProps = {
    title:'Github Finder'
}

Navbar.prototypes = {
    title:PropTypes.string,
}

export default Navbar
