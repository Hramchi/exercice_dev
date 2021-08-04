var users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ];
  
  if(localStorage.getItem('localData'))
    users = JSON.parse(localStorage.getItem('localData'));
  
  // let users = JSON.parse(localStorage.getItem('localData'));
  
  
  //Print users informations
  function printData() {
    var table = document.getElementById('myTable');
    table.innerHTML = '';
    localStorage.setItem("localData", JSON.stringify(users));
    users = JSON.parse(localStorage.getItem('localData'));
    for(var i = 0; i < users.length; i++){
        var row = `<tr>
                        <td>${users[i].id}</td>
                        <td>${users[i].createdDate}</td>
                        <td><span style="background-color: ${users[i].status.toLocaleLowerCase()==='validé'?'#5BE881':users[i].status.toLocaleLowerCase()==='rejeté'?'#FF0000':users[i].status.toLocaleLowerCase()==='en validation'?'#FDB64D':'#b7b7b7'};padding: .4em;border-radius: 13px;">${users[i].status}</span></td>
                        <td>${users[i].firstName}</td>
                        <td>${users[i].lastName}</td>
                        <td>${users[i].userName}</td>
                        <td>${users[i].registrationNumber}</td>
                        <td id="drop"><i class="ri-delete-bin-6-line" onclick="deleteUser(this)"></i></td>
  
                  </tr>`
        table.innerHTML += row;
    }
  
  }
  printData();
  
  //Add new user
  function addUser() {
    users.push({
        id: Math.floor(Math.random() * 1000000000),
        createdDate: document.getElementById('date_creation').value,
        status: document.getElementById('etat').value,
        firstName: document.getElementById('nom').value,
        lastName: document.getElementById('prenom').value,
        userName: document.getElementById('nom_utilisateur').value,
        registrationNumber: document.getElementById('matricule').value
    });
    printData();
  }
  
  
  //Delete Users informations
  function deleteUser(obj) {
    let rowToDelete = obj.parentElement.parentElement;
    let userId = rowToDelete.children[0].innerText;
    users = users.filter(user => user.id != userId);
    console.log(users)
    rowToDelete.remove();
    printData();
  }
  
  
  
  //Close Modale form after saving data
  let BtnSave = document.getElementById('btn')
  BtnSave.addEventListener('click',function(){
        addUser();
        $("#myModal").modal('hide');
  })
  
  
  
  
  
  
  
  