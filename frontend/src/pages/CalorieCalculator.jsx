import React from 'react'
import Navbar from '../components/Navbar';
import "../css/caloriecalculator.css";

function CalorieCalculator(){
  return (
    <>
      {Navbar()}
      {/* hola */}
      <div className="background"></div>
      <div className="component">
        <h1>Calorie Calculator</h1> 
        <p>Your daily caloric intake calculator</p>
        <h2>let’s find how many calories you .. hdc</h2>
        <h3>Your kcal goal</h3>
      </div>

        <div className="inputcal">
            <form>
              <label>input calories consumed:</label>
              <input type="number" id="calories consumed" />
              <button className="button-1" type="submit">
                ENTER
              </button>

             
            </form>
             
        </div>
        <div classname="remainingcal">   
              <p>Remaining calories:</p>
            </div>
      
    </>
  );
}

export default CalorieCalculator;



// import React, { useState } from "react";

// function CalorieCalculator() {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("male");
//   const [activityLevel, setActivityLevel] = useState("sedentary");
//   const [calories, setCalories] = useState("");

//   const calculateCalories = () => {
//     let bmr;
//     if (gender === "male") {
//       bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
//     } else {
//       bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
//     }
//     let activityMultiplier;
//     switch (activityLevel) {
//       case "sedentary":
//         activityMultiplier = 1.2;
//         break;
//       case "lightlyActive":
//         activityMultiplier = 1.375;
//         break;
//       case "moderatelyActive":
//         activityMultiplier = 1.55;
//         break;
//       case "veryActive":
//         activityMultiplier = 1.725;
//         break;
//       case "extraActive":
//         activityMultiplier = 1.9;
//         break;
//       default:
//         activityMultiplier = 1.2;
//         break;
//     }
//     const totalCalories = Math.round(bmr * activityMultiplier);
//     setCalories(totalCalories);
//   };

//   return (
//     <div>
//       <h2>Calorie Calculator</h2>
//       <div>
//         <label>Weight (kg):</label>
//         <input
//           type="number"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Height (cm):</label>
//         <input
//           type="number"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Age:</label>
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Gender:</label>
//         <select value={gender} onChange={(e) => setGender(e.target.value)}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </div>
//       <div>
//         <label>Activity Level:</label>
//         <select
//           value={activityLevel}
//           onChange={(e) => setActivityLevel(e.target.value)}
//         >
//           <option value="sedentary">Sedentary</option>
//           <option value="lightlyActive">Lightly Active</option>
//           <option value="moderatelyActive">Moderately Active</option>
//           <option value="veryActive">Very Active</option>
//           <option value="extraActive">Extra Active</option>
//         </select>
//       </div>
//       <div>
//         <button onClick={calculateCalories}>Calculate</button>
//       </div>
//       {calories && <div>Your daily calorie intake should be {calories}.</div>}
//     </div>
//   );
// }

// export default CalorieCalculator;
