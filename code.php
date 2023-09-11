<?php    
    include 'connect.php';

    $username = $_POST['username'];
    $password = $_POST['password'];
    

    $query = "INSERT INTO users(password, username, password)
                    VALUES('$password','$username', 'password')";
                   
    $run = mysqli_query($con, $query);
    if(!$run){
        echo "Submission failed";

    } else{
        echo "<br> Submission successfull";
    }
    

?>