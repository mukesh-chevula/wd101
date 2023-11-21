      function submitForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var dob = document.getElementById("dob").value;

        var table = document.getElementById("submittedValues");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = name;
        cell2.innerHTML = email;
        cell3.innerHTML = dob;

        document.getElementById("registrationForm").reset();
      }
