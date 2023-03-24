import React,{useState} from "react";
import {produce} from "immer"
import { generate } from "shortid";
function App() {
const [people,setPeople] = useState([
  {
  
  id:generate(),
  firstName:'',
  LastName:'',
}
])
 
console.log(people);

  return (
    <div style={{textAlign:"center"}}>
      <button onClick={()=>{
        setPeople(currentPeople => [...currentPeople,{
          id :generate(),
          firstName:'',
          lastName:''
        }])
      }}> Add new Person</button>
      {people.map((p, index)=>{
        
        return (
          <div key={p.id}>
            <input 
             onChange={e =>{
              const firstName = e.target.value;
              setPeople(currentPeople=>produce(currentPeople, v =>{
                v[index].firstName = firstName
              })
              );
             }}
            value={p.firstName} placeholder="First name" />
            <input 
             onChange={e =>{
              const lastName = e.target.value;
              setPeople(currentPeople=>produce(currentPeople, v =>{
                v[index].LastName = lastName
              })
              );
             }}
            value={p.LastName} placeholder="Last name" />

            <button onClick={() =>{
              setPeople(currentPeople => currentPeople.filter(x => x.id !== p.id))
            }}>
              x
            </button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
