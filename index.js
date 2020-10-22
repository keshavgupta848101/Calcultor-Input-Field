function fun()
{

    var a = document.querySelector(".input1").value;
    var b = a.split("*");
    var sum = b[0]*b[1];
    var cc = document.querySelector("#result");

    if(isNaN(sum))
    {

    }
    else{
        cc.innerHTML = sum;
    }
    
    console.log(sum);

     



}



