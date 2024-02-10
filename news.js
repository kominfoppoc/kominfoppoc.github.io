const link = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTz36lLHwAPx_VRyyZLqGdvlU70Nxmi_-U3VQWZTcpD-tyZ5zC0WsIR1TubV-L9bPC--I77qejcQ4Fu/pub?output=csv';

    fetch(link)
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n').map(row => row.split(','));
        const container = document.getElementById('data-container');

        rows.forEach(row => {
            const imageSrc = row[0]; // assuming the first column contains image URLs
            const title = row[1];    // assuming the second column contains titles
            const text = row[2];     // assuming the third column contains text

            const div = document.createElement('div');
            div.classList.add('data-item');

            const img = document.createElement('img');
            img.src = imageSrc;

            const h2 = document.createElement('h2');
            h2.textContent = title;

            const p = document.createElement('p');
            p.textContent = text;

            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p);

            container.appendChild(div);
        });
    });
