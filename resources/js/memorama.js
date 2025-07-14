// Componente Alpine.js para el juego de memorama
document.addEventListener('alpine:init', () => {
    Alpine.data('memoramaGame', () => ({
        // Propiedades del juego
        cards: [],
        selectedCards: [],
        matches: 0,
        errors: 0,
        timeLeft: 0,
        gameWon: false,
        gameLost: false,
        isChecking: false,
        timer: null,
        showMessage: false,
        message: '',
        messageType: 'success',
        isPaused: false,
        previousTimeLeft: 0,

        // Valores base para crear los pares (4 pares = 8 cartas)
        cardValues: [1, 2, 3, 4, 5, 6,],

        // Inicialización del juego
        init() {
            this.startGame();
        },

        // Crear y mezclar las cartas
        createCards() {
            // Crear array con pares duplicados
            const cardPairs = [...this.cardValues, ...this.cardValues];

            // Mezclar aleatoriamente usando Fisher-Yates
            for (let i = cardPairs.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cardPairs[i], cardPairs[j]] = [cardPairs[j], cardPairs[i]];
            }

            // Crear objetos de carta con propiedades
            this.cards = cardPairs.map(value => ({
                value: value,
                isFlipped: false,
                isMatched: false,
                id: Math.random().toString(36).substr(2, 9)
            }));
        },

        // Iniciar temporizador
        startTimer() {
            if (!this.isPaused) {
                this.timer = setInterval(() => {
                    this.timeLeft--;

                    if (this.timeLeft <= 0) {
                        this.endGame(false);
                    }
                }, 1000);
            }
        },

        // Detener temporizador
        stopTimer() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        },
        
        // Pausar el juego
        pauseGame() {
            if (!this.isPaused && !this.gameWon && !this.gameLost) {
                this.isPaused = true;
                this.previousTimeLeft = this.timeLeft;
                this.stopTimer();
                this.showFeedback('Juego pausado', 'info');
            }
        },
        
        // Reanudar el juego
        resumeGame() {
            if (this.isPaused && !this.gameWon && !this.gameLost) {
                this.isPaused = false;
                this.startTimer();
                this.showFeedback('Juego reanudado', 'success');
            }
        },
        
        // Alternar pausa/reanudar
        togglePause() {
            if (this.isPaused) {
                this.resumeGame();
            } else {
                this.pauseGame();
            }
        },

        // Seleccionar una carta
        selectCard(index) {
            const card = this.cards[index];

            // Validaciones antes de seleccionar
            if (this.isChecking ||
                card.isMatched ||
                card.isFlipped ||
                this.selectedCards.length >= 2 ||
                this.gameWon ||
                this.gameLost ||
                this.isPaused) {
                return;
            }

            // Voltear la carta
            card.isFlipped = true;
            this.selectedCards.push(index);

            // Si se han seleccionado 2 cartas, verificar coincidencia
            if (this.selectedCards.length === 2) {
                this.isChecking = true;
                setTimeout(() => this.checkMatch(), 800);
            }
        },

        // Verificar si las cartas coinciden
        checkMatch() {
            const [firstIndex, secondIndex] = this.selectedCards;
            const firstCard = this.cards[firstIndex];
            const secondCard = this.cards[secondIndex];

            if (firstCard.value === secondCard.value) {
                // Coincidencia encontrada
                firstCard.isMatched = true;
                secondCard.isMatched = true;
                this.matches++;

                this.showFeedback('¡Excelente! Par encontrado', 'success');
                this.addCardAnimation(firstIndex, 'pulse-success');
                this.addCardAnimation(secondIndex, 'pulse-success');

                // Verificar si se ha ganado
                if (this.matches === this.cardValues.length) {
                    setTimeout(() => this.endGame(true), 500);
                }

            } else {
                // No coinciden
                this.errors++;
                this.showFeedback('Intenta de nuevo', 'error');
                this.addCardAnimation(firstIndex, 'shake');
                this.addCardAnimation(secondIndex, 'shake');

                // Voltear las cartas de vuelta después de un delay
                setTimeout(() => {
                    firstCard.isFlipped = false;
                    secondCard.isFlipped = false;
                }, 1000);
            }

            // Limpiar selección
            this.selectedCards = [];
            this.isChecking = false;
        },

        // Mostrar mensaje de feedback
        showFeedback(msg, type) {
            this.message = msg;
            this.messageType = type;
            this.showMessage = true;

            setTimeout(() => {
                this.showMessage = false;
            }, 1500);
        },

        // Añadir animación a una carta
        addCardAnimation(index, animationClass) {
            const cardElement = document.querySelectorAll('.card-content')[index];
            if (cardElement) {
                cardElement.classList.add(animationClass);
                setTimeout(() => {
                    cardElement.classList.remove(animationClass);
                }, 500);
            }
        },

        // Finalizar el juego
        endGame(won) {
            this.stopTimer();

            if (won) {
                this.gameWon = true;
                this.showFeedback('¡Felicidades! Has ganado', 'success');
            } else {
                this.gameLost = true;
                this.showFeedback('Se acabó el tiempo', 'error');
            }
        },

        // Reiniciar el juego
        startGame() {
            this.stopTimer();
            this.createCards();
            this.selectedCards = [];
            this.matches = 0;
            this.errors = 0;
            this.timeLeft = 60;
            this.gameWon = false;
            this.gameLost = false;
            this.isChecking = false;
            this.showMessage = false;
            this.isPaused = false;
            this.startTimer();
        }
    }));
});