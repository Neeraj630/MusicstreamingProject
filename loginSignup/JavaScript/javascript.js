function validateform(){
        let x = document.forms["myform"]["femail"].value;
        if(x == ""){
            alert("Email can't be empty.");
            return false;
        }
        let y = document.forms["myform"]["fpass"].value;
        if(y == ""){
            alert("Password should be entered.")
        }
    }

    function signupvalidate(){
        let rp = document.forms["mysignupform"]["repass"].value;
        if(rp == ""){
            alert("Fields Cant't be empty.");
            return false;
        }
        
    }

