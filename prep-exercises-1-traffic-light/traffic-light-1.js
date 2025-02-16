
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
const trafficLight = {
  state: "green",
};


let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);
  if (trafficLight.state === "green") {
    trafficLight.state = trafficLight.state.replace('green', 'orange')
   } else if (trafficLight.state==="orange") {
    trafficLight.state = trafficLight.state.replace('orange', 'red')
   }  else if (trafficLight.state==="red") {
    trafficLight.state = trafficLight.state.replace('red', 'green')
    rotations++
   };
}



  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to rotations and turn it green

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red
*/
