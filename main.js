//To play Jeopardy game  answers need to be paired with question responses.
//Points (or money) accumulate based on correct question-responses (i.e., answers in the form of a question).

/*Category locations on gameboard are fixed. Knowing the category location (i.e., Cat1 - Cat5) and point value (100 - 500)
 will indicate location on the board (i.e, row and column).  For example row 2 column 2 is same as Cat2, 200 pts.*/

//When user or player clicks (for example) the panal for Cat1-100pts, the gameboard should disappear and an answer related to the category should appear.


//step 1
//let panelDetect = document.getElementsByClassName("points")

//step 2 - event listener, add click button to each square on the board

let panelDetect = document.querySelectorAll(".points")
console.log(panelDetect)
this.addEventListener('click', function (event) {


    let panelClick = event.target.id

    
        $( ".points" ).click(function(event) {
            var target = $(event.target);
            if ( target.is( ".points" ) ) {
            let pClassCat = target.parent().attr('class');
            let row = panelClick.charAt(1)
            let col = panelClick.charAt(3)
            console.log(pClassCat)

            console.log(panelClick)

            console.log(categoryObj[pClassCat])

            console.log(row)
            console.log(col)
            }
            
          })
    
    
})



// Get modal element
let modal = document.querySelector('.simpleModal')

// Get open modal button
// let modalBtn = document.querySelector('.modalBtn')

// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0]

let div = document.querySelectorAll('.points')[0]

// //Listen for open click
// div.addEventListener("click", function() {
//     modal.style.display = "block";
//    $('.simpleModal p').html('hello');
// })

// Listen for closed click
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
})

// $('.points').on('click', function(){
//     console.log($('.points').parent().attr('class'))
// })

$(document).ready(function () {
    // $('.simpleModal p').click(function() {
    div.addEventListener("click", function () {
        modal.style.display = "block";
        $('.simpleModal .ans').html(categoryObj.cat1.answers[0]);
        $('.simpleModal .qR').html('What is ' + categoryObj.cat1.questionResponses[0] + ' ?');
    })


    // $('cat1').click(function () {})
    // for (i = 0; i < categoryObj.cat1.length; i++) {
            
    //         console.log(categoryObj.cat1)

    });
    

// });

//console.log(document.querySelectorAll("points")[0])

//The 'data structure' would include multiple arrays containing [answers], [questionResponses], and [pointValues] (amongst others TBD)
const categoryObj = {
    cat1: {
        answers: ['a', 'b', 'c', 'd', 'e'],
        questionResponses: ['f', 'g', 'h', 'i', 'j'],
        pointValues: [100, 200, 300, 400, 500]
    },

    cat2: {
        answers: ['aa', 'bb', 'cc', 'dd', 'ee'],
        questionResponses: ['ff', 'gg', 'hh', 'ii', 'jj'],
        pointValues: [100, 200, 300, 400, 500]
    },

    cat3: {
        answers: ['aaa', 'bbb', 'ccc', 'ddd', 'eee'],
        questionResponses: ['fff', 'ggg', 'hhh', 'iii', 'jjj'],
        pointValues: [100, 200, 300, 400, 500]
    },

    cat4: {
        answers: ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'],
        questionResponses: ['ffff', 'gggg', 'hhhh', 'iiii', 'jjjj'],
        pointValues: [100, 200, 300, 400, 500]
    },

    cat5: {
        answers: ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee'],
        questionResponses: ['fffff', 'ggggg', 'hhhhh', 'iiiii', 'jjjjj'],
        pointValues: [100, 200, 300, 400, 500]
    }
}



 //Then, user will need to 'input' a question-response.

 //A 'function' will need to evaluate the player's question-responses for correctness.

 //If the answer is correct pts are awarded.  If incorrect pts are deducted.  (Negative point balances are allowed.)  Accumulated pts must be tracked throughout the course of the game.

//After each instance (either correct or incorrect question-response evaluation) the curremt Cat-Pt panel will disappear from the gameboard (so that it cannot be re-selected), 

 //This process of selecting panels by Cat-Pts continues until no panels remain on the board.  At this point, the users total accumulated pts are evaluated for Final Jeopardy entry.
 //If total pts are > 0, go to final jeopardy automatically. If <= to zero, player loses (unable to proceed to final jeopardy).

 //Final jeopardy (FJ) category will be fixed (players won't be able to choose it). Players may bet amounts up to the value of their accumulated total pts balance.
 //The user will be prompted for his/her bet amount.  An FJ answer will be provided consistent with the category, the user will be prompted to input a question-response.
 //This response will be evaluated. If correct, the bet amt will be awarded by adding it to the total score.  If incorrect, the bet amt will be deducted from the total score.  
 //If at this point in FJ, the player still has positive pts he/she will win.  If negative total pts balance after FJ question-response evaluation, player loses.  