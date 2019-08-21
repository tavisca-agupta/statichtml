var ul=document.getElementById("list");

var addButton=document.getElementById("add");
addButton.addEventListener("click",addItem);

var removeButton =document.getElementById("remove");
removeButton.addEventListener("click",removeItem);


function addItem()
{
    var input=document.getElementById("todoinput");
    var text=input.value;
    var textNode=document.createTextNode(text);
    input.setAttribute('placeholder','Your TODO here');
    
    if(text==="")
    {
        input.setAttribute('placeholder','Type Some TODO');
        //alert("Be Energetic and Make some TODO");
    }
    else
    {
        input.setAttribute('placeholder','Your TODO here');
        //create li elements
        var li=document.createElement('li');

        //creating remove button
        var button=document.createElement('button');
        button.setAttribute('class','rm');
        button.type="button";
        button.onclick=removeItem;
        var buttonText=document.createTextNode("Remove");
        button.appendChild(buttonText);

        //creating internal elements
        var checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');

        var label=document.createElement('label');

        //add nodes to the dom
        label.appendChild(textNode);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(button);
        ul.insertBefore(li,ul.childNodes[0]);

        //clear the input
        input.value ='';
    }
}

function removeItem()
{
    var listItem=this.parentNode;
	var ul=listItem.parentNode;
	//Remove the parent list item from the ul.
	ul.removeChild(listItem);
}