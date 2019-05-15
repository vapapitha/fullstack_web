var database = [
    {
        username: "sakib",
        password: "qwerty"
    },
    {
        username: "Rahman",
        password: "qwerty123"
    },
    {
        username: "Ringku",
        password: "asdfgh"
    },
    {
        username: "ismail",
        password: "asdfgh123"
    },
    {
        username: "insun",
        password: "zxcvbn"
    },



];

var newsFeed = [
    {
        username: "manik",
        timeline: "java script is soooo cool"
    },
    {
        username: "jishad",
        timeline: "java script is not soo cool"
    },   
];


var userNamePrompt = prompt ("what is your user name???????????????") 
var PasswordPrompt = prompt ("what is your password??????")


function isUserValid (username,password ){
    for(var i=0;i<database.length;i++){
        if (database[i].username === username && 
            database[i].password === password   ){
            return true;
        
        }
    
      }
      return false;
}

function signIn (username,password ){
    if (isUserValid (username,password )){
       console.log(newsFeed);
   }
   else { alert ("sorry,Worng password or user name")}
 

}
signIn   (userNamePrompt,PasswordPrompt)

