// Fa�a seu exerc�cio neste arquivo


// Alguns elementos importantes na p�gina (index.html):
// #rolar: Bot�o rolar
//	 - voc� deve atribuir um _handler_ de evento a ele para fazer o c�lculo da rolagem dos dados
// #resultado: Elemento cujo conte�do deve ser uma string com os resultados
//	 - voc� deve definir seu conte�do (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados: 
//	 - voc� deve torn�-lo vis�vel removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

var botaoRolar = document.getElementById('rolar');

botaoRolar.addEventListener('click', function () {

    var dado = [4, 6, 8, 10, 12, 20];
    var txtResult = '';
    var soma = 0;

    for (var i = 0; i < dado.length; i++) {
        if (txtResult.length > 0)
            txtResult += ' + ';
        var nDado = dado[i];
        var vDado = rolar(nDado);
        txtResult += vDado;
        soma += vDado;
    }

    var divResult = document.getElementById('resultado');
    divResult.parentNode.classList.remove('oculto');
    divResult.innerHTML = txtResult + ' = ' + soma;;

    function rolar(n) {
        var value = Math.ceil(Math.random() * n);
        var dadoToDoc = document.getElementById('quantidadeD' + n);
        dadoToDoc.value = value;
        return value;
    }

});