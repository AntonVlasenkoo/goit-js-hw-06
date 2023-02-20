







const allItemEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${allItemEl.length}`);




allItemEl.forEach(element => {

 const firstElementItem = element.firstElementChild;
console.log(`Category: ${firstElementItem.textContent}`);

const lastElementItem = element.lastElementChild;
console.log(`Elements: ${lastElementItem.children.length}`)

});






















