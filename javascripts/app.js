
var marsRover = {"direction":"N", "x":0 ,"y":0,"travelLog":[]};


function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
        break;
        case "W":
        rover.direction = "S";
        break;
        case "S":
        rover.direction = "E";
        break;
        case "E":
        rover.direction = "N";
        break;
    default:
  }
  console.log("turnLeft was called!: facing " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
        break;
        case "E":
        rover.direction = "S";
        break;
        case "S":
        rover.direction = "W";
        break;
        case "W":
        rover.direction = "N";
        break;
    default:
  }
  console.log("turnRight was called!: facing " + rover.direction);
}

function moveForward(rover){
  rover.travelLog.push([rover.x , rover.y]);
switch (rover.direction) {
  case "W":
    rover.x = rover.x-1;
    break;
    case "E":
    rover.x = rover.x+1;
    break;
  case "N":
    rover.y = rover.y-1;
    break;
  case "S":
    rover.y = rover.y+1;
    break;
  default:
}
  console.log("moveForward was called Position: " + rover.x +","+ rover.y);
}


function commandList (cadena){
for (var i = 0; i < cadena.length; i++) {
  letra = cadena.charAt(i);

    switch (letra) {
      case "f" :
        moveForward(marsRover);
      break;
      case "r":
        turnRight(marsRover);
      break;
      case "l":
        turnLeft(marsRover);
      break;
        default:
      }

  }
  console.log(marsRover.travelLog);
}
