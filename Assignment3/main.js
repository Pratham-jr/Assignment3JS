

function getData(){

    URL = "https://raw.githubusercontent.com/Pratham-jr/WeirdDealsJson/main/products.json";
    //Setting the connection with product.json
    fetch(URL).then((response) => {
       
        if(!response.ok){
           return Error("Something Went Wrong!");
        }
        return response.json();
    
    }).then((deals) => {
        
    console.log(deals); // checking if data is returning in console.

        const html = deals.DEALS.map(user => {
            
        // Displaying the content in with html tags.
            return `
            <div class="card-deck" style="float:left;">
            <ol style="color:#FF7300">Deals: ${user.id}</ol>
            <div class="card" style="width:193px; float:left">
            <img class="card-img-top" src="${user.url}" style="height:250px">
            <div class="card-body"style="height:300px; width=100%" > 
            <h5 class="card-title"> ${user.name} </h5>
            <p class="card-text"> ${user.price}</br> ${user.description}</br> </p>
            </div>
            </div>
            </div>`;

        }).join(""); // to replace commas in json array with empty space.

    console.log(html);

        // Appending the content in browser
        document.querySelector('.container').insertAdjacentHTML('afterbegin', html);
  
    }).catch(error => {
        console.log(error);
    })

}

getData(); 
