let level = 1;
let progress = 0;

document.getElementById('level').textContent = level;
document.getElementById('progress').textContent = progress;

setInterval(() => {
  progress += 1;

  if (progress >= 100) {
    level++;
    progress = 0;
    alert(`Congratulations! You are now level ${level}!`);
  }

  document.getElementById('level').textContent = level;
  document.getElementById('progress').textContent = progress;
  
  // Position the level element in the top right corner
  document.getElementById('level-container').style.position = 'fixed';
  document.getElementById('level-container').style.top = '0';
  document.getElementById('level-container').style.right = '0';
}, 1000); // update the level every 1000 milliseconds (1 second)
