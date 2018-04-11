
function validateForm() {
    var x = document.forms["myForm"]["ckeck1"].value;
    if (x == 0) {
        alert("Nenhum aluno Aprovado ou cancelado");
        return false;
    }
    else if(x == "aprovado"){
        alert('Existe alunos Aprovados');
        return false;
    }
    else if(x == "cancelado"){
        alert('Existe alunos Cancelados');
        return false;
    }
 
}
