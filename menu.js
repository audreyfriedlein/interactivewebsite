const grid = document.querySelector('#menu-grid');
const search = document.querySelector('#menu-search');
const filters = document.querySelector('#filters');
const count = document.querySelector('#result-count');
const empty = document.querySelector('#empty');
const more = document.querySelector('#more');
const dialog = document.querySelector('#dish-dialog');
const logo = document.querySelector('#hero-logo img');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const descriptionFor = item => item.description || 'No description listed on Toast.';
let resultFade;
const pageSize = 12;
const allDishes = 'All dishes';
const categories = [allDishes, 'Breakfast', 'Bowls & Salads', 'Seafood', 'Sandwiches', 'Sides & Snacks', 'Kids', 'Specials'];
let category = allDishes;
let visibleLimit = pageSize;
let activeCard;

function element(tag, className, content = '') {
  const node = document.createElement(tag);
  node.className = className;
  node.textContent = content;
  return node;
}

function makeMedia(item, isDetail = false) {
  const photo = element('img', 'media');
  photo.alt = isDetail ? item.name : '';
  photo.loading = isDetail ? 'eager' : 'lazy';
  photo.src = item.image;
  return photo;
}

function openDish(item, card) {
  activeCard = card;
  const media = document.querySelector('#dish-media');
  media.replaceChildren();
  if (item.image) {
    const photo = makeMedia(item, true);
    photo.addEventListener('error', () => photo.remove(), { once: true });
    media.append(photo);
  }
  document.querySelector('#dish-category').textContent = item.category;
  document.querySelector('#dish-name').textContent = item.name;
  document.querySelector('#dish-price').textContent = item.price === 'See Toast' ? 'See Toast for pricing' : item.price;
  document.querySelector('#dish-description').textContent = descriptionFor(item);
  dialog.showModal();
}

function makeCard(item) {
  const listItem = document.createElement('li');
  const card = element('button', 'card');
  card.type = 'button';
  card.setAttribute('aria-haspopup', 'dialog');

  const copy = element('span', 'card-copy');
  const line = element('span', 'card-line');
  line.append(element('span', '', item.name), element('span', 'price', item.price));
  copy.append(element('span', 'card-category', item.category), line);
  function showDescription() {
    card.classList.add('card-text');
    copy.append(element('span', 'card-description', descriptionFor(item)));
  }
  if (item.image) {
    const photo = makeMedia(item);
    photo.addEventListener('error', () => {
      photo.remove();
      showDescription();
    }, { once: true });
    card.append(photo);
  } else {
    showDescription();
  }
  card.append(copy);
  card.addEventListener('click', () => openDish(item, card));
  listItem.append(card);
  return listItem;
}

function normalize(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

function render({ append = false, animate = true } = {}) {
  const terms = normalize(search.value).split(/\s+/);
  const matches = menuItems.filter(item => {
    const text = normalize([item.name, item.category, item.description].join(' '));
    return (category === allDishes || item.category === category) && terms.every(term => text.includes(term));
  });

  const start = append ? grid.children.length : 0;
  const cards = matches.slice(start, visibleLimit).map(makeCard);
  if (append) grid.append(...cards);
  else grid.replaceChildren(...cards);

  count.textContent = matches.length
    ? `Showing ${Math.min(visibleLimit, matches.length)} of ${matches.length} ${matches.length === 1 ? 'dish' : 'dishes'}`
    : '0 dishes';
  empty.hidden = matches.length !== 0;
  more.hidden = matches.length <= visibleLimit;
  if (append) cards[0]?.querySelector('button').focus();
  resultFade?.cancel();
  if (animate && !reduceMotion.matches) {
    resultFade = (matches.length ? grid : empty).animate(
      [{ opacity: 0.65 }, { opacity: 1 }],
      { duration: 170, easing: 'ease-out' }
    );
  }
}

for (const label of categories) {
  const button = element('button', '', label);
  button.type = 'button';
  button.setAttribute('aria-pressed', String(label === allDishes));
  button.addEventListener('click', () => {
    filters.querySelector('[aria-pressed="true"]').setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-pressed', 'true');
    category = label;
    visibleLimit = pageSize;
    render();
  });
  filters.append(button);
}

search.addEventListener('input', () => {
  visibleLimit = pageSize;
  render();
});
more.addEventListener('click', () => {
  visibleLimit += pageSize;
  render({ append: true });
});
dialog.addEventListener('close', () => activeCard?.focus());
document.querySelector('#hero-logo').addEventListener('click', () => {
  if (reduceMotion.matches) return;
  logo.classList.remove('logo-pop');
  // Flush the style change so adding the class restarts the animation.
  void logo.offsetWidth;
  logo.classList.add('logo-pop');
});
reduceMotion.addEventListener('change', event => {
  if (event.matches) resultFade?.cancel();
});
render({ animate: false });
