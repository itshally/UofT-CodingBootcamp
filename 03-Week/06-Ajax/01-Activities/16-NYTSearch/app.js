//declaring variables
var searchQuery = $('#search').val();

//getting the data
$.ajax({
    url : "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchQuery +"&api-key=d9D2qPbGupNAnSTyKOMZO3hLyD06HHKJ",
    method : "GET"
}).then(function(results){
    
console.log(results);
    $('#search-btn').on('click', function(){
        for(var x = 0; x < results.response.docs.length; x++){
            var articleArray = results.response.docs[x];
            //this is the headline
            var headline = articleArray.headline.main;
            var subHeadline = articleArray.snippet;
            var author = articleArray.byline.original;
            var section = articleArray.section_name;
            var publishDate = articleArray.pub_date;
            var link = articleArray.web_url;
            $('.articles').append("<div class='container'><h1>" + headline + "</h1>" +
            "<p>" + subHeadline + "</p>" +
            "<p>" + author + "</p>" +
            "<p>Section: " + section + "</p>" +
            "<p>Date: " + publishDate + "</p>" +
            "<p><a href='" + link + "'>READ MORE</a></p>" + 
            "</div>");
        }
    });
});

//clear button
$('#clear-btn').on('click', function(){
    $('#search').val('');
    $('#record').val('');
    $('#startt').val('');
    $('#endd').val('');
});

