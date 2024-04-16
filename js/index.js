const main = document.querySelector(".main");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".back");
const btnOtvet = document.querySelector(".show-answer");
const theme = document.querySelector(".head-question-point");
const vopros = document.querySelector(".vopros");
const otvet = document.querySelector(".otvet");

// Все кнопки
const first100 = document.querySelector(".first-100");
const first200 = document.querySelector(".first-200");
const first300 = document.querySelector(".first-300");
const first400 = document.querySelector(".first-400");

const second100 = document.querySelector(".second-100");
const second200 = document.querySelector(".second-200");
const second300 = document.querySelector(".second-300");
const second400 = document.querySelector(".second-400");

const third100 = document.querySelector(".third-100");
const third200 = document.querySelector(".third-200");
const third300 = document.querySelector(".third-300");
const third400 = document.querySelector(".third-400");

const fourth100 = document.querySelector(".fourth-100");
const fourth200 = document.querySelector(".fourth-200");
const fourth300 = document.querySelector(".fourth-300");
const fourth400 = document.querySelector(".fourth-400");

// Функции
const openModal = (evt) => {
  modal.classList.add("modal-is-opened");
  setTimeout(() => {
    evt.target.disabled = true;
    evt.target.classList.add("button-no-eff");
    evt.target.querySelector("p").textContent = "";
  }, 300);
};

const closeModal = () => {
  modal.classList.remove("modal-is-opened");
  otvet.classList.remove("otvet-is-opened");
  setTimeout(() => {
    changeText("", "", "");
  }, 300);
};

const toggleAnswer = () => {
  otvet.classList.toggle("otvet-is-opened");
};

const changeText = (the, que, answ) => {
  theme.textContent = the;
  vopros.textContent = que;
  otvet.textContent = answ;
};

modal.addEventListener("mousedown", (evt) => {
  if (evt.target.classList.contains("modal-is-opened")) {
    closeModal();
  }
});

// Слушатели основных кнопок управления
btnOtvet.addEventListener("click", toggleAnswer);

btnClose.addEventListener("click", closeModal);

// Слушатели всех кнопок вопросов
first100.addEventListener("click", (evt) => {
  changeText(
    "Научное обобщение 100",
    "Противодействие расследованию – это… ",
    "Ответ: это умышленные действия (система действий) препятствующие установлению объективной истины по делу и работе правоохранительных органов по раскрытию и расследованию преступлений."
  );
  openModal(evt);
});

first200.addEventListener("click", (evt) => {
  changeText(
    "Научное обобщение 200",
    "Основная цель противодействия?",
    "Ответ: Воспрепятствовать расследованию и в конечном счете установлению истины по уголовному делу."
  );
  openModal(evt);
});

first300.addEventListener("click", (evt) => {
  changeText(
    "Научное обобщение 300",
    "Кто становится субъектом противодействия расследованию чаще всего?",
    "Ответ: Сам преступник."
  );
  openModal(evt);
});

first400.addEventListener("click", (evt) => {
  changeText(
    "Научное обобщение 400",
    "Кто или что является объектом воздействия при противодействии расследованию преступлений?",
    "Ответ: Лицо, осуществляющее расследование по уголовному делу, его деятельность, материальные и идеальные следы, на которое оказывается воздействие с целью противодействия расследованию."
  );
  openModal(evt);
});

second100.addEventListener("click", (evt) => {
  changeText(
    "Все за одного 100",
    "Перечислите группы способов противодействия.",
    "Утаивание, уничтожение, маскировка, фальсификация информации и её носителей, смешанные способы."
  );
  openModal(evt);
});

second200.addEventListener("click", (evt) => {
  changeText(
    "Все за одного 200",
    "Какая группа способов противодействия преследует цель изменить представление о способе совершенного преступления, личности виновного, назначении объектов — носителей информации и их круге.",
    "Ответ: Маскировка"
  );
  openModal(evt);
});

second300.addEventListener("click", (evt) => {
  changeText(
    "Все за одного 300",
    "К какому способу фальсификации относится ложное алиби?",
    "Ответ: К комбинированному способу."
  );
  openModal(evt);
});

second400.addEventListener("click", (evt) => {
  changeText(
    "Все за одного 400",
    "В буквальном смысле слова утаить - значит оставить следователя в неведении относительно тех или иных обстоятельств дела или источника информации, требуемой для установления истины; оно может быть осуществлено как в активной, так и в, пассивной формах. О чем идет речь?",
    "Ответ: Утаивание."
  );
  openModal(evt);
});

third100.addEventListener("click", (evt) => {
  changeText(
    "Интеллектуальный компот 100",
    "Преодоление следователем противодействия – это…",
    "Ответ: Система методов в виде определенного порядка действий основанных на системе тактических рекомендаций."
  );
  openModal(evt);
});

third200.addEventListener("click", (evt) => {
  changeText(
    "Интеллектуальный компот 200",
    "На какие две группы можно разделить методы преодоления противодействия расследованию?",
    "Ответ: 1. Средства и методы преодоления попыток сокрытия преступлений; 2. Средства и методы преодоления иных форм противодействия."
  );
  openModal(evt);
});

third300.addEventListener("click", (evt) => {
  changeText(
    "Интеллектуальный компот 300",
    "Каким обобщенным термином обозначается ряд тактических приемов допроса, основанных на использовании фактора внезапности?",
    "Ответ: Внезапность."
  );
  openModal(evt);
});

third400.addEventListener("click", (evt) => {
  changeText(
    "Интеллектуальный компот 400",
    `Допрашиваемому предоставляется возможность беспрепятственно излагать свою ложную легенду в целях последующего детального ее опровержения. Этот прием комбинационно сочетается с приемом "пресечения лжи", когда изложение легенды прерывается следователем в самом ее уязвимом месте и начинается процесс опровержения путем предъявления доказательств или с использованием фактора внезапности. О каком приеме идет речь?`,
    "Ответ: Допущение легенды."
  );
  openModal(evt);
});

fourth100.addEventListener("click", (evt) => {
  changeText(
    "Достать ножи 100",
    "Cовокупность противоправных, либо не противоречащих закону действий обвиняемого и иных лиц по обоснованию, выдвижению и отстаиванию ложной информации о месте нахождения лица, совершившего преступное деяние, в момент совершения преступления и тем самым направленных на воспрепятствование установлению объективной истины по делу – это… ",
    "Ответ: Ложное алиби."
  );
  openModal(evt);
});

fourth200.addEventListener("click", (evt) => {
  changeText(
    "Достать ножи 200",
    "Перечислите виды ложного алиби",
    "Ответ: реальное; не подготовленное; полное; квалифицированное, с созданием доказательств; ложное; заранее подготовленное; частичное; простое, без создания системы доказательств."
  );
  openModal(evt);
});

fourth300.addEventListener("click", (evt) => {
  changeText(
    "Достать ножи 300",
    "Перечислите этапы процесса разоблачения ложного алиби?",
    "Ответ: 1) выявление признаков ложного алиби, 2) проверка и доказывание ложности алиби."
  );
  openModal(evt);
});

fourth400.addEventListener("click", (evt) => {
  changeText(
    "Достать ножи 400",
    "Какой порядок исследования алиби?",
    "Ответ: детальный допрос заявителя; построение модели проверяемой ситуации; проведение следственных действий и ОРМ; проверка обстоятельств, на которые ссылается заявитель; сопоставление обстоятельств и деталей заявленного алиби с установленными фактами; повторный допрос заявителя, его изобличение."
  );
  openModal(evt);
});
