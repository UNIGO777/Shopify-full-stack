import React from 'react'

const button = (i) => {
  return (
      <span>
          <button type={i.type}>{i.data}</button>
      </span>
  )
}

export default button