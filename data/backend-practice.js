const xhr = new XMLHttpRequest();  //message or request

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev'); //ovo se zove backend API, odgovori mogu biti u textu ili jsonu npr
xhr.send();

