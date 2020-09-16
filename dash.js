window.onload=function()
{
    var xhr = new XMLHttpRequest()
    var url = 'http://newsapi.org/v2/top-headlines?'+'country=us&'+'apiKey=1dda8b7eb49d40ce84a29146360b252f'
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
    console.log(results.articles, "ABBHHSH")

    var get_res= document.getElementById("res")
    get_res.innerHTML=""

    for(var i=0; i<results.articles.length; i++)
    {
        var card= document.createElement("div")
        card.setAttribute("class", "card p-4 mb-3 col-lg-4 col-sm-12 col-md-5")

        var card_img= document.createElement("img")
        card_img.src= results.articles[i].urlToImage
        card_img.setAttribute("class", "img-fluid p-2")

        var card_title= document.createElement("p")
        card_title.textContent= results.articles[i].title
        card_title.setAttribute("class", "card-title font-weight-bolder")

        var card_full_article= document.createElement("p")
        card_full_article.innerHTML= "Read full article "+"<a href="+results.articles[i].url+">HERE"+"</a>"

        card.append(card_img, card_title, card_full_article)

        get_res.append(card)
    }
    
}