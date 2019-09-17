let board = [];
let testBlock = [ 
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
    let block = [ [],[],[] ];
    let row = 0;
    let square = 0;
    while( block[2].length < 3 ){
        let randoInty = Math.floor(Math.random() * 9) + 1;
        if( isUniqueToBlock( {number: randoInty}, block ) ){
            if( block[0].length <3 ){
                block[0].push( new Square( randoInty ) );
            } //end 1st row
            else if( block[1].length<3 ){
                block[1].push( new Square( randoInty ) );
            } // end  2nd row
            else{
                block[2].push( new Square( randoInty ) );
            } //end 3rd row
        } // end unique to block
    } // end while
    console.log( block );
    return block;
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

let isUniqueToRow = ( square, row ) =>{

}