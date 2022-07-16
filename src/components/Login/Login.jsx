import axios from "axios";
import React from "react";
import "../../App.css"

export default function Login() {
  const [error,setError] = React.useState(false);
  const [loading,setLoading] = React.useState(false);
  const [username,setUsername]=React.useState("");
  const [password,setPassword]=React.useState("");
  const [user,setUser] = React.useState({});
  const handleClick = async(e) =>{
    e.preventDefault();
    setLoading(true)
    try {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(data);

    } catch (error) {
      console.error(error)
      setError(true);
    }
    setLoading(false);
  }

  return <div>
    <span className="user">{user.name}</span>
     <form>
      <input type="text" placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/>
      <br/>
      <input type="password"  placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <br/>
      <button disabled={!username || !password} onClick={handleClick}>{loading?"Waiting": "Se connecter"}</button>
      <br/>
      <span data-testid="error" style={{visibility:error?"visible":"hidden"}}>Something went wrong</span>
    </form>
  </div>
 ;
}
