console.log("test");



function handleStartButton(event){
    console.log("you pressed the button");
    let naam1 = inputTeam1.value;
    let naam2 = inputTeam2.value;
    if (naam1 != "") {
        nameTeam1.innerText = inputTeam1.value;
    }


    if (naam2 != "") {
        nameTeam2.innerText = inputTeam2.value;
    }


    if (servingTeam1.checked == true){
        alert("you checked this box")
    }

    if (servingTeam2.checked == true){
        alert("you checked this box")
    }

}

startButton.addEventListener('click', handleStartButton);

