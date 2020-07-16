# Engineer's Hub(project)

Description: This is made with the idea to help keep engineering students or techies updated with the news, various things happening in the tech
sector and also in other sectors. Apply to jobs on GITHUB and when bored, browse through some jokes. 

Table of Contents:
  1)Login Page
  2)Registeration Page
  3)Dashboard
  4)Jobs Page
  5)Jokes Page
  
Installations:
  To get the job listings, you may have to install the CORS extension for Chrome browser:
  You can install it from here: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
  This is required to avoid a CORS error.
  After installing the extension, pin it at the top of your Google Chrome browser, click on it then click on the big "C" to toggle it on.
  Once it turns red, you're good to go.
  
1)Login Page:
  Here for now i've used an array to store some pre-set emails and passwords for verification. In case you don't enter the right credentials, it
  displays an error message saying: "Wrong email or password"
  
  To login you can use: email: Albus and password: Magic456
  There is also a link given below for new users to register.
  
2)Registration Page:
  Here you can input your credentials to register as a new user.
  The register button redirects you to the login page as of now.
  This page is plain HTML for now and needs to be updated
  
3)Dashboard:
  I've used a News API here to display 20 news items as cards. 
  You can check out the News API documentation here: https://newsapi.org/docs/get-started
  
4)Jobs Page:
  I've used the GITHUB jobs API here to display job listings. Parameters to be given are 
  job description and location.
  Link to the GITHUB jobs API: https://jobs.github.com/api
  
5)Jokes Page:
  I've used the Jokes API here to display jokes from four categories:
  1)Dark
  2)Miscellaneous
  3)Any
  4)Programming
  
  These are passed as parameters one at a time on the click of the respective button. Each click displays
  a new joke.
  Link to the joke API: https://sv443.net/jokeapi/v2/#getting-started
  
  This section is just for fun.
  
  
