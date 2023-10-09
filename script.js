document.addEventListener('DOMContentLoaded', () => {

    const data = {};


//   //Login
//   let logInButton = document.querySelector('.login-btn');
//   let formFields = document.querySelector('.form-fields');
//
//   logInButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     formFields.classList.toggle('hide');
//   });
//
//
// //Select
//   let select = function () {
//     let selectHeader = document.querySelectorAll('.select-header');
//     let selectItem = document.querySelectorAll('.select-item');
//     let select = document.querySelector('.select');
//
//     selectHeader.forEach(item => {
//       item.addEventListener('click', selectToggle);
//
//     });
//
//     selectItem.forEach(item => {
//       item.addEventListener('click', selectChoose)
//     });
//
//     function selectToggle() {
//       this.parentElement.classList.toggle('is-active');
//     }
//
//     function selectChoose() {
//       let text = this.innerText,
//         select = this.closest('.select'),
//         currentText = select.querySelector('.select-current');
//       currentText.innerText = text;
//       select.classList.remove('is-active');
//     }
//
//     document.addEventListener('click', function (event) {
//       let activeSelect = document.querySelector('.select.is-active');
//       if (activeSelect !== null && event.target.closest('.select') === null) {
//         activeSelect.classList.remove('is-active');
//       }
//     });
//   };
//   select();

//Emoji
    // Получаем все элементы с классом "emoji-icon"
    const emojiIcons = document.querySelectorAll('.emoji-icon img');

    // Перебираем все элементы и добавляем обработчик события клика
    emojiIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Удаляем класс "active" у всех элементов
            emojiIcons.forEach(innerIcon => {
                innerIcon.classList.remove('active');
            });

            // Добавляем класс "active" к текущему элементу
            this.classList.add('active');

            const selectedEmoji = this.getAttribute('data-emoji');

            console.log(selectedEmoji);

            data.selectedEmoji=selectedEmoji;

        });
    });

// BTN field
    const btnFields = document.querySelectorAll('.btn-field');

    btnFields.forEach(btnField => {
        btnField.addEventListener('click', () => {
            // Видалити клас "active" з усіх елементів з класом "btn-field"
            btnFields.forEach(element => {
                element.classList.remove('active');
            });

            // Перевірити, чи обраний пункт має поле введення з відповідними атрибутами
            const inputField = btnField.querySelector('input[type="text"][placeholder="Other (please specify)"]');

            // Якщо обраний пункт має поле введення, не додавати клас "active"
            // if (inputField && btnField.contains(inputField)) {
            //     console.log('Ви вибрали пункт з полем введення');
            //     // return;
            // }

            // Отримати текст з обраного пункту
            if (btnField.querySelector('p')) {
            const selectedText = btnField.querySelector('p').textContent;
            console.log(`Ви вибрали пункт: ${selectedText}`);
            }
            if (btnField.querySelector('input')) {
                const inputText = btnField.querySelector('input').value;
                if (inputText != '') {
                    console.log(`Ви вибрали пункт input: ${inputText}`);
                }
                else {
                    console.log(`Не ввели  input: ${inputText}`);
                }

            }
            // Додати клас "active" до обраного об'єкту
            btnField.classList.add('active');
        });
    });



//Slider
    const mainContent = document.querySelector('.main_content');
    const sliderButtons = document.querySelector('.slider-btn');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const steps = document.querySelectorAll('.step');
    let activeIndex = 0;

    // function setActiveStep() {
    //     steps.forEach(step => {
    //         step.classList.remove('active');
    //     });
    //
    //     steps[activeIndex].classList.add('active');
    // }
    function setActiveStep() {
        steps.forEach((step, index) => {
            step.classList.remove('active');
            if (index === activeIndex) {
                step.classList.add('active');
                mainContent.classList.add(`step-${index + 1}`);
            } else {
                mainContent.classList.remove(`step-${index + 1}`);
            }
        });

        if (activeIndex === 0) {
            prevButton.style.display = 'none';
            sliderButtons.classList.add('start');
            nextButton.classList.add('start');
        }
    }


    setActiveStep();

    prevButton.addEventListener('click', () => {
        if (activeIndex > 0) {
            steps[activeIndex].classList.remove('active');
            activeIndex--;
            steps[activeIndex].classList.add('active');
            nextButton.classList.remove('last-step');
            nextButton.textContent = 'NEXT';
            nextButton.innerHTML = `NEXT`;
        }

        if (activeIndex === 0) {
            prevButton.style.display = 'none';
            sliderButtons.classList.add('start');
            nextButton.classList.add('start');

        }
        setActiveStep();
    });

    nextButton.addEventListener('click', () => {
        prevButton.style.display = 'block';
        prevButton.textContent = 'BACK';

        if (nextButton.classList.contains('start')) {
            nextButton.classList.remove('start');
            sliderButtons.classList.remove('start');
        }


        if (activeIndex < steps.length - 1) {
            steps[activeIndex].classList.remove('active');
            activeIndex++;
            steps[activeIndex].classList.add('active');
            if (activeIndex === steps.length - 1) {
                nextButton.classList.add('last-step');
                prevButton.classList.add('last-step');
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
                sendData();

            } else {
                nextButton.textContent = 'NEXT';
                nextButton.classList.remove('last-step');
            }
            setActiveStep();
        }
    });

    function storeDada() {
        const section_1 = "1.1. Please rate your initial experience with our agent on a scale from 1 to 10, with 1 being the lowest and 10 being the highest.";
        const section_1_2 = "What aspects of your conversation with our agent positively contributed to your trust?";
        const section_2_1 = "2.1. Are you aware that the next step in our process involves working with our legal adviser?";
        const section_2_2 = "2.2. What are your expectations for the legal adviser who will assist you with fund recovery?";
        const section_3_1 = "3.1. What could we do to make you feel more comfortable and trusting during your interaction with our legal adviser?";
        const section_3_2 = "3.2. Would you like to receive additional information or resources about the fund recovery process, the technologies we use, or the technical staff involved in your case?";
        const section_4_1 = "4.1. Is there anything else you'd like to share with us regarding your experience or expectations for the fund recovery process?";
        const section_5_1 = "5.1. How would you prefer to be contacted by the legal adviser during the fund recovery process?";
    }
    function sendData() {
        console.log(data);
    }

    function validateForm(submitForm) {
        // const submitForm = document.querySelector('.last-step');
        const form = document.querySelector('.slider');
        submitForm.addEventListener('click', (event) => {
            event.preventDefault();

            const stepper = document.querySelector('.stepper');
            const selectCurrent = stepper.querySelectorAll('.select-current');
            const locationInput = stepper.querySelector('#location');
            const emailInput = stepper.querySelector('#email');
            const passwordInput = stepper.querySelector('#stepper_password');

            const data = {
                whoAreYou: selectCurrent[0].textContent,
                age: selectCurrent[1].textContent,
                location: locationInput.value,
                email: emailInput.value,
                password: passwordInput.value,
            };

            console.log(data);
            const url = 'http://www.mocky.io/v2/5dfcef48310000ee0ed2c281';
            fetch(url, {
                method: 'POST',
                body: data
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        })
    }

    //END
});

