import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen text-black'>
        <div className='backdrop-blur-lg w-1/4 flex items-center flex-col rounded-md h-[44%] justify-center'>
            <span className='text-5xl mb-6'>Login</span>

            <form action="" className='flex flex-col self-start w-full px-6 gap-3'>

                <div className='flex flex-col gap-1'>
                    <span id='username' className='block'>Username</span>

                    <label className="input input-bordered flex items-center gap-2 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow text-blue" placeholder="Username" />
                    </label>

                </div>

                {/* <input type="text" placeholder='Enter Username' className='input input-bordered text-white'/> */}

                <div  className='flex flex-col gap-1'>

                    <span id='password' className='block'>Password</span>

                    <label className="input input-bordered flex items-center gap-2 text-white bg-slate-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder='******' />
                    </label>
                </div>

                <a href="#" ><span className='hover:underline hover:text-white transition-all delay-75'>Dont have an account?</span></a>

                <button className="btn btn-block bg">Login</button>
                {/* <input type="text" placeholder='Enter Password' className='input input-bordered text-white'/> */}
                
                

            </form>
        </div>
    </div>
  )
}

export default Login

//INITIAL VERSION OF CODE
// const Login = () => {
//     return (
//       <div className='flex items-center justify-center h-screen text-black'>
//           <div className='backdrop-blur-lg w-1/4 flex items-center flex-col rounded-md h-[44%] justify-center'>
//               <span className='text-5xl mb-6'>Login</span>
  
//               <form action="" className='flex flex-col self-start w-full px-6 gap-3'>
  
//                   <div className='flex flex-col gap-1'>
//                       <span id='username' className='block'>Username</span>
  
//                       <label className="input input-bordered flex items-center gap-2 text-white">
//                           <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 16 16"
//                               fill="currentColor"
//                               className="h-4 w-4 opacity-70">
//                               <path
//                               d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                           </svg>
//                           <input type="text" className="grow text-blue" placeholder="Username" />
//                       </label>
  
//                   </div>
  
//                   {/* <input type="text" placeholder='Enter Username' className='input input-bordered text-white'/> */}
  
//                   <div  className='flex flex-col gap-1'>
  
//                       <span id='password' className='block'>Password</span>
  
//                       <label className="input input-bordered flex items-center gap-2 text-white bg-slate-500">
//                           <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 16 16"
//                               fill="currentColor"
//                               className="h-4 w-4 opacity-70">
//                               <path
//                               fillRule="evenodd"
//                               d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                               clipRule="evenodd" />
//                           </svg>
//                           <input type="password" className="grow" placeholder='******' />
//                       </label>
//                   </div>
  
//                   <a href="#" ><span className='hover:underline hover:text-white transition-all delay-75'>Dont have an account?</span></a>
  
//                   <button className="btn btn-block bg">Login</button>
//                   {/* <input type="text" placeholder='Enter Password' className='input input-bordered text-white'/> */}
                  
                  
  
//               </form>
//           </div>
//       </div>
//     )
//   }