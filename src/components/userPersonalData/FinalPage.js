import React from 'react'

function FinalPage({info}) {
  return (
    <div>
      {
        Object.entries(info).map(([key, value]) => (
          <div className='list'>
            <p style={{fontWeight: 600}}>{key}:</p>
            <p style={{marginLeft: 20}}>{value}</p>
          </div>
        ))
      }
    </div>
  )
}

export default FinalPage