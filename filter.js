function searchCollege(query) {
    fetch(`http://universities.hipolabs.com/search?name=${query}`)
      .then(res => res.json())
      .then(data => console.log('Results:', data));
  }
  // Example: searchCollege('Harvard');