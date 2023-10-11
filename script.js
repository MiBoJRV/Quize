document.addEventListener('DOMContentLoaded', () => {

    // const element = document.querySelector('.main_content')
    // let step = 'step-1';
    //
    // function checkStep() {
    //     const element = document.querySelector('.main_content');
    //     const classListArray = Array.from(element.classList);
    //     const additionalClass = classListArray.find(className => className !== 'main_content');
    //     console.log(additionalClass);
    // }
    // console.log(step);


    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    const data = {};
// Step-1 Email
    const emailInput = document.querySelector('.input-email input');
    const errorMessage = document.querySelector('.err');

    if (emailInput) {
        emailInput.focus(); // Устанавливает фокус на поле ввода
        emailInput.select(); // Выделяет текст внутри поля ввода (если текст есть)
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    emailInput.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        const isValid = isValidEmail(email);
        if (isValid) {
            errorMessage.textContent = '';
            nextButton.disabled = false;
        } else {
            errorMessage.textContent = 'To continue, you need to provide your email address.';
            nextButton.disabled = true;
        }
    });


// Step-2 Emoji
    const emojiIcons = document.querySelectorAll('.emoji-icon img');

    let isIconSelected = false;
    // Перебираем все элементы и добавляем обработчик события клика
    emojiIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Удаляем класс "active" у всех элементов
            emojiIcons.forEach(innerIcon => {
                innerIcon.classList.remove('active');
            });
            const errorMessage = document.querySelector('.step-2 .err');
            errorMessage.textContent = '';

            // Добавляем класс "active" к текущему элементу
            this.classList.add('active');
            isIconSelected = true;
            nextButton.disabled = false;
        });
    });


    nextButton.addEventListener('click', () => {
        errorMessage.textContent = '';
        checkIfIconSelected();
    })

    function checkIfIconSelected() {
        const errorMessage = document.querySelector('.step-2 .err');
        if (isIconSelected === true) {
            // Хотя бы одна иконка была выбрана
            console.log('Иконка была выбрана');
            nextButton.disabled = false;
            errorMessage.textContent = '';

        } else {
            nextButton.disabled = true;
            // Ни одна из иконок не была выбрана, показываем сообщение об ошибке


            errorMessage.textContent = 'Выберите хотя бы одну иконку';
        }
    }

    // nextButton.addEventListener('click', function () {
    //     if (selectedEmoji === null) {
    //         errorMessage.textContent = ('To continue you need to choose 1 option from the provided answers');
    //         nextButton.disabled = false;
    //         console.log('To continue you need to choose 1 option from the provided answers')
    //     }
    //     else {
    //         errorMessage.textContent = '';
    //         nextButton.disabled = false;
    //     }
    // });


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

            // Отримати текст з обраного пункту
            if (btnField.querySelector('p')) {
                const selectedText = btnField.querySelector('p').textContent;
                console.log(`Ви вибрали пункт: ${selectedText}`);
            }
            if (btnField.querySelector('input')) {
                const inputText = btnField.querySelector('input').value;
                if (inputText !== '') {
                    console.log(`Ви вибрали пункт input: ${inputText}`);
                } else {
                    console.log(`Не ввели  input: ${inputText}`);
                }

            }
            // Додати клас "active" до обраного об'єкту
            btnField.classList.add('active');
        });
    });


