const form = document.getElementById("roommateForm");
    const statusDiv = document.getElementById("status");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      statusDiv.textContent = "Submitting...";

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycby1zX9_GQFmzvG1jIUfndzlbmsWp-SMSkBtW2fnQ_NVFmZx8kFodFqo3YDzK8mOO-zS/exec", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });

        const result = await response.json();
        if (result.result === "success") {
          statusDiv.textContent = "✅ Submission successful!";
          form.reset();
        } else {
          statusDiv.textContent = "❌ Error: " + result.message;
        }
      } catch (err) {
        statusDiv.textContent = "❌ Failed to submit: " + err.message;
      }
    });

  </script>
