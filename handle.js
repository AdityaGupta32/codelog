async function fetchWithErrors() {
    try {
      const response = await fetch('http://universities.hipolabs.com/search?country=InvalidCountry');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
    }
  }
  fetchWithErrors();