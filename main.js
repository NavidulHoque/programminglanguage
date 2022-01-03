
function show() {

    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;


     firebase.database().ref('User/' + email).set({
            email : email,
            password : password
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                alert("DONE");
            }
          });
 } 

