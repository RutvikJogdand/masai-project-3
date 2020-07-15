var arr_name_and_passwords=[

    {email: "Harry@gmail.com", password: "HarryPotter456"},

    {email: "Albus@gmail.com", password: "Magic456"},

    {email: "Snape@gmail.com", password: "Lilly789"},

    {email: "Tom@gmail.com", password: "DarkLord456"}

]

var len= arr_name_and_passwords.length
window.onload= function(){

    var get_btn= document.getElementById("submit_btn")
    get_btn.addEventListener("click", get_values)
    localStorage.setItem("names",JSON.stringify(arr_name_and_passwords))
}


function get_values()
{
    event.preventDefault()
    var email= document.getElementById("user_email").value
    var password= document.getElementById("user_password").value

    verify_values(email, password)
}

function verify_values(email, password)
{
    var get_wrong_login= document.getElementById("wrong_login")
    for(var i=0; i<len; i++)
        {
            if(email==arr_name_and_passwords[i].email && password==arr_name_and_passwords[i].password)
                {
                        //console.log("MATCH")
                        window.location.href= "dash.html"
                        alert("Login Successful")
                        break
                        
                }
            else
                {
                    get_wrong_login.innerHTML="Wrong email or password"
                }                 
        }
}





