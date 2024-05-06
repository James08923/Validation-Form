function changeIcon(){
    var passwordInput =document.getElementById("password")
    var img =document.getElementById("img")
    if(passwordInput.type == "password"){
        passwordInput.type = "text"
        img.src = "./images/invisible.png"
    }
    else{
        passwordInput.type = "password"
        img.src = "./images/show.png"
    }
}

function validation(){
    var username =document.getElementById("username").value
    var email =document.getElementById("email").value
    var password =document.getElementById("password").value
    var mobileNumber =document.getElementById("mobileNumber").value
    
    var userCheck =/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
    var emailCheck =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    var passwordCheck=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    var mobileCheck=/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/

    if(userCheck.test(username))
        {
            document.getElementById("usernameError").innerHTML=""
           
        }
        else{
            document.getElementById("usernameError").innerHTML
             ="** Invalid username"
            return false
        }



        if(emailCheck.test(email))
            {
                document.getElementById("emailError").innerHTML=""
               
            }
            else{
                document.getElementById("emailError").innerHTML
                 ="** Invalid email"
                return false
            }






    if(passwordCheck.test(password))
        {
            document.getElementById("passwordError").innerHTML=""
           
        }    
        else{
            document.getElementById("passwordError").innerHTML
             ="** Invalid password"
            return false 
        }    





    





    if(mobileCheck.test(mobileNumber))
        {
            document.getElementById("mobileError").innerHTML=""
           
        }
        else{
            document.getElementById("mobileError").innerHTML
             ="** Invalid number"
            return false
        }


        var obj={
            name:username,
            email: email,
            password: password,
            mobileNumber: mobileNumber
  
        }
        console.log(obj)
        return false
}