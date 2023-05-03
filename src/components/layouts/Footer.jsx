import { FaSlackHash } from "react-icons/fa"

function Footer() {
    const footerYear=new Date().getFullYear()
  return (
    <footer className=" bg-fixed footer p-10 bg-gray-700 text-primary-content footer -center">
      <div className="text-white">

        <svg width='50' 
        height='50' viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule='evenodd'
        className="inline-block fill-current"></svg>
        <div className=" px-96 justify-items-center">
        <FaSlackHash className="justify-items-center ml-20 "/>
        <p> Copyright &copy;{footerYear} All right reserved</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer

