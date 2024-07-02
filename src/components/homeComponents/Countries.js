import img1 from '../../imgs/homeImgs/countries/Rectangle 9.png'
import img2 from '../../imgs/homeImgs/countries/Rectangle 10.png'
import img3 from '../../imgs/homeImgs/countries/Rectangle 11.png'
import img4 from '../../imgs/homeImgs/countries/Rectangle 8.png'
export default function Countries (){
   const arr = [{h2:`Australia`,img:img3,p:`2246 properties`},
    {h2:`Japan`,img:img1,p:`1278 properties`},
    {h2:`New Zealand`,img:img2,p:`480 properties`},
    {h2:`Greece`,img:img4,p:`320 properties`}
   ]
    return(
        <div className="countries w-full my-12">
            <div className=" w-4/5 mx-auto">
            <div>
                <h2 className=" my-2 font-semibold text-2xl" >Enjoy your dream vacation</h2>
                <p className=" my-2 w-3/5">Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us</p> 
            </div>
                <div className=' flex justify-between my-5'>
                    {arr.map((e,index)=>{
                        return <div className='naah' key={index}>
                            <img className=' w-full' src={e.img} />
                            <div>
                                <h2 className=' font-semibold text-xl'>{e.h2}</h2>
                                <p>{e.p}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}