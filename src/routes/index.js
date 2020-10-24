const express = require('express');
const router = express.Router();
const axios = require('axios');

const Films = require('../models/Films');
const { query, static } = require('express');
let filmsArray = [];
let page = 0;
let title = '';

async function getWishList () {
    let wishList = [];

    await Films.find({},(err,docs)=>{
    wishList = docs;
    })
    return wishList;
}

router.get('/', async(req,res)=>{
    filmsArray = [];
    const wishList = await getWishList();

    res.render('index',{
        films: filmsArray,
        wishList: wishList,
        validate: [false,false,false],
        page: 0,
    });
})

router.get('/filmSearcher/:page',async(req,res)=>{

    let validateNextPage;
    page = parseInt(req.params.page,10);

    filmsArray = [];
    //form envia la informacion por req.query.searchTitle
    //desde el front-end
    //Sino se envia una nueva palabra y se cambia de pagina
    //Se mantiene el mismo title para buscar
    if (typeof req.query.searchTitle !== 'undefined') {
        title = req.query.searchTitle;

    }

    let scale = page - 1;

    let start = page + 2*scale;
    let end = start + 3;

    for (let i = start ; i < end; i++) {
        let date;
    
        let films = await axios(`http://www.omdbapi.com/?i=tt3896198&apikey=606c85e1&s=${title}&page=${i}`)
        .catch(err=> console.log(err));

        if (films.data.Response === "True") {
            date = films.data.Search;
        }
        
        if (typeof date !== 'undefined') {
            for (let j = 0; j < date.length; j++) {
                filmsArray.push(date[j]);
            }
            validateNextPage = true;
            if (filmsArray.length < 30) {
                validateNextPage = false;
            }
        }
        if (i === end) {
            const nextFilms = await axios(`http://www.omdbapi.com/?i=tt3896198&apikey=606c85e1&s=${title}&page=${end}`)
            .catch(err=> console.log(err));

            if (nextFilms.data.Response === 'False') {
                validateNextPage = false;
            }
    
        }
    }

    let notFirstPage = false;

    if (page !== 1) {
        notFirstPage = true;
    }

    let validate = true;

    if (!notFirstPage & !validateNextPage) {
        validate = false;
    }

    const wishList = await getWishList();
    res.render('index', {
        films: filmsArray,
        wishList: wishList,
        validate: [validate,notFirstPage,validateNextPage],
        page: page,
    });

})

router.get('/directory/:direction', async(req,res)=>{
    const direction = req.params.direction;

    if (direction === 'left' && page > 1) {
        page--;
    }
    if (direction === 'right') {
        page++;
    }

    res.redirect(`/filmSearcher/${page}`);

})

router.get('/filmSearcher', async(req,res)=>{
    let filmsArrayFull = true;
    let notFirstPage = false;

    if (filmsArray.length === 0) {
        filmsArrayFull = false;

    }
    if (page !== 1) {
        notFirstPage = true;
    }

    const wishList = await getWishList();

    res.render('index',{
        films: filmsArray,
        wishList: wishList,
        validate: [filmsArrayFull,notFirstPage,true],
        page: page,
    });
})


router.get('/wishList/:imdbID', async(req,res)=>{

    const favoriteFilm = filmsArray.filter(film=> film.imdbID === req.params.imdbID);
    const filmModel = new Films(favoriteFilm[0]);

    if (typeof filmModel.imdbID !== "undefined") {

        await Films.find({imdbID: filmModel.imdbID}, async(err,docs)=>{
            if (docs.length === 0) {
                await filmModel.save();
            }
        })
    }
    res.redirect('http://localhost:3000/filmSearcher');

})

router.get('/removeFilm/:imdbID', async(req,res)=>{

    await Films.remove({imdbID: req.params.imdbID})

    res.redirect('http://localhost:3000/filmSearcher');

})


module.exports = router;