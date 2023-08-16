function validate(){
    let companyName = document.getElementById("companyName").value;
    let contactName = document.getElementById("contactPerson").value;
    let phoneNum = document.getElementById("phone").value;
    let boothSize = document.getElementById("size").value;
    let chairAmount = document.getElementById("chairAmount").value;
    if (companyName == "" || contactName == "" || phoneNum == ""){
        alert("Please fill in required fields")
    }
    else if (boothSize == "-"){
        alert("Please select a booth size")
    }
    else if(chairAmount != "" && (chairAmount < 1 || chairAmount > 10)){
        alert("Chair amount must be between 1 to 10")
    }
    else
        alert("success");
    
}