function addNew(){ 
    // creates Table
    let table = document.getElementsByTagName('table')[0];
    let row = table.insertRow();
    // insert new row

    let cellname = row.insertCell(0);
    // first Row for name
    let cellLastName = row.insertCell(1);
    // second Row for Surname
    let cellAge = row.insertCell(2);

    let cellEdit = row.insertCell(3);
    let cellDelete = row.insertCell(4);
    // 3rd row for Age

    // Store Class Data
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let age = document.getElementById('age').value;

    cellname.append(firstName);
    cellLastName.append(lastName);
    cellAge.append(age);

    cellEdit.append('Edit');
    cellDelete.append('Delete');
    // Creates the Edit and Delete cells dynamically

    cellEdit.addEventListener('click', function(){
        cellname.textContent = '';
        cellLastName.textContent = '';
        cellAge.textContent = '';
        // remove previous data in cells

        let $name = prompt('Please enter new Name');
        firstName.value = $name.value;
        cellname.append($name);
        let $lname = prompt('Please enter new Surname');
        lastName.value = $lname.value;
        cellLastName.append($lname);

        let $age = prompt('Please enter a new Age');
        cellAge.append($age);
    });
    cellDelete.addEventListener('click', function($this){
    let removeRow = table.deleteRow();
     row.removeAttribute(0);
      row.deleteCell(1);     
        // $this.deleteRow();
    });
    // cellname.innerHTML = firstName;
    // cellLastName.innerHTML = lastName;
    // cellAge.innerHTML = age;

    
}
function edit(){
    // // creates Table
    // let table = document.getElementsByTagName('table')[0];
    // let row = table.insertRow();
    // // insert new row

    // let cellname = row.insertCell(0);
    // // first Row for name
    // let cellLastName = row.insertCell(1);
    // // second Row for Surname
    // let cellAge = row.insertCell(2);
    // // 3rd row for Age

    // // Store Class Data
    // let firstName = document.getElementById('fname').value;
    // let lastName = document.getElementById('lname').value;
    // let age = document.getElementById('age').value;

    // alert(firstName.value);
    // alert(lastName.value);
    // alert(age.value);
}