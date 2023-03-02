const editProfile = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_edit');
const closeButtons = document.querySelectorAll('.popup__button-close');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const formElement = popupEdit.querySelector('.popup__form');
const nameInput = popupEdit.querySelector('.popup__input_value_name');
const jobInput = popupEdit.querySelector('.popup__input_value_job');

const popupAddPhoto = document.querySelector('.popup_add');
const addPhoto = document.querySelector('.profile__button-add');
const formAddPhoto = popupAddPhoto.querySelector('.popup__form');
const placeInput = popupAddPhoto.querySelector('.popup__input_value_place');
const linkInput = popupAddPhoto.querySelector('.popup__input_value_link');

const popupView = document.querySelector('.popup_view');
const imageView = popupView.querySelector('.popup__image');
const titleView = popupView.querySelector('.popup__image-title');

const elements = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const visiblePopup = (typeOfPopup) => {
  typeOfPopup.classList.add('popup_opened');
}

const hidePopup = (typeOfPopup) => {
  typeOfPopup.classList.remove('popup_opened');
}

const createCard = (card) => {
  const cardTemplate = document.querySelector('#cardTemplate').content.cloneNode(true);
  const cardName = cardTemplate.querySelector('.element__title');
  cardName.textContent = card.name;
  const cardLink = cardTemplate.querySelector('.element__photo');
  cardLink.setAttribute('src', card.link);
  cardLink.alt = `${card.name}`;
  cardLink.addEventListener('click', () => {
    visiblePopup(popupView);
    titleView.textContent = card.name;
    imageView.src = `${card.link}`;
    imageView.alt = `${card.name}`;
  });
  const likeButton = cardTemplate.querySelector('.element__button-like');
  likeButton.addEventListener('click', (e) => {
    e.target.classList.toggle('element__button-like_active');
  });
  const delButton = cardTemplate.querySelector('.element__button-del');
  delButton.addEventListener('click', (e) => {
    e.target.closest('.element').remove();
  });
  return cardTemplate;
}

initialCards.forEach( (cards) => {
  const newCard = createCard(cards);
  elements.append(newCard);
});


function handleFormEditSubmit (e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  hidePopup(popupEdit);
}

function handleFormAddSubmit (e) {
  e.preventDefault();
  const name = placeInput.value;
  const link = linkInput.value;
  const card = {name,link};
  if (name == '' || link == '') {
    hidePopup(popupAddPhoto);
  } else {
  elements.prepend(createCard(card));
  }
  hidePopup(popupAddPhoto);
  }

editProfile.addEventListener('click', () => {
  visiblePopup(popupEdit);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
addPhoto.addEventListener('click', () => {
  visiblePopup(popupAddPhoto);
  formAddPhoto.reset();
});

closeButtons.forEach( (button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => hidePopup(popup));
});
formElement.addEventListener('submit', handleFormEditSubmit);
formAddPhoto.addEventListener('submit', handleFormAddSubmit);
