/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }
  useEffect(() => {
    function doSomething() {
      // eslint-disable-next-line no-undef
      console.log(someProp)
    }
    doSomething()
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [someProp])

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter