const Card = () => {

const Heros = [
    { Name: "Vijay", Movie: "Master", Collection: "1M" },
    { Name: "Ajith", Movie: "Good Bad Ugly", Collection: "2M" },
    { Name: "Suriya", Movie: "Retro", Collection: "1.5M" }]


  
  return (
 <>
<div className="h-100 bg-violet-400 p-10">
     <h1 className="text-3xl font-bold text-center mb-8"> Hero Movies </h1> 
     <div className="flex flex-wrap justify-center gap-6">
         {Heros.map((e, i) => ( <div key={i} className="w-72 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition duration-300" > 
        <h2 className="text-2xl font-bold text-blue-600 mb-4"> {e.Name} </h2>
         <p className="text-gray-700 mb-2">  <span className="font-semibold">Movie:</span> {e.Movie} </p>
              <p className="text-gray-700"> <span className="font-semibold">Collection:</span> {e.Collection} </p> </div> ))} </div> </div>
 </>
  )
}

export default Card