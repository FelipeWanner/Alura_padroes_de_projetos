class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document); 
        //metodo legal para reduzir escrita no código, transformando o querySelector em $
        //Porém, pode gastar mais memória.

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

    }

    adiciona(event){
        event.preventDefault();

        //let data = new Date(this._inputData.value.replace(/-/g, ","));
        //Método funcional mais simples, porém para praticar outras coisas no curso, utilizar o código abaixo
        let data = new Date(
            ...this._inputData.value
            .split("-")
            .map((item, indice) => item - indice % 2)           
        );

        let negociacao = new Negociacao (
            data, 
            this._inputQuantidade.value,
            this._inputValor.value
        );


        console.log(negociacao);
    }
}