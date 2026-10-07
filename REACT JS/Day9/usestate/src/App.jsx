

const App = () => {
let a =1

const handleclick =()=>{
  a++
  console.log(a);
  
}

  return (

    
  <>
  
  <h1>{a}</h1>
  <button onClick={handleclick}>Click Me</button>
  </>
  )
}

export default App