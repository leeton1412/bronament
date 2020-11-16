// emailjs send function
function sendMail(contactForm){
    emailjs.send("gmail", "Bro-nament", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "suggestion_idea": contactForm.suggestion.value,
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
            alert('Thank You')
            var form = document.getElementById("myForm")
            form.reset();    
        
        },
        
        function(error){
            console.log("ERROR", error);
            alert('Your email could not be sent at this time')
        }
    )
 return false; 

}