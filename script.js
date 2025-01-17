const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchBtn = document.getElementById("show-more-button");

const key = `yw8AIrqPvE8vLi1Xmdu5VoSqhN-nGOpbxlD3pFI9L5k`

let keyword = "nature";
let page = 1;

async function searchImages() {
    keyword = searchBox.value ||keyword;
    const url = `https://api.unsplash.com/search/photos?${page}&query=${keyword}&client_id=${key}&per_page=12`;
    
        const response = await fetch(url);
        const data = await response.json();
        if (page === 1) {
            searchResult.innerHTML = "";
        }

        // console.log(data);
        const results = data.results;

        results.map((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);

        });
        searchBtn.style.display = "block";


    
}

searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        page = 1;
        searchImages();
    });
    searchBtn.addEventListener("click", (e) => {
        page++;
        searchImages();

    });
    window.addEventListener("load", () => {
        searchImages();
    });