const alphabet = [
	{ letter: 'א', number: 1 },
	{ letter: 'ב', number: 2 },
	{ letter: 'ג', number: 3 },
	{ letter: 'ד', number: 4 },
	{ letter: 'ה', number: 5 },
	{ letter: 'ו', number: 6 },
	{ letter: 'ז', number: 7 },
	{ letter: 'ח', number: 8 },
	{ letter: 'ט', number: 9 },
	{ letter: 'י', number: 10 },
	{ letter: 'כ', number: 20 },
	{ letter: 'ך', number: 20 },
	{ letter: 'ל', number: 30 },
	{ letter: 'מ', number: 40 },
	{ letter: 'ם', number: 40 },
	{ letter: 'נ', number: 50 },
	{ letter: 'ן', number: 50 },
	{ letter: 'ס', number: 60 },
	{ letter: 'ע', number: 70 },
	{ letter: 'פ', number: 80 },
	{ letter: 'ף', number: 80 },
	{ letter: 'צ', number: 90 },
	{ letter: 'ץ', number: 90 },
	{ letter: 'ק', number: 100 },
	{ letter: 'ר', number: 200 },
	{ letter: 'ש', number: 300 },
	{ letter: 'ת', number: 400 },
];

const name = prompt('איך קוראים לך?');
console.log(name);

let sum = 0;
for (char of name) {
	for (let i = 0; i < alphabet.length; i++) {
		if (char === alphabet[i].letter) {
			sum += alphabet[i].number;
		}
	}
}

console.log(sum);
