var database = [
    {
        username: "sakib",
        password: "qwerty"
    }

];

var newsFeed = [
    {
        username: "manik",
        timeline: "java script is soooo cool"
    },
    {
        username: "jishat",
        timeline: "java script is not soo cool"
    },   
];


var userNamePrompt = prompt ("what is your user name???????????????") 
var usePasswordPrompt = prompt ("what is your password??????")

function signIn (user,pass){
    if (user === database[0].username && pass === database[0].password   ){
        console.log(newsFeed);
    }
    else { alert ("sorry,Worng password or user name")}
}
signIn (userNamePrompt,usePasswordPrompt)

