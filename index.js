// Add your code here


const submitData = function(userName, userEmail){
 const userInfo = {
    name: userName,
    email: userEmail
 };
try {
        return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { 
            "Content-Type" : "application/json",
            "Accept" : "application/json"
            },
        body: JSON.stringify(userInfo)
        }).then((res)=> {return res.json();
        }).then((jsonData)=> {return document.body.innerHTML =jsonData.id
        }).catch((err) => {document.body.innerHTML = err.message;
        });

    } catch(err) {
    console.log("Error fetching data from servers");
    }
}
submitData("Cyril", "cyril@protonmail.com");