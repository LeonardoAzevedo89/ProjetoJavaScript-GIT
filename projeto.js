var alunos = [];
var cont=0;
var linha = 0;

function insere(){

var elemento = document.getElementById("listaAlunos");
nome = document.getElementById("aluno").value;
fone = document.getElementById("tel").value;
data = document.getElementById("data").value;
nota = document.getElementById("nota").value;


if (nome==""){
document.getElementById('erro').innerHTML = 'campo Aluno está vazio';   
document.getElementById('erro').style.display="block"; 
}
else {
document.getElementById('erro').style.display="none"; 
if (fone==""){
   document.getElementById('telerro').innerHTML = 'campo telefone está vazio';
   document.getElementById('telerro').style.display="block";  
}
else {
   document.getElementById('telerro').style.display="none"; 
   if (data==""){
       document.getElementById('dateerro').innerHTML = 'campo Data está vazio';
       document.getElementById('dateerro').style.display="block";  
   }
   else if (nota == ""){
      document.getElementById('dateerro').style.display="none";
      document.getElementById('notaerro').innerHTML = 'campo Nota está vazio';
      document.getElementById('notaerro').style.display="block"; 
   }
   else{
      alert("Aluno Criado com Sucesso!");
      document.getElementById('notaerro').style.display="none";
      alunos[cont] ="<br>" + "<b>"+ "Registro:"+ "</b>" + cont + "<br>" + "<b>"+"Nome: "+"</b>" +nome + " <br> "+ "<b>"+ "Telefone: " + "</b>" + fone + " <br> "+ "<b>" + "Data: "+"</b>" + data + " <br> "+ "<b>" +"Nota Final: " +"</b>" + nota + "<br>";
      
       var html="";
       for(i=0;i<=cont;i++) 
    {
       
        html = html + alunos[i]; 
        
    }
       
       
         elemento.innerHTML=  html+ "<br>"+'<button id="botao" onclick="excluir(\''+i+'\');">Excluir</button>' +'<button id="botao" onclick="editar()">Editar</button>'+"<br>"+"<br>";;;
       
       cont++;
       document.getElementById('aluno').value ="";
       document.getElementById('tel').value ="";
       document.getElementById('data').value ="";
       document.getElementById('nota').value ="";
}
}
}                                            

} 
function limpar(){
   document.getElementById('aluno').value ="";
   document.getElementById('tel').value ="";
   document.getElementById('data').value ="";
   document.getElementById('nota').value ="";
}

function excluir(linha){
if (confirm("Tem certeza que deseja excluir esta linha? " ))
{
   registro = prompt("Informe o Registro do Aluno");
   
      var al = [];
      al[0] = alunos[registro];
      al.splice(0, 1);
      alunos[registro] = "";
  
  
}
}

function editar(linha){
if (confirm("Tem certeza que deseja editar este Aluno? " ))
{
   var alterar = prompt(" Para Alterar os dados Digite \n 1- Nome \n 2- Telefone \n 3- Data \n 4- Nota \n S- Sair")
   alert(alterar);
   while(alterar !="S"){
   if (alterar == 1){
      nome = prompt("Digite o nome do Aluno");
      document.getElementById('aluno').value = nome;
   }
   if (alterar == 2){
      telefone = prompt("Digite o telefone do Aluno");
      document.getElementById('tel').value = telefone;
   }
   if (alterar == 3){
      date = prompt("Digite a data de nascimento do Aluno");
      document.getElementById('data').value = date;
   }
   if (alterar == 4){
      insereNotas();
      
   }
   if (alterar == S){
      alert("Você cancelou a edição dos dados");
      
   }
 }
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

   

