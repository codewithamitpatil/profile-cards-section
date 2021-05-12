

console.log('amit //');

async function amit()
{ 
      console.log('fn 1sstt enter');
  const api =await fetch('https://api.github.com/users');
  const data = await api.json();
  console.log(data);
    return 'amit patil';
}

console.log('////////start');
const a = amit();
console.log('////////2');
console.log('////////3');
console.log('////////4');
console.log('////////5');
console.log('////////6');
console.log(a);