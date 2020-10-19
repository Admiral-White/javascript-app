import React from 'react'

function Register(){ 
    return(
        <div>
            <h1>Register page</h1>
            <form>
           <label>
              
               <input placeholder= "username"/><br/>
               <input placeholder= "Password"/><br/>
           </label><br/>
           <input type="submit" value="Submit" />
           </form>
        </div>
    )
}

export default Register