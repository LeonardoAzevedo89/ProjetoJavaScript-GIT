                 alunos = [];
                 totalAlunos=0;

            function insere(){
                
                var elemento = document.getElementById("listaAlunos");
                var pessoa = document.getElementById("aluno").value
                var telefone = document.getElementById("tel").value
                var date = document.getElementById("data").value;
                var nota = document.getElementById("nota").value;

                elemento.innerHTML += "<br><span> <b>Nome do Aluno:</b> " + pessoa + "</span><br>" + "<span><b> Telefone do Aluno:</b> " + 
                telefone + "</span>" + " <br> <span><b>Data de Nascimento: </b>" + date + "<br><span><b> Nota Final: </b>" + 
                nota + "</span>" + "<br><hr>"; 
              }
        
            function limpar(){
                pessoa = document.getElementById('aluno').value ="";
                telefone = document.getElementById('tel').value ="";
                date = document.getElementById('data').value ="";
                nota = document.getElementById('nota').value ="";
            }