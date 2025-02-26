let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("Number").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    console.log(name);
    console.log(email);
    console.log(number);
    console.log(password);
    console.log(confirmPassword);

    let obj = {
        name, email, number, password, confirmPassword
    };
    if(obj.password != obj.confirmPassword){
        alert("Password and Confirm Password should be same");
        return;
    }

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = obj.name;

    let td2 = document.createElement("td");
    td2.innerText = obj.email;

    let td3 = document.createElement("td");
    td3.innerText = obj.number;

    let td4 = document.createElement("td");
    td4.innerText = obj.password;

    let td5 = document.createElement("td");
    td5.innerText = obj.confirmPassword;


    tr.append(td1, td2, td3, td4, td5);
    document.getElementById("tbody").append(tr)

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Number").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
})

