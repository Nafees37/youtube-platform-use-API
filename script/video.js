// ********************** Categories API Work Start *********************

const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.error(error))
}

// Categories Work Start
const displayCategories = (fetchData) => {

  fetchData.forEach(categoriesItem => {
    console.log(categoriesItem.category)

    const categoriesParent = document.getElementById("categoriesContainer");

    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = categoriesItem.category;
    categoriesParent.append(button);

  });

}

// Categories Work End

loadCategories()


// ********************** Categories API Work End **********************



// ********************** Videos API Work Start **********************

// const videos =
// {
//   "category_id": "1001",
//   "video_id": "aaaa",
//   "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//   "title": "Shape of You",
//   "authors": [
//     {
//       "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//       "profile_name": "Olivia Mitchell",
//       "verified": ""
//     }
//   ],
//   "others": {
//     "views": "100K",
//     "posted_date": "16278"
//   },
//   "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }


// Call Video API
const loadVideosAPI = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => loadVideos(data.videos)) // Call loadVideos Function Arguments
    .catch(error => console.error(error))
}
// End Video API


// Call Arrow Function
const loadVideos = (loadingVideo) => {

  // call now forEach function
  loadingVideo.forEach((forEachVideo) => {
    console.log(forEachVideo)

    // Html File videos section ID Call
    const parentVideoId = document.getElementById("videos");

    const card = document.createElement("div");
    card.classList = "card card-compact";

    // daisyui Card Design And API Call
    card.innerHTML =
      `
    <figure class="h-[200px] relative">
      <img class="w-full h-full object-cover"
        src=${forEachVideo.thumbnail} />
        
        <div class="absolute right-2 bottom-2 bg-black text-white p-1 rounded">
          ${forEachVideo.others.posted_date}
        </div>
    </figure>

    <div class="py-3 flex items-center gap-3">
      <div>
        <img class="h-[50px] w-[50px] rounded-full object-cover" src=${forEachVideo.authors[0].profile_picture} />
      </div>

      <div>
        <h2 class="font-bold">${forEachVideo.title}</h2>
        
        <div class="flex gap-x-2 items-center">

          <p>${forEachVideo.authors[0].profile_name}</p>

          <div class="w-[20px]">
          ${forEachVideo.authors[0].verified === true ? `<img class="w-full" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" />` : ''}
          </div>

        </div>

        <p></p>

      </div>
    </div>
    `
    parentVideoId.append(card);

  })

}

loadVideosAPI()

// ********************** Videos API Work End **********************
