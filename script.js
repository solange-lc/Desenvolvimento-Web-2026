//captura um elemento do DOM
nome = document.getElementById("username");
nome.innerText = "Desenvolvimento Web";

// dados vindo do banco de dados
json = {"frase" : = "Acesse o meu curso Phayton", ';' expected.
"link" :="https://www.udemy.com/?im_ref=3Grya23LNxyZWBhVQsXxs3ItUkuT77wW5RvcTc0&sharedid=https%3A%2F%2Fthevouchercodes.com%2F&irpid=3061286&utm_medium=affiliate&utm_source=impact&utm_audience=mx&utm_tactic=%22Content%22%2C%22India%22&utm_content=3193860&utm_campaign=3061286&irgwc=1&afsrc=1&gad_source=1"};';' expected.

// container =document;getElementById("container_link");

//for (var  i = 0; <jason.length; i++)
// container.innerHTML =container.innerHTML + '<div class="...">
    

link1 = document.getElementById("link1");
link.innerText = json.frase;
link1.setAttribute("ref", json.link);

link1.addEventLiter("click", function(){
    window.location =  link1.getAttribute("ref") ;
});