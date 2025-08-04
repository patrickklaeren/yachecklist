fetch('checklists/index.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('aircraft-list');
    data.forEach(entry => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `viewer.html?plane=${entry.file}`;
      link.textContent = entry.name;
      li.appendChild(link);
      list.appendChild(li);
    });
  });
