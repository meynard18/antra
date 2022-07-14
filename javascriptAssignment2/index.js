const state = {
   a: 'apple',
   b: 'banana',
   c: 'city',
   d: 'dom',
   e: 'end',
   f: 'forEach',
   g: 'gesdrwesf',
};

const body = document.getElementById('body');
const select = document.createElement('select');
const select2 = document.createElement('select');
body.append(select, select2);

Object.keys(state).map((item) => {
   const option = document.createElement('option');
   select.append(option);
   option.append(item);
   option.value = item;
});

Object.values(state).map((item) => {
   const option = document.createElement('option');
   select2.append(option);
   option.append(item);
   option.value = item;
});

function selectedItem(e) {
   select.selectedIndex = e.target.selectedIndex;
   select2.selectedIndex = e.target.selectedIndex;
}
select.addEventListener('change', selectedItem);
select2.addEventListener('change', selectedItem);
