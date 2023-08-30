class Spacecraft {
  //Constructor for
  constructor(x, y, z, direction, prev_direction) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction; //current direction
    this.prev_direction = prev_direction; // Direction before facing  upwards or downwards
  }
  moveForward() {
    // logic to move forward
    switch (this.direction) {
      case "N":
        this.y++;
        break;
      case "S":
        this.y--;
        break;
      case "E":
        this.x++;
        break;
      case "W":
        this.x--;
        break;
      case "U":
        this.z++;
        break;
      case "D":
        this.z--;
        break;
    }
  }

  moveBackward() {
    //logic to move backward
    switch (this.direction) {
      case "N":
        this.y--;
        break;
      case "S":
        this.y++;
        break;
      case "E":
        this.x--;
        break;
      case "W":
        this.x++;
        break;
      case "U":
        this.z--;
        break;
      case "D":
        this.z++;
        break;
    }
  }
  turnLeft() {
    // the logic to turn left
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "S":
        this.direction = "E";
        break;
      case "E":
        this.direction = "N";
        break;
      case "W":
        this.direction = "S";
        break;
    }
    if (this.direction == "U" || this.direction == "D") {
      switch (this.prev_direction) {
        case "N":
          this.direction = "W";
          break;
        case "S":
          this.direction = "E";
          break;
        case "E":
          this.direction = "N";
          break;
        case "W":
          this.direction = "S";
          break;
      }
    }
  }
  turnRight() {
    // the logic to turn right
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "S":
        this.direction = "W";
        break;
      case "E":
        this.direction = "S";
        break;
      case "W":
        this.direction = "N";
        break;
    }
    if (this.direction == "U" || this.direction == "D") {
      switch (this.prev_direction) {
        case "N":
          this.direction = "E";
          break;
        case "S":
          this.direction = "W";
          break;
        case "E":
          this.direction = "S";
          break;
        case "W":
          this.direction = "N";
          break;
      }
    }
  }

  turnUp() {
    if (
      this.direction === "N" ||
      this.direction === "E" ||
      this.direction === "S" ||
      this.direction === "W"
    ) {
      this.prev_direction = this.direction;
      this.direction = "U";
    }
  }

  turnDown() {
    if (
      this.direction === "N" ||
      this.direction === "E" ||
      this.direction === "S" ||
      this.direction === "W"
    ) {
      this.prev_direction = this.direction;
      this.direction = "D";
    }
  }

  executeCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBackward();
          break;
        case "l":
          this.turnLeft();
          break;
        case "r":
          this.turnRight();
          break;
        case "u":
          this.turnUp();
          break;
        case "d":
          this.turnDown();
          break;
      }
    }
  }

  getPosition() {
    return { x: this.x, y: this.y, z: this.z };
  }

  getDirection() {
    return this.direction;
  }
}

const Space = new Spacecraft(0, 0, 0, "N");

const commands = ["f", "r", "u", "b", "l"];
Space.executeCommands(commands);
console.log("Final Position:", Space.getPosition());
console.log("Final Direction:", Space.getDirection());

export default Spacecraft;
