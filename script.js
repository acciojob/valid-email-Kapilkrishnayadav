function validEmail(str) {
  //your JS code here.
	let trimEmail=str.trim();
	if(trimEmail=="")
		return false;
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})*$/;
	return emailRegex.test(trimEmail);
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
