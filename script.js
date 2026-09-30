let members = [];

function addMember() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const plan = document.getElementById("plan").value;

  if (!name || !email || !phone || !plan) {
    alert("Please fill all fields!");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  members.push({ name, email, phone, plan });
  displayMembers();
  ["name", "email", "phone", "plan"].forEach(id => {
    document.getElementById(id).value = "";
  });
}

function displayMembers() {
  const list = document.getElementById("memberList");
  list.innerHTML = "";
  members.forEach((member, index) => {
    const row = document.createElement("tr");
    [member.name, member.email, member.phone, member.plan].forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteMember(index));
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    list.appendChild(row);
  });
  document.getElementById("totalMembers").textContent = members.length;
}

function deleteMember(index) {
  if (confirm("Are you sure you want to delete this member?")) {
    members.splice(index, 1);
    displayMembers();
  }
}

function searchMember() {
  const query = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll("#memberList tr").forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(query) ? "" : "none";
  });
}

function logout() {
  alert("Logged out successfully!");
}
