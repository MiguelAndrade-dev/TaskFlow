const campotarefa = document.getElementById ("novatarefa");

    console.log (campotarefa.value);

const botao = document.getElementById ("adicionartarefa")

    console.log (botao)

    botao.addEventListener ("click", function () {

        if (campotarefa.value.trim() === "") {
            return;
            
        }

        const tarefa = document.createElement("p");

        const nome = document.createElement("span");

        nome.textContent = campotarefa.value.trim();

        tarefa.appendChild(nome);

        

        document.getElementById("listapendentes").appendChild(tarefa);

        

        campotarefa.value = "";
        

        
        
      const button = document.createElement("button")

      button.textContent = "excluir"

     tarefa.appendChild(button)
     
     button.addEventListener("click", function () {
        
        tarefa.remove ();
     });
    const andamento = document.createElement("Button");

            andamento.textContent = "Em andamento"

            tarefa.appendChild(andamento)

            andamento.addEventListener("click", function (){


                document.getElementById("emandamento").appendChild(tarefa);

            andamento.style.display = "none"

            voltar.style.display = "inline-block";

            })

       
    const concluido = document.createElement("button")

        concluido.textContent = "concluido"

        tarefa.appendChild(concluido);

        concluido.addEventListener("click", function (){

            tarefa.classList.toggle("concluida");

    document.getElementById("listaconcluidas").appendChild(tarefa);

        concluido.style.display = "none" 

        voltar.style.display = "none"

        andamento.style.display = "none";
        
    
        });

    const voltar = document.createElement("button")

        voltar.textContent = "Voltar para Pendentes."

        tarefa.appendChild(voltar);

        voltar.addEventListener("click", function (){

        

        document.getElementById("listapendentes").appendChild(tarefa);
       

        voltar.style.display = "none";

        andamento.style.display = "inline-block";

        concluido.style.display = "inline-block"; })

        voltar.style.display = "none";
        

    const editar = document.createElement("button")

        editar.textContent = "Editar";

        tarefa.appendChild(editar);

        editar.addEventListener("click", function(){

            

            const novoNome = prompt("Digite o novo nome da tarefa");

             if (novoNome.trim() === "") {
            return;
           }
           
           nome.textContent = novoNome;

          
        });
       

    
    });

    

    