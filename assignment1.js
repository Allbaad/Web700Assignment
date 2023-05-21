/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name:Nikhil Kumar     Student ID:124632225       Date: May 20, 2023
*
********************************************************************************/ 

var serverVerbs = ["GET","GET","GET","POST","GET","POST"]
var serverPaths = ["/","/about","/contact","/login","/panel","/logout"]
var serverResponses = ["Welcome to WEB700 Assignment 1","This assignment was prepared by Nikhil Kumar","Nikhil Kumar: nkumar66@myseneca.ca","User Logged In","Main Panel","Logout Complete"]

function httpRequest (httpVerb , path) {
    for (var i = 0; i <= 5; i++) {
        if (httpVerb == serverVerbs[i] && path == serverPaths[i]){
            let temp1 =`200: ${serverResponses[i]}`
            return(temp1)      
        } 
    }
    let temp2 =`404: Unable to process ${httpVerb} request for ${path}`
    return(temp2)
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    
  }
 
function automateTests(){
    var testVerbs = ["GET","POST"]
    
    var testPaths = ["/","/about","/contact","/login","/panel","/logout","/randomPath1","/randomPath2"]
    
    function randomRequest(){

        randPath = testPaths[getRandomInt(7)]
        randVerb = testVerbs[getRandomInt(1)]
        
        var temp3 = (httpRequest(randVerb,randPath))
        console.log(temp3)
        
    }
    setInterval(randomRequest,1000)

    
}
automateTests()