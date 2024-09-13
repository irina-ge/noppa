// Funktio nopan pyörittämiseen
document.getElementById('dice').addEventListener('click', function() {
    // Arvotaan satunnaisluku 1-6
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Päivitetään nopan kuva vastaamaan arvottua lukua
    var diceImage = './img/' + randomNumber + '.png';
    
    // Asetetaan uusi kuva näkyville
    document.querySelector('#dice img').setAttribute('src', diceImage);
});