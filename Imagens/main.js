let pagina=0;
function avancar (){
    if (pagina == 0){
        document.querySelector('#texto p').innerHTML="";
        document.querySelector('#imagens img').src="Imagens/O macaco, o cachorro e a onça.png"
        pagina = 1;
    }
    else{
        if (pagina == 1){
            document.querySelector('#texto p').innerHTML="Um dia, na beira de um lago no Pantanal, um macaco estava descansando em uma árvore, quando viu uma onça à espreita.";
            document.querySelector('#imagens img').src="Imagens/ZqeCO-wSQf6UrX2RZUd-XA.png"
            pagina = 2;
        }
        else{
            if (pagina == 2){
                document.querySelector('#texto p').innerHTML="O macaco, percebendo o perigo, exclamou: -Nossa, esta carne de onça é realmente uma delícia! Disse o macaco, chupando um osso que havia encontrado. A onça, com medo, meteu o pé e foi-se embora.";
                document.querySelector('#imagens img').src="Imagens/5-V2wDzFRqaWq2BYIEQJeA.png"
                pagina = 3;
            }
            else{
                if (pagina == 3){
                    document.querySelector('#texto p').innerHTML="No meio dos arbustos, um cachorro, que observando o ocorrido, foi contar tudo que viu pra onça.";
                    document.querySelector('#imagens img').src="Imagens/RQSwc_BjTMO_gBd9rNLe6w.png"
                    pagina = 4;
                }
                else{
                    if (pagina == 4){
                        document.querySelector('#texto p').innerHTML="A onça, furiosa, foi atrás novamente do macaco.";
                        document.querySelector('#imagens img').src="Imagens/cd896ca1-ebeb-4500-a05c-54d59a4e08ab.png"
                        pagina = 5;
                    }
                    else{
                        if (pagina == 5){
                            document.querySelector('#texto p').innerHTML="Chegando lá, o macaco percebeu o ocorrido e novamente exclamou: Droga, onde está aquele cachorro? Pedi para ele me trazer outra onça, pois ainda estou com fome! Disse o macaco, coçando a barriga.";
                            document.querySelector('#imagens img').src="Imagens/ac2171b4-f45b-4a36-a9db-e0c1e11304cc.png"
                            pagina = 6;
                        }
                        else{
                            if (pagina == 6){
                                document.querySelector('#texto p').innerHTML="A onça, ouvindo isso, ficou tão furiosa com o cachorro que, no final, acabou comendo-o.";
                                document.querySelector('#imagens img').src="Imagens/2a221269-b946-4baa-bb90-026b30b3f61b.png"
                                pagina = 7;
                            }
                            else{
                                if (pagina == 7){
                                    document.querySelector('#texto p').innerHTML="";
                                    document.querySelector('#imagens img').src="Imagens/O macaco, o cachorro e a onça (1).png"
                                }
                                else{

                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
}

function voltar (){
    if (pagina == 0){
        document.querySelector('#texto p').innerHTML="";
        document.querySelector('#imagens img').src="Imagens/O macaco, o cachorro e a onça.png"
    }
    else{
        if (pagina == 1){
            document.querySelector('#texto p').innerHTML="Um dia, na beira de um lago no Pantanal, um macaco estava descansando em uma árvore, quando viu uma onça à espreita.";
            document.querySelector('#imagens img').src="Imagens/ZqeCO-wSQf6UrX2RZUd-XA.png"
            pagina = 0;
        }
        else{
            if (pagina == 2){
                document.querySelector('#texto p').innerHTML="O macaco, percebendo o perigo, exclamou: -Nossa, esta carne de onça é realmente uma delícia! Disse o macaco, chupando um osso que havia encontrado. A onça, com medo, meteu o pé e foi-se embora.";
                document.querySelector('#imagens img').src="Imagens/5-V2wDzFRqaWq2BYIEQJeA.png"
                pagina = 1;
            }
            else{
                if (pagina == 3){
                    document.querySelector('#texto p').innerHTML="No meio dos arbustos, um cachorro, que observando o ocorrido, foi contar tudo que viu pra onça.";
                    document.querySelector('#imagens img').src="Imagens/RQSwc_BjTMO_gBd9rNLe6w.png"
                    pagina = 2;
                }
                else{
                    if (pagina == 4){
                        document.querySelector('#texto p').innerHTML="A onça, furiosa, foi atrás novamente do macaco.";
                        document.querySelector('#imagens img').src="Imagens/cd896ca1-ebeb-4500-a05c-54d59a4e08ab.png"
                        pagina = 3;
                    }
                    else{
                        if (pagina == 5){
                            document.querySelector('#texto p').innerHTML="Chegando lá, o macaco percebeu o ocorrido e novamente exclamou: Droga, onde está aquele cachorro? Pedi para ele me trazer outra onça, pois ainda estou com fome! Disse o macaco, coçando a barriga.";
                            document.querySelector('#imagens img').src="Imagens/ac2171b4-f45b-4a36-a9db-e0c1e11304cc.png"
                            pagina = 4;
                        }
                        else{
                            if (pagina == 6){
                                document.querySelector('#texto p').innerHTML="A onça, ouvindo isso, ficou tão furiosa com o cachorro que, no final, acabou comendo-o.";
                                document.querySelector('#imagens img').src="Imagens/2a221269-b946-4baa-bb90-026b30b3f61b.png"
                                pagina = 5;
                            }
                            else{
                                if (pagina == 7){
                                    document.querySelector('#texto p').innerHTML="";
                                    document.querySelector('#imagens img').src="Imagens/O macaco, o cachorro e a onça (1).png"
                                    pagina = 6
                                }
                                else{
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
}