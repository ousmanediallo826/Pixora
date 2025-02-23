const accessKey = "EEjekvT6jb7XE-4LVe_DGj4Kzj-FlBl4xsP2cbl455c";



async function fetchOfficePhotos() {
    const inputEl = document.getElementById("text-el")
    const inputValue = inputEl.value.trim();
    if(!inputValue){
        alert("Please enter a search item")
         
    }
    
    
    
        
const apiUrl = `https://api.unsplash.com/search/photos?page=2&query=${inputValue}&client_id=${accessKey}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch photos");

        const data = await response.json();
        console.log(data.results); 

   
        const gallery = document.getElementById("photos");
        gallery.innerHTML = ""
        data.results.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo.urls.regular;
            img.alt = photo.alt_description || "Unsplash Image";
            
            
            gallery.appendChild(img);
        });
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
    inputEl.value = ""
}



document.getElementById("search").addEventListener("click", fetchOfficePhotos)