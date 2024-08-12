// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const Elevator = await ethers.getContractFactory('Elevator');
  console.log('Deploying Elevator...');
  const elevator = await Elevator.deploy();
  await elevator.waitForDeployment();
  console.log('Elevator deployed to:', await elevator.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });