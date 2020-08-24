
//            Xf3ssR5pX4JoTeMnU5Z5hSr646JH4zqX
            let APIKEY = "Xf3ssR5pX4JoTeMnU5Z5hSr646JH4zqX";
            //document.addEventListener("DOMContentLoaded", init);
            function init()
            {
                var btnaction =  document.getElementById("btnSearch").addEventListener("click", ev => {
                  ev.preventDefault(); 
                  let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=`;
                  let str = document.getElementById("search").value.trim();
                  url = url.concat(str);
                    document.getElementById("results");
                  fetch(url)
                    .then(response => response.json())
                    .then(content => {
                      for(var i=0;i<content.data.length;i++)
                          {  
                            let fig = document.getElementById("figure");
                            let img = document.createElement("img");
                              img.src = content.data[i].images.original.url;
                              fig.appendChild(img);
                              let out = document.querySelector(".out");
                              out.insertAdjacentElement("afterbegin", img);
                              document.querySelector("#search").value = ""; 
                              document.querySelector(".out").value = ""; 
                          }
                      })
                }); 
            }

let trendurl = 'https://api.giphy.com/v1/gifs/trending?api_key=Xf3ssR5pX4JoTeMnU5Z5hSr646JH4zqX';

fetch(trendurl).then(function(data){
    return data.json()
})
.then(function(json){
    for(var i=0;i<5;i++){
        let fig = document.getElementById("trendid");
        let img = document.createElement("img");
        img.src = json.data[i].images.fixed_height.url;
        fig.appendChild(img);
        let trendclass = document.querySelector(".trendclass");
        trendclass.insertAdjacentElement("beforeend", img);   
    }
})