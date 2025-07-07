const apiUrl = "https://api.rootnet.in/covid19-in/stats/latest";
const stateSelect = document.getElementById("stateSelect");
const stateStats = document.getElementById("stateStats");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const summary = data.data.summary;
    document.getElementById("total").textContent =
      summary.total.toLocaleString();
    document.getElementById("deaths").textContent =
      summary.deaths.toLocaleString();
    document.getElementById("discharged").textContent =
      summary.discharged.toLocaleString();

    const regional = data.data.regional;
    stateSelect.innerHTML = `<option disabled selected>Select a state</option>`;
    regional.forEach((state) => {
      const option = document.createElement("option");
      option.value = state.loc;
      option.textContent = state.loc;
      stateSelect.appendChild(option);
    });

    stateSelect.addEventListener("change", () => {
      const selected = stateSelect.value;
      const stateData = regional.find((s) => s.loc === selected);

      if (stateData) {
        document.getElementById("stateName").textContent = stateData.loc;
        document.getElementById("stateConfirmed").textContent =
          stateData.totalConfirmed.toLocaleString();
        document.getElementById("stateDischarged").textContent =
          stateData.discharged.toLocaleString();
        document.getElementById("stateDeaths").textContent =
          stateData.deaths.toLocaleString();
        stateStats.style.display = "block";
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    document.getElementById("total").textContent = "Error";
    document.getElementById("deaths").textContent = "Error";
    document.getElementById("discharged").textContent = "Error";
    stateSelect.innerHTML = `<option>Error loading states</option>`;
  });
