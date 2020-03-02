function login()
	{
		var uname = document.getElementById("username-field").value;
		var pwd = document.getElementById("password-field").value;
		if ( uname == "abc" && pwd == "123"){
            
            window.open('success.html'); // Redirecting to other page.
            
            }
            else{
                alert ("not correct");
            }
        }        
        