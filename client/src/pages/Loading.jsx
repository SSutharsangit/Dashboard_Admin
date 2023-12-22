import React from 'react'
// import Spinner from '../componets/Spinner'

function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className='text-center' >
        Please wait few minutes Loading ...
        <div>
        {/* <Spinner/> */}
        </div>
         

    </div>
    </div>
  
  )
}

export default Loading