function resetallfields()
{
    document.getElementById("a").value="";
    document.getElementById("b").value="";
    document.getElementById("res1").value="";
    document.getElementById("res2").value="";
    document.getElementById("res3").value="";
    document.getElementById("a").focus();
}
function setloadfocus()
{
    document.getElementById("a").focus();
}
function checkemptyfields()
{
    if(document.getElementById("a").value.length==0)
    {
        alert("Please Enter Your First Input");
        document.getElementById("a").focus();
    }
    else if(document.getElementById("b").value.length==0)
    {
        alert("Please Enter Your Second Input");
        document.getElementById("b").focus();
    }
}
function Add()
{
    checkemptyfields();
    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    var res1;
    res1 = a + b;
    document.getElementById("res1").value = res1; 
}
function diff()
{
    checkemptyfields();
    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    var res2;
    res2 = a - b;
    document.getElementById("res2").value = res2;
}
function Prod()
{
    checkemptyfields();
    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    var res3;
    res3 = a * b;
    document.getElementById("res3").value = res3;
}
