function welcome()
{
	var x=document.getElementById("name").value;
	document.getElementById("hi").innerHTML="WELCOME "+x;
}
var r=0;
function calcReq()
{
	var g=document.getElementById("gender").value;
	var h=parseFloat(document.getElementById("ht").value);
	var w=parseFloat(document.getElementById("wt").value);
	var a=parseFloat(document.getElementById("age").value);
	
	
	if (g=="M")
	{
		r=503*h+14.2*w-9.72*a+864;
		
	}
	else if(g=="F")
	{
		r =387-7.31*a+10.9*w+660.7*h;
	}
	else
	{
		alert("enter a valid gender");
	}
	
	document.getElementById("r").innerHTML="Your daily requirement is "+r+" calories";
}
var cal;
var tot=0;

function myFunction()
{

	var table = document.getElementById("myTable");
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4=row.insertCell(3);
	var fat=document.getElementById("fat").value;
	var carbs=document.getElementById("carbs").value;
	var cal=(5*parseFloat(fat)+100/45*parseFloat(carbs))/2;
	tot+=parseFloat(cal);
	cell1.innerHTML = document.getElementById("food").value;
	cell2.innerHTML = document.getElementById("fat").value;
	cell3.innerHTML = document.getElementById("carbs").value;
	cell4.innerHTML=tot;

	
	document.getElementById("food").value=" ";

	document.getElementById("fat").value=" ";

	document.getElementById("carbs").value=" ";
	
}
function check()
{
	if(tot>r)
	{
		alert("hey!you exceeded the limit");
	}
}
