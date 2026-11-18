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
const waves = document.querySelectorAll('.wave-section');
const reveals = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting);
  visible.forEach(({ target }, index) => {
    reveals.unobserve(target);
    if (reduceMotion.matches || target.contains(document.activeElement)) return;
    target.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 45}ms`);
    target.classList.add('is-revealing');
  });
}, { threshold: 0.12 });
let waveFrame = 0;
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

function addPhoto(container, item, onLoad, isDetail = false) {
  if (!item.image) return;
  const photo = element('img', 'media');
  photo.alt = isDetail ? item.name : '';
  photo.hidden = true;
  photo.addEventListener('load', () => {
    photo.hidden = false;
    onLoad?.();
  }, { once: true });
  photo.addEventListener('error', () => photo.remove(), { once: true });
  photo.src = item.image;
  container.prepend(photo);
}

function openDish(item, card) {
  activeCard = card;
  const media = document.querySelector('#dish-media');
  media.replaceChildren();
  addPhoto(media, item, undefined, true);
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
  const description = element('span', 'card-description', descriptionFor(item));
  card.classList.add('card-text');
  copy.append(description);
  card.append(copy);
  addPhoto(card, item, () => {
    card.classList.remove('card-text');
    description.remove();
  });
  card.addEventListener('click', () => openDish(item, card));
  listItem.append(card);
  return listItem;
}

function normalize(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

function render({ append = false } = {}) {
  const terms = normalize(search.value).split(/\s+/);
  const matches = menuItems.filter(item => {
    const text = normalize([item.name, item.category, item.description].join(' '));
    return (category === allDishes || item.category === category) && terms.every(term => text.includes(term));
  });

  const start = append ? grid.children.length : 0;
  const cards = matches.slice(start, visibleLimit).map(makeCard);
  if (append) grid.append(...cards);
  else {
    for (const card of grid.children) reveals.unobserve(card);
    grid.replaceChildren(...cards);
  }
  for (const card of cards) reveals.observe(card);

  count.textContent = matches.length
    ? `Showing ${Math.min(visibleLimit, matches.length)} of ${matches.length} ${matches.length === 1 ? 'dish' : 'dishes'}`
    : '0 dishes';
  empty.hidden = matches.length !== 0;
  more.hidden = matches.length <= visibleLimit;
  if (append) cards[0]?.querySelector('button').focus();

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
function updateWaves() {
  waveFrame = 0;
  if (reduceMotion.matches) return;
  for (const section of waves) {
    const bounds = section.getBoundingClientRect();
    if (bounds.bottom < 0 || bounds.top > innerHeight) continue;
    const progress = Math.max(0, Math.min(1, (innerHeight - bounds.top) / (innerHeight + bounds.height)));
    section.style.setProperty('--wave-offset', `${progress * 120 - 60}px`);
  }
}

function scheduleWaves() {
  if (!waveFrame && !reduceMotion.matches) waveFrame = requestAnimationFrame(updateWaves);
}

window.addEventListener('scroll', scheduleWaves, { passive: true });
window.addEventListener('resize', scheduleWaves);
reduceMotion.addEventListener('change', scheduleWaves);
for (const heading of document.querySelectorAll('#menu-title, #visit-title')) reveals.observe(heading);
scheduleWaves();
render();
