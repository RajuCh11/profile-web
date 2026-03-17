// 🔥 Typing Animation
const text = "DevOps Engineer | AWS | Kubernetes | Terraform";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// 📊 Chart
const ctx = document.getElementById('chart');
let chart = new Chart(ctx, {
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

// 🔄 Real-time update
setInterval(async () => {
  let res = await fetch("/metrics");
  let data = await res.json();

  document.getElementById("cpu").innerText = data.cpu;
  document.getElementById("pods").innerText = data.pods;
  document.getElementById("status").innerText = data.status;

  chart.data.datasets[0].data.push(data.cpu);
  chart.data.datasets[0].data.shift();
  chart.update();

}, 3000);

// 🤖 Chatbot
document.getElementById("input").addEventListener("keypress", async (e)=>{
  if(e.key==="Enter"){
    let msg=e.target.value;

    let res=await fetch("/chat",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message:msg})
    });

    let data=await res.json();

    document.getElementById("messages").innerHTML += `<p>You: ${msg}</p>`;
    document.getElementById("messages").innerHTML += `<p>Bot: ${data.reply}</p>`;
    e.target.value="";
  }
});