const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, 0);
  const minute = String(date.getMinutes()).padStart(2, 0);
  const second = String(date.getSeconds()).padStart(2, 0);
  clock.innerText = ` ${hour}: ${minute}: ${second}`;
}
getClock();
setInterval(getClock, 1000);
console.dir(new Date());
//setInterval(sayHello, 5000); //interval takes 2 argument, first: function, second: term in ms
//setTimeout(sayHello, 5000); // function you want to run then how many second after you wanna run it
