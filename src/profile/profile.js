import React from 'react'
import PropTypes from 'prop-types';
const profile = ({fullName,bio,profession,children,handleName}) => {
  return (
    <div>
        {children}
        <h1>{fullName}</h1>
        <h1>{bio}</h1>
        <h1>{profession}</h1>
        <button onClick={handleName} style={{marginBottom:17}}>click</button>
    </div>

  )
}
profile.defaultProps={
    fullName:'Mohamed',
    bio:'biography',
    profession:'3amel yawmi'
}
profile.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
}

export default profile