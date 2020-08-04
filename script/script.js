// Showing input digit
function addDigit(digit){
    var inputValue = document.getElementById('screen').value;
    document.getElementById('screen').value = inputValue + digit;
}

// Clear all given digits
function clearAll(){
    document.getElementById('screen').value = "";
}

// Clear one by one
function back(){
    const x = document.getElementById('screen').value.slice(0,-1);
    document.getElementById('screen').value = x;
}

// Generating random number
document.getElementById('pinGenerator').addEventListener('click',function(){
    const pin = Math.ceil(Math.random()*8999+1000);
    document.getElementById('pinValue').value = pin;
})

// Check whether the pin is matched or mismatched
document.getElementById('submitButton').addEventListener('click',check)

// Pin checker function
function check(){
    const check = document.getElementById('screen').value;
    if(document.getElementById('pinValue').value == ""){
        alert("Please generate the pin first")
    }
    else if(check == document.getElementById('pinValue').value){
        document.getElementById("mismatched").style.display = "none";
        document.getElementById('countDown').style.display = "none";

        document.getElementById("matched").style.display = "block";
        document.getElementById('pinValue').value = "";
        document.getElementById('leftTry').innerText = 3;
    }
    else{
        noTry();
    }
    document.getElementById('screen').value = "";
}

// mismatched pin waring message and try left counter
function noTry(){
    document.getElementById("matched").style.display = "none";
    document.getElementById("countDown").style.display = "none";
    document.getElementById("mismatched").style.display = "block";
    document.getElementById("leftTry").innerText -= 1;
    if(document.getElementById('leftTry').innerText == 0){
        document.getElementById('message').style.display = "block";
        document.getElementById("mismatched").style.display = "none";
        document.getElementById('submitButton').removeEventListener("click",check)

        countDown();
        setTimeout(function(){
            document.getElementById('leftTry').innerText = 3
            document.getElementById('message').style.display = "none";
            document.getElementById("mismatched").style.display = "none";
            document.getElementById('submitButton').addEventListener('click',check)
        },61000);       
    }
}

// Again try countDown function
function countDown(){
    let startMinute = 60;
    const time = document.getElementById('countDown')
    time.style.display = "block";
    var x = setInterval(updateCountDown,1000);

    function updateCountDown(){
        startMinute --;
        const second = startMinute % 60;
        time.innerText = '0:' + second;
        if(startMinute<0){
            clearInterval(x);
            document.getElementById('countDown').innerText = 'Try again'
        }
    }
}