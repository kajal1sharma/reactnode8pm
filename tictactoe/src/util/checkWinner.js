function checkWinner(p,stateArr){
    // row 1
    if(stateArr[0]===p && stateArr[1]===p && stateArr[2]===p){
      return true;
    }
    else if(stateArr[1]===p && stateArr[4]===p && stateArr[5]===p){
      return true;
    }
    else if(stateArr[6]===p && stateArr[7]===p && stateArr[8]===p){
      return true;
    }
    else if(stateArr[0]===p && stateArr[3]===p && stateArr[6]===p){
      return true;
    }
    else if(stateArr[1]===p && stateArr[4]===p && stateArr[7]===p){
      return true;
    }
    else if(stateArr[2]===p && stateArr[5]===p && stateArr[8]===p){
      return true;
    }
    else if(stateArr[0]===p && stateArr[4]===p && stateArr[8]===p){
      return true;
    }
    else if(stateArr[2]===p && stateArr[6]===p && stateArr[4]===p){
      return true;
    }
    else{
      return false;
    }
    
  }



  export default checkWinner