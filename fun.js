function searchCollege(query) {
    fetch(`http://universities.hipolabs.com/search?name=${query}`)
      .then(res => res.json())
      .then(data => console.log('Results:', data));
  }
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({ id: 1, name: 'Updated College Name' }),
    headers: { 'Content-type': 'application/json' }
  }).then(res => res.json()).then(console.log);
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  }).then(res => console.log('Deleted successfully'));

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  }).then(res => console.log('Deleted successfully'));