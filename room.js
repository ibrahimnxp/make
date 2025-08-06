const publicSpreadsheetURL = 'https://docs.google.com/spreadsheets/d/1tAFav2lqkVBbM9MPIJ-2wt7yvd5Mpu97HYYIZJvdfwA/pubhtml';

    function fetchRoommatesData() {
      Tabletop.init({
        key: publicSpreadsheetURL,
        callback: showRoommates,
        simpleSheet: true
      });
    }

    function showRoommates(data) {
      const container = document.getElementById("roommateList");
      container.innerHTML = "";
      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "roommate-card";
        card.innerHTML = `
          <h3>${item.Name} - ${item.Level}</h3>
          <p><strong>Department:</strong> ${item.Department}</p>
          <p><strong>Religion:</strong> ${item.PersonalReligion}</p>
          <p><strong>Preferred Religion:</strong> ${item.PreferredReligion}</p>
          <p><strong>Preferred Level:</strong> ${item.PreferredLevel}</p>
          <p><strong>Preferred Gender:</strong> ${item.PreferredGender}</p>
          <p><strong>Hostel Location:</strong> ${item.HostelLocation}</p>
          <p><strong>Price:</strong> ₦${item.HostelPrice}</p>
          <p><strong>Payment Schedule:</strong> ${item.PaymentSchedule}</p>
          <a class="whatsapp-btn" href="https://wa.me/${item.WhatsAppContact}" target="_blank">
            Contact on WhatsApp
          </a>
        `;
        container.appendChild(card);
      });
    }

    window.addEventListener("DOMContentLoaded", fetchRoommatesData);