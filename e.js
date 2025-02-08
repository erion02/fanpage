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
       // Nëse kërkimi nuk përputhet me ndonjë faqe
      alert('Page not found');
    }
    });
    