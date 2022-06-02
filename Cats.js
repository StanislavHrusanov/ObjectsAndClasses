function cats(catAsArr) {

    class Cat {
        constructor(catName, catAge,) {
            this.catName = catName;
            this.catAge = catAge;
        }
    }

    let cats = [];

    for (let i = 0; i < catAsArr.length; i++) {
        let catsData = catAsArr[i].split(' ');
        let [catName, catAge] = [catsData[0], catsData[1]];
        cats.push(new Cat(catName, catAge));
    }

    for (let el of cats) {
        console.log(`${el.catName}, age ${el.catAge} says Meow`);
    }
}
cats(['Mellow 2', 'Tom 5']);