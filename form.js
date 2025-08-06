
  document.getElementById("roommateForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycby1zX9_GQFmzvG1jIUfndzlbmsWp-SMSkBtW2fnQ_NVFmZx8kFodFqo3YDzK8mOO-zS/exec", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert("✅ Your details have been submitted successfully!");
        form.reset();
      } else {
        alert("❌ Submission failed. Please try again.");
      }
    })
    .catch(error => {
      console.error("Fetch Error:", error);
      alert("⚠️ Something went wrong. Please check your internet or try again later.");
    });
  });
