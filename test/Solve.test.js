// test/Solve.test.js
// Load dependencies
//const { expect } = require('chai');
import { expect } from "chai";

// Start test block
describe('Solve', function () {
  before(async function () {
    this.Solve = await ethers.getContractFactory('Solve');
    this.Elevator = await ethers.getContractFactory('Elevator');
  });

  beforeEach(async function () {
    this.solve = await this.Solve.deploy();
    this.elevator = await this.Elevator.deploy();
    //await this.solve.deployed();
    //await this.elevator.deployed();
  });

  // Test case
  it('solve makes elevator.top() true', async function () {
    // Call elevator from solve
    await this.solve.callElevator(this.elevator.getAddress());

    // Test if now elevator.top() is true
    //var assert = require('chai').assert
    expect(await this.elevator.top()).to.equal(true);
  });
});