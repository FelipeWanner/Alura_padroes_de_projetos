class MensagemView extends View{

    constructor(elemento){
        super(elemento);
    }

    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
}



//model ? setTimeout(() => this._elemento.innerHTML = `<p></p>`, 3000) : null;