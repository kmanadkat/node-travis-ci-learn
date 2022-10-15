function sleep(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    console.log(`Food Env Var Value: ${process.env.FAVORITE_FOOD}`)
    await sleep(5000);
  }
}

main();
