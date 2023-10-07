
let current_card = 0;
let prior_card = 0;
let num_cards = words_array.length;
let current_streak = 0;
let current_card_type = "";
let current_card_word = "";
let current_card_sentence = "";
let current_answer_type = "";
let current_answer_word = "";
let current_answer_sentence = "";
let prior_card_type = "";
let prior_card_word = "";
let prior_card_sentence = "";
let prior_answer_type = "";
let prior_answer_word = "";
let prior_answer_sentence = "";
let type_element = document.getElementById("type");
let word_element = document.getElementById("word");
let sentence_element = document.getElementById("sentence");
let answer_type_element = document.getElementById("answer_type");
let answer_word_element = document.getElementById("answer_word");
let answer_sentence_element = document.getElementById("answer_sentence");
let streak_counter_element = document.getElementById("streak_counter");
let back_button_element = document.getElementById("back_button");
let current_button_element = document.getElementById("current_button");

function init() {
    type_element = document.getElementById("type");
    word_element = document.getElementById("word");
    sentence_element = document.getElementById("sentence");
    answer_type_element = document.getElementById("answer_type");
    answer_word_element = document.getElementById("answer_word");
    answer_sentence_element = document.getElementById("answer_sentence");
    streak_counter_element = document.getElementById("streak_counter");
    back_button_element = document.getElementById("back_button");
    current_button_element = document.getElementById("current_button");
}
function get_random_int(max) {
    return Math.floor(Math.random() * max);
}
function get_random_bool() {
    var num = get_random_int(99);
    if(num >= 50) return true;
    return false;
}
function populate_card_text(is_prior = false) {
    if(is_prior) {
        type_element.innerHTML =            prior_card_type;
        word_element.innerHTML =            prior_card_word;
        sentence_element.innerHTML =        prior_card_sentence;
        answer_type_element.innerHTML =     prior_answer_type;
        answer_word_element.innerHTML =     prior_answer_word;
        answer_sentence_element.innerHTML = prior_answer_sentence;
    }
    else {
        type_element.innerHTML =            current_card_type;
        word_element.innerHTML =            current_card_word;
        sentence_element.innerHTML =        current_card_sentence;
        answer_type_element.innerHTML =     current_answer_type;
        answer_word_element.innerHTML =     current_answer_word;
        answer_sentence_element.innerHTML = current_answer_sentence;
    }
}
function move_current_vals_to_prior() {
    prior_card = current_card;
    prior_card_type = current_card_type;
    prior_card_word = current_card_word;
    prior_card_sentence = current_card_sentence;
    prior_answer_type = current_answer_type;
    prior_answer_word = current_answer_word;
    prior_answer_sentence = current_answer_sentence;
}
function next_card() {
    
    hide_answer();

    var new_card = get_random_int(num_cards);
    if(new_card === current_card) return next_card(); // no same 2 in a row
    move_current_vals_to_prior();

    current_card = new_card;
    this_card = words_array[new_card];
     
    streak_counter_element.innerHTML = "Streak: " + current_streak;
    
    if(get_random_bool()) {
        // spanish to english
        current_card_type =       this_card.spanish_type;
        current_card_word =       this_card.spanish_word;
        current_card_sentence =   this_card.spanish_sentence;
        
        current_answer_type =     this_card.english_type;
        current_answer_word =     this_card.english_word;
        current_answer_sentence = this_card.english_sentence;
    } 
    else {
        // english to spanish
        current_card_type =       this_card.english_type;
        current_card_word =       this_card.english_word;
        current_card_sentence =   this_card.english_sentence;
        
        current_answer_type =     this_card.spanish_type;
        current_answer_word =     this_card.spanish_word;
        current_answer_sentence = this_card.spanish_sentence;
    }

    populate_card_text();
}
function show_answer() {
    var answer_card_element = document.getElementById("answer_card");
    answer_card_element.style.visibility = "visible";
}
function hide_answer() {
    var answer_card_element = document.getElementById("answer_card");
    answer_card_element.style.visibility = "collapse";
}
function got_it_right() {
    current_streak++;
    next_card();
}
function got_it_wrong() {
    current_streak = 0;
    next_card();
}
function go_back() {
    
    back_button_element.style.visibility = "collapse";
    current_button_element.style.visibility = "visible";

    populate_card_text(true);
    show_answer();
}
function go_current() {
    back_button_element.style.visibility = "visible";
    current_button_element.style.visibility = "collapse";

    populate_card_text();
    hide_answer();
}



