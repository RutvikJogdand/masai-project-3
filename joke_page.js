window.onload= function()
{
    var dark= document.getElementById("Dark_btn")
    var misc= document.getElementById("Miscellaneous_btn")
    var any_joke= document.getElementById("Any_btn")
    var prog= document.getElementById("Prog_btn")
    
    dark.addEventListener("click",submit_dark)
    misc.addEventListener("click", submit_misc)
    any_joke.addEventListener("click", submit_any)
    prog.addEventListener("click", submit_prog)
}

function submit_dark()
{
    var dark_value= document.getElementById("Dark_btn").value
    
    joke_req(dark_value)
}

function submit_misc()
{
    var misc_value= document.getElementById("Miscellaneous_btn").value
    
    joke_req(misc_value)
}

function submit_any()
{
    var any_joke_value= document.getElementById("Any_btn").value
    
    joke_req(any_joke_value)
}

function submit_prog()
{
    var prog_value= document.getElementById("Prog_btn").value
    
    joke_req(prog_value)
}

function joke_req(value)
{
    var xhr = new XMLHttpRequest()
    var url = "https://sv443.net/jokeapi/v2/joke/"+value
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status == 200) {
        console.log(JSON.parse(xhr.response))
        var results= JSON.parse(xhr.response)

        console.log(results.setup||results.joke)
        console.log(results.delivery)
            
        // console.log(results)

       
        var temp= display(results)
      }


      xhr.onerror= function(){
          console.log("error")
      }
    };
}

function display(results)
{
    var joke_display= document.getElementById("joke_display")

    joke_display.innerHTML=""

    if(results.setup!=undefined&&results.delivery!=undefined)
    {
        joke_display.innerHTML= "~"+results.setup+"<br><br>"+results.delivery+"~"
    }


    else
    {
        joke_display.innerHTML= "~"+results.joke+"~"
    }

    
}





