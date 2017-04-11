const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  const DONE = 4
  const OK = 200
  if(this.readyState === DONE){
    if(this.status === OK){
      //todo ok
    }else {
      // hubo error
    }
  }
}

xhr.open('GET', URL);
xhr.send(null);
