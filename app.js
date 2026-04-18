function calculateStrength() {
    let bodyweight = parseFloat(document.getElementById("bodyweight").value);
    let liftType = document.getElementById("liftType").value;
    let liftWeight = parseFloat(document.getElementById("liftWeight").value);
    let result = document.getElementById("result");

    if (bodyweight <= 0 || liftWeight <= 0 || isNaN(bodyweight) || isNaN(liftWeight)) {
        result.textContent = "Please enter valid numbers.";
        return;
    }

    let ratio = liftWeight / bodyweight;
    let tier = "";

    // BENCH
    if (liftType === "bench") {
        if (ratio < 0.75) {
            tier = "Bronze";
        } else if (ratio < 1.0) {
            tier = "Silver";
        } else if (ratio < 1.25) {
            tier = "Gold";
        } else if (ratio < 1.75) {
            tier = "Platinum";
        } else if (ratio < 2.0) {
            tier = "Elite";
        } else if (ratio < 2.25) {
            tier = "You Are Him 😤";
        } else {
            tier = "What are you, Ronnie Coleman?? 💀";
        }
    }

    // SQUAT
    else if (liftType === "squat") {
        if (ratio < 1.0) {
            tier = "Bronze";
        } else if (ratio < 1.5) {
            tier = "Silver";
        } else if (ratio < 2.0) {
            tier = "Gold";
        } else if (ratio < 2.5) {
            tier = "Platinum";
        } else if (ratio < 3.0) {
            tier = "Elite";
        } else if (ratio < 3.5) {
            tier = "You Are Him 😤";
        } else {
            tier = "What are you, Ronnie Coleman?? 💀";
        }
    }

    // DEADLIFT
    else if (liftType === "deadlift") {
        if (ratio < 1.25) {
            tier = "Bronze";
        } else if (ratio < 1.75) {
            tier = "Silver";
        } else if (ratio < 2.25) {
            tier = "Gold";
        } else if (ratio < 2.75) {
            tier = "Platinum";
        } else if (ratio < 3.25) {
            tier = "Elite";
        } else if (ratio < 3.75) {
            tier = "You Are Him 😤";
        } else {
            tier = "What are you, Ronnie Coleman?? 💀";
        }
    }

    result.textContent = `Your ${liftType} is ${ratio.toFixed(2)}x bodyweight. ${tier}`;
}
