let board = [];
let testBlock = [ 
    [ { number: 1, visible: false }, { number: 2, visible: false }, { number: 3, visible: false }],
    [ { number: 4, visible: false }, { number: 5, visible: false }, { number: 6, visible: false }],
    [ { number: 7, visible: false }, { number: 8, visible: false }]
    ];

class Square {
    constructor( number ) {
        this.number = number;
        this.visible = false;
        this.guess = null;
    }
    flip(){
        this.visible = !this.visible
    }
    show(){
        this.visible = true;
    }
    hide(){
        this.visible = false;
    }
}

let testy = new Square( 3 );

let setUpBlock = () =>{
    
}

let isUniqueToBlock = ( square, block ) =>{
    for( let i=0; i<block.length; i++ ){
        for( let j=0; j<block[i].length; j++){
            if( block[i][j].number === square.number ){
                return false;
            } //end match
        } // end inner
    } //end outter
    return true;
}

let isUniqueToRow = ( number, row ) =>{

}