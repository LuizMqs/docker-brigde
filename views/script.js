async function addContact() {
  document.getElementById("table").innerHTML = "";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const body = {
    name: name,
    email: email,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  await fetch("http://localhost:5000/insert/contact", options)
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
      } catch (error) {
        return console.error(error);
      }
    })
    .then((data) => {
      console.log(data);
    });

  getTable();
}

async function getTable() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let data = await fetch("http://localhost:5000/get/contact", options).then(
    (res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
      } catch (error) {
        return console.error(error);
      }
    }
  );

  drawTable(data);
}

function drawTable(data) {
  document.getElementById("table").innerHTML += `
    <tr>
      <th>Name</th>
        <th>Email</th>
        <th>Excluir</th>
    </tr>
  `;

  data.data.forEach((element, id) => {
      document.getElementById("table").innerHTML += `
        <tr>
          <td>${element.name}</td>
          <td>${element.email}</td>
          <td><img src="lixeira.svg" onclick="del('${element.id}')" /></td>
        </tr>
      `;
  });
}

async function del(data) {
  document.getElementById("table").innerHTML = "";

  let id = data

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let cont = await fetch(`http://localhost:5000/delete/contact/${id}`, options)
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
      } catch (error) {
        return console.error(error);
      }
    })
    
    drawTable(cont);
}
