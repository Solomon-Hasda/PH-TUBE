
const loadCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');

    data.data.forEach((category) => {
        console.log(category);
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick=showCards('${category.category_id}') class="tab border-4 px-4 bg-gray-100 text-black">${category.category}</a>
        `;

        tabContainer.appendChild(div);
    })
    // console.log(data.data);
}

const showCards = async (categoryId) => {

    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    // console.log(data.data);

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

 
    const noData = document.getElementById('no-data');
    if(data.data.length === 0) { 
        noData.removeAttribute('hidden');
    }
    else {
        noData.setAttribute('hidden', true);
    }

    data.data.forEach((card) => {
        console.log(card);
        const cardItem = document.createElement('div'); 
       
    
            cardItem.innerHTML = `
                <div class="flex justify-center">
                    <img src="icons/Icon.png" alt="">
                </div>
                
                `;
            cardItem.innerHTML = `
                <div class="card card-compact lg:w-64 w-full lg:h-64 h-full bg-base-100 shadow-xl" >
                    <figure><img class='h-full' src="${card?.thumbnail}"  /></figure>
                    <div class="card-body">
                    <div class="flex">
                        <img class="rounded-full w-14 h-14 mr-4" src="${card.authors[0].profile_picture}" alt="">
                    <div>
                       <h2 class="card-title">${card?.title}</h2>
                        <div class="flex justify-start">
                            <p>${card.authors[0].profile_name}</p>
                            <img src="icons/fi_10629607.svg" alt="">
                        </div>
                        <p>${card.others.views}</p>
                    </div>
                </div>
                </div>
                </div>
            
            `;
        
         

        cardContainer.appendChild(cardItem);
    });
    
};

const blogButton = document.getElementById('btn-blog');
blogButton.addEventListener('click', () => {
    window.location.href = 'blog.html';
});



loadCategory();
showCards('1000');
