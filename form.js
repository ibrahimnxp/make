const form = document.getElementById('roommateForm');
    const message = document.getElementById('responseMessage');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      message.textContent = "Submitting...";

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => data[key] = value);

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby1zX9_GQFmzvG1jIUfndzlbmsWp-SMSkBtW2fnQ_NVFmZx8kFodFqo3YDzK8mOO-zS/exec', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const result = await response.json();
        if (result.success) {
          message.style.color = "green";
          message.textContent = "You have successfully submitted your details!";
          form.reset();
        } else {
          throw new Error(result.message);
        }
      } catch (err) {
        message.style.color = "red";
        message.textContent = "Something went wrong. Please try again.";
      }
    });