const Spacecraft = require("../Spacecraft"); // Adjust the path to your Spacecraft class
const { describe, it, expect } = require("@jest/globals");

describe("Spacecraft", () => {
  let space;

  beforeEach(() => {
    space = new Spacecraft(0, 0, 0, "N");
  });

  it("should move forward when facing North", () => {
    space.executeCommands(["f"]);
    expect(space.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
  });

  it("should move backward when facing North", () => {
    space.executeCommands(["b"]);
    expect(space.getPosition()).toEqual({ x: 0, y: -1, z: 0 });
  });

  it("should move forward when facing East", () => {
    space.executeCommands(["r", "f"]);
    expect(space.getPosition()).toEqual({ x: 1, y: 0, z: 0 });
  });

  it("should move backward when facing East", () => {
    space.executeCommands(["r", "b"]);
    expect(space.getPosition()).toEqual({ x: -1, y: 0, z: 0 });
  });

  it("should turn left when facing North", () => {
    space.executeCommands(["l"]);
    expect(space.getDirection()).toBe("W");
  });

  it("should turn right when facing North", () => {
    space.executeCommands(["r"]);
    expect(space.getDirection()).toBe("E");
  });

  it("should turn up when facing North", () => {
    space.executeCommands(["u"]);
    expect(space.getDirection()).toBe("U");
  });

  it("should turn down when facing North", () => {
    space.executeCommands(["d"]);
    expect(space.getDirection()).toBe("D");
  });

  it("should execute multiple commands and face West", () => {
    space.executeCommands(["f", "r", "u", "b", "l"]);
    expect(space.getPosition()).toEqual({ x: 1, y: 0, z: 1 });
    expect(space.getDirection()).toBe("W");
  });
});
