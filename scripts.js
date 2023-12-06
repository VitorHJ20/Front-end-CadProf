document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});


function CriticalRadio() {
    if (document.getElementById("masculino").checked){
        return true
    } else if (document.getElementById("feminino").checked){
        return true
    } else if (document.getElementById("outros").checked){
        return true
    } else {
        return false
    }
}

function CriticalCheck() {
    if (document.getElementById("rg").checked){
        return true
    } else if (document.getElementById("cpf").checked){
        return true
    } else if (document.getElementById("eleitor").checked){
        return true
    } else {
        return false
    }
}
    



function LimpaCampos() {
    document.forms["CadProf"]["matprof"].value = "";
    document.forms["CadProf"]["nomeprof"].value = "";
    document.forms["CadProf"]["nascprof"].value = "";
    document.forms["CadProf"]["idadeprof"].value = "";
    document.forms["CadProf"]["curprof"].value = "";
    documento.getElementById("masculino").checked = false;
    documento.getElementById("feminino").checked = false;
    documento.getElementById("outros").checked = false;
    documento.getElementById("rg").checked = false;
    documento.getElementById("cpf").checked = false;
    documento.getElementById("eleitor").checked = false;

}

function MostraTexto(button) {
    button.innerHTML = "APAGAAAAA";
}

function ApagaTexto(button) {
    button.innerHTML = "?????????";
}