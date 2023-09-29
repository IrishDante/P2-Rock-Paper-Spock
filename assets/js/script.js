var buttons[
    {'name': "Rock", 'beats':{"Scissors": 'crushes', "Lizard": 'crushes'}},
    {'name': "Paper", 'beats': { "Rock": 'covers', "Spock":'disproves'}},
    {'name': "Scissors", 'beats': {"Paper":'cuts',":Lizard":'decapitates'}},
    {'name': "Lizard", 'beats': {"Spock": 'poisons', "Paper": 'eats'}},
    {'name': "Spock", 'beats': { "Scissors": 'smashes', "Rock": 'vaporises'} },
];

for(bttn of buttons){
    let button = document.createElement('button');
    button.appendChild(document.createTextNode(bttn.name))
    document.getElementById('rpslsGame').appendChild(button);
    button.addEventListener('click', function() {choice(bttn);});
}