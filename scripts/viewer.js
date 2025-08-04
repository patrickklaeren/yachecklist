const params = new URLSearchParams(window.location.search);
const filename = params.get('plane');

fetch(`checklists/${filename}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('aircraft-title').textContent = data.aircraft + ' Checklist';
    const container = document.getElementById('checklist-container');

    data.checklists.forEach(stage => {
      const section = document.createElement('div');
      section.className = 'checklist-section';

      const header = document.createElement('div');
      header.style.display = 'flex';
      header.style.justifyContent = 'space-between';
      header.style.alignItems = 'center';
      
      const title = document.createElement('span');
      title.textContent = stage.title;
      title.style.fontWeight = 'bold';

      const toggleButton = document.createElement('button');
      toggleButton.textContent = 'Toggle All';
      toggleButton.style.fontSize = '0.9em';
      toggleButton.style.padding = '4px 8px';
      toggleButton.style.cursor = 'pointer';

      header.appendChild(title);
      header.appendChild(toggleButton);
      section.appendChild(header);

      function completeChecklistSection() {
        const checkboxes = section.querySelectorAll('input[type="checkbox"]');
        const allChecked = [...checkboxes].every(checkbox => checkbox.checked);
        title.classList.toggle('completed', allChecked);
        section.style.opacity = allChecked ? '0.5' : '1';
      }

      toggleButton.addEventListener('click', () => {
        const checkboxes = section.querySelectorAll('input[type="checkbox"]');
        const allChecked = [...checkboxes].every(checkbox => checkbox.checked);
        checkboxes.forEach(checkbox => {
          checkbox.checked = !allChecked;
        });
        completeChecklistSection();
      });

      // Checklist items
      const ul = document.createElement('ul');
      stage.items.forEach(item => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', completeChecklistSection);
        label.appendChild(checkbox);
        const span = document.createElement('span');
        span.textContent = item;
        label.appendChild(span);
        li.appendChild(label);
        ul.appendChild(li);
      });
      section.appendChild(ul);
      container.appendChild(section);
    });
  });
