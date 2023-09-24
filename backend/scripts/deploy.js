const hre = require("hardhat");

async function main() {

  const books = await hre.ethers.getContractFactory("book");
  const deploybook = await books.deploy();



  console.log("Contract deployed to:", deploybook.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// async function main() {
//   const HelloWorld = await ethers.getContractFactory("book");
//   const hello_world = await HelloWorld.deploy();
//   // await hello_world.deployed();
//   console.log("Contract Deployed to Address:", hello_world.address);
// }
// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });