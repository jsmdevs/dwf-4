type Jugada = 'piedra' | 'papel' | 'tijera';
type Game = {
    computerPlay: Jugada,
    personPlay: Jugada
}

const state = {
    data: {
        currentGame: {
            computerPlay: "",
            personPlay: ""
        },
        history: []
    },

    getState(){
        return this.data;
    },

    setMove(game:Jugada){
        const currentState = this.getState();
        currentState.currentGame.myPlay;
    },
    
    pushToHistoty(play:Game){
        const currentState = this.getState();
        currentState.history(play);
    },

    whoWins(myPlay:Jugada, computerPlay:Jugada){
        
        const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
        const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
        const gane = [ganeConPapel, ganeConPiedra, ganeConTijeras].includes(true);

        return gane;
    }
}