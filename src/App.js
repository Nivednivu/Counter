import './App.css';
import Counter from './componets/Counter';
function App() {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 flex-column" style={{height:"100vh"}}>
<div className='d-flex align-items-center justify-content-center flex-column p-3 rounded ' style={{backgroundColor:"blue"}}>
        <h1 style={{color:'white'}}>Counter Application </h1>
        <Counter/>
  
</div>  
  </div>
  );
}

export default App;
