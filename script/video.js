const loadCatagories = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCatagories(data.categories))
    .catch(error => console.error(error))
}

loadCatagories()

const displayCatagories = (fetchData) => {

  fetchData.forEach(catagoriesItem => {
    console.log(catagoriesItem.category)


    const catagoriesParent = document.getElementById("catagoriesContainer");

    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = catagoriesItem.category;
    catagoriesParent.append(button);

  });

}