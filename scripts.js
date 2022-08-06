var nome = document.getElementById('nome');
var senha = document.getElementById('senha');
var acesso = docuemnt.getElementById('acesso');

nome.addEventListener ('focus',()=>{

    nome.style.borderColor = "#6E85B7"

})

nome.addEventListener ('blur',()=>{

    nome.style.borderColor = "#CEE5D0"

})

senha.addEventListener ('focus',()=>{

    senha.style.borderColor = "#CEE5D0"

})

senha.addEventListener ('blur',()=>{

senha.style.borderColor = "#6E85B7"

})

acesso.addEventListener ('focus',()=>{

    acesso.style.borderColor = "#CEE5D0"

})

acesso.addEventListener ('blur',()=>{

acesso.style.borderColor = "#6E85B7"

})