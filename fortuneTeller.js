// Function to generate a random number between 0 (inclusive) and 'num' (exclusive)
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// Object containing arrays of fortunes for different categories
const fortunes = {
    kids: [1, 2, 3, 4, 5],
    lifestyle: ['happy', 'rich', 'famous', 'a kick-ass programmer', 'a good friend', 'healthy'],
    work: ['IT', 'marketing', 'finance', 'health care']
};

// Array to store the individual fortune messages
let personalFortune = [];

// Loop through each category in the 'fortunes' object
for (let fortune in fortunes) {
    // Generate a random index to select a fortune from the current category
    let fortuneId = generateRandomNumber(fortunes[fortune].length);

    // Use a switch statement to handle different fortune categories
    switch (fortune) {
        case 'kids':
            personalFortune.push(`You will have "${fortunes[fortune][fortuneId]}" kids.`);
            break;
        case 'lifestyle':
            personalFortune.push(`You will be "${fortunes[fortune][fortuneId]}".`);
            break;
        case 'work':
            personalFortune.push(`You will work in "${fortunes[fortune][fortuneId]}".`);
            break;
        default:
            // Display a message for any unexpected category
            console.log('Missing information..');
    }
}

// Function to format and display the collected fortune messages
function formatFortune() {
    const formatted = personalFortune.join('\n');
    console.log(formatted);
}

// Call the formatFortune function with the collected fortune messages
formatFortune(personalFortune);