var dados = []

function PopulaTabela(){
    if(Array.isArray(dados)){
        $("#tblDados tbody").html("")

            dados.forEach(function(item){
                
                $("#tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Telefone}</td>
                </tr>`)
        })
    }
}

$(function () {
    dados = localStorage.getItem("__dados__")
  
     if(dados){
        PopulaTabela()
     }

})