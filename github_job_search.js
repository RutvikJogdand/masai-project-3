window.onload= function(){

    var get_search_btn= document.getElementById("search_btn")

    get_search_btn.addEventListener("click", get_values)
}

function get_values()
{
    event.preventDefault()

    var get_job_desc= document.getElementById("description").value
    var get_location= document.getElementById("location").value
    
    send_req(get_job_desc, get_location)
}


function send_req(desc, location)
{
    var xhr = new XMLHttpRequest()
    var url = "https://jobs.github.com/positions.json"
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status == 200) {
        console.log(JSON.parse(xhr.response))
        var results= JSON.parse(xhr.response)

        // console.log(results)
       
      }

      xhr.onerror= function(){
          console.log("error")
      }
    };
}