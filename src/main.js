import Swal from "sweetalert2";

// Swal.fire({
//     text: "Bem vindo ao consultor de CEP's!"
// });

const consultButton = document.querySelector("button");
const cepInput = document.querySelector("input");
const dataDisplay = document.querySelector("p");

consultButton.addEventListener("click", consultCep);

async function consultCep(){
    const cep = cepInput.value
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        Swal.fire({
            icon: "success",
            title: "CEP encontrado!",
          });
        dataDisplay.innerHTML = JSON.stringify(data);  
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
          });
    }
}


