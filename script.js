// script.js
const colors = ['Red', 'Blue', 'Green', 'Orange', 'Purple'];

function loadPreferences() {
    const theme = localStorage.getItem('theme') || 'light';
    const listStyle = localStorage.getItem('listStyle') || 'expanded';
    document.body.className = theme;
    document.getElementById('color-list').className = listStyle;
}

function savePreferences() {
    const themeSelect = document.getElementById('theme');
    const listStyleSelect = document.getElementById('list-style');
    localStorage.setItem('theme', themeSelect.value);
    localStorage.setItem('listStyle', listStyleSelect.value);
    loadPreferences();
}

function createPreferences() {
    const preferences = document.getElementById('preferences');
    const themeSelect = document.createElement('select');
    themeSelect.id = 'theme';
    const themeOptions = ['light', 'dark'];
    themeOptions.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme;
        option.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
        themeSelect.appendChild(option);
    });
    preferences.appendChild(themeSelect);

    const listStyleSelect = document.createElement('select');
    listStyleSelect.id = 'list-style';
    const listStyleOptions = ['expanded', 'circle'];
    listStyleOptions.forEach(style => {
        const option = document.createElement('option');
        option.value = style;
        option.textContent = style.charAt(0).toUpperCase() + style.slice(1);
        listStyleSelect.appendChild(option);
    });
    preferences.appendChild(listStyleSelect);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', savePreferences);
    preferences.appendChild(saveButton);
}

function createColorList() {
    const colorList = document.getElementById('color-list');
    colors.forEach(color => {
        const listItem = document.createElement('li');
        listItem.textContent = color;
        colorList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    createPreferences();
    createColorList();
});