
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(process.env.RANDOM_STRING);
    await sleep(5000);
  }
}

main();
