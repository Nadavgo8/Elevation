


const SongsManager = function(){
    const _songs = {};
    const addSong = function(songName, url){
        let shortURL = url.slice(32);
        _songs[songName] = shortURL;
    }

    const getSong = function(songName){
        console.log(`https://www.youtube.com/watch?v=${_songs[songName]}`);
    }

    return{
        addSong:addSong,
        getSong:getSong
    };
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
