const userId = telegram.WebApp.initDataUnsafe.user.id;  // Telegram ішінен user_id алу

async function getBalance() {
  const response = await fetch("http://localhost:8000/get_balance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId })
  });
  const data = await response.json();
  document.getElementById("balance").innerText = `${data.balance} TON`;
}
