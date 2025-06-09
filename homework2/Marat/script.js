const users = [
	{ name: "Poxos", email: "Poxos@mail.com", gender: "Male", date: "01.01.2025" },
	{ name: "Petros", email: "Petros@mail.com", gender: "Male", date: "01.02.2025" },
	{ name: "Metros", email: "Metros@mail.com", gender: "Female", date: "01.03.2025" },
	{ name: "Setros", email: "Setros@mail.com", gender: "Female", date: "01.04.2025" }
];

const tbody = document.getElementById("tableBody");
const totalCell = document.getElementById("total");

users.forEach((user, index) => {
	const row = document.createElement("tr");

	row.innerHTML = `
					<td>${index + 1}</td>
					<td>${user.name}</td>
					<td>${user.email}</td>
					<td>${user.gender}</td>
					<td>${user.date}</td>
				`;

	tbody.appendChild(row);
});

totalCell.textContent = `Total: ${users.length}`;
