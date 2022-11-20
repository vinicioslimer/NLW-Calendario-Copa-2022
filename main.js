function createGame(player1, hour, player2) {
  return `
  <li>
      <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `;
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
  <h2>${date}<span>${day}</span></h2>

  <ul>
    ${games}
  </ul>
</div>
  `;
}

document.querySelector("#cards").innerHTML = 
 createCard("29/02", "dominga", 
    createGame("brazil", "24:30", "serbia")) +
    createCard("29/02", "dominga", 
    createGame("brazil", "24:30", "serbia")) +
    createCard("29/02", "dominga", 
    createGame("brazil", "24:30", "serbia")) 
    


