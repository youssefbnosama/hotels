import { useNavigate } from 'react-router-dom'
import logo from '../../imgs/formImgs/bxs-plane-alt 1.png'
export default function Navbar(){
    const navigate = useNavigate()
    return(
        <div className="nav w-full ">
            <div className=' w-4/5 items-center mx-auto flex justify-between py-4'>
                <div className=' flex'>
                    <img src={logo} />
                    <p>my Dream Place</p>
                </div>
                <ul className=' flex w-1/3 justify-between'>
                    <li>Home</li>
                    <li>Discover</li>
                    <li>Activities</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button onClick={()=>{navigate(`/form`)}} className=' font-medium nav-btn text-white h-10 w-20 rounded-lg '>Login</button>
            </div>
            
        </div>
    )
}