import icon1 from '../../imgs/homeImgs/icons/Group.png'
import icon2 from '../../imgs/homeImgs/icons/calendar 1.png'
import icon3 from '../../imgs/homeImgs/icons/single_bed_FILL0_wght400_GRAD0_opsz24 1.png'
import icon4 from '../../imgs/homeImgs/icons/user-square 1.png'
import danger from '../../imgs/homeImgs/danger 1.png'
import { useEffect } from 'react'
export default function Content (){
    useEffect(()=>{
    fetch('https://api.api-ninjas.com/v1/city?name=giza',{
        headers:{ 'X-Api-Key': '6bfxdXuGgBpr+s6zGIcxXg==mxeb8pakBFZ6h1ez'}
    }).then((e)=> e.json()).then((e)=>{console.log(e)})
    },[])
    return(<>
        <div className=" w-full ">
            <div className="content-img w-4/5 mx-auto flex  justify-center items-center relative ">
            <div className=" w-1/2" >
                <h2 className=" text-white text-center font-bold text-3xl">Enjoy Your Dream Vacation</h2>
                <p className=" text-white text-center ">Plan and book our perfect trip with expert advice, travel 
                    tips, destination information and  inspiration from us</p>
            </div>
            <div className=" -bottom-4 shadow-lg rounded-lg p-3 flex justify-between absolute w-11/12 bg-white">
                    <button className="search-btn text-xs py-3 px-1  rounded-md ml-2 flex justify-between">
                        <img src={icon1} className=' ' />
                        <p className=' self-center'>Where are you going</p>
                        
                        </button>
                    <button className="search-btn text-xs py-3  flex px-2  rounded-md">
                        <img src={icon2} className=' ' />
                        <p className=' self-center'>Check in date</p>
                        </button>
                    <button className="search-btn text-xs py-3 flex px-2   rounded-md">
                        <img src={icon2} className=' ' />
                        <p className=' self-center'>Check out date</p>
                        </button>
                    <button className="search-btn text-xs py-3 flex px-2   rounded-md">
                        <img src={icon3} className=' ' />
                        <p className=' self-center'>Guests </p>
                        </button>
                    <button className="search-btn text-xs py-3 px-2 flex    rounded-md">
                        <img src={icon4 } className=' ' />
                        <p className=' self-center'>Rooms</p> 
                        </button>
                    <button className=" searched text-white rounded-md mr-2">Search</button>
            </div>
            </div> 
            
        </div>
        <div className=' w-4/5 covid p-2  mt-12 mx-auto rounded-lg flex'>
        <img className=' px-4' src={danger}/>
                <p className=' self-center'>Check the latest COVID-19 restrictions before you travel. Learn more</p>
        </div>
   </> )
}