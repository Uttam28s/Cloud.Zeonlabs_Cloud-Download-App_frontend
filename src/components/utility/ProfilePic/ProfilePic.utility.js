import React from 'react'
import './ProfilePic.styles.scss'

export const ProfilePic = ({src, text, size, textSize, className, ...rest}) => (
    src ?
        <img 
            src={src}
            className={`utl-profile-pic ${className}`}
            alt='Profile'
            style={{width: size || 45, height: size || 45}}
            {...rest}
        />
    :
        <button
            className={`utl-profile-pic-btn ${className}`}
            style={{width: size || 45, height: size || 45, fontSize: textSize || '130%'}}
            {...rest}
        >{text}</button>
    
)