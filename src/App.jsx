import {useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Home from './Home.jsx'
import ItemDetailPage from './ItemDetailPage.jsx';
import InputCreate from './InputCreate.jsx';
import InputCreate from './InputCreate.jsx';


const App = () => {
    const [data, setData] = useState(null)
    const urlApi = 'http://localhost:3000'


   const fetchData=async () => {
    try{
      const response = await fetch (urlApi)
      const resData = await response.json()
      setData(resData)


    }catch (error){
      console.log(error)


    };


   } 
    
   useEffect(() =>{
    fetchData()

    const addTask = async (task) => {
      try {
        const response = await fetch(urlApi + "/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title: task, completed: false })
        });
        const newData = await response.json();
        setData([...data, newData]);
      } catch (error) {
        console.log(error);
      }
    };



   }, [])
   
   return (
  <Router>
    <div>
    <nav>
    <Link to="/">Inicio</Link>
    </nav>
    {data === null 
    ? (
      <div>cargando...</div>
      ) 
    : 
      <Routes>
      <Route path="/" element={<Home data={data}/>} />
      {data.map(item => (
        <Route key={item._id} path={`/${item._idid}`} element ={<ItemDetailPage item= {data}/>}/>

      ))


      }

   </Routes>
  } 
      
    


    </div>
  
  
  </Router>      
  )
};

export default App;
