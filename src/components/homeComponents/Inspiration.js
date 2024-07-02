import img1 from '../../imgs/homeImgs/insp/Rectangle 8 (1).png'
import img2 from '../../imgs/homeImgs/insp/Rectangle 16.png'
import img3 from '../../imgs/homeImgs/insp/Rectangle 17.png'
export default function Inspiration(){
    let arr = [
        {h2:`Sydeny’s 10 most fashionable 5 star hotels`,p:`Browse the fastest growing tourism sector in the heart of Australia tourism capital ....`,img:img1},
        {h2:`Top cities for Vegan Travellers`,p:`Top sites where you do not have to worry about being a vegan. Our tourist guide is here...`,img:img2},
        {h2:`World’s top destinations during and post covid timeline`,p:`Pandemic is still intact and will be here for a longer time. Here’s where your next destination...`,img:img3}
    ]
    return(
        <div className=" inspiration w-4/5 mx-auto">
            <div>
                <h2 className=" my-4 font-semibold text-2xl">Get inspiration for your next trip</h2>
            </div>
            <div className=' mb-4 flex justify-between '>
                {arr.map((e,index)=>{
                    return <div key={index} className='img-insp  relative'>
                        <img className=' w-full' src={e.img} />
                        <h2 className=' font-semibold text-xl text-white  absolute top-1/2'>{e.h2}</h2>
                        <p className=' text-sm text-white absolute p'> {e.p} </p>
                        </div>
                })} 
            </div>
        </div>
    )
}