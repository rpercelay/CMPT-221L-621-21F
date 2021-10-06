function changeStuff() {
    document.getElementByTitle("title").innerHTML = "New Heading";
    document.getElementByID("description").innerHTML = "Reed";
    document.getElementByID("bossy").innerHTML = "Do you think you could help me with some things?";
    var items = document.getElementByTagName('ul');
    items[0].fontcolor("blue");
    items[1].backgroundcolor("cream");
    document.GetElementByTagName('body').backgroundcolor("grey");
    items[3].innerText.toUpperCase();
    items[4].innerText.append("SoftwareDevII");

}

