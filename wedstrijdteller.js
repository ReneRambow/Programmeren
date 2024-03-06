console.log("test");



function handleStartButton(event) {
    console.log("you pressed the button");
    let naam1 = inputTeam1.value;
    let naam2 = inputTeam2.value;

    if (naam1 == '') {
        alert("Voer naam 1 in!");
        return;
    }
    if (naam2 == '') {
        alert("Voer naam 2 in!");
        return;
    }

    nameTeam1.innerText = naam1;
    nameTeam2.innerText = naam2;


    if (servingTeam1.checked == true) {
        alert("Team 1 begint")
    }
    if (servingTeam2.checked == true) {
        alert("Team 2 begint")
    }

}

startButton.addEventListener('click', handleStartButton);

