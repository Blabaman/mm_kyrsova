import React, { useState, useRef, useEffect } from 'react';
import './styles/GlossaryPopup.css';

const glossaryData = [
  {
    term: 'Deepfake',
    definition: 'Діпфейк — це форма синтетичних медіа, де обличчя людини в існуючому зображенні або відео замінюється на обличчя іншої людини за допомогою глибинного навчання та штучного інтелекту.',
  },
  {
    term: 'Reddit',
    definition: 'Reddit — популярна соціальна новинна платформа та форум, де користувачі можуть публікувати новини, обговорення та інші медіа в тематичних спільнотах (subreddits).',
  },
  {
    term: 'конволюційних нейронних мереж',
    definition: 'конволюційні нейронні мережі (CNN) — це тип нейронних мереж, що спеціалізуються на обробці зображень і відео, використовуючи фільтри для виявлення особливих ознак у вхідних даних.',
  },
  {
    term: 'Generative Adversarial Networks',
    definition: 'Генеративні змагальні мережі (GAN) — це тип нейронних мереж, що складається з двох моделей: генератора, який створює нові дані, та дискримінатора, який оцінює їх на правдоподібність.',
  },
  {
    term: 'DeepFake App',
    definition: 'DeepFake App — це програма, що дозволяє користувачам створювати дипфейки, замінюючи обличчя або голоси на відео, використовуючи алгоритми штучного інтелекту.',
  },
  {
    term: 'Autoencoders',
    definition: 'Автокодери — це тип нейронних мереж, які навчаються стискати (кодувати) вхідні дані в компактну форму, а потім відновлювати їх назад у вихідний формат.',
  },
  {
    term: 'VAE',
    definition: 'VAE (Variational Autoencoders) — це варіант автокодерів, який використовує ймовірнісні моделі для генерації нових зразків даних, наближаючи розподіл даних до заданого латентного простору.',
  },
  {
    term: 'RNN',
    definition: 'Рекурентні нейронні мережі (RNN) — це тип нейронних мереж, які обробляють послідовні дані, такі як текст або відео, використовуючи зворотний зв’язок для збереження контексту.',
  },
  {
    term: 'Flow-based Models',
    definition: 'Моделі на основі потоків — це тип генеративних моделей, які використовують потоки ймовірностей для прямого та зворотного проходу даних, що дозволяє створювати реалістичні зразки.',
  },
  {
    term: 'Латентного шуму',
    definition: 'Латентний шум — це випадкові змінні, які використовуються в генеративних моделях для створення нових даних, забезпечуючи різноманітність та реалістичність результатів.',
  },
  {
    term: 'Механізмами уваги (attention)',
    definition: 'Механізми уваги (attention) — це метод в глибинних нейронних мережах, який дозволяє моделі зосереджуватися на найбільш важливих частинах вхідних даних, покращуючи ефективність навчання.',
  },
  {
    term: 'Face Swap',
    definition: 'Face Swap (заміна обличчя) — це тип дипфейку, при якому обличчя однієї людини на відео або фото замінюється обличчям іншої особи.',
  },
  {
    term: 'Lip Sync',
    definition: 'Lip Sync (ліпсинхронізація) — це процес синхронізації рухів губ з аудіотреком, який використовують у дипфейках для створення відео, де людина “говорить” чужими словами.',
  },
  {
    term: 'Voice Cloning',
    definition: 'Voice Cloning (клонування голосу) — це процес, при якому штучний інтелект створює копію голосу людини, використовуючи зразки її мовлення для синтезу нової мови.',
  },
  {
    term: 'Full Body Deepfake',
    definition: 'Full Body Deepfake (повний дипфейк тіла) — це вид дипфейку, при якому не лише обличчя, а й повне тіло людини замінюється на іншу особу, створюючи реалістичні відео з повними рухами.',
  },
  {
    term: 'Live Deepfake',
    definition: 'Live Deepfake (живий дипфейк) — це тип дипфейків, які створюються в реальному часі, часто використовуючи відео-трансляції для зміни вигляду учасників подій.',
  },
];

const GlossaryPopup = ({ term }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const glossaryEntry = glossaryData.find(entry => entry.term.toLowerCase() === term.toLowerCase());

  // On mount, set style based on parent element
  useEffect(() => {
    const parentElement = popupRef.current ? popupRef.current.parentElement : null;
    if (parentElement) {
      const computedStyle = window.getComputedStyle(parentElement);
      setStyle({
        color: computedStyle.color,
        fontSize: computedStyle.fontSize,
        fontFamily: computedStyle.fontFamily,
        textDecoration: computedStyle.textDecoration,
      });
    }
  }, [term]);

  if (!glossaryEntry) return null;

  return (
    <span ref={popupRef}>
      <button 
        className="glossary-trigger" 
        style={style} 
        onClick={handleOpenPopup}
      >
        {term}
      </button>

      {isOpen && (
        <div className="glossary-popup">
          <div className="popup-content" style={style}>
            <h3>{glossaryEntry.term}</h3>
            <p>{glossaryEntry.definition}</p>
            <button className="close-btn" onClick={handleClosePopup}>Закрити</button>
          </div>
        </div>
      )}
    </span>
  );
};

export default GlossaryPopup;