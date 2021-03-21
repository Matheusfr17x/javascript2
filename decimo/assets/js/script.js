var lampada = {
    urlbotaoplay: 'assets/images/play.png',
    urlmusica: 'assets/images/musica.png',
    som: new Audio('assets/sounds/sadsong.mp3'),
    somLampadaQuebrando: new Audio('assets/sounds/campainha_erro.mp3'),

    acenderOuApagar: function (){
        let imagem=document.getElementById("lampada");
        console.log(imagem.src);
        if(imagem.src.match('play')){
            imagem.src = this.urlmusica;
            this.som.play();
            
        } else {
            imagem.src = this.urlmusica;
            this.som.play();
        }
        console.log("Acende  Apaga");
    },

    quebrar: function(){
        let imagem=document.getElementById("lampada");
        if(!imagem.src.match('quebrada')){
            this.somLampadaQuebrando.play();
        imagem.src = this.urlLampadaQuebrada;
        }
        console.log("Quebra");

    }
}




