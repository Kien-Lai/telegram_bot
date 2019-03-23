module.exports = saveNewVariable = (variableName, variableValue) => {
    const fs = require('fs');
    const localStorage = JSON.parse(fs.readFileSync('./local_storage'));
    localStorage[variableName+""] = variableValue+"";
    fs.writeFileSync('./local_storage', JSON.stringify(localStorage));
}