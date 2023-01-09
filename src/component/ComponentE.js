import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {
  const username = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      {username} - {channel}
    </div>
  )
}

export default ComponentE
