async function getMultiple() {
    const [res1, res2] = await Promise.all([
      fetch('http://universities.hipolabs.com/search?country=Canada'),
      fetch('http://universities.hipolabs.com/search?country=France')
    ]);
    const canada = await res1.json();
    const france = await res2.json();
    console.log('Canada:', canada, 'France:', france);
  }
  getMultiple();