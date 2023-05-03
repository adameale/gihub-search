import UserResults from "../components/user/UserResults"
import UserSearch from "../components/user/UserSearch"


function Home() {
  return (
    <>
    <div className="h-screen items-center w-full snap-y overflow-scroll">
      <div className="snap-start h-screen w-screen
      ">
       <UserSearch />
        <UserResults/>
    
        </div>
    </div>
    </>
  )
}

export default Home
