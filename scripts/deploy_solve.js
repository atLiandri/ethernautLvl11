// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const Solve = await ethers.getContractFactory('Solve');
  console.log('Deploying Solve...');
  const solve = await Solve.deploy();
  await solve.waitForDeployment();
  console.log('Solve deployed to:', await solve.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });