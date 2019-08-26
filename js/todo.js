var ul=document.getElementById("list");

var addButton=document.getElementById("add");
addButton.addEventListener("click",addItem);


function addItem()
{
    var input=document.getElementById("todoinput");
    var text=input.value;
    var textNode=document.createTextNode(text);
    input.setAttribute('placeholder','Your TODO here');
    
    if(text==="")
    {
        input.setAttribute('placeholder','Wake Up And Work');
        //alert("Be Energetic and Make some TODO");
    }
    else
    {
        input.setAttribute('placeholder','Your TODO here');
        //create li elements
        var li=document.createElement('li');

        //creating edit button
        var editbtn=document.createElement('button');
        editbtn.setAttribute('class','btn');
        editbtn.onclick=editItem;
        var editbtntext=document.createTextNode(" Edit");
        var editbtnicon=document.createElement('i');
        editbtnicon.setAttribute('class','fa fa-edit');
        editbtn.appendChild(editbtnicon);
        editbtn.appendChild(editbtntext);
        

        //creating remove button
        var button=document.createElement('button');
        button.setAttribute('class','btn');
        button.onclick=removeItem;
        var buttonText=document.createTextNode(" Remove");
        var removebtnicon=document.createElement('i');
        removebtnicon.setAttribute('class','fa fa-trash-o');
        button.appendChild(removebtnicon);
        button.appendChild(buttonText);

        //creating checkbox
        var checkbox=document.createElement('input');
        checkbox.type='checkbox';
        //checkbox.setAttribute('class','check');
        checkbox.addEventListener('change',done);

        var label=document.createElement('label');

        //add nodes to the dom
        label.appendChild(textNode);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(button);
        li.appendChild(editbtn);
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

function editItem()
{
    
    //creating ok button
    let okbtn=document.createElement('button');
    okbtn.setAttribute('class','btn');
    
    var okbtntext=document.createTextNode(" ok");
    var okbtnicon=document.createElement('i');
    okbtnicon.setAttribute('class','fas fa-check-circle'); //<i class="fas fa-check-circle"></i>
    okbtn.appendChild(okbtnicon);
    okbtn.appendChild(okbtntext);

    //find out parent and the content from label node
    let parent=this.parentNode;
    let textvalue=parent.childNodes[1].innerHTML; 

    //creating the inplace input field
    let editableinput=document.createElement('input');
    editableinput.setAttribute('class','edittext');
    editableinput.type='text';
    editableinput.value=textvalue;

    //hiding the node ie label and adding ok button
    parent.childNodes[1].classList.add("hidden");
    parent.childNodes[3].classList.add("hidden");
    //parent.removeChild(parent.childNodes[1]);
    //parent.removeChild(parent.childNodes[3]);
    parent.appendChild(okbtn);
    parent.appendChild(editableinput);

    okbtn.onclick=okItem;
    
    
}

function okItem()
{
    let parent=this.parentNode;
    let okvalue=parent.childNodes[5].value;
    parent.childNodes[1].innerHTML=okvalue;

    //parent.childNodes[4].classList.add("hidden");
    parent.childNodes[1].classList.remove('hidden');
    parent.childNodes[3].classList.remove("hidden");
    parent.removeChild(parent.childNodes[4]);
    parent.removeChild(parent.childNodes[4]);//why same as above ,since after removing the above the 5th becomes 4th element
    
    //console.log(okvalue);
}

function done()
{
    let parent=this.parentNode;
    if(this.checked) {
        // Checkbox is checked..
        parent.childNodes[1].classList.add("done");
        //this.classList.add("done");
    } else {
        // Checkbox is not checked..
        parent.childNodes[1].classList.remove("done");
        //this.classList.remove("done");
    }
}