import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";
import Snipper from "./Snipper";


const App = () => {
const [courses,setCourases]= useState(null)
const [ loading,setLoading]= useState(true)
const [ category,setCategory] = useState(filterData[0].title)


async function fetchData (){

  setLoading(true)
  try {
    let response = await fetch(apiUrl)
    let output = await response.json()
    setCourases(output.data)

  } catch (error) {
    toast.error("Network problem")
  }
  setLoading(false)
}
useEffect(()=>{
  fetchData()
},[])

  


  return <div className="min-h-screen  bg-bgDark2  flex flex-col">
    <div>
      <Navbar/>
    </div>
    <div className=" bg-bgDark2 ">
    <div>
      <Filter filterData={filterData}
      category={category}
      setCategory={ setCategory}
      />
    </div>
    <div className=" w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading ?(<Snipper/>):(<Cards courses={courses}
        category={category}/>)
      }
    </div>
    </div>
  </div>
};

export default App;
