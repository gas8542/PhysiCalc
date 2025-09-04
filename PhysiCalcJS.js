document.addEventListener('DOMContentLoaded', function() {
  const window_input_bad = document.getElementById("searchBox");
  const li_mkt = document.getElementById("li_mkt");

  if (window_input_bad && li_mkt) {
    window_input_bad.addEventListener('input', function() {
      const window_input = window_input_bad.value;
      const formulaBoxes = {
        "скорость": { ids: ["div_meh_2_formule_bu_id_js", "div_meh_3_formule_bu_id_js", "div_meh_4_formule_bu_id_js", "div_meh_5_formule_bu_id_js",
          "div_meh_6_formule_bu_id_js", "div_meh_8_formule_bu_id_js", "div_meh_9_formule_bu_id_js",
          "div_meh_10_formule_bu_id_js", "div_meh_11_formule_bu_id_js", "div_meh_13_formule_bu_id_js",
          "div_meh_14_formule_bu_id_js", "div_meh_15_formule_bu_id_js", "div_meh_16_formule_bu_id_js",
          "div_mkt_4_formule_bu_id_js", "div_mkt_7_formule_bu_id_js"] },
        "ускорение": { ids: ["div_meh_1_formule_bu_id_js", "div_meh_6_formule_bu_id_js", "div_meh_7_formule_bu_id_js"] },
        "время": { ids: ["div_meh_2_formule_bu_id_js", "div_meh_3_formule_bu_id_js", "div_meh_4_formule_bu_id_js",
          "div_meh_5_formule_bu_id_js", "div_meh_6_formule_bu_id_js", "div_meh_8_formule_bu_id_js", "div_meh_12_formule_bu_id_js",
          "div_meh_13_formule_bu_id_js", "div_meh_14_formule_bu_id_js", "div_meh_15_formule_bu_id_js", 
          "div_elektro_13_formule_bu_id_js", "div_optic_11_formule_bu_id_js"
        ] },
        "маса": { ids: ["div_meh_7_formule_bu_id_js", "div_meh_8_formule_bu_id_js", "div_meh_9_formule_bu_id_js",
          "div_meh_10_formule_bu_id_js", "div_meh_17_formule_bu_id_js", "div_mkt_3_formule_bu_id_js", "div_mkt_4_formule_bu_id_js",
          "div_mkt_7_formule_bu_id_js",
        ] },
        "малярная маса": { ids: ["div_meh_9_formule_bu_id_js",] },
        "радиус": { ids: ["div_meh_1_formule_bu_id_js", "div_meh_17_formule_bu_id_js",] },
        "ускорение свободного падения": { ids: [ "div_meh_11_formule_bu_id_js", "div_meh_12_formule_bu_id_js",
          "div_meh_13_formule_bu_id_js", "div_meh_14_formule_bu_id_js", "div_meh_15_formule_bu_id_js", "div_meh_16_formule_bu_id_js"
        ] },
        "импульс": { ids: ["div_meh_10_formule_bu_id_js"] },
        "высота": { ids: ["div_meh_12_formule_bu_id_js", "div_meh_13_formule_bu_id_js", "div_meh_15_formule_bu_id_js", "div_meh_16_formule_bu_id_js", "div_optic_4_formule_bu_id_js"] },
        "канстанты": { ids: ["div_meh_10_formule_bu_id_js", "div_meh_11_formule_bu_id_js", "div_meh_12_formule_bu_id_js", "div_meh_13_formule_bu_id_js",
          "div_meh_14_formule_bu_id_js", "div_meh_15_formule_bu_id_js", "div_mkt_1_formule_bu_id_js", "div_mkt_3_formule_bu_id_js",
          "div_mkt_6_formule_bu_id_js", "div_mkt_7_formule_bu_id_js", "div_mkt_9_formule_bu_id_js",
          "div_mkt_11_formule_bu_id_js", "div_mkt_12_formule_bu_id_js", "div_optic_1_formule_bu_id_js",
          "div_optic_2_formule_bu_id_js", "div_optic_3_formule_bu_id_js", ""
        ]},
        "ЭДС": { ids: ["div_mkt_6_formule_bu_id_js", "div_elektro_4_formule_bu_id_js", "div_elektro_5_formule_bu_id_js", "div_elektro_6_formule_bu_id_js",
          "div_elektro_7_formule_bu_id_js", "div_elektro_8_formule_bu_id_js", "div_elektro_10_formule_bu_id_js", "div_elektro_12_formule_bu_id_js", "div_elektro_14_formule_bu_id_js",
          "div_elektro_16_formule_bu_id_js"
        ] },
        "пастоянная больцмана": { ids: ["div_mkt_1_formule_bu_id_js", "div_mkt_6_formule_bu_id_js", "div_mkt_7_formule_bu_id_js"] },
        "давление": { ids: ["div_mkt_1_formule_bu_id_js", "div_mkt_3_formule_bu_id_js", "div_mkt_9_formule_bu_id_js", "div_mkt_11_formule_bu_id_js", "div_mkt_12_formule_bu_id_js"] },
        "заряд": { ids: ["div_elektro_1_formule_bu_id_js", "div_elektro_2_formule_bu_id_js", "div_elektro_5_formule_bu_id_js", "div_elektro_8_formule_bu_id_js",
          "div_elektro_9_formule_bu_id_js", "div_elektro_10_formule_bu_id_js", "div_elektro_12_formule_bu_id_js", "div_elektro_14_formule_bu_id_js"
        ] },
        "КПД": { ids: ["div_mkt_3_formule_bu_id_js", "div_elektro_3_formule_bu_id_js", ""] },
        "напряжонность": { ids: ["div_elektro_4_formule_bu_id_js", "div_elektro_5_formule_bu_id_js", "div_optic_8_formule_bu_id_js"]},
        "ток": { ids: ["div_elektro_6_formule_bu_id_js", "div_elektro_11_formule_bu_id_js", "div_elektro_13_formule_bu_id_js", "div_elektro_15_formule_bu_id_js", "div_elektro_16_formule_bu_id_js"] },
        "сопративление": { ids: ["div_elektro_3_formule_bu_id_js", "div_elektro_6_formule_bu_id_js", "div_elektro_7_formule_bu_id_js",
          "div_elektro_13_formule_bu_id_js", "div_elektro_15_formule_bu_id_js", "div_elektro_16_formule_bu_id_js"
        ] },
        "напряжение": { ids: ["div_elektro_15_formule_bu_id_js", "div_elektro_11_formule_bu_id_js"] },
        "угол": { ids: [] },
        "коофицент отрожения": { ids: ["div_optic_1_formule_bu_id_js",] },
        "число авогадро": { ids: ["div_mkt_3_formule_bu_id_js"] },
        "световой поток": { ids: ["div_optic_1_formule_bu_id_js", "div_optic_2_formule_bu_id_js", "div_optic_3_formule_bu_id_js", ""] },
        "расстояние от ": { ids: ["div_optic_4_formule_bu_id_js", "div_optic_6_formule_bu_id_js", "div_optic_7_formule_bu_id_js", ""] },
        "мкт": { ids: ["div_mkt_1_formule_bu_id_js", "div_mkt_3_formule_bu_id_js", "div_mkt_4_formule_bu_id_js",
          "div_mkt_5_formule_bu_id_js", "div_mkt_6_formule_bu_id_js", "div_mkt_7_formule_bu_id_js", "div_mkt_8_formule_bu_id_js",
          "div_mkt_9_formule_bu_id_js", "div_mkt_11_formule_bu_id_js", "div_mkt_12_formule_bu_id_js"
         ] },
        "фокусное расстояние": { ids: ["div_optic_5_formule_bu_id_js", "div_optic_6_formule_bu_id_js", "div_optic_7_formule_bu_id_js", "div_optic_14_formule_bu_id_js",
          "div_optic_16_formule_bu_id_js", "div_optic_17_formule_bu_id_js"
        ] },
        "показатель преломления": { ids: ["div_optic_9_formule_bu_id_js", "div_optic_10_formule_bu_id_js", "div_optic_12_formule_bu_id_js", "div_optic_19_formule_bu_id_js"] },
      };

      li_mkt.innerHTML = ""; // Очищаем предыдущие результаты

      if (formulaBoxes[window_input]) {
        const idFromFormulaBoxes = formulaBoxes[window_input].ids;

        const ul_js = document.createElement('ul');
        const h1_li = document.createElement('h1');
        const li_h1 = document.createElement('li');
        const newText = document.createTextNode("формулы");
        h1_li.appendChild(newText);
        li_h1.classList.add('formul_mkt_1');
        li_h1.appendChild(h1_li);
        ul_js.appendChild(li_h1);
        ul_js.classList.add('formul_spisk_mkt');
        ul_js.style.padding = '10px';
        idFromFormulaBoxes.forEach(id => {  // Итерируемся по всем ID
          const originalElement = document.getElementById(id);
          if (originalElement) {
              const clonedElement = originalElement.parentNode.cloneNode(true); // Клонируем элемент (включая li)
              ul_js.appendChild(clonedElement); // Добавляем клон в контейнер результатов
              li_mkt.appendChild(ul_js);
          } else {
              console.warn(`Элемент с ID ${id} не найден.`);
          }
      });

    } else {
      li_mkt.textContent = "Ничего не найдено."; // Сообщение, если ничего не найдено
    }
  });
} else {
  console.error("Элемент searchBox или li_mkt не найден.");
}
});

