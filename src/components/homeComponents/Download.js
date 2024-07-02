import img from '../../imgs/homeImgs/Group 18.png'
export default function Download (){

    return(
        <div className=" download w-full">
            <div className="down-img w-4/5 mx-auto relative">
            <div className=" p-8 w-1/2 text-white">
                <h2 className="text-white font-semibold text-2xl">Download the mobile application for bonus coupons and travel codes</h2>
                <button className="nav-btn p-2 rounded-md my-4">Download mobile app</button>
                <img src={img} className=' absolute right-0 -top-1    h-full'  />
            </div>
            </div>
        </div>
    )
}