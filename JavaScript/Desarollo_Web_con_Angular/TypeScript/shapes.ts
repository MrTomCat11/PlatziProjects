class Person{

  first_name:string;
  last_name:string;
  twitter_user:string;

  constructor(){
    this.first_name = "Jor";
    this.last_name = "Ca";
    this.twitter_user = '@jorgeucano';
  }

  setLastName(last_name:string){
    this.last_name = last_name;
  }

}

var myPerson = new Person();
myPerson.setLastName("Cano");
myPerson.first_name = "Jorge";
console.log(myPerson);
