const campotarefa = document.getElementById ("novatarefa");

    console.log (campotarefa.value);

const botao = document.getElementById ("adicionartarefa")

    console.log (botao)

    botao.addEventListener ("click", function () {

        const tarefa = document.createElement("p");

        tarefa.textContent = campotarefa.value;

        document.getElementById("listapendentes").appendChild(tarefa);
    });

    