const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonderwoman", realName: "Dianna Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
];

// View Object
const view = {
    response: document.querySelector('#response'),
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },
    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, '');
        this.render(this.info, '');
        this.resetForm();
    },
    show(element) {
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    }
};

// Game Object
const game = {
    start(quiz) {
        this.score = 0;
        this.questions = [...quiz];
        view.setup(;)
        this.ask();
    }
      // end of main game loop
      this.gameOver();
},
    check(event){
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if (response === answer) {
            view.render(view.result, 'Correct!', { 'class': 'correct' });
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
        }
        view.resetForm();
        this.ask();
    },
        ask(quiz){
    if (this.questions.length > 0) {
        this.question = this.questions.pop();
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question, question);
    }
    else {
        this.gameOver();

    }
}

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);
