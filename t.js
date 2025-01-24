document.getElementById('emcelebrate-btn').addEventListener('click', function () {
    alert("Visca el Barça! 🎉 More trophies to come!");
  });
  
  document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Parandalon sjelljen e parazgjedhur të formës.
  
    const query = document.getElementById('search').value.trim().toLowerCase();
  
    // Kërkimet dhe faqet përkatëse
    const pages = {
      'introduction': 'erion.html',
      'fc barcelona': 'projekti.html',
      'first team': 'firstteam.html',
      'second team': 'secondteam.html',
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
  
