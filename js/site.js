function validaFaleConosco(){
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome Corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
    var fone = document.frmfaleconosco.txtfone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    
    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone Corretamente.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }
    if (document.frmfaleconosco.email.value==""){
        alert("Preencha o campo Email.");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }
    if (document.frmfaleconosco.selmotivo.value==""){
        alert("Preencha o campo Motivo.");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    }
    if (document.frmfaleconosco.txacomentario.value==""){
        alert("Preencha o campo Comentário.");
        document.frmfaleconosco.txacomentario.focus();
        return false;
    }
    if (document.frmfaleconosco.selmotivo.value=="PR" && (!document.frmfaleconosco.selProduto || document.frmfaleconosco.selProduto.value=="")){
       alert("Selecione um produto");
       document.frmfaleconosco.selProduto.focus();
       return false 
    }
    return true;
}
function verificaMotivo(motivo) {
    var elemento = document.getElementById("opcaoProduto");  //Capturamos a estrutura da div cujo id é opcaoProduto na variável elemento
    if (motivo == "PR") { //Se o valor da variável motivo for "PR"
        var select = document.createElement("select"); //Criamos um elemento (tag) <select> e guardamos na variável homônima
        select.setAttribute("name", "selProduto"); //Setamos nesse novo select o atributo 'name' com o valor 'selproduto'
        //Conteúdo atual da variável select: <select name="selproduto"></select>
        var option = document.createElement("option"); //Criamos um elemento (tag) <option> e guardamos na variaável homônia
        option.setAttribute("value", ""); //Setamos nesse novo option o atributo 'value' com o valor vazio
        var texto = document.createTextNode("Escolha"); //Colocamos o nó de texto criado "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variável option: <option value="">Escolha</option>
        select.appendChild(option); //Colocamos o option "filho" da tag select criada
        //Conteúdo atual da variável select:  <select name="selproduto"><option value="">Escolha</option></select>  
        var option = document.createElement("option"); //Criamos um elemento (tag) <select> e guardamos na variável homônima
        option.setAttribute("value", "FR"); //Setamos nesse novo option o atributo 'value' com o valor "FR"
        var texto = document.createTextNode("Freezer"); //Criamos um nó de texto "Freezer" e gravamos na variável 'texto'
        option.appendChild(texto); //Colocamos o nó de texto criado "filho" da tag option criada
        //Conteúdo atual da variável option: <option value="FR">Freezer</option>
        select.appendChild(option); //Colocamos o option criado como "filho" da tag select criada
        //Conteúdo atual da variável select: <select name="selproduto"><option value="">Escolha</option><option value="FR">Freezer</option></select>
        var option = document.createElement("option");
        option.setAttribute("value", "GE");
        var texto = document.createTextNode("Geladeira");
        option.appendChild(texto);
        select.appendChild(option);
        elemento.appendChild(select); //Colocamos o select criado como "filho" da tag div capturada no inicio da função
    //Se o valor da variável motivo não for "PR"...
    } else {
        //Se a div possuir algum "primeiro filho"
        if (elemento.firstChild) {
            //Removemos ele
            elemento.removeChild(elemento.firstChild);
        }
    }
}//Fim da função verificaMotivo