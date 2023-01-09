import React, {useState} from 'react'
import { MemoziedChildFour } from './ChildFour'


const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Viswas')

    console.log('ParentThree Render')
  return (
    <div>
      <button onClick={() => setCount((c) => c+1)}>Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change Name</button>
      <MemoziedChildFour name={name} />
      {/*<MemoizedChildThree name={name}>
        <strong>Hello</strong>
  </MemoizedChildThree>*/}
    </div>
  )
}

export default ParentThree