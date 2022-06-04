function songs(typelistInfo) {

    let songs = [];
    let numberOfSongs = typelistInfo.shift();
    let nameOfTypelist = typelistInfo.pop();

    for (let el of typelistInfo) {
        el = el.split('_')
        if (nameOfTypelist == 'all') {
            songs.push(el[1]);
        } else {
            if (el[0] == nameOfTypelist) {
                songs.push(el[1]);
            }
        }
    }
    songs.forEach(i => console.log(i));
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);