import React from 'react';
import { Link } from 'react-router-dom';
import './styles/DetectionPage.css';
import GlossaryPopup from '../components/GlossaryPopup';


const DetectionPage = () => {
  return (
    <div className="detection-page">
      <header className="page-header">
        <h1>Алгоритми та техніки детекції діпфейків</h1>
      </header>

      <main className="content">
        <section className="detection-section">
          <h2>1. Виявлення за допомогою глибоких нейронних мереж (DNN)</h2>
          <div className="detection-details">
            <div className="text-content">
              <p>
                На сьогоднішній день глибокі нейронні мережі (DNN) є одним з найефективніших інструментів для виявлення діпфейків. Дані моделі здатні аналізувати ряд характеристик зображень та відео, що є непомітними для людського ока, наприклад невідповідності в текстурах, нереалістині колірні переходи або неприродний рух губ. Окремі моделі, як-от CNN (Convolutional Neural Networks), здатні точніше визначати ознаки фальсифікації завдяки часовому аналалізу та більшому масивіву навчальних даних.
              </p>
            </div>
            <div className="image-content">
                <p>Візуалізація детектора діпфейкових зображень на базі EfficientNet V2-Ld</p>
                <img src="assets/images/Grad-CAM-visualization-of-the-EfficientNet-V2-L-based-deepfake-detector-on-randomly.png" alt="DNN detection example" />
            </div>
          </div>
        </section>

        <section className="detection-section">
          <h2>2. Аналіз артефактів відео (Video Artifact Detection)</h2>
          <div className="detection-details">
            <div className="text-content">
              <p>
                Одна з найбільших ознак діпфейків — це наявність певних артефактів, що є характерними для синтетично створених відео. Це можуть бути незвичні зміни в освітленні, колір або неприродні рухи. Спеціалізовані алгоритми розпізнавання артефактів зосереджуються саме на цих аномаліях.
              </p>
              <p>
                Ці методи можуть також містити аналіз текстур, глибини кольору, переходів між освітленими й затемненими ділянками, що в дозволяє з більшою точністю відрізнити реальне відео від підробленого. Відмінність у реалістичності відео є основним аспектом, на якому базуються такі алгоритми.
              </p>
            </div>
            <div className="image-content">
              <img src="assets/images/Example-of-Deepfake-Artifacts-a-Faked-face-b-Original-face-c-Abnormal-edges-of.jpg" alt="Video artifact detection" />
            </div>
          </div>
        </section>

        <section className="detection-section">
          <h2>3. Виявлення зсувів в освітленні та тінях</h2>
          <div className="detection-details">
            <div className="text-content">
              <p>
                Зміни в освітленні або тінях є одними з найбільш помітних ознак підроблених зображень або відео. Це є особливо важливо у сценаріях, де освітлення обличчя або в межах сцени виглядає неприродно. На справжному відео світло буде змінюватися поступово, в залежності від напрямку джерела світла та геометрії сцени.
              </p>
            </div>
            <video controls>
              <source src="assets/videos/Deepfake example. Close shot Bill Gates.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="detection-section">
          <h2>4. Виявлення за допомогою аудіоаналізу (Audio Analysis)</h2>
          <div className="detection-details">
            <div className="text-content">
              <p>
                Не лише відео, але й аудіо може бути об'єктом маніпуляцій, особливо якщо мова йде про синтез голосу. Алгоритми аудіоаналізу дозволяють виявити підроблені голоси завдяки нездатності навіть найкращих моделей синтезу коректно опрацьовувати тональні коливання, паузи і зміни у динаміці голосу. Шумові аномалії, а також нетипові затримки між словами або фразами можуть бути індикаторами того, що аудіо було змінене або повністю синтезовано.
              </p>
            </div>
          </div>
        </section>

        <section className="detection-section">
          <h2>5. Багатофакторний аналіз (Multifactor Analysis)</h2>
          <div className="detection-details">
            <div className="text-content">
              <p>
                З метою підвищення точності розпізнавання діпфейків, може використовуватись багатофакторний підхід, котрий поєднує кілька методів для оцінки автентичності контенту. Такий підхід може включати в себе перевірку на наявність артефактів, аналіз освітлення, а також аудіо та відеоаналіз.
              </p>
              <p>
                Це в свою чергу збільшує ймовірність коректного розпізнавання підробленого матеріалу. Важливо, що хоча деякі методи можуть і не дати бажаного результату при використанні самими по собі, поєднання кількох одразу суттєво підвищує точність.
              </p>
            </div>
            <video controls>
              <source src="assets/videos/Very realistic Tom Cruise Deepfake.mp4" type="video/mp4" />
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

export default DetectionPage;
