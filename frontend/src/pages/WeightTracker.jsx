import React from "react";
import Navbar from "../components/Navbar";
import "../css/weighttracker.css";
import "../css/navbar.css";


<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>;


function WeightTracker() {
  return (
    <>

      {Navbar()}
      <div className="MainContainer">
        <div className="ContentContainer">
          <div className="TextContainer">
            <h1 className="MainText">
              Weight Tracker
              </h1>
              <h2 className="SubHeader">
              Welcome to our <span>Weight Tracker</span>!
              </h2>
              <p1 className="SubText">
              You should occasionally keep track of your weight in order to
              monitor your development. Your weight changes everyday as a result
              of uncontrolled variables like water, thus we advise once a week.
              We recommend starting your daily weight-checking routine early in
              the morning, just before breakfast.
              </p1>
            <form>
            <div className="inputboxtext">
              <label for ="weight-input">
                Enter your current weight: 
                </label><br></br> 
                </div>
              <input type="number" id="weight-input"/> 
              
              <div className="WeighttrackerbtnWrapper">
              <input type="submit" value="Submit"/>
              </div>
            </form>
            <div className="graph">
            

            </div>
          </div>

        </div>
        </div>
     

      
    </>
  );
}
//fi
export default WeightTracker;
