import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./assets/components/Card";


const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
async function getData() {
  const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
  setUserData(response.data)

  
}

useEffect(function(){
getData()
},[index])

let printUserData=<h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 font-bold  -transalte-x-1/2 -transalte-y-1/2">Loading.....</h3>
if (userData.length>0) {
  printUserData=userData.map(function(elem,idx){
    return <div key={idx} >
      <Card elem={elem} />
    </div>
  }) 
  
}

  return (
    

    <div className='bg-black overflow-auto h-screen p-5 text-white'>
    
    <div className="flex h-[82%] flex-wrap p-2 gap-4">
      {printUserData}
    </div>
    <div className="flex justify-center items-center gap-6 p-4">
        <button
        style={{opacity:index==1?0.6 : 1}}
         onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
         className="bg-amber-400 text-black text-sm cursor-pointer px-5 py-2 rounded font-semibold active:scale-95">Prev</button>
       <h4>Page{index}</h4>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
         className="bg-amber-400 text-black text-sm cursor-pointer px-5 py-2 rounded font-semibold active:scale-95">Next</button>
      </div>
    </div>
    
  )
}

export default App
