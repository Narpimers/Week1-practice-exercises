/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };
  
  let cycle = 0;
  while (cycle < 2) {
    const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
    console.log("The traffic light is on", currentState);
    if (trafficLight.stateIndex === 0) {
        trafficLight.stateIndex = 1;
    } else  if (trafficLight.stateIndex === 1) {
        trafficLight.stateIndex = 2;
    } else { 
        trafficLight.stateIndex = 0;
        cycle++;
    }
  
    // TODO
    // if the color is green, turn it orange
    // if the color is orange, turn it red
    // if the color is red, add 1 to cycles and turn it green
  }
  
  /**
   * The output should be:
  
  The traffic light is on green
  The traffic light is on orange
  The traffic light is on red
  The traffic light is on green
  The traffic light is on orange
  The traffic light is on red
  
  */