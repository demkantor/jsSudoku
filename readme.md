jsSudoku
===

Just trying to quickly implement some sudoku stuff in javascript between "actual work" and working on all my other hobbies and the game (Newt One).

Now, I'm not a big SUdoku player, but I know the mechanics and it seems like there's just a few thigns I need: 

- "squares" which have a number, a boolean visible property, and (potentially) a guess
- 3x3 "blocks" of numbers, when solved each number is unique
- 9 space linear "rows" of numbers in chunks of 3 which belong to blocks, again, when solved, should be all unique values 
- a game "board" which houses all the blocks of squares to make the rows

I started with a super basic class for the Square:
```
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
```

I think I really just need to check if the number for squares are unique to a row or block so there's some really simple functions:

```let isUniqueToBlock = ( square, block ) =>{...```

```let isUniqueToRow = ( square, row ) =>{...```

...and I think that's all I'm really going to need to get this off the ground logically. Anyone can then just deal with it on the front end as they see fit - I plan on doing Cat sudoku with cat pictures.