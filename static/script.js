// 🌌 Background
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true }
  }
});

// 📸 Expand profile
function expandProfile() {
  document.getElementById("profileModal").style.display = "block";
}

// ❌ Close profile
function closeProfile() {
  document.getElementById("profileModal").style.display = "none";
}

// 📊 Chart
const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5'],
    datasets: [{
      label: 'CPU',
      data: [30,40,50,60,70],
      borderColor: 'cyan'
    }]
  }
});

// 🔄 Dummy real-time
setInterval(() => {
  document.getElementById("cpu").innerText = Math.floor(Math.random()*50+30);
  document.getElementById("pods").innerText = Math.floor(Math.random()*5+3);
  document.getElementById("status").innerText = "Healthy";
}, 3000);
