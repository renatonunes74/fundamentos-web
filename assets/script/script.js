//tipos de variaveis
//var let const
//dom

//let x = "renato"
//alert(x + " é meu nome");
//Date();
//console.log(Date());

const nome = document.getElementById("nome")
const email = document.querySelector("#email") //altenartiva ao get, pode usar id(#) e classe(.)
//let txtNome = document.querySelector("#nome")
function validaNome(){
	if(nome.value.length < 2){
		txtNome.innerHTML = "O nome deve ter mais de 2 caracteres"
		txtNome.style.color = 'red'
	} else {
		txtNome.innerHTML = "Esta correto"
		txtNome.style.color = 'green'
	}
}
