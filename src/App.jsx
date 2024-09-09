import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Welcome from "./Components/Welcome";
import Button from "./Components/Button";
import Questions from "./Components/Questions/Questions";
import './index.css'
import './App.css'

function App() {
  const questions = [
    "How satisfied are you with our products?",
    "How fair are the prices compared to similar retailers? ",
    "How satisfied are you with the value for money of your purchase?",
    "On a scale of 1-10 how would you recommend us to your friends and family?",
    "What could we do to improve our service? "
  ];
  const Router=createBrowserRouter([
    {
      path:"/",
      element:<Welcome/>
    },{
      path:"/",
      element:<Button name="start"/>
    }
    ,{
      path:"/questions",
      element:<Questions questions={questions}/>
    },{
      path:"",
      element:<Welcome/>
    }
  ])
  return (
    <RouterProvider router={Router}>

     </RouterProvider>
  );
}

export default App;
