import React from 'react'

const MessageHeader = ({fullname}) => {
  return (
        <div className='flex items-center text-white gap-2'>
            <div className="avatar ">
                <div className="w-16 rounded-full">
                    <img src='https://cdn.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' />
                </div>
            </div>
            <span>{fullname}</span>
        </div>
    
  )
}

export default MessageHeader