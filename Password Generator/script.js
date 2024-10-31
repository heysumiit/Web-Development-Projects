document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characterSet = '';
    if (includeUppercase) characterSet += uppercaseLetters;
    if (includeLowercase) characterSet += lowercaseLetters;
    if (includeNumbers) characterSet += numbers;
    if (includeSpecial) characterSet += specialCharacters;

    if (characterSet === '') {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    document.getElementById('result').textContent = password;
});
