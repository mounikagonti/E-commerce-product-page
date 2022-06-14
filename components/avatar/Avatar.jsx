import React from "react"

const Avatar = ({ url, className }) => {
  return (
    <div className='avatar'>
      <img className={`${className}`} src={url} alt='profile pic' />
    </div>
  )
}

export default Avatar
