function calcGrade() {
    //Create Constant Values for how each score is weighted
    const ASSIGN_WEIGHT = .30;
    const TEST_WEIGHT = .30;
    const PROJ_WEIGHT = .40;

    //Create variables and assign values from form
    let assignScore = document.getElementById("assign-score").value;
    let testScore = document.getElementById("test-score").value;
    let projScore = document.getElementById("proj-score").value;

    //Calculate the final grade
    let finalGrade = parseFloat(assignScore * ASSIGN_WEIGHT) + parseFloat(testScore*TEST_WEIGHT) + parseFloat(projScore * PROJ_WEIGHT);
    let letterGrade = '';

    if (finalGrade < 90 && finalGrade >= 80) {
        letterGrade = 'B';
    }
    else if (finalGrade < 80 && finalGrade >= 70) {
        letterGrade = 'C';
    }
    else if (finalGrade < 70 && finalGrade >= 60) {
        letterGrade = 'D';
    }
    else if (finalGrade < 60) {
        letterGrade = 'F';
    }
    else {
        letterGrade = 'A';
    }

    //Display Results
    document.getElementById("average-out").value = finalGrade.toFixed(1);
    document.getElementById("letter-grade").value = letterGrade;
}

function resetForm() {
    //Create an empty variable to set all values to
    let empty = "";

    //I prefer doing this over refreshing the entire page, as it seems much more efficient
    document.getElementById("assign-score").value = empty;
    document.getElementById("test-score").value = empty;
    document.getElementById("proj-score").value = empty;
    document.getElementById("average-out").value = empty;
    document.getElementById("letter-grade").value = empty;
}