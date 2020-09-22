const array = ["⬆", "➡", "⬇", "⬅ "]
let delay = 400;
for (const arrow of array){
  setTimeout(() => {
    process.stdout.write('\r' + arrow);
  }, delay)
  delay += 500
}







// setTimeout(() => {
//   process.stdout.write('\r ⬆ ');
// }, 400);

// setTimeout(() => {
//   process.stdout.write('\r ➡  ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r ⬇  ');
// }, 1000);

// setTimeout(() => {
//   process.stdout.write('\r ⬅  '); 
// }, 1300);
