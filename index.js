const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = lowercase.toUpperCase();
const numbers = '0123456789';
const characters = lowercase + uppercase + numbers;

export function randomInteger(min, max) {
    if (!Number.isInteger(min)) {
        throw '`min` should be an integer';
    }

    if (!Number.isInteger(max)) {
        throw '`max` should be an integer';
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomString(length) {
    if (!Number.isInteger(length)) {
        throw '`length` should be an integer';
    }

    // make sure it starts with a lowercase letter
    let str = lowercase[randomInteger(0, lowercase.length - 1)];

    for (let i = 1; i < length; i++) {
        str += characters[randomInteger(0, characters.length - 1)];
    }

    return str;
}
