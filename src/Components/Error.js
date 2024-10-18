import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const error=useRouteError();
  return (
    <div>
      <h5>{error.data}</h5>
    </div>
  )
}

export default Error
