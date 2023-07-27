const ingreseTexto1=document.getElementById(ingreseTexto);
const botonEncriptar1=document.getElementById(botonEncriptar);
const botonDesencriptar1=document.getElementById(botonDesencriptar);
const BotonCopiar1=document.getElementById(botonCopiar);
const mensajeFinal1=document.getElementById(mensajeFinal);
const muneco1=document.getElementById(muneco);
const rightInfo1=document.getElementById(rightInfo);
const right1=document.getElementById(right);

let remplazar = [
    ["e","enter"],
    ["o","ober"],
    ["i","imes"],
    ["a","ai"],
    ["u","ufat"],
]

const remplace = (nuevoValor)=>{
    mensajeFinal.innerHTML = nuevoValor;
    muneco.classList.add("oculto");
    ingreseTexto.value="";
    rightInfo.style.display ="none";
    botonCopiar.style.display ="block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");


}

botonEncriptar.addEventListener("click", () =>{
    const texto = ingreseTexto.value.toLowerCase();
    if(texto != ""){

        function encriptar(newText){
            for(let i=0;i < remplazar.length;i++){
                if(newText.includes(remplazar[i][0])){
                newText=newText.replaceAll(remplazar[i][0],remplazar[i][1]);
                };

            };
        return newText
        };

    } else {
        alert("Ingrese texto a Encriptar");
    }
    
    remplace(encriptar(texto));

    
    
});

botonDesencriptar.addEventListener("click", () =>{
    const texto = ingreseTexto.value.toLowerCase()
    if(texto != ""){
        function desencriptar(newText){
            for(let i=0;i < remplazar.length;i++){
                if(newText.includes(remplazar[i][1])){
                    newText=newText.replaceAll(remplazar[i][1],remplazar[i][0]);
                };

            };
            return newText
        };
            
        
    }else {
        alert("Ingrese texto")
    }
    remplace(desencriptar(texto));

});
botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("texto Copiado Satisfactoriamente");

    mensajeFinal.innerHTML = "";

    muneco.classList.remove("oculto");
    rightInfo.style.display ="block";
    botonCopiar.style.display ="none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingreseTexto.focus();




})