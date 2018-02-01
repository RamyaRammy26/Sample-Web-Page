	function validation()
	{
		var name,email,mobile,pass,confPass,genderM,genderF,hobby1,hobby2,hobby3,city;
		name = document.getElementById("name").value;
		email = document.getElementById("email").value;
		pass = document.getElementById("pass").value;
		confPass = document.getElementById("confirmPass").value;
		mobile = document.getElementById("mobile").value;
		city = document.getElementById("city").value;
		genderM = document.getElementById("male").checked;
		genderF = document.getElementById("female").checked;
		hobby1 = document.getElementById("hobby1").checked;
		hobby2 = document.getElementById("hobby2").checked;
		hobby3 = document.getElementById("hobby3").checked;
		//trim the values
		name = name.trim();
		email = email.trim();
		pass = pass.trim();
		confPass = confPass.trim();
		mobile = mobile.trim();
		//boolean variable to check the status
		var status = true;
		var isActive = true;
		//check the conditions
		if(name == "")
		{
			 status = false;
			 document.getElementById("name").style.borderColor = "red";
			 document.getElementById("nameError").innerHTML = "Please Enter Name";
		}
		else{
			document.getElementById("name").style.borderColor = "green";
			document.getElementById("nameError").innerHTML = "";
		}	
		//email checking
		if(email == "")
		{
			 status = false;
			 document.getElementById("email").style.borderColor = "red";
			 document.getElementById("emailError").innerHTML = "Please Enter Email Id";
		}
		else{
			document.getElementById("email").style.borderColor = "green";
			document.getElementById("emailError").innerHTML = "";
		}	
		//password checking
		if(pass == "")
		{
			 status = false;
			 document.getElementById("pass").style.borderColor = "red";
			 document.getElementById("passError").innerHTML = "Please Enter Password";
		}
		else{
			document.getElementById("pass").style.borderColor = "green";
			document.getElementById("passError").innerHTML = "";
		}	
		//confirm password
		if(confPass == "")
		{
			 status = false;
			 document.getElementById("confirmPass").style.borderColor = "red";
			 document.getElementById("confirmPassError").innerHTML = "Please Re-enter Password";
		}
		else{
			//pwValidate();
			if(pass == confPass){
				document.getElementById("confirmPass").style.borderColor = "green";
			document.getElementById("confirmPassError").innerHTML = "";
			}
			else{
				document.getElementById("confirmPass").style.borderColor = "red";
			document.getElementById("confirmPassError").innerHTML = "Please Re-enter Password";
			}
			
		}
		//mobile number checking
		if(mobile == "" || mobile.length > 10 || mobile.length < 10 || isNaN(mobile))
		{
			 status = false;
			 document.getElementById("mobile").style.borderColor = "red";
			 document.getElementById("mobileError").innerHTML = "Please Enter Valid Mobile No";
		}
		else{
			document.getElementById("mobile").style.borderColor = "green";
			document.getElementById("mobileError").innerHTML = "";
		}	
		//city checking
		if(city == "")
		{
			 status = false;
			 document.getElementById("city").style.borderColor = "red";
			 document.getElementById("cityError").innerHTML = "Please Select City";
		}
		else{
			document.getElementById("city").style.borderColor = "green";
			document.getElementById("cityError").innerHTML = "";
		}	
		//gender checking
		if(genderM == true || genderF == true)
		{
			 //status = false;
			// document.getElementById("city").style.borderColor = "red";
			 document.getElementById("genderError").innerHTML = "";
		}
		else{
			//document.getElementById("").style.borderColor = "green";
			document.getElementById("genderError").innerHTML = "Please Select Gender";
		}	
		//hobbies checking
		if(hobby1 == true || hobby2 == true || hobby3 == true)
		{
			 //status = false;
			// document.getElementById("city").style.borderColor = "red";
			 document.getElementById("hobbyError").innerHTML = "";
		}
		else{
			//document.getElementById("").style.borderColor = "green";
			document.getElementById("hobbyError").innerHTML = "Please Select Hobbies";
		}	
		
		//return status
		if(status == true)
		{
			document.getElementById("f1").submit();
		}	
		
		
	}	
	/*function pwValidate()
	{
		if(pass == confPass){
			document.getElementById("confirmPass").style.borderColor = "green";
			document.getElementById("confirmPassError").innerHTML = "";
			}
			else{
			document.getElementById("confirmPass").style.borderColor = "red";
			document.getElementById("confirmPassError").innerHTML = "Please Re-enter Password";
			}
	}	*/
	function resetBtn()
	{
		//name
		document.getElementById("name").style.borderColor = "";
		document.getElementById("nameError").innerHTML = "";
		//email
		document.getElementById("email").style.borderColor = "";
		document.getElementById("emailError").innerHTML = "";
		//password
		document.getElementById("pass").style.borderColor = "";
		document.getElementById("passError").innerHTML = "";
		//confirm password
		document.getElementById("confirmPass").style.borderColor = "";
		document.getElementById("confirmPassError").innerHTML = "";
		//mobile
		document.getElementById("mobile").style.borderColor = "";
		document.getElementById("mobileError").innerHTML = "";
		//city
		document.getElementById("city").style.borderColor = "";
		document.getElementById("cityError").innerHTML = "";
		//gender
		//document.getElementById("gender").style.borderColor = "";
		document.getElementById("genderError").innerHTML = "";
		//hobbies
		//document.getElementById("name").style.borderColor = "";
		document.getElementById("hobbyError").innerHTML = "";
		
		
		
		
		
	}	
	