// Делегирование событий
document.addEventListener('click', function(event) {
if (event.target.classList.contains('mkt_1_formule_css')) { // Или другой класс вашей кнопки
  // Определите, какой элемент был нажат и выполните нужное действие
  const buttonId = event.target.id; // Например, "optic_19_formule_by_id"
  console.log(`Кнопка ${buttonId} была нажата`);

  // Вызовите нужную функцию на основе ID кнопки (пример)
  if (buttonId === 'meh_2_formule_by_id') {
    document.addEventListener('DOMContentLoaded', function button_click_meh_2() {
      const meh_2_formule_by_id = document.getElementById('meh_2_formule_by_id');
      const div_meh_2_formule_bu_id_js = document.getElementById('div_meh_2_formule_bu_id_js');
      const arrow_img_id_js_2 = document.getElementById('arrow_img_id_2');
      const meh_listContainer_2 = document.getElementById('meh_listContainer_2');
    
      meh_2_formule_by_id.addEventListener('click', function run_meh_2_formule_by_id() {
        div_meh_2_formule_bu_id_js.classList.toggle('execut');
    
        if (!meh_listContainer_2.querySelector('ul')) {
          const ul = document.createElement('ul');
    
          const listItemsText = [
            "v — скорость,",
            "s — путь, пройденный телом,",
            "t — промежуток времени, за который пройден путь s."
          ];
    
          listItemsText.forEach(text => {
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.textContent = text;
            li.appendChild(p);
            ul.appendChild(li);
          });
    
          meh_listContainer_2.appendChild(ul);
        } else {
          const ulToRemove = meh_listContainer_2.querySelector('ul');
          meh_listContainer_2.removeChild(ulToRemove);
        };
    
        if (arrow_img_id_js_2.src.endsWith("up.png")) {
          arrow_img_id_js_2.src = "down.png";
        } else {
          arrow_img_id_js_2.src = "up.png";
        };
      });
    });
    console.log("Была нажата кнопка optic_19_formule_by_id");
  }
  // ... добавьте обработку для других кнопок
}
});

