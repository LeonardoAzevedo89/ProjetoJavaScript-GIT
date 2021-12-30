alunos = [];
totalAlunos=0;

function insere(){

var elemento = document.getElementById("listaAlunos");
var pessoa = document.getElementById("aluno").value
var telefone = document.getElementById("tel").value
var date = document.getElementById("data").value;
var nota = document.getElementById("nota").value;

if (pessoa==""){
document.getElementById('erro').innerHTML = 'campo Aluno está vazio';   
document.getElementById('erro').style.display="block"; 
}
else {
document.getElementById('erro').style.display="none"; 
if (telefone==""){
   document.getElementById('telerro').innerHTML = 'campo telefone está vazio';
   document.getElementById('telerro').style.display="block";  
}
else {
   document.getElementById('telerro').style.display="none"; 
   if (date==""){
       document.getElementById('dateerro').innerHTML = 'campo Data está vazio';
       document.getElementById('dateerro').style.display="block";  
   }
   else{
       alert("Aluno Criado com Sucesso!");
       document.getElementById('dateerro').style.display="none";
       elemento.innerHTML += "<br><span> <b>Nome do Aluno:</b> " + pessoa + "</span><br>" + "<span><b> Telefone do Aluno:</b> " + 
       telefone + "</span>" + " <br> <span><b>Data de Nascimento: </b>" + date + "<br><span><b> Nota Final: </b>" + 
       nota + "</span>" + "<br>"+'<button onclick="excluir();">Excluir</button>' +'<button onclick="editar()">Editar</button>'+ "<br><hr>"; 
       pessoa = document.getElementById('aluno').value ="";
       telefone = document.getElementById('tel').value ="";
       date = document.getElementById('data').value ="";
       nota = document.getElementById('nota').value ="";
}
}
}

}
function limpar(){
pessoa = document.getElementById('aluno').value ="";
telefone = document.getElementById('tel').value ="";
date = document.getElementById('data').value ="";
nota = document.getElementById('nota').value ="";
}

function excluir(id){
if (confirm("Tem certeza que deseja excluir esta linha? " + elemento))
{
   document.getElementById(elemento).style.display='none';
}
}

function editar(){
if (confirm("Tem certeza que deseja editar este Aluno? " + elemento))
{
   document.getElementById(elemento).style.display='none';
}
}

function insereNotas(){
var numeros=[];
var i = 0;
var resultado;
var entrada;

do
{
 entrada = (parseInt(prompt("Entre com as Notas de 0 á 10 !!! Para Sair pressione CANCELAR")));
 if((entrada > 10 || entrada < 0)){
     alert("Valor inválido");
     entrada=0;
 }
 resultado += entrada;
 if (entrada == 0 || entrada <=10) {
 numeros[i] = entrada;
   resultado += entrada;
   i++;
 }

} while(entrada >= 0);

var soma = 0;
for(var i = 0; i < numeros.length; i++) {
soma += numeros[i];
}
soma = soma / i;
document.getElementById("nota").value = soma.toFixed(1);
}

   

