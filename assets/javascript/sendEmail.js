function sendMail(contactForm){
    emailjs.send("gmail", "Bro-nament", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "suggestion_idea": contactForm.suggestion.value,
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("ERROR", error);
        }
    )
 return false; 

}