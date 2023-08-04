import List from './list/list'
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setdata] = useState("")
  const [list,setList] = useState([])

  function inputHander(e){
      
      setdata(e.target.value);
      
  }

  function addHander(e){
    // console.log([data,...list])
    if(data === ""){
      alert("Field can not be empty")
      return;
    }
    setList([data,...list]);
    
    
}



  return ( 
    <div className="App">
      
      <div className='container'>
      <h1 >ToDo</h1>
        <div >
          <input onChange={inputHander} value={data} type="text" placeholder="Write here..." required />
          <button onClick={addHander}>Add</button>
        </div>
        {list.map( (item,index) => <List 
        todo={item} 
        index={index} 
        key={index}
        setList={setList}
        list={list}
        /> )}
        
      </div>
      
    </div>
  );
}

export default App;
