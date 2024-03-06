console.log("test");



function handleStartButton(event){
    console.log("you pressed the button");
    let naam1 = inputTeam1.value;
    let naam2 = inputTeam2.value;
    
    if (naam1 == "") {
        alert("Vul een naam in bij team 1");
    }
    if (naam1 != "") {
        nameTeam1.innerText = inputTeam1.value;
        naamEEN = 1
    }

    if (naam2 == "") {
        alert("Vul een naam in bij team 2");
    }
    if (naam2 != "") {
        nameTeam2.innerText = inputTeam2.value;
        naamTWEE = 1
    }

    if (naamEEN == naamTWEE) {
        if (servingTeam1.checked == true){
            alert("Team 1 begint")
        }
    
        if (servingTeam2.checked == true){
            alert("Team 2 begint")
        }
    }

}

startButton.addEventListener('click', handleStartButton);

