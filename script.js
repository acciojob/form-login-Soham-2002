function getFormvalue() {
    //Write your code here
	let firstName = document.querySelector('input[name="fname"]');
	let lastName = document.querySelector('input[name="lname"]');
	let str = firstName.value + " " + lastName.value
	alert(str)
}
