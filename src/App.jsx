import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Users from './Users'


function App() {
  function handelClick(){
    alert('hay bro')
  }
  const handelClick2 = () => {
    alert('handel click 2')
  }
  const handelClick3 = (num) =>{
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concept 2</h3>

      
      <Friends></Friends>

      <Users></Users>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me</button>
      <button onClick={() => alert('num 3')}>Click Me</button>
      <button onClick={() => handelClick3(10)}>click four</button>
    </>
  )
}

export default App
