// Filename:	validation.js
// Description:	Provides login validation for the Washington State Department
//				of Health site.
//				At present, all validation is done client side against a
//				static list of known users. (All one of him.)


// A sample listing of user records.
const userRecords = [{
	userName: 'Jeffery Aramini',
	userEmail: 'jeff_aramini@ihealthsolutions.net',
	userImage: '../assets/jeff-pic.png',
	password: 'test'
}];
	
	


// Name:		Validation
// Description:	A validation object, containing a list of known users,
//				and methods to check given 
class Validation {
	// Name:		findRecord()
	// Description: Searches the list of user records for a user with
	//				the given email. Returns their name, email, and
	//				picture.
	// Parameter:	email - The email address to check for.
	findRecord(email) {
		let findEmail = (user) => {
			return (user.userEmail === email);
		}
		
		let foundRecord = userRecords.find(findEmail);
		
		return (foundRecord);
	}
	
	
	// Name:		checkPassword()
	// Description:	Checks the user records for the given user and
	//				determines if the password given is 
	// Parameters:	email - The email address of the user.
	//				enteredPassword - The password entered by the user.
	checkPassword(email, enteredPassword) {
		let findEmail = (user) => {
			return (user.userEmail === email);
		}
		
		let foundRecord = userRecords.find(findEmail);;
		
		if (foundRecord) {
			if (foundRecord.password === enteredPassword) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}
}


export default Validation