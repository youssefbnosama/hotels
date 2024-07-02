import { useEffect, useRef, useState } from 'react'
import logo from '../imgs/formImgs/bxs-plane-alt 1.png'
import { useNavigate } from 'react-router-dom'
export default function Form(){
    const [regist,setRegist] = useState(false)
    const email = useRef()
    const password = useRef()
    const confirm = useRef()
    const navigate = useNavigate()
function submit(e){
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let v1=false , v2=false , v3=false
    if(email.current.value == ``){
        email.current.nextElementSibling.innerHTML = `Can't be Empty`
        
    }else{
        if(email.current.value.match(emailValidate) != null){
            v1 = true
        }else{
            email.current.nextElementSibling.innerHTML = `Write a Valid Email`
        }
    }
    if(password.current.value == ``){
        password.current.nextElementSibling.innerHTML = `Can't be Empty`
    }else{
        if(password.current.value.length < 8){
            password.current.nextElementSibling.innerHTML = `Must be at least 8`
        }else{
            v2 = true
        }
    }
    if(!regist ){
        v3 = true
    }else{
        if(confirm.current.value == password.current.value){
            v3 = true
        }else{
        confirm.current.nextElementSibling.innerHTML = `Must match the password`

        }
    }
    if(v1 == true && v2==true == v3== true){
        navigate(`/home`)
    }else{
        e.preventDefault()
    }
}
function input (e){
    e.innerHTML = ``
}
    return(<div className='form w-full h-screen'>
        <div className="nav w-full ">
            <div className=" container w-4/5 mx-auto p-2">
                <div className=" flex   w-1/6">
                        <img src={logo} />
                        <p>my Dream Place</p>
                </div>
            </div>
        </div>
        <form onSubmit={(e)=>{submit(e)}} className=' w-full h-5/6 flex justify-center items-center'>
            <div className='w-1/2 h-3/4 flex flex-col items-center'>
            <h2 className=' text-center font-semibold text-2xl'>{regist?`Register`:`Sign in`}</h2>
            <div className=' flex flex-col my-4 w-1/2   '>
                <label  className=' self-start'>Email address</label>
                <input ref={email} type='text' className=' w-full p-2 outline-none rounded-lg' onInput={(e)=>{input(e.currentTarget.nextElementSibling)}} />
                <p className=' text-red-600 text-end text-sm'></p>
            </div>
            <div className=' flex flex-col my-4 w-1/2 '>
                <label>Password</label>
                <input ref={password} type='text' className=' w-full p-2 outline-none rounded-lg' onInput={(e)=>{input(e.currentTarget.nextElementSibling)}}/>
                <p className=' text-red-600 text-end text-sm'></p>

            </div>
            {regist && <div className=' flex flex-col my-4 w-1/2 '>
                <label>Confirm Password</label>
                <input ref={confirm} type='text' className=' w-full p-2 outline-none rounded-lg' onInput={(e)=>{input(e.currentTarget.nextElementSibling)}}/>
                <p className=' text-red-600 text-end text-sm'></p>

            </div>}
            <button type='submit' onClick={()=>{localStorage.setItem(`exsist`,true)}}  className=' text-white font-medium  btn w-1/2 my-4 p-2 outline-none rounded-lg'>Sign In</button>
            {regist?
            <p>Already have an account?<span  onClick={()=>{setRegist(!regist)}} className=' reg'> Sign in</span></p>:
            <p>Don’t have an account?<span onClick={()=>{setRegist(!regist)}} className=' reg'>Register</span> </p>}
            </div>
        </form>
    </div>
    )
}