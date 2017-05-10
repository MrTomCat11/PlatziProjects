interface MyPersona{
  first_name:string;
  last_name:string;
  twitter_account?:string;
}

let pUno:MyPersona = {
  first_name:'Jorge',
  last_name: 'Cano',
  twitter_account: '@jorgeucano'
}

let pDos:MyPersona = {
  first_name:'Pepe',
  last_name: 'Perez',
}

console.log(pUno);
console.log(pDos);