function mktJS() {
  const mkt_swap_Elements_1 = document.getElementById('mkt_swap_Elements');
  console.log('braaa');
  mkt_swap_Elements_1.scrollIntoView({
    behavior:"smooth",
    block: "center"
  }); 
};

function electrostatics_swap_ElementsJS() {
  const electrostatics_swap_Elements_1 = document.getElementById('electrostatics_swap_Elements');
  console.log('braaa');
  electrostatics_swap_Elements_1.scrollIntoView({
    behavior:"smooth",
    block: "center"
  }); 
};

function DC_swap_ElementsJS() {
  const DC_swap_Elements_1 = document.getElementById('DC_swap_Elements');
  console.log('braaa');
  DC_swap_Elements_1.scrollIntoView({
    behavior:"smooth",
    block: "center"
  }); 
};

function bylerwbz_swap_ElementsJS() {
  const bylerwbz_swap_Elements_1 = document.getElementById('bylerwbz_swap_Elements');
  console.log('braaa');
  bylerwbz_swap_Elements_1.scrollIntoView({
    behavior:"smooth",
    block: "center"
  }); 
};

//------------------------------------------------кнопки --------------------------------------------------------------------------

function button_click_mkt_1() {
  const div_mkt_1_formule = document.getElementById('div_mkt_1_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_18');
  const listContainer = document.getElementById('listContainer');

    div_mkt_1_formule.classList.toggle('execut');

    if (!listContainer.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer.appendChild(ul);
    } else {
      const ulToRemove = listContainer.querySelector('ul');
      listContainer.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  };

function button_click_mkt_3() {
  const div_mkt_3_formule = document.getElementById('div_mkt_3_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_20');
  const listContainer_3 = document.getElementById('listContainer_3');

    div_mkt_3_formule.classList.toggle('execut');

    if (!listContainer_3.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "ν — количество вещества;",
        "m — масса;",
        "μ — молярная масса вещества;",
        "NA = 6,02·1023 моль-1 — число Авогадро",
        "N — число молекул;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_3.appendChild(ul);
    } else {
      const ulToRemove = listContainer_3.querySelector('ul');
      listContainer_3.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
};


function button_click_mkt_4() {
  const div_mkt_4_formule = document.getElementById('div_mkt_4_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_21');
  const listContainer_4 = document.getElementById('listContainer_4');

    div_mkt_4_formule.classList.toggle('execut');

    if (!listContainer_4.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "m — масса;",
        "<v^2> — средняя квадратная скорость;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_4.appendChild(ul);
    } else {
      const ulToRemove = listContainer_4.querySelector('ul');
      listContainer_4.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  };


function button_click_mkt_5() {
  const div_mkt_5_formule = document.getElementById('div_mkt_5_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_22');
  const listContainer_5 = document.getElementById('listContainer_5');

    div_mkt_5_formule.classList.toggle('execut');

    if (!listContainer_5.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "ΔQ — количество подведенной теплоты;",
        "ΔA — работа, совершаемая веществом;",
        "ΔU — изменение внутренней энергии вещества",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_5.appendChild(ul);
    } else {
      const ulToRemove = listContainer_5.querySelector('ul');
      listContainer_5.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  };

function button_click_mkt_6() {
  const div_mkt_6_formule = document.getElementById('div_mkt_6_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_23');
  const listContainer_6 = document.getElementById('listContainer_6');

    div_mkt_6_formule.classList.toggle('execut');

    if (!listContainer_6.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "<E> — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_6.appendChild(ul);
    } else {
      const ulToRemove = listContainer_6.querySelector('ul');
      listContainer_6.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  };

function button_click_mkt_7() {
  const div_mkt_7_formule = document.getElementById('div_mkt_7_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_24');
  const listContainer_7 = document.getElementById('listContainer_7');

    div_mkt_7_formule.classList.toggle('execut');

    if (!listContainer_7.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "<vкв> — средняя квадратичная скорость",
        "n — концентрация молекул;",
        "k — 1,38·10-23 Дж/К — постоянная Больцмана;",
        "μ — молярная масса вещества;",
        "m — масса;",
        "R = 8,31 Дж/(моль·К) — универсальная газовая постоянная;",
        "T — t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_7.appendChild(ul);
    } else {
      const ulToRemove = listContainer_7.querySelector('ul');
      listContainer_7.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  };

function button_click_mkt_9() {
  const div_mkt_9_formule = document.getElementById('div_mkt_9_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_26');
  const listContainer_9 = document.getElementById('listContainer_9');

    div_mkt_9_formule.classList.toggle('execut');

    if (!listContainer_9.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа;",
        "ν — количество вещества;",
        "R = kNA = 8,31 Дж/(моль·К) — универсальная газовая постоянная;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_9.appendChild(ul);
    } else {
      const ulToRemove = listContainer_9.querySelector('ul');
      listContainer_9.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  };

function button_click_mkt_11() {
  const div_mkt_11_formule = document.getElementById('div_mkt_11_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_29');
  const listContainer_11 = document.getElementById('listContainer_11');

    div_mkt_11_formule.classList.toggle('execut');

    if (!listContainer_11.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_11.appendChild(ul);
    } else {
      const ulToRemove = listContainer_11.querySelector('ul');
      listContainer_11.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  };

function button_click_mkt_12() {
  const div_mkt_12_formule = document.getElementById('div_mkt_12_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_30');
  const listContainer_12 = document.getElementById('listContainer_12');

    div_mkt_12_formule.classList.toggle('execut');

    if (!listContainer_12.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "p0 — минимальное давление газа давление идеального газа;",
        "t — температура по шкале Цельсия."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_12.appendChild(ul);
    } else {
      const ulToRemove = listContainer_12.querySelector('ul');
      listContainer_12.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  };

function button_click_elektro_1() {
  const div_elektro_1_formule_bu_id_js = document.getElementById('div_elektro_1_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_31');
  const elektro_listContainer_1 = document.getElementById('elektro_listContainer_1');

    div_elektro_1_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_1.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "q — заряд конденсатора,",
        "U — модуль разности потенциалов между обкладками."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_1.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_1.querySelector('ul');
      elektro_listContainer_1.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_2() {
  const div_elektro_2_formule_bu_id_js = document.getElementById('div_elektro_2_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_32');
  const elektro_listContainer_2 = document.getElementById('elektro_listContainer_2');

    div_elektro_2_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_2.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "q — заряд конденсатора,",
        "U — модуль разности потенциалов между обкладками.",
        "W — энергия заряженного конденсатора (в джоулях, Дж)."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_2.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_2.querySelector('ul');
      elektro_listContainer_2.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_3() {
  const div_elektro_3_formule_bu_id_js = document.getElementById('div_elektro_3_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_33');
  const elektro_listContainer_3 = document.getElementById('elektro_listContainer_3');

    div_elektro_3_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_3.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "η - КПД (обычно выражается в процентах)",
        "P_полезная - полезная мощность, отдаваемая во внешнюю цепь",
        "P_полная - полная мощность, развиваемая источником тока",
        "R — сопротивление цепи,",
        "r — внутреннее сопротивление источника тока."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_3.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_3.querySelector('ul');
      elektro_listContainer_3.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_4() {
  const div_elektro_4_formule_bu_id_js = document.getElementById('div_elektro_4_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_34');
  const elektro_listContainer_4 = document.getElementById('elektro_listContainer_4');

    div_elektro_4_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_4.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "σ — поверхностная плотность заряда.",
        "E - напряженность электрического поля (измеряется в Вольтах на метр, В/м, или Ньютонах на Кулон, Н/Кл)"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_4.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_4.querySelector('ul');
      elektro_listContainer_4.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_5() {
  const div_elektro_5_formule_bu_id_js = document.getElementById('div_elektro_5_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_35');
  const elektro_listContainer_5 = document.getElementById('elektro_listContainer_5');

    div_elektro_5_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_5.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "q — величина уединенного точечного заряда,",
        "r — расстояние от заряда."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_5.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_5.querySelector('ul');
      elektro_listContainer_5.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_6() {
  const div_elektro_6_formule_bu_id_js = document.getElementById('div_elektro_6_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_36');
  const elektro_listContainer_6 = document.getElementById('elektro_listContainer_6');

    div_elektro_6_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_6.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "ЭДС — ЭДС источника тока,",
        "R — сопротивление цепи,",
        "r — внутреннее сопротивление источника тока.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_6.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_6.querySelector('ul');
      elektro_listContainer_6.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_7() {
  const div_elektro_7_formule_bu_id_js = document.getElementById('div_elektro_7_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_37');
  const elektro_listContainer_7 = document.getElementById('elektro_listContainer_7');

    div_elektro_7_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_7.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "ЭДС — ЭДС источника тока,",
        "R — сопротивление цепи,",
        "r — внутреннее сопротивление источника тока."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_7.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_7.querySelector('ul');
      elektro_listContainer_7.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_8() {
  const div_elektro_8_formule_bu_id_js = document.getElementById('div_elektro_8_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_38');
  const elektro_listContainer_8 = document.getElementById('elektro_listContainer_8');

    div_elektro_8_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_8.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "q — величина уединенного точечного заряда,",
        "r — расстояние от заряда."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_8.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_8.querySelector('ul');
      elektro_listContainer_8.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_9() {
  const div_elektro_9_formule_bu_id_js = document.getElementById('div_elektro_9_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_39');
  const elektro_listContainer_9 = document.getElementById('elektro_listContainer_9');

    div_elektro_9_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_9.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "φ — потенциал,",
        "q1 — величина заряда."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_9.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_9.querySelector('ul');
      elektro_listContainer_9.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_10() {
  const div_elektro_10_formule_bu_id_js = document.getElementById('div_elektro_10_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_40');
  const elektro_listContainer_10 = document.getElementById('elektro_listContainer_10');

    div_elektro_10_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_10.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "q — величина уединенного точечного заряда, который создает поле,",
        "r — расстояние между зарядами.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_10.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_10.querySelector('ul');
      elektro_listContainer_10.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_11() {
  const div_elektro_11_formule_bu_id_js = document.getElementById('div_elektro_11_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_41');
  const elektro_listContainer_11 = document.getElementById('elektro_listContainer_11');

    div_elektro_11_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_11.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "U — напряжение на концах участка цепи,",
        "t — время, за которое совершается работа."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_11.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_11.querySelector('ul');
      elektro_listContainer_11.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_12() {
  const div_elektro_12_formule_bu_id_js = document.getElementById('div_elektro_12_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_42');
  const elektro_listContainer_12 = document.getElementById('elektro_listContainer_12');

    div_elektro_12_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_12.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "N — поток вектора напряженности электрического поля через замкнутую поверхность,",
        "q — полный заряд, находящийся внутри замкнутой поверхности.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_12.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_12.querySelector('ul');
      elektro_listContainer_12.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_13() {
  const div_elektro_13_formule_bu_id_js = document.getElementById('div_elektro_13_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_43');
  const elektro_listContainer_13 = document.getElementById('elektro_listContainer_13');

    div_elektro_13_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_13.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "Q — теплота,",
        "R — сопротивление проводника,",
        "t — время, за которое выделяется теплота.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_13.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_13.querySelector('ul');
      elektro_listContainer_13.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_14() {
  const div_elektro_14_formule_bu_id_js = document.getElementById('div_elektro_14_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_44');
  const elektro_listContainer_14 = document.getElementById('elektro_listContainer_14');

    div_elektro_14_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_14.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "q1, q2 — величины точечных зарядов,",
        "r — расстояние между зарядами.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_14.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_14.querySelector('ul');
      elektro_listContainer_14.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_15() {
  const div_elektro_15_formule_bu_id_js = document.getElementById('div_elektro_15_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_45');
  const elektro_listContainer_15 = document.getElementById('elektro_listContainer_15');

    div_elektro_15_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_15.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "U — напряжение на концах участка,",
        "R — сопротивление участка цепи."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_15.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_15.querySelector('ul');
      elektro_listContainer_15.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_elektro_16() {
  const div_elektro_16_formule_bu_id_js = document.getElementById('div_elektro_16_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_46');
  const elektro_listContainer_16 = document.getElementById('elektro_listContainer_16');

    div_elektro_16_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_16.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "ЭДС — ЭДС (электродвижущая сила),",
        "r — внутреннее сопротивление источника ЭДС.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_16.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_16.querySelector('ul');
      elektro_listContainer_16.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };






function button_click_meh_1() {
  const meh_1_formule_by_id = document.getElementById('meh_1_formule_by_id');
  const div_meh_1_formule_bu_id_js = document.getElementById('div_meh_1_formule_bu_id_js');
  const arrow_img_id_js_1 = document.getElementById('arrow_img_id_1');
  const meh_listContainer_1 = document.getElementById('meh_listContainer_1');

    div_meh_1_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_1.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "v — скорость,",
        "s — путь, пройденный телом,",
        "t — промежуток времени, за который пройден путь s."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_1.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_1.querySelector('ul');
      meh_listContainer_1.removeChild(ulToRemove);
    };

    if (arrow_img_id_js_1.src.endsWith("up.png")) {
      arrow_img_id_js_1.src = "down.png";
    } else {
      arrow_img_id_js_1.src = "up.png";
    };
  };

function button_click_meh_2() {
  const div_meh_2_formule_bu_id_js = document.getElementById('div_meh_2_formule_bu_id_js');
  const arrow_img_id_js_2 = document.getElementById('arrow_img_id_2');
  const meh_listContainer_2 = document.getElementById('meh_listContainer_2');

  
    div_meh_2_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_2.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "v — скорость,",
        "s — путь, пройденный телом,",
        "t — промежуток времени, за который пройден путь s."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_2.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_2.querySelector('ul');
      meh_listContainer_2.removeChild(ulToRemove);
    };

    if (arrow_img_id_js_2.src.endsWith("up.png")) {
      arrow_img_id_js_2.src = "down.png";
    } else {
      arrow_img_id_js_2.src = "up.png";
    };
  };


function button_click_meh_3() {
  const div_meh_3_formule_bu_id_js = document.getElementById('div_meh_3_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_3');
  const meh_listContainer_3 = document.getElementById('meh_listContainer_3');

    div_meh_3_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_3.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "v — скорость,",
        "v0 — скорость тела в начальный момент времени,",
        "a — ускорение",
        "t — промежуток времени, протекший от начального момента времени."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_3.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_3.querySelector('ul');
      meh_listContainer_3.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_4() {
  const div_meh_4_formule_bu_id_js = document.getElementById('div_meh_4_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_4');
  const meh_listContainer_4 = document.getElementById('meh_listContainer_4');

    div_meh_4_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_4.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "vср — средняя скорость для всего пути,",
        "v1, v2, v3, ... — средние скорости движения на последовательных участках пути,",
        "t1, t2, t3, ... — промежутки времени, в течение которых тело двигалось на соответствующих участках пути.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_4.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_4.querySelector('ul');
      meh_listContainer_4.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_5() {
  const div_meh_5_formule_bu_id_js = document.getElementById('div_meh_5_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_5');
  const meh_listContainer_5 = document.getElementById('meh_listContainer_5');

    div_meh_5_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_5.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "vср — средняя скорость для всего пути,",
        "s — путь, пройденный телом,",
        "t — промежуток времени, за который пройден путь s.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_5.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_5.querySelector('ul');
      meh_listContainer_5.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_6() {
  const div_meh_6_formule_bu_id_js = document.getElementById('div_meh_6_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_6');
  const meh_listContainer_6 = document.getElementById('meh_listContainer_6');

    div_meh_6_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_6.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "a — ускорение,",
        "v1 — скорость тела в момент времени t1,",
        "v2 — скорость тела в момент времени t2,",
        "t — промежуток времени от t1 до t2."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_6.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_6.querySelector('ul');
      meh_listContainer_6.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_7() {
  const div_meh_7_formule_bu_id_js = document.getElementById('div_meh_7_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_7');
  const meh_listContainer_7 = document.getElementById('meh_listContainer_7');

    div_meh_7_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_7.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "F векторное — равнодействующая всех сил, действующих на тело,",
        "m — масса тела,",
        "a Вектор ускорения — ускорение, получаемое телом под действием силы Равнодействующая."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_7.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_7.querySelector('ul');
      meh_listContainer_7.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_8() {
  const div_meh_8_formule_bu_id_js = document.getElementById('div_meh_8_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_8');
  const meh_listContainer_8 = document.getElementById('meh_listContainer_8');

    div_meh_8_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_8.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "m — масса тела,",
        "v — скорость,",
        "v0 — скорость тела в начальный момент времени, Сила — сила, действующая на тело,",
        "t — промежуток времени, в течение которого на тело действует сила Сила.",
        "F векторное — равнодействующая всех сил, действующих на тело,"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_8.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_8.querySelector('ul');
      meh_listContainer_8.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_9() {
  const div_meh_9_formule_bu_id_js = document.getElementById('div_meh_9_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_9');
  const meh_listContainer_9 = document.getElementById('meh_listContainer_9');

    div_meh_9_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_9.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "m, M — массы тел,",
        "v — скорость,",
        "v0 — скорость тела в начальный момент времени,",
        "V — скорость,",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_9.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_9.querySelector('ul');
      meh_listContainer_9.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_10() {
  const div_meh_10_formule_bu_id_js = document.getElementById('div_meh_10_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_10');
  const meh_listContainer_10 = document.getElementById('meh_listContainer_10');

    div_meh_10_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_10.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — импульс тела,",
        "m — масса тела,",
        "v — скорость тела."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_10.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_10.querySelector('ul');
      meh_listContainer_10.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_11()  {
  const div_meh_11_formule_bu_id_js = document.getElementById('div_meh_11_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_11');
  const meh_listContainer_11 = document.getElementById('meh_listContainer_11');

    div_meh_11_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_11.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "g — ускорение свободного падения,",
        "v0 — начальная скорость тела,",
        "s — расстояние по горизонтали, пройденное телом за все время движения,",
        "Угол — угол к горизонту, под которым брошено тело."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_11.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_11.querySelector('ul');
      meh_listContainer_11.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_12()  {
  const div_meh_12_formule_bu_id_js = document.getElementById('div_meh_12_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_12');
  const meh_listContainer_12 = document.getElementById('meh_listContainer_12');

    div_meh_12_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_12.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "h — высота, с которой падает тело,",
        "g — ускорение свободного падения,",
        "t — время свободного падения тела до столкновения с землей,",
        "v — скорость тела в момент столкновения с землей."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_12.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_12.querySelector('ul');
      meh_listContainer_12.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_13()  {
  const div_meh_13_formule_bu_id_js = document.getElementById('div_meh_13_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_13');
  const meh_listContainer_13 = document.getElementById('meh_listContainer_13');

    div_meh_13_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_13.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "h — высота, с которой падает тело,",
        "g — ускорение свободного падения,",
        "t — время свободного падения тела до столкновения с землей,",
        "v — скорость тела в момент столкновения с землей."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_13.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_13.querySelector('ul');
      meh_listContainer_13.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_14()  {
  const div_meh_14_formule_bu_id_js = document.getElementById('div_meh_14_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_14');
  const meh_listContainer_14 = document.getElementById('meh_listContainer_14');

    div_meh_14_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_14.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "t — продолжительность полета тела,",
        "v0 — начальная скорость тела,",
        "Угол — угол к горизонту, под которым брошено тело.",
        "g — ускорение свободного падения,"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_14.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_14.querySelector('ul');
      meh_listContainer_14.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_15()  {
  const div_meh_15_formule_bu_id_js = document.getElementById('div_meh_15_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_15');
  const meh_listContainer_15 = document.getElementById('meh_listContainer_15');

    div_meh_15_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_15.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "h — высота, с которой падает тело,",
        "g — ускорение свободного падения,",
        "t — время свободного падения тела до столкновения с землей,",
        "v — скорость тела в момент столкновения с землей."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_15.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_15.querySelector('ul');
      meh_listContainer_15.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_16()  {
  const div_meh_16_formule_bu_id_js = document.getElementById('div_meh_16_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_16');
  const meh_listContainer_16 = document.getElementById('meh_listContainer_16');

    div_meh_16_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_16.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "h — максимальная высота подъема,",
        "v0 — начальная скорость тела,",
        "Угол — угол к горизонту, под которым брошено тело.",
        "g — ускорение свободного падения,"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_16.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_16.querySelector('ul');
      meh_listContainer_16.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_meh_17()  {
  const div_meh_17_formule_bu_id_js = document.getElementById('div_meh_17_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_17');
  const meh_listContainer_17 = document.getElementById('meh_listContainer_17');

    div_meh_17_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_17.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "m1, m2 — массы тел,",
        "r — расстояние между точечными телами,",
        "γ — гравитационная постоянная."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_17.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_17.querySelector('ul');
      meh_listContainer_17.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_1() {
  const div_optic_1_formule_bu_id_js = document.getElementById('div_optic_1_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_65');
  const optic_listContainer_1 = document.getElementById('optic_listContainer_1');

    div_optic_1_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_1.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "ρ — коэффициент отражения,",
        "Φρ — световой поток, отраженный телом,",
        "Φi — световой поток, падающий на тело."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_1.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_1.querySelector('ul');
      optic_listContainer_1.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_2() {
  const div_optic_2_formule_bu_id_js = document.getElementById('div_optic_2_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_66');
  const optic_listContainer_2 = document.getElementById('optic_listContainer_2');

    div_optic_2_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_2.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "α — коэффициент поглощения,",
        "Φα — световой поток, поглощенный телом,",
        "Φi — световой поток, падающий на тело.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_2.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_2.querySelector('ul');
      optic_listContainer_2.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_3() {
  const div_optic_3_formule_bu_id_js = document.getElementById('div_optic_3_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_67');
  const optic_listContainer_3 = document.getElementById('optic_listContainer_3');

    div_optic_3_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_3.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "τ — коэффициент пропускания,",
        "Φτ — световой поток, пропущенный телом,",
        "Φi — световой поток, падающий на тело."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_3.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_3.querySelector('ul');
      optic_listContainer_3.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_4() {
  const div_optic_4_formule_bu_id_js = document.getElementById('div_optic_4_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_68');
  const optic_listContainer_4 = document.getElementById('optic_listContainer_4');

    div_optic_4_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_4.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "a — расстояние от источника света до зеркала,",
        "a' — расстояние от зеркала до изображения источника света,",
        "h — высота источника света,",
        "h' — высота изображения источника света,",
        "β — линейное увеличение линзы или зеркала,"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_4.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_4.querySelector('ul');
      optic_listContainer_4.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_5() {
  const div_optic_5_formule_bu_id_js = document.getElementById('div_optic_5_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_69');
  const optic_listContainer_5 = document.getElementById('optic_listContainer_5');

    div_optic_5_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_5.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "D — оптическая сила линзы,",
        "f — фокусное расстояние.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_5.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_5.querySelector('ul');
      optic_listContainer_5.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_6() {
  const div_optic_6_formule_bu_id_js = document.getElementById('div_optic_6_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_70');
  const optic_listContainer_6 = document.getElementById('optic_listContainer_6');

    div_optic_6_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_6.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "a — расстояние от источника света до зеркала,",
        "a' — расстояние от зеркала до изображения источника света,",
        "R — радиус кривизны зеркала,",
        "f — фокусное расстояние зеркала."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_6.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_6.querySelector('ul');
      optic_listContainer_6.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_7() {
  const div_optic_7_formule_bu_id_js = document.getElementById('div_optic_7_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_71');
  const optic_listContainer_7 = document.getElementById('optic_listContainer_7');

    div_optic_7_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_7.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "a — расстояние от источника света до линзы,",
        "a' — расстояние от линзы до изображения источника света,",
        "f — фокусное расстояние линзы."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_7.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_7.querySelector('ul');
      optic_listContainer_7.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_8() {
  const div_optic_8_formule_bu_id_js = document.getElementById('div_optic_8_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_72');
  const optic_listContainer_8 = document.getElementById('optic_listContainer_8');

    div_optic_8_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_8.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "E — освещенность,",
        "Φ — поток излучения,",
        "σ — площадь, через которую проходит поток излучения."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_8.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_8.querySelector('ul');
      optic_listContainer_8.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_9() {
  const div_optic_9_formule_bu_id_js = document.getElementById('div_optic_9_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_73');
  const optic_listContainer_9 = document.getElementById('optic_listContainer_9');

    div_optic_9_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_9.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "n — относительный показатель преломления для граничащих сред",
        "n2 — абсолютный показатель преломления для второй среды,",
        "n1 — абсолютный показатель преломления для первой среды."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_9.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_9.querySelector('ul');
      optic_listContainer_9.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_10() {
  const div_optic_10_formule_bu_id_js = document.getElementById('div_optic_10_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_74');
  const optic_listContainer_10 = document.getElementById('optic_listContainer_10');

    div_optic_10_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_10.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "n — относительный показатель преломления для граничащих сред",
        "n2 — абсолютный показатель преломления для второй среды,",
        "n2 — абсолютный показатель преломления для второй среды,"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_10.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_10.querySelector('ul');
      optic_listContainer_10.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_11(){
  const div_optic_11_formule_bu_id_js = document.getElementById('div_optic_11_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_75');
  const optic_listContainer_11 = document.getElementById('optic_listContainer_11');

    div_optic_11_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_11.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "Φ — поток излучения,",
        "W — энергия излучения,",
        "t — время прохождения энергии излучения."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_11.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_11.querySelector('ul');
      optic_listContainer_11.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_12() {
  const div_optic_12_formule_bu_id_js = document.getElementById('div_optic_12_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_76');
  const optic_listContainer_12 = document.getElementById('optic_listContainer_12');

    div_optic_12_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_12.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "iпр — предельный угол полного внутреннего отражения,",
        "n — относительный показатель преломления для граничащих сред.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_12.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_12.querySelector('ul');
      optic_listContainer_12.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_13() {
  const div_optic_13_formule_bu_id_js = document.getElementById('div_optic_13_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_77');
  const optic_listContainer_13 = document.getElementById('optic_listContainer_13');

    div_optic_13_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_13.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "I — сила света,",
        "Φ — поток излучения,",
        "Ω — телесный угол, через который проходит поток излучения."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_13.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_13.querySelector('ul');
      optic_listContainer_13.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_14() {
  const div_optic_14_formule_bu_id_js = document.getElementById('div_optic_14_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_78');
  const optic_listContainer_14 = document.getElementById('optic_listContainer_14');

    div_optic_14_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_14.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "E — светосила линзы,",
        "d — диаметр линзы или диафрагмы, закрывающей линзу,",
        "f — фокусное расстояние."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_14.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_14.querySelector('ul');
      optic_listContainer_14.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_15() {
  const div_optic_15_formule_bu_id_js = document.getElementById('div_optic_15_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_79');
  const optic_listContainer_15 = document.getElementById('optic_listContainer_15');

    div_optic_15_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_15.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "γ — угловое увеличение линзы или зеркала,",
        "β — линейное увеличение линзы или зеркала."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_15.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_15.querySelector('ul');
      optic_listContainer_15.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_16() {
  const div_optic_16_formule_bu_id_js = document.getElementById('div_optic_16_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_80');
  const optic_listContainer_16 = document.getElementById('optic_listContainer_16');

    div_optic_16_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_16.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "N — увеличение микроскопа,",
        "N1 — увеличение окуляра микроскопа,",
        "N2 — увеличение объектива микроскопа,",
        "D — расстояние наилучшего видения человеческого глаза, обычно D=250 мм, при этом f также должно быть выражено в мм,",
        "f — фокусное расстояние системы линз микроскопа: окуляра и объектива."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_16.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_16.querySelector('ul');
      optic_listContainer_16.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_17() {
  const div_optic_17_formule_bu_id_js = document.getElementById('div_optic_17_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_81');
  const optic_listContainer_17 = document.getElementById('optic_listContainer_17');

    div_optic_17_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_17.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "N — увеличение зрительной (подзорной) трубы,",
        "f1 — фокусное расстояние объектива,",
        "f2 — фокусное расстояние окуляра."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_17.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_17.querySelector('ul');
      optic_listContainer_17.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_18() {
  const div_optic_18_formule_bu_id_js = document.getElementById('div_optic_18_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_82');
  const optic_listContainer_18 = document.getElementById('optic_listContainer_18');

    div_optic_18_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_18.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "L — яркость источника света,",
        "I — сила света,",
        "σ — площадь видимой светящейся поверхности."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_18.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_18.querySelector('ul');
      optic_listContainer_18.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };

function button_click_optic_19() {
  const div_optic_19_formule_bu_id_js = document.getElementById('div_optic_19_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id_83');
  const optic_listContainer_19 = document.getElementById('optic_listContainer_19');

    div_optic_19_formule_bu_id_js.classList.toggle('execut');

    if (!optic_listContainer_19.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "i — угол отражения,",
        "r — угол преломления,",
        "n — относительный показатель преломления для граничащих сред."
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      optic_listContainer_19.appendChild(ul);
    } else {
      const ulToRemove = optic_listContainer_19.querySelector('ul');
      optic_listContainer_19.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  };