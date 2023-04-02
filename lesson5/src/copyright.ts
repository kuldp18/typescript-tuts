const year = document.getElementById('year') as HTMLSpanElement;
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear as string;

console.log(typeof thisYear);
