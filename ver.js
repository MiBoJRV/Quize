document.addEventListener('DOMContentLoaded', function () {

    const main = document.querySelector('main');
    const mainContent = document.querySelector('.main_content');
    const sliderButtons = document.querySelector('.slider-btn');
    const steps = document.querySelectorAll('.step');
    const emailInput = document.getElementById('email');
    const emojiIcons = document.querySelectorAll('.emoji-icon img');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const btnFieldsStep3 = document.querySelectorAll('.step-3 .btn-field');
    const btnFieldsStep4 = document.querySelectorAll('.step-4 .btn-field');
    const btnFieldsStep5 = document.querySelectorAll('.step-5 .btn-field');
    const textAreaStep6 = document.querySelector('.step-6 .textarea-step-6');
    const btnFieldsStep7 = document.querySelectorAll('.step-7 .btn-field');
    const textAreaStep8 = document.querySelector('.step-8 .textarea-step-8');
    const btnFieldsStep9 = document.querySelectorAll('.step-9 .btn-field');
    let activeIndex = 0;

    function setActiveStep() {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === activeIndex);
            main.classList.toggle(`step-${index + 1}`, index === activeIndex);
        });
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
            // sendData();
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
        if (activeIndex === 0) {
            //----------//
            const stepContent = document.querySelector('.step-1-content');
            stepContent.style.opacity = '1'

            //----------//
        }

        if (activeIndex === 1) {
            //----------//
            const stepContent = document.querySelector('.step-2-content');
            stepContent.style.opacity = '0'
            //----------//
        }

        if (activeIndex === 2) {

            //----------//
            const stepContent = document.querySelector('.step-3-content');
            stepContent.style.opacity = '0'
            //----------//
        }
        if (activeIndex === 3) {

            //----------//
            const stepContent = document.querySelector('.step-4-content');
            stepContent.style.opacity = '0'
            //----------//
        }
        if (activeIndex === 4) {

            //----------//
            const stepContent = document.querySelector('.step-5-content');
            stepContent.style.opacity = '0'
            //----------//
        }

        if (activeIndex === 5) {

            //----------//
            const stepContent = document.querySelector('.step-6-content');
            stepContent.style.opacity = '0'
            //----------//
        }

        if (activeIndex === 6) {

            //----------//
            const stepContent = document.querySelector('.step-7-content');
            stepContent.style.opacity = '0'
            //----------//
        }

        if (activeIndex === 7) {

            //----------//
            const stepContent = document.querySelector('.step-8-content');
            stepContent.style.opacity = '0'
            //----------//
        }
        if (activeIndex === 8) {

            //----------//
            const stepContent = document.querySelector('.step-9-content');
            stepContent.style.opacity = '0'
            //----------//
        }
        if (activeIndex === 9) {

            //----------//
            const stepContent = document.querySelector('.step-10-content');
            stepContent.style.opacity = '0'
            //----------//
        }
        if (activeIndex === 10) {

            //----------//
            const stepContent = document.querySelector('.step-11-content');
            stepContent.style.opacity = '0'
            //----------//
        }


        if (activeIndex > 0) {
            activeIndex--;

            // const stepContent = document.querySelectorAll('.step > div');
            // stepContent.forEach((step) => {
            //     step.style.opacity = '0';
            // });

            // stepContent.style.opacity = '0'
            setTimeout(() => {
                setActiveStep();
            }, 500);

            // setActiveStep();
        }
    });

    function isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    emailInput.addEventListener('input', function (event) {
        // Отримуємо введений текст і видаляємо пробіли з початку і кінця тексту
        const inputValue = event.target.value.trim();

        // Отримуємо елемент, де відображається повідомлення про помилку
        const errorMessage = document.querySelector('.step-1 .err.step-1');

        if (email || isEmailValid(email)) {
            const errorMessage = document.querySelector('.step-1 .err.step-1');
            errorMessage.textContent = '';

        }
    });

    emojiIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Видалення класу 'active' у всіх інших emojiIcons
            emojiIcons.forEach(item => {
                item.classList.remove('active')
            });

            // Додавання класу 'active' обраному emojiIcon
            icon.classList.add('active');

            // Видалення повідомлення про помилку
            const errorParagraph = document.querySelector('.step-2 .err.step-2');
            errorParagraph.textContent = '';
        });
    });

    btnFieldsStep3.forEach(btnField => {
        btnField.addEventListener('click', () => {

            // Видалити клас "active" з усіх елементів з класом "btn-field"
            btnFieldsStep3.forEach(element => {
                element.classList.remove('active');
            });

            // Додати клас "active" до обраного об'єкту
            btnField.classList.add('active');

            // Видалення повідомлення про помилку
            const errorParagraph = document.querySelector('.step-3 .err.step-3');
            errorParagraph.textContent = '';
        });
    });

    btnFieldsStep4.forEach(btnField => {
        btnField.addEventListener('click', () => {

            // Видалити клас "active" з усіх елементів з класом "btn-field"
            btnFieldsStep4.forEach(element => {
                element.classList.remove('active');
            });

            // Додати клас "active" до обраного об'єкту
            btnField.classList.add('active');

            // Видалення повідомлення про помилку
            const errorParagraph = document.querySelector('.step-4 .err.step-4');
            errorParagraph.textContent = '';
        });
    });

    btnFieldsStep5.forEach(btnField => {
        btnField.addEventListener('click', () => {

            // Видалити клас "active" з усіх елементів з класом "btn-field"
            btnFieldsStep5.forEach(element => {
                element.classList.remove('active');
            });

            // Додати клас "active" до обраного об'єкту
            btnField.classList.add('active');

            // Видалення повідомлення про помилку
            const errorParagraph = document.querySelector('.step-5 .err.step-5');
            errorParagraph.textContent = '';
        });
    });

    textAreaStep6.addEventListener('input', function (event) {
        // Отримуємо введений текст і видаляємо пробіли з початку і кінця тексту
        const inputValue = event.target.value.trim();

        // Отримуємо елемент, де відображається повідомлення про помилку
        const errorMessage = document.querySelector('.step-6 .err.step-6');

        // Перевіряємо, чи введений текст не є пустим і має не менше 20 символів
        if (inputValue.length >= 20) {
            // Якщо умова виконана, приховуємо повідомлення про помилку
            errorMessage.textContent = '';
        } else {
            // Якщо умова не виконана, відображаємо повідомлення про помилку
            errorMessage.textContent = 'To continue you need to fill in the answer field (at least 20 characters).';
        }
    });

    btnFieldsStep7.forEach(btnField => {
        btnField.addEventListener('click', () => {

            // Видалити клас "active" з усіх елементів з класом "btn-field"
            btnFieldsStep7.forEach(element => {
                element.classList.remove('active');
            });

            // Додати клас "active" до обраного об'єкту
            btnField.classList.add('active');

            // Видалення повідомлення про помилку
            const errorParagraph = document.querySelector('.step-7 .err.step-7');
            errorParagraph.textContent = '';
        });
    });

    textAreaStep8.addEventListener('input', function (event) {
        // Отримуємо введений текст і видаляємо пробіли з початку і кінця тексту
        const inputValue1 = event.target.value.trim();

        // Отримуємо елемент, де відображається повідомлення про помилку
        const errorMessage = document.querySelector('.step-8 .err.step-8');

        // Перевіряємо, чи введений текст не є пустим і має не менше 20 символів
        if (inputValue1.length >= 20) {
            // Якщо умова виконана, приховуємо повідомлення про помилку
            errorMessage.textContent = '';
        } else {
            // Якщо умова не виконана, відображаємо повідомлення про помилку
            errorMessage.textContent = 'To continue you need to fill in the answer field (at least 20 characters).';
        }
    });

    btnFieldsStep9.forEach(btnField => {
        btnField.addEventListener('click', () => {

            // Видалити клас "active" з усіх елементів з класом "btn-field"
            btnFieldsStep9.forEach(btnField => {
                btnField.classList.remove('active');
            });

            // Додати клас "active" до обраного об'єкту
            btnField.classList.add('active');

            // Видалення повідомлення про помилку
            const errorParagraph = document.querySelector('.step-9 .err.step-9');
            errorParagraph.textContent = '';
        });
    });

    nextButton.addEventListener('click', () => {

        if (activeIndex === 0) {

            console.log('step-1', 'activeIndex - ', activeIndex);
            const email = emailInput.value.trim();
            if (!email || !isEmailValid(email)) {
                const errorMessage = document.querySelector('.step-1 .err');
                errorMessage.textContent = 'To continue you need to enter e-mail address';
                return;
            }
            //----------//
            const stepContent = document.querySelector('.step-2-content');
            stepContent.style.opacity = '0'
            setTimeout(() => {
                stepContent.style.opacity = '1'
            }, 1500);
            //----------//
        }

        if (activeIndex === 1) {

            console.log('step-2', 'activeIndex - ', activeIndex);
            let emojiSelected = false;

            emojiIcons.forEach(icon => {
                if (icon.classList.contains('active')) {
                    emojiSelected = true;
                }
            });

            if (!emojiSelected) {
                const errorMessage = document.querySelector('.step-2 .err.step-2');
                errorMessage.textContent = 'To continue you need to choose 1 option from the provided answers';
                return;
            }
            //----------//
            const stepContent = document.querySelector('.step-3-content');
            stepContent.style.opacity = '0'
            setTimeout(() => {
                stepContent.style.opacity = '1'
            }, 1500);
            //----------//
        }

        if (activeIndex === 2) {
            console.log('step-3', 'activeIndex - ', activeIndex);
            let fieldSelected = false;

            btnFieldsStep3.forEach(element => {
                if (element.classList.contains('active')) {
                    fieldSelected = true;
                }
            });

            if (!fieldSelected) {
                const errorMessage = document.querySelector('.step-3 .err.step-3');
                errorMessage.textContent = 'To continue you need to choose 1 option from the provided answers';
                return;
            }
            //----------//
            const stepContent = document.querySelector('.step-4-content');
            stepContent.style.opacity = '0'
            setTimeout(() => {
                stepContent.style.opacity = '1'
            }, 1500);
            //----------//
        }

        if (activeIndex === 3) {
            console.log('step-4', 'activeIndex - ', activeIndex);
            let fieldSelected = false;

            btnFieldsStep4.forEach(element => {
                if (element.classList.contains('active')) {
                    fieldSelected = true;
                }
            });

            if (!fieldSelected) {
                const errorMessage = document.querySelector('.step-4 .err.step-4');
                errorMessage.textContent = 'To continue you need to choose 1 option from the provided answers';
                return;
            }
            //----------//
            const stepContent = document.querySelector('.step-5-content');
            stepContent.style.opacity = '0'
            setTimeout(() => {
                stepContent.style.opacity = '1'
            }, 1500);
            //----------//
        }

        if (activeIndex === 4) {
            console.log('step-5', 'activeIndex - ', activeIndex);
            let fieldSelected = false;

            btnFieldsStep5.forEach(element => {
                if (element.classList.contains('active')) {
                    fieldSelected = true;
                }
            });

            if (!fieldSelected) {
                const errorMessage = document.querySelector('.step-5 .err.step-5');
                errorMessage.textContent = 'To continue you need to choose 1 option from the provided answers';
                return;
            }
            //----------//
            const stepContent = document.querySelector('.step-6-content');
            stepContent.style.opacity = '0'
            setTimeout(() => {
                stepContent.style.opacity = '1'
            }, 1500);
            //----------//
        }

        if (activeIndex === 5) {
            console.log('step-6', 'activeIndex - ', activeIndex);
            // Отримуємо значення textarea та видаляємо пробіли з початку і кінця тексту
            const textarea = document.querySelector('.step-6 .textarea-step-6');
            const textareaValue = textarea.value.trim();

            // Перевіряємо, чи введений текст не є пустим і має не менше 20 символів
            if (textareaValue.length >= 20) {
                // Видаляємо повідомлення про помилку, якщо введено достатню кількість символів
                const errorMessage = document.querySelector('.step-6 .err.step-6');
                errorMessage.textContent = '';

                // Якщо умова виконана, продовжуємо виконання інших дій
            } else {
                // Якщо умова не виконана, встановлюємо textareaValid в false
                let textareaValid = false;

                // Отримуємо елемент, де відображається повідомлення про помилку
                const errorMessage = document.querySelector('.step-6 .err.step-6');
                errorMessage.textContent = 'To continue you need to fill in the answer field (at least 20 characters).';
                return;
            }
            //----------//
            const stepContent = document.querySelector('.step-7-content');
            stepContent.style.opacity = '0'
            setTimeout(() => {
                stepContent.style.opacity = '1'
            }, 1500);
            //----------//
        }

        if (activeIndex === 6) {
            console.log('step-7', 'activeIndex - ', activeIndex);
            let fieldSelected = false;

            btnFieldsStep7.forEach(element => {
                if (element.classList.contains('active')) {
                    fieldSelected = true;
                }
            });

            if (!fieldSelected) {
                const errorMessage = document.querySelector('.step-7 .err.step-7');
                errorMessage.textContent = 'To continue you need to choose 1 option from the provided answers';
                return;
            }
            //----------//
            const stepContent = document.querySelector('.step-8-content');
            stepContent.style.opacity = '0'
            setTimeout(() => {
                stepContent.style.opacity = '1'
            }, 1500);
            //----------//
        }

        if (activeIndex === 7) {
            let textareaValid = false;
            console.log('step-8', 'activeIndex - ', activeIndex);
            // Отримуємо значення textarea та видаляємо пробіли з початку і кінця тексту
            const textarea = document.querySelector('.step-8 .textarea-step-8');
            console.log('textarea 8', textarea);

            const textareaValue1 = textarea.value.trim();

            // Перевіряємо, чи введений текст не є пустим і має не менше 20 символів
            if (textareaValue1.length >= 20) {
                // Видаляємо повідомлення про помилку, якщо введено достатню кількість символів
                const errorMessage = document.querySelector('.step-8 .err.step-8');
                errorMessage.textContent = '';
                textareaValid = true;

                // Якщо умова виконана, продовжуємо виконання інших дій
            }
            // else {
            //     // Якщо умова не виконана, встановлюємо textareaValid в false
            //     textareaValid = false;
            //
            //     // Отримуємо елемент, де відображається повідомлення про помилку
            //     const errorMessage = document.querySelector('.step-8 .err.step-8');
            //     errorMessage.textContent = 'To continue you need to fill in the answer field (at least 20 characters).';
            //
            // }
            if (!textareaValid) {
                const errorMessage = document.querySelector('.step-8 .err.step-8');
                errorMessage.textContent = 'To continue you need to fill in the answer field (at least 20 characters).';
                return;
            }
            //----------//
            const stepContent = document.querySelector('.step-9-content');
            stepContent.style.opacity = '0'
            setTimeout(() => {
                stepContent.style.opacity = '1'
            }, 1500);
            //----------//
        }

        if (activeIndex === 8) {
            console.log('step-9', 'activeIndex - ', activeIndex);
            let fieldSelected = false;

            btnFieldsStep9.forEach(element => {
                if (element.classList.contains('active')) {
                    fieldSelected = true;
                }
            });

            if (!fieldSelected) {
                const errorMessage = document.querySelector('.step-9 .err.step-9');
                errorMessage.textContent = 'To continue you need to choose 1 option from the provided answers';
                return;
            }
        }


        if (activeIndex < steps.length - 1) {
            activeIndex++;
            setTimeout(() => {
                setActiveStep();
            }, 500);
            // setActiveStep();
        }
    });

// function sendData() {
//     console.log(data);
// }

});