let piece;
const $piece1 = document.querySelector('#piece1');
const $piece2 = document.querySelector('#piece2');
const $piece3 = document.querySelector('#piece3');
const $estacas = document.querySelectorAll('.estacas');
const $btnRestartGame = document.querySelector('#btnRestartGame');

const Positions = {
    top: {
        sm: 'top: 84px;',
        md: 'top: 116px;',
        lg: 'top: 148px;',
    }
};  

const MovePiece = {
    drag: function($element) {
        $element.addEventListener('drag', function() {});
    },
    dragStart: function($element) {
        $element.addEventListener('dragstart', function(e) {
            piece = e.target;
        });
    },
    dragEnd: function($element) {
        $element.addEventListener('dragend', function() {});
    },
    putPieceInStake: function(event, $piece, style) {
        $piece.style = style;
        $piece.parentNode.removeChild($piece);
        event.target.appendChild($piece);
    },
    restartPositionStakeFirst: function() {
        $piece1.style = Positions.top.sm
        $piece2.style = Positions.top.md
        $piece3.style = Positions.top.lg
        
        document.querySelector('#stake1').append($piece1);
        document.querySelector('#stake1').append($piece2);
        document.querySelector('#stake1').append($piece3);
    }
}

MovePiece.drag($piece1);
MovePiece.dragStart($piece1);
MovePiece.dragEnd($piece1);

MovePiece.drag($piece2);
MovePiece.dragStart($piece2);
MovePiece.dragEnd($piece2);

MovePiece.drag($piece3);
MovePiece.dragStart($piece3);
MovePiece.dragEnd($piece3);

$estacas.forEach(item => {
    item.addEventListener('dragover', function(e) {
        e.preventDefault(); 
    }, false);

    item.addEventListener('drop', function(e) {
        e.preventDefault();

        if(e.target.classList.contains('estacas')){
            let elementoPeca = e.target.querySelector('.peca');
            
            if(elementoPeca != null) {
                let peca1 = e.target.querySelector('.peca1');
                let peca2 = e.target.querySelector('.peca2');
                let peca3 = e.target.querySelector('.peca3');
                               
                let temPeca2e3 = peca3 && peca2 ? true : false;
                
                if(peca1) {
                    alert('Atenção as regras !!! ');
                }
                else if(temPeca2e3) {
                    MovePiece.putPieceInStake(e, piece, Positions.top.sm);
                }
                else if(peca2) {
                    MovePiece.putPieceInStake(e, piece, Positions.top.md);
                }
                else {
                    MovePiece.putPieceInStake(e, piece, Positions.top.md);
                }

            } else {
                MovePiece.putPieceInStake(e, piece, Positions.top.lg);
            }
        }
    });

});

$btnRestartGame.addEventListener('click', MovePiece.restartPositionStakeFirst);