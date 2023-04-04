// API How to Use: https://randomuser.me/documentation#howto 
// API get single user: https://randomuser.me/api/
// API get multiple users: https://randomuser.me/api/?results=5


const main = document.querySelector("main")


// Card theme options
const cardThemes = ["blue", "orange", "red", "crimson"];

const form = document.querySelector("form")
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    //value
    const valueInputed = event.target.numberOfUsers.value

    //retart page to empty
    main.innerHTML = ""

    //make api dynamic
    const apiUrl = `https://randomuser.me/api/?results=${valueInputed}`;

    fetch(apiUrl)
    .then((response)=> response.json())
    .then((result)=>{

        //easier array list
        const results = result.results

        results.forEach((resultItem)=>{
        displayResult(resultItem)
    })

    //     console.log(result)
    // })



    form.reset()
    // console.log(results);
    // console.log(result);
})})


const displayResult = (resultItem) => {
    //create the profile box
    const divCard = document.createElement("div")
    const randomTheme = cardThemes[Math.floor(Math.random() * cardThemes.length)]
    divCard.className = randomTheme
    main.append(divCard)

    const divBanner = document.createElement("div")
    divBanner.className = "banner"
    divCard.append(divBanner)
    const img = document.createElement("img")
    img.setAttribute(`src`, `${resultItem.picture.large}`)
    img.className = "profile-picture"
    divCard.append(img)
    const h2Name = document.createElement("h2")
    h2Name.className = "full-name"
    h2Name.textContent = `${resultItem.name.first} ${resultItem.name.last}`
    divCard.append(h2Name)
    const ulUserInfo = document.createElement("ul")
    ulUserInfo.className = "user-info"
    divCard.append(ulUserInfo)
    const liUsername = document.createElement("li")
    liUsername.className = "username"
    ulUserInfo.append(liUsername)
    const iAccountCircle = document.createElement("i")
    // liUsername.append(iAccountCircle)
    iAccountCircle.className = "material-icons-outlined"
    liUsername.append(iAccountCircle)
    iAccountCircle.textContent = "account_circle"
    liUsername.textContent = `${resultItem.login.username}`
    const liLocation = document.createElement("li")
    liLocation.className = "location"
    ulUserInfo.append(liLocation)
    const iExplore = document.createElement("i")
    liLocation.append(iExplore)
    iAccountCircle.className = "material-icons-outlined"
    iAccountCircle.textContent = "explore"
    liLocation.textContent = `${resultItem.location.city} ${resultItem.location.country} ${resultItem.location.state}`





    
    console.log(divCard);
    console.log(resultItem);

    

    
    //add it to main
      
    //  //made info dynamic 
    //  const imgProfile = document.querySelector(".profile-picture")
    // imgProfile.setAttribute(`src`, `${result.Poster}`)
    
}