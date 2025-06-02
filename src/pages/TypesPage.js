import React from 'react';
import { Link } from 'react-router-dom';
import './styles/TypesPage.css';
import RollingImageComparison from '../utils/RollingImageComparison'
import GlossaryPopup from '../components/GlossaryPopup';


const TypesPage = () => {
  return (
    <div className="types-page">
      <header className="page-header">
        <h1>Типи діпфейків</h1>
      </header>

      <main className="content">
        <section className="type-section">
          <h2>1. Заміна обличчя (Face Swap)</h2>
          <div className="type-details">
            <div className="text-content">
              <p>
                Технологія заміни обличчя спершу розвивалася у рамках досліджень, спрямованих на відтворення геометрії обличчя шляхом аналізу зображень. Із появою глибоких нейронних мереж рівень достовірності результатів суттєво зріс, що дозволило формувати зображення зі збереженням дрібних м’язових скорочень, тіней та текстур шкіри.
              </p>
              <p>
                Ключовим аспектом стало моделювання мікровиразів — короткочасних змін виразу, що не є свідомо помітні. Їхня точна імітація створює ефект переконливості, за якого навіть уважний глядач не може з упевненістю відрізнити автентичний запис від синтезованого.
              </p>
            </div>
            <div className="media-content">
                <RollingImageComparison/>
            </div>
          </div>
        </section>

        <section className="type-section">
          <h2>2. Синхронізація губ (Lip Sync)</h2>
          <div className="type-details">
            <div className="text-content">
              <p>
                Модель синхронізації мовлення з артикуляцією працює на основі узгодження звукової доріжки з тривимірною структурою обличчя. Для досягнення правдоподібності необхідне не лише синхронне відтворення руху губ, а й кореляція між артикуляційними фазами, мікрожестами щелепи, рухами язика та паузами між фразами.
              </p>
              <p>
                У випадку неузгодженості виникає когнітивний дисонанс, який спостерігач часто сприймає на рівні інтуїтивного відчуття штучності. Проте при належному моделюванні візуальна та звукова інформація формують цілісний образ, у якому порушення автентичності стає майже непомітним.
              </p>
            </div>
            <div className="media-content">
              <video controls>
                <source src="assets/videos/Anderson Cooper, 4K Original-(Deep)Fake Example.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="type-section">
          <h2>3. Імітація голосу (Voice Cloning)</h2>
          <div className="type-details">
            <div className="text-content">
              <p>
                Імітація голосу реалізується через побудову моделі мовця за допомогою глибоких рекурентних або трансформерних мереж. Система відтворює не лише основні параметри — тембр, висоту, швидкість мовлення — а й моделює індивідуальні риси: інтонаційні вигини, логічні наголоси, типові мовленнєві помилки.
              </p>
              <p>
                Технологія дозволяє генерувати мовлення, що є ідентичним до оригінального голосу навіть у тих випадках, коли реальна особа ніколи не промовляла дані фрази. Особливої складності набуває ідентифікація підробки в емоційно забарвлених повідомленнях, де автентичність звукового образу має вирішальне значення.
              </p>
            </div>
            <div className="media-content">
                <p>Аудіофрагмент: приклад синтезованого голосу</p>
                <audio controls>
                    <source src="assets/audio/This is not Morgan Freeman - A Deepfake.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
          </div>
        </section>
        <section className="type-section">
            <h2>4. Повнорозмірний синтез (Full Body Deepfake)</h2>
            <div className="type-details">
                <div className="text-content">
                <p>
                    Синтез руху всього тіла передбачає передачу кінематичних параметрів з одного суб’єкта на іншого з урахуванням пропорцій, вагових характеристик та індивідуальної манери руху. Модель має з високою точністю відтворювати баланс тіла, координацію жестів, дрібну моторну динаміку рук та реакцію на навколишнє середовище.
                </p>
                <p>
                    Ефективність такого синтезу значною мірою залежить від здатності системи враховувати багатошарові зв’язки між тілесною виразністю, мовленням і мімікою. У результаті формується зоровий образ, який не викликає сумнівів у його природності, навіть попри відсутність первинного відеозапису.
                </p>
                </div>
                <div className="media-content">
                <video controls>
                    <source src="assets/videos/Very realistic Tom Cruise Deepfake.mp4" type="video/mp4" />
                </video>
                </div>
            </div>
        </section>

        <section className="type-section">
          <h2>5. Фільтрація в режимі реального часу (Live Deepfake)</h2>
          <div className="type-details">
            <div className="text-content">
              <p>
                Трансформація обличчя в режимі реального часу вимагає мінімальної часової затримки, що ускладнює використання стандартних генеративних алгоритмів. Для досягнення стабільного відтворення використовуються оптимізовані моделі з попередньо навченими шаблонами поведінки.
              </p>
              <p>
                Як правило, йдеться не про повну заміну, а про модифікацію ключових елементів зовнішності. Це може включати зміну міміки, структури обличчя або кольору шкіри. Технологія дозволяє реалізувати візуальну підміну особи в прямому ефірі без відчутної втрати якості, що створює нові загрози для автентичності цифрової комунікації.
              </p>
            </div>
            <video controls>
              <source src="assets/videos/Identity Verification Spoofing With Deepfakes.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <Link to="/" className="back-link">Повернутися на головну сторінку</Link>
      </footer>
    </div>
  );
}

export default TypesPage;
