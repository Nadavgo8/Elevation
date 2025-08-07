import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//ex1
// function App() {
//   const showCompany = (name, revenue) => { 
//     return (
//       <div id={name}>
//         {name} makes {revenue} every year
//       </div>
//     );
//   }
//   const companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }
//   ];
//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         { companies.map(company => showCompany(company.name, company.revenue))}
//       </div>
//     </div>
//   )
// }


//ex2
function App() {
  const getClassName = (temperature) => {
    if (temperature < 15) {
      return "freezing";
    }
    if (temperature > 30) {
      return "hell-scape";
    }
    return "fair";
  };
  const temper = 13;
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" className={getClassName(temper)}></div>
      </div>
    </div>
  );
}

export default App
