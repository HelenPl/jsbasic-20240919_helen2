/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.createTable(rows);
    }

    createTable(rows) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        
        thead.innerHTML = `
            <tr>
                <th>Имя</th>
                <th>Возраст</th>
                <th>Зарплата</th>
                <th>Город</th>
                <th></th>
            </tr>
        `;

    
        rows.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.name}</td>
                <td>${row.age}</td>
                <td>${row.salary}</td>
                <td>${row.city}</td>
                <td><button>X</button></td>
            `;

            tr.querySelector('button').addEventListener('click', () => {
                tr.remove();
            });

            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        return table;
  }
}
