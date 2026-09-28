import Display from "./Display"

const DataType = () => {
    let studName="Jaii"
    let age=21
    let course="MernStack"
    let fees=40000
    let skills=["HTML","CSS","JavaScript","React","Node"]
    let obj={name:"Rahul",age:32,course:"MERN Stack",city:"chennai"}
    let students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Node" },
    { id: 3, name: "Kumar", course: "MongoDB" }
]
  return (
    <>
    <Display array={studName} num={age} courses={course} amount={fees} skill={skills} object={obj} details={students}/>
    
    
    </>
  )
}

export default DataType