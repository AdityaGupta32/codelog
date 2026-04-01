fetch('http://universities.hipolabs.com/search?name=middle')
  .then(response => response.json())
  .then(data => {
    data.forEach(college => console.log(`- ${college.name}`));
    return data;
  })
.then(finaldata => {
    console.log(finaldata);
})
  
