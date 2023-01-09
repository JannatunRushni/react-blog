import React, {useState, useMemo, useCallback} from 'react'
import { MemoizedChildFive } from './ChildFive'

const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Viswas')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const meoizedPerson = useMemo(() => person, [])

    const handleClick = () => {}

    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentFour Render')
  return (
    <div>
      <button onClick={() => setCount((c) => c+1)}>Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change Name</button>
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />

      {/*<MemoizedChildFive name={name} person={meoizedPerson} />*/}
    </div>
  )
}

export default ParentFour
