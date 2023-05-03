import PropTYpes from 'prop-types'
import { Link } from 'react-router-dom'
function UserItem({user:{login,avatar_url}}) {
  return   <div className=' shadow-sm compact drop-shadow-lg bg-base-100'>
        <div className='flex-row items-center inline-flex caret-fuchsia-200'>
            <div >
            <div className='avatar  flex-row inline '>
                <div className=' rounded-full shadow w-10 h-10 flex-row  mx-0'>
                    <img src={avatar_url} alt="profile" className='rounded-full mx-0 ' />
               </div>
             </div>
            </div>
          <div className='indent-6 md:indent-8 mt-5 pr-2 ml-2'>
            <h2 className='text-base flex-row  justify-between  text-white pr-2 ' >{login}</h2>
            <Link className=' opacity-50 text-sm  mx-1 text-white pl-7 '
            to={`/user/${login}`}>visit profile</Link>
         </div>
        </div>
      </div>
  
}
 UserItem.propTypes ={
    user:PropTYpes.object.isRequired,
 }
export default UserItem
