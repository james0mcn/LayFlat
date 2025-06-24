let sl77 = false;

  function init() {
    const machineTypeSelect = document.getElementById("machineType");
    const checkboxStatus = document.getElementById("checkboxStatus");

    machineTypeSelect.addEventListener("change", () => {
      sl77 = machineTypeSelect.value === "o2";
      checkboxStatus.textContent = sl77 ? "SL-77" : "SL-10";
    });

    // Optional: trigger once on load
    machineTypeSelect.dispatchEvent(new Event("change"));

    const diaElement = document.getElementById("diaInput");

  diaElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission or default behavior
      CalcLayFlat(); // Call your calculation function
    }
  });
  }

  function CalcLayFlat() {
    const diaElement = document.getElementById("diaInput");
    const resultElement = document.getElementById("result");

    const diameterValue = parseFloat(diaElement.value);

    if (isNaN(diameterValue)) {
      resultElement.textContent = "Invalid input.";
      return;
    }

    const mult = sl77 ? 3 : 2;
    const circumference = (diameterValue + mult) * Math.PI;
    const layflat = circumference / 2;
    document.getElementById("circumference").textContent = circumference.toFixed(2);
     document.getElementById("rawLF").textContent = layflat.toFixed(2);
    resultElement.textContent = Math.ceil(layflat);

    console.log("Dia Value:", diameterValue);
    console.log("Cir Value:", circumference);
    console.log("Layflat:", layflat);
  }

  // Initialize on load
  window.addEventListener("DOMContentLoaded", init);