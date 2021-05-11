class Game{
    constructor() {
        this.size = 3;
        this.field = [];
        for (let i=0; i< this.size; i++){
            this.field.push([]);
            for (let j=0; j<this.size; j++){
                this.field[i].push(new Cell());
            }
        }
        this.playerTurn = "X";
    }

    mountField(parrent){
        this.domElement = document.createElement("div");
        for (let i=0; i< this.size; i++){
            let row = document.createElement("div");
            row.classList.add("row");
            for (let j=0; j<this.size; j++){
                this.field[i][j].onclick = function(){
                    if (this.innerText == "")
                        this.innerText = this.playerTurn;
                    console.log(this);
                };
                row.appendChild(this.field[i][j].domElement);
                this.domElement.appendChild(row);
            }
        }
        parrent.appendChild(this.domElement);
    }

    changePlayer(){
        if (this.playerTurn == "X")
            this.playerTurn = "O";
        else
            this.playerTurn = "X";
    }

    cellClick(){
        console.log(this);
    }
}

class Cell{
    constructor (){
        this.domElement = document.createElement("div");
        this.domElement.classList.add("cell");
        this.value = ""; 
    }

    set onclick(func){
        this.domElement.onclick = func;
    }

}

let game = new Game();
game.mountField(document.body);