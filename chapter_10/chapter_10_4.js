function plumages(birds) {
    return new Map(birds
                    .map(b => [b.map, createBird(b)])
                    .map(bird => [bird.name, bird.plumage]));
}

function speeds(birds) {
    return new Map(birds
                    .map(b => [b.name, createBird(b)])
                    .map(bird => [bird.name, bird.airSpeeVelocity]));
}

function createBird(bird) {
    switch (bird.type) {
    case 'EuropeanSwallow':
        return new EuropeanSwallow(bird);
    case 'AfricanSwallow':
        return new AfricanSwallow(bird);
    case 'NorwegianParrot':
        return new NorwegianParrot(bird);
    default:
        return new Bird(bird)
    }
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() {
        return "unknown";
    }

    get airSpeedVelocity() {
        return null;
    }
}

class EuropeanSwallow extends Bird {
    get plumage() {
        return "average";
    }
    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallow extends Bird {
    get plumage() {
        return (this.numberOfCoconuts > 2) ? "tired" : "average";
    }
    get airSpeedVelocity() {
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class NorwegianParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }
    get airSpeedVelocity() {
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
    }
}
