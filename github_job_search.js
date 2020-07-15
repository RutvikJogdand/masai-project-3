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
    var url = "https://jobs.github.com/positions.json?description="+desc+"&"+"location="+location
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status == 200) {
        console.log(JSON.parse(xhr.response))
        var results= JSON.parse(xhr.response)

            if(results.length==0)
            {
                console.log("No results")
            }
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

    
    var get_res= document.getElementById("job_search_results")
    get_res.innerHTML=""
    // var temp=""
   
    for(var i=0; i<results.length; i++)
    {
        console.log(results[i].title, "AA")
        var card= document.createElement("div")
        card.setAttribute("class", "card")

        var card_body= document.createElement("div")
        card_body.setAttribute("class", "card-body")

        var p_title= document.createElement("p")
        p_title.innerHTML= "<a href="+results[i].url+">"+results[i].title+"</a>"
        p_title.setAttribute("class", "lead font-weight-bolder text-dark card-header mx-0")

        var p_company= document.createElement("p")
        p_company.textContent= "Company Name: "+results[i].company
        p_company.setAttribute("class", "text-muted")

        var p_location= document.createElement("p")
        p_location.textContent= results[i].location
        p_location.setAttribute("class", "text-danger small")
        
        var p_type= document.createElement("p")
        p_type.innerHTML= "Type: "+results[i].type
        p_type.setAttribute("class", "text-success")
        /*
        var p_url= document.createElement("p")
        p_url.textContent= "URL: "+results.items[i].clone_url

        var p_des= document.createElement("p")
        p_des.textContent= "Description: "+results.items[i].description */

        card_body.append(p_title,p_company, p_location, p_type)

        
        card.append(card_body)

        get_res.append(card)
    }
    
}