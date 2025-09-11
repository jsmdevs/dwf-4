import { random } from "lodash"

type Jugada = 'piedra' | 'papel' | 'tijera';
type Game = {
    computerPlay: Jugada,
    personPlay: Jugada
};

export const state = {
    data: {
        currentGame: {
            computerPlay: "",
            personPlay: ""
        },
        history: {
            points: {
                computer: 0,
                person: 0
            },
            games: []
        }
    },

    // Devuelve los datos del state

    getState() {
        return this.data;
    },

    // Guarda la opción seleccionada

    setGame(option) {

        const moves = {
            1: "piedra",
            2: "papel",
            3: "tijera"
        };

        let computerOption = random(1, 3);

        this.data.currentGame.personPlay = option;
        this.data.currentGame.computerPlay = moves[computerOption];
    },

    // Guarda en el historial los datos

    pushToHistoty(play: Game) {

        this.data.history.games.push({ ...play });
        
        if(play.computerPlay !== play.personPlay){
            this.whoWins(play.personPlay, play.computerPlay) ? this.data.history.points.person += 1 : this.data.history.points.computer += 1; 
        };
    },

    // Procesa el ganador

    whoWins(myPlay: Jugada, computerPlay: Jugada) {

        const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
        const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
        const gane = [ganeConPapel, ganeConPiedra, ganeConTijeras].includes(true);
        return gane;
    }
};