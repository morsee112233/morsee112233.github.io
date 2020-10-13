let toggle = document.querySelector('[name="Rank"]');

toggle.addEventListener('change', function(){
    let chosenClass = this[this.selectedIndex].value;
    console.log(chosenClass)
    let product_item = document.querySelectorAll(".item");

    Array.prototype.forEach.call(product_item,function(item) {
        let child = item.children[0];
        let childClasses = child.className.split(' ');

        if (childClasses.indexOf(chosenClass) === -1) {
            item.style.display='none';
        } else {
            item.style.display='block';
        }
    });                
});
console.log(toggle)