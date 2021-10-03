charge = summer() ? summerCharge() : regularCharge();


function summer() {
    return !aDate.isBefore(plan.summmerStart) && !aDate.isAfter(plan.summerEnd)
}

function summerCharge() {
    return quantity * plan.summerRate;
}

function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}
