import React from'react';
import './App.css';
import { ChildA } from './component/Context/ContextChildren';
import ContextParent from './component/Context/ContextParent';


function App() {
 
  return (
    <div className='App'>
    <ContextParent>
      <ChildA />
    </ContextParent>
    </div>
   
  )
}

export default App;