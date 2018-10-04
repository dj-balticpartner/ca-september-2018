$("#LoginForm").submit(function (event) {    
    event.preventDefault();

    let username = $("#UserName").val();
    let password = $("#Password").val();

    ajax_login(username, password);    
});

function ajax_login(username, password){
    $.ajax({
        url: "http://localhost:8080/login/login.php",
        type: "POST",
        data: {user: username, pass: password},
        //data: $("#LoginForm").serialize(),
        dataType: "json",
        // contentType: "json",
        success: function (response) {
            console.log("print response");
            console.log(response);
            if(response.status === 'OK'){ /// see if our server allows us to login.
                // show Welcome message
                $("#result").html("<span class='text-success'>Welcome!</span>");
            }else{
                // show access denied message
                $("#result").html("<span class='text-danger'>Access denied!</span>");
            }
        }
    })
        .done(function (msg) {
            //alert("Data Saved: " + msg);
        });
}