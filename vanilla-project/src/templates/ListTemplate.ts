import FullList from '../model/FullList';

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById('listItems') as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = '';
  }

  render(fullList: FullList): void {
    this.clear();
    fullList.list.forEach((item) => {
      // create li
      const li = document.createElement('li') as HTMLLIElement;
      li.className = 'item';

      // create and append checkbox input
      const checkBox = document.createElement('input') as HTMLInputElement;
      checkBox.type = 'checkbox';
      checkBox.id = item.id;
      checkBox.checked = item.checked;
      checkBox.addEventListener('change', () => {
        item.checked = !item.checked;
        fullList.save();
      });

      li.append(checkBox);

      // create and append label
      const label = document.createElement('label') as HTMLLabelElement;

      label.htmlFor = item.id;
      label.textContent = item.item;

      li.append(label);

      // create and append remove button
      const btn = document.createElement('button') as HTMLButtonElement;

      btn.className = 'button';
      btn.textContent = 'X';

      btn.addEventListener('click', () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      li.append(btn);

      // add the li to the ul

      this.ul.append(li);
    });
  }
}
