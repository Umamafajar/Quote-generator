import { useState } from "react";

const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "qureshiumama8@gmail.com" && password === "1234"){
        onLogin();
    }else{
        alert("Invalid email or password");
    }
    };

function login({onLogin}){
    const [ email, setEmail]=useState("");
const [ password, setPassword]=useState("");
return(
    <div className="flex items-center justify-center min-h-screen bg-zinc-600">
        <form 
            onSubmit={handleSubmit}
            className="  bg-white p-8 rounded-2xl shadow-lg w-80 flex flex-col gap-4" >
        <h2 className="text-2xl font-bold text-center"> Login  </h2>
        <input type="email" value={email} placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} className="border p-2 rounded" />
        <input type="password" value={password} placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)}  className="border p-2 rounded" />
        <button      
                 type="submit"
                 className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600  hover:scale-105 hover:shadow-lg transition  duration-300">Login 
     </button>
     </form>

    </div>

          
)
}
 export default login;