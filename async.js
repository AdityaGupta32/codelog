async function getColleges() {
    const response = await fetch('http://universities.hipolabs.com/search?name=technology');
    const data = await response.json();
    console.log(data);
  }
  getColleges()