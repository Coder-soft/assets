const fs = require('fs');
const path = require('path');

// Function to get all music file names from the current directory
function getMusicFileNames() {
  const currentDir = __dirname;
  const files = fs.readdirSync(currentDir);
  
  const supportedExtensions = ['.mp3', '.wav'];
  
  // Filter for music files and exclude the script itself and the output JSON
  const scriptName = path.basename(__filename);
  const outputName = 'music-files.json';
  
  return files.filter(file => 
    supportedExtensions.includes(path.extname(file).toLowerCase()) &&
    file !== scriptName &&
    file !== outputName
  );
}

// Write the list of music file names to a JSON file
function generateMusicFileList() {
  const musicFileNames = getMusicFileNames();
  const jsonContent = JSON.stringify(musicFileNames, null, 2);
  fs.writeFileSync(path.join(__dirname, 'music-files.json'), jsonContent);
}

generateMusicFileList();