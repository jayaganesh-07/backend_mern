import { useEffect, useState } from "react"


const App = () => {

  const [fetchdata,setFetchData]=useState([])
  const [search,setSearch]=useState("")


  const fetchDatas = async()=>{
    const getDatas=await fetch ("https://dummyjson.com/products")
    const datas = await getDatas.json()
   setFetchData (datas.products)
   
  }
const handleChange=(e)=>{
  setSearch(e.target.value)
   console.log(search);
   
}


useEffect(() => {
 fetchDatas()
}, [])

  return (
   <>

   <div>
    <input type="test" onChange={handleChange} placeholder="Search Here" value={search} />
   </div>
   
   <h1>{fetchdata.map((e,i)=>(
    <div key={i+1}>
      <h1>{e.title}</h1>
       <h1>{e.price}</h1>
       <h1>{e.category}</h1>

    </div>

   ))}</h1>
   </>
  )
}

export default App