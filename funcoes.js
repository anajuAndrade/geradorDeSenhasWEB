
const geraSenha = (e)=>{
    e.preventDefault();

    var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ0123456789/!?:<>(){}[]^&@#$%*+"
    var tamanhoS = document.getElementById("tamanho").value;
    var senha="";

    if(tamanhoS <=0){
        alert("Insira um número maior do que 0.");
    }else{
        for(var i = 0; i < tamanhoS; i++){
            var caracterAleatorio = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.substring(caracterAleatorio, caracterAleatorio+1);
        }
    
        document.getElementById("mostrarSenha").innerHTML = `<h3>${senha}</h3>`;
    }

}

document.getElementById("btn").addEventListener("click", geraSenha);