// //Slider
//     const mainContent = document.querySelector('.main_content');
//     const sliderButtons = document.querySelector('.slider-btn');
//     const prevButton = document.querySelector('.prev-button');
//     const nextButton = document.querySelector('.next-button');
//     const steps = document.querySelectorAll('.step');
//     let activeIndex = 0;
//
//     function setActiveStep() {
//         steps.forEach((step, index) => {
//             step.classList.remove('active');
//             if (index === activeIndex) {
//                 step.classList.add('active');
//                 mainContent.classList.add(`step-${index + 1}`);
//             } else {
//                 mainContent.classList.remove(`step-${index + 1}`);
//             }
//         });
//
//         if (activeIndex === 0) {
//             prevButton.style.display = 'none';
//             sliderButtons.classList.add('start');
//             nextButton.classList.add('start');
//         }
//     }
//
//
//     setActiveStep();
//
//     prevButton.addEventListener('click', () => {
//         if (activeIndex > 0) {
//             steps[activeIndex].classList.remove('active');
//             activeIndex--;
//             steps[activeIndex].classList.add('active');
//             nextButton.classList.remove('last-step');
//             nextButton.textContent = 'NEXT';
//             nextButton.innerHTML = `NEXT`;
//         }
//
//         if (activeIndex === 0) {
//             prevButton.style.display = 'none';
//             sliderButtons.classList.add('start');
//             nextButton.classList.add('start');
//
//         }
//         setActiveStep();
//     });
//
//     nextButton.addEventListener('click', () => {
//         prevButton.style.display = 'block';
//         prevButton.textContent = 'BACK';
//
//         if (nextButton.classList.contains('start')) {
//             nextButton.classList.remove('start');
//             sliderButtons.classList.remove('start');
//         }
//
//
//         if (activeIndex < steps.length - 1) {
//             steps[activeIndex].classList.remove('active');
//             activeIndex++;
//             steps[activeIndex].classList.add('active');
//             if (activeIndex === steps.length - 1) {
//                 nextButton.classList.add('last-step');
//                 prevButton.classList.add('last-step');
//                 prevButton.style.display = 'none';
//                 nextButton.style.display = 'none';
//                 sendData();
//
//             } else {
//                 nextButton.textContent = 'NEXT';
//                 nextButton.classList.remove('last-step');
//             }
//             setActiveStep();
//         }
//     });
//
//     // function validateForm(submitForm) {
//     //     // const submitForm = document.querySelector('.last-step');
//     //     const form = document.querySelector('.slider');
//     //     submitForm.addEventListener('click', (event) => {
//     //         event.preventDefault();
//     //
//     //         const stepper = document.querySelector('.stepper');
//     //         const selectCurrent = stepper.querySelectorAll('.select-current');
//     //         const locationInput = stepper.querySelector('#location');
//     //         const emailInput = stepper.querySelector('#email');
//     //         const passwordInput = stepper.querySelector('#stepper_password');
//     //
//     //         const data = {
//     //             whoAreYou: selectCurrent[0].textContent,
//     //             age: selectCurrent[1].textContent,
//     //             location: locationInput.value,
//     //             email: emailInput.value,
//     //             password: passwordInput.value,
//     //         };
//     //
//     //         console.log(data);
//     //         const url = 'http://www.mocky.io/v2/5dfcef48310000ee0ed2c281';
//     //         fetch(url, {
//     //             method: 'POST',
//     //             body: data
//     //         })
//     //             .then(response => response.json())
//     //             .then(data => {
//     //                 console.log('Success:', data);
//     //             })
//     //             .catch((error) => {
//     //                 console.error('Error:', error);
//     //             });
//     //     })
//     // }
    const mainContent = document.querySelector('.main_content');
    const sliderButtons = document.querySelector('.slider-btn');
    // const prevButton = document.querySelector('.prev-button');
    // const nextButton = document.querySelector('.next-button');
    const steps = document.querySelectorAll('.step');
    let activeIndex = 0;

    function setActiveStep() {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === activeIndex);
            mainContent.classList.toggle(`step-${index + 1}`, index === activeIndex);
        });

        const isFirstStep = activeIndex === 0;
        prevButton.style.display = isFirstStep ? 'none' : 'block';
        sliderButtons.classList.toggle('start', isFirstStep);
        nextButton.classList.toggle('start', isFirstStep);

        const isLastStep = activeIndex === steps.length - 1;
        if (isLastStep) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
            sendData();
        } else {
            nextButton.textContent = isLastStep ? 'SUBMIT' : 'NEXT';
            nextButton.classList.toggle('last-step', isLastStep);
            prevButton.classList.toggle('last-step', isLastStep);
        }

        if (!isLastStep) {
            prevButton.textContent = activeIndex === 0 ? 'START' : 'BACK';
        }
    }

    prevButton.addEventListener('click', () => {
        if (activeIndex > 0) {
            activeIndex--;
            setActiveStep();
        }
    });

    nextButton.addEventListener('click', () => {
        if (activeIndex < steps.length - 1) {
            activeIndex++;
            setActiveStep();
        }

    });


    function sendData() {
        console.log(data);
    }


//END
});