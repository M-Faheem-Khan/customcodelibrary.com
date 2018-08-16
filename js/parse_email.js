function send_email(){
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    var url = "https://bottle-green-inject.000webhostapp.com/email_parser.php";
    var user_email = document.getElementById("email").value;
    if (user_email.length <= 4 || !user_email.includes("@") || !user_email.includes(".")) {
        alert("incorrect email");
    } else{
            var vars = "email=" + user_email;
            hr.open("POST", url, true);
            // Set content type header information for sending url encoded variables in the request
            hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            // Access the onreadystatechange event for the XMLHttpRequest object
            hr.onreadystatechange = function() {
            if(hr.readyState == 4 && hr.status == 200) {
                var return_data = hr.responseText;
                console.log(return_data);
                }
            }
            // Send the data to PHP now... and wait for response to update the status div
            hr.send(vars); // Actually execute the request
            document.getElementById("email_info").innerHTML = "You will be notified when the website will be available for use.";
    }
}
