fetch('http://universities.hipolabs.com/search?name=california')
  .then(res => res.json())
  .then(data => {
    const domain = data[0].domains[0];
    const img = document.createElement('img');
    img.src = `https://logo.clearbit.com/${domain}`; 
    document.body.appendChild(img);
  });