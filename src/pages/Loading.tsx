import React from 'react'
import { PacmanLoader, SyncLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div style={{height:"100vh",width:"100%", display:"flex",alignItems:"center",justifyContent:"center"}}><SyncLoader color="#36d7b7" /></div>
  )
}