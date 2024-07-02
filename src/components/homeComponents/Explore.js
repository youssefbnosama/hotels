import logo from '../../imgs/formImgs/bxs-plane-alt 1.png'
export default function Explore(){

    return(<>
        <div className="explore w-full">
            <div className=' w-4/5 mx-auto'>
                <div className='my-8'>
                    <h2 className=" m-2 font-semibold text-2xl text-center">Explore the world with My Dream place</h2>
                    <p className=' text-center'>Discover new places and experiences</p>
                </div>
                <div className=" flex w-full justify-between">
                    <div className="">
                        <div className=' flex'><img src={logo} /><p>my Dream Place</p></div>
                            <p>Your next goto companion for <br/> travel</p> 
                    </div>
                    <ul className=''>
                            <li>Company</li>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                            <li>Contact us</li>
                    </ul>
                    <ul className=' '>
                        <li>Explore</li>
                        <li>Australia</li>
                        <li>New Zealand</li>
                        <li>United States America (USA)</li>
                        <li>Greece</li>
                        <li>Maldives</li>
                        <li>Singapore</li>
                        <li>See more</li>
                    </ul>
                    <ul className=' '>
                        <li>Terms and Policies</li>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                        <li>Acessibility</li>
                        <li>Reward system policy</li>
                    </ul>
                    <ul className=' '>
                        <li>Help</li>
                        <li>Support</li>
                        <li>Cancel your bookings</li>
                        <li>Use Coupon</li>
                        <li>Refund Policies</li>
                        <li>International Travel Documents</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footer w-full px-24 py-4 flex justify-end'>
                <p>my Dream Place 2022</p>
        </div>
    </>)
}