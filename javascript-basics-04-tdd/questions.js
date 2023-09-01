const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e", ' ');
}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    if (text.length >= 5) {
        return text[4];
      } else {
        return '';
      }
}
const showChar9 = (text) => {
    return text.slice(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return typeof text === 'string';
}

const getExtension = (text) => {
    const parts = text.split('.');
    return parts.pop();
}
const countSpaces = (text) => {
    const spaces = text.match(/ /g);
    return spaces ? spaces.length : 0;
}
const InverseString = (text) => {
    return text.split('').reverse().join('');
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(num => Math.abs(num));
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * Math.pow(radius, 2));
}
const hypothenuse = (ab, ac) => {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}
const BMI = (weight, height) => {
    const bmi = weight / (height * height);
    return Math.round(bmi * 100) / 100;
}

const createLanguagesArray = () => {
    return ["Html", "CSS", "Java", "PHP"];
}

const createNumbersArray = () => {
    const numbers = [];
    for (let i = 0; i <= 5; i++) {
      numbers.push(i);
    }
    return numbers;
}

const replaceElement = (languages) => {
    if (languages.length >= 3) {
        languages[2] = 'Javascript';
      }
      return languages;
}

const addElement = (languages) => {
    languages.push('Ruby', 'Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(',');
}

const convertArrToStr = (languages) => {
    return languages.join(',');
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}