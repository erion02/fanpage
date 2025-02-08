document.addEventListener("DOMContentLoaded", function () {
    var img = document.getElementById("myImage");
    
    img.addEventListener("click", function () {
        var currentSrc = img.src.split("/").pop(); // Merr vetëm emrin e skedarit
        
        if (currentSrc === "4-0.png") {
            img.src = "5PIQUE.jpg"; 
        } else {
            img.src = "4-0.png"; 
        }
    });
});

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Parandalon sjelljen e parazgjedhur të formës.
    
    const query = document.getElementById('search').value.trim().toLowerCase();
    
    // Kërkimet dhe faqet përkatëse
    const pages = {
        'introduction': 'index.html',
        'fc barcelona': 'projekti.html',
        'first team': 'firstteam.html',
        'barca atletic': 'secondteam.html',
        'female team': 'womenteam.html',
        'basketball': 'basketball.html',
        'la masia': 'la-masia.html',
        'trophies': 'trofet.html',
        'blaugrana legends': 'icon.html',
        'anthem': 'athem.html'
    };
    
    // Kontrollo nëse kërkesa përputhet me ndonjë faqe
    if (pages[query]) {
        window.location.href = pages[query];
    } else {
      alert('Page not found'); // Nëse kërkimi nuk përputhet me ndonjë faqe
    }
    });
    
