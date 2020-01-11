//api for friends to be used for comparison and export the file to be used in localhost/api/friends
var drivers = [

    {
        "name": "Ahmed",
        "photo": "https://d1srin71gt7f9x.cloudfront.net/wp-content/uploads/2015/03/jennifer-lopez-selena-movie-1997-photo-FC-476x320.jpg",
        "pickUp": ["Revere", "Boston", "Danvers", "Chelsea", "Everett"]


    },

    {
        "name": "Wiam",
        "photo": "https://thecaninecode.com/images/martys_retriever.jpg",
        "pickUp": ["Cambridge", "Boston", "Peabody", "Charlestown", "Saugus"]

    },
    {
        "name": "John",
        "photo": "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/france-v-germany-uefa-nations-league-a-5bca0ac66f0e5b6500000001.jpg",
        "pickUp": ["Cambridge", "Boston", "Peabody", "Charlestown", "Saugus"]


    },
    {
        "name": "Edward",
        "photo": "https://specials-images.forbesimg.com/imageserve/1170388496/960x0.jpg",
        "pickUp": ["Cambridge", "Boston", "Peabody", "Charlestown", "Saugus"]

    },
    {
        "name": "Frank",
        "photo": "https://vignette3.wikia.nocookie.net/itsalwayssunny/images/f/fe/Season_7_-_Frank.jpg",
        "pickUp": ["Cambridge", "Boston", "Peabody", "Charlestown", "Saugus"]
    },
    {
        "name": "stephanie",
        "photo": "https://s.yimg.com/ny/api/res/1.2/EEA6ecfEeZlD3zn4CR0rAA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTk2MA--/http://media.zenfs.com/en-US/homerun/etonline.tv/29bad6b9d4aaa50b6e085e271ec395a8",
        "pickUp": ["Cambridge", "Boston", "Peabody", "Charlestown", "Saugus"]
    },
    {
        "name": "stephanie",
        "photo": "https://media1.fdncms.com/orlando/imager/u/blog/25665033/gal_jlo_headshot_by_gabriel_goldman.jpg",
        "pickUp": ["Cambridge", "Boston", "Peabody", "Charlestown", "Saugus"]

    }
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = drivers;
