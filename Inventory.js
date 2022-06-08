function inventory(heroesData) {
    let heroes = [];

    for (let heroData of heroesData) {
        let hero = {};
        let heroDataAsArr = heroData.split(' / ');
        let heroName = heroDataAsArr[0];
        let heroLevel = heroDataAsArr[1];
        let heroItems = heroDataAsArr[2];

        hero.Hero = heroName;
        hero.level = heroLevel;

        if (heroItems != undefined) {
            hero.Items = heroItems;
        }

        heroes.push(hero);
    }

    heroes.sort((a, b) => {
        return a.level - b.level
    });

    for (let hero of heroes) {
        console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nitems => ${hero.Items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);