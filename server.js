const RANDOM_STRING = process.env.RANDOM_STRING;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(RANDOM_STRING);
    await sleep(5000);
  }
}

main();
