console.log("Let's get this party started!");

async function getGif(searchTerm){
    const api_key = 'h1weq7YVea0Q5R8urnnWC0DLsXxdbR5a';
    const randIndex = Math.floor(Math.random()*50);
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key, q: searchTerm}});
    console.log(res);
    return res.data.data[randIndex].images.downsized.url;
}

async function setGif(searchTerm){
    const url = await getGif(searchTerm);
    $("#gifs").append(`<img src=${url} class='col-4'>`);
}

$('#search-btn').on('click', async function(e){
    e.preventDefault();
    const searchTerm = $('input').val();
    await setGif(searchTerm);
    $('input').val('');
});

$('#remove-btn').on('click', function(e){
    e.preventDefault();
    $('#gifs').html('');
})