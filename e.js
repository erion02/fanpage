
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
    
        const query = document.getElementById('search').value.trim().toLowerCase(); 
    
        if (query === 'introduction') {
            window.location.href = 'erion.html'; 
        } else if (query === 'fc barcelona') {
            window.location.href = 'projekti.html'; 
        } else if (query === 'first team') {
            window.location.href = 'firstteam.html'; 
        } else if (query === 'second team') {
            window.location.href = 'secondteam.html'; 
        } else if (query === 'female team') {
            window.location.href = 'womenteam.html'; 
        } else if (query === 'basketball') {
            window.location.href = 'basketball.html'; 
        } else if (query === 'la masia') {
            window.location.href = 'la masia.html'; 
        } else if (query === 'trophies') {
            window.location.href = 'trofet.html'; 
        } else if (query === 'blaugrana legends') {
            window.location.href = 'icon.html'; 
        } else if (query === 'anthem') {
            window.location.href = 'athem.html'; 
        } else {
            alert('Page not found'); 
        }
    });
