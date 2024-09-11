import React, { useState } from 'react'

function Twowaysbinding() {
    const [username, setUserName] = useState("")
  return (
    <div>
      <form>
        <input type="text" 
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Twowaysbinding
