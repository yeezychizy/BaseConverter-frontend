function convertBase() {
    const inputNumber = document.getElementById("inputNumber").value;
    const inputBase = document.getElementById("inputBase").value;
    const outputBase = document.getElementById("outputBase").value;
  
    // Make a POST request to your backend
    fetch("http://localhost:8080/output-number", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputNumber: inputNumber,
        inputBase: parseInt(inputBase),
        outputBase: parseInt(outputBase),
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        // Display the result in the result div
        document.getElementById("result").innerText = `Result: ${result}`;
      })
      .catch((error) => console.error("Error:", error));
  }