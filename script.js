function vote()
{
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    if(age>=18){
        alert("eligible to vote");
}
        else{
            alert("not eligible to vote");
        }
        

}
