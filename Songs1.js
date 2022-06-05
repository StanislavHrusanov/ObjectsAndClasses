function songs(typelistInfo) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = typelistInfo.shift();
    let nameOfTypelist = typelistInfo.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = typelistInfo[i].split('_')
        let song = new Song(type, name, time);
        songs.push(song);

    }

    if (nameOfTypelist === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === nameOfTypelist);
        filtered.forEach((i) => console.log(i.name));
    }

}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);