import React, { useState } from 'react'
import './Bmicalculator.css';
const Bmicalculator = () => {

    const[weight,setWeight]= useState(0);
    const[height,setHeight]= useState(0);
    const[bmi,setBmi]=useState('');
    const[message,setMessage]= useState('');

    

  const handleSubmit = (e) => {
     e.preventDefault();
      if(weight===0 || height===0)
      {
         alert('please enter a valid weight and height')
      }
      else{
         let bmi = (weight / (height * height)) * 703;
         setBmi(bmi.toFixed(1))

         if(bmi<18.5){
            setMessage("you are underweight")
         }
         else if(bmi>=18 && bmi<25){
            setMessage("you are healthy weight")
         }
         else{
            setMessage("You are overweight")
         }
      }
  }

  const reload = () =>{
   window.location.reload();
  }

     
  return (
    <>
     <div className="container-fluid text-center mt-5 border w-50 p-4 " style={{ backgroundColor: 'lightgray' }}>
        <h2 className='mb-4 mt-0 lh-1 ms-3'>BMI Calculator</h2>
        <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label>Weight (ibs)</label>
            <input type="text" className='ms-2'  placeholder='Enter weight value' value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label >Height (in)</label>
            <input type="text" className='ms-3' placeholder='Enter height value' value={height} onChange={(e) => setHeight(e.target.value)}/>
        </div>
         <div>
            <button className='btn btn-primary mt-2 me-3' type="submit">Submit</button>
            <button className='btn btn-dark mt-2 ' type="submit" onClick={reload}>Reload</button>
         </div>

         <div className="center mt-3 ">
            <h3>Your BMI is :- {bmi}</h3>
            <p>{message}</p>
         </div>
        </form>

     </div>

    </>
  )
}

export default Bmicalculator