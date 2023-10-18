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

    const stepContent1 = document.querySelector('.step-1-content');
    const stepContent2 = document.querySelector('.step-2-content');
    const stepContent3 = document.querySelector('.step-3-content');
    const stepContent4 = document.querySelector('.step-4-content');
    const stepContent5 = document.querySelector('.step-5-content');
    const stepContent6 = document.querySelector('.step-6-content');
    const stepContent7 = document.querySelector('.step-7-content');
    const stepContent8 = document.querySelector('.step-8-content');
    const stepContent9 = document.querySelector('.step-9-content');
    const stepContent10 = document.querySelector('.step-10-content');
    const stepContent11 = document.querySelector('.step-11-content');

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
        prevButton.style.display = isFirstStep ? 'none' : 'flex';
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


    function step3ToStep4() {
        const btnFieldsArray = Array.from(btnFieldsStep3);
        const firstTwoElements = btnFieldsArray.slice(0, 2);
        firstTwoElements.forEach(element => {
            element.style.maxWidth = '150px';
        });
    }

    function btnFieldsStep3ToBase() {
        const btnFieldsArray = Array.from(btnFieldsStep3);
        const firstTwoElements = btnFieldsArray.slice(0, 2);
        firstTwoElements.forEach(element => {
            element.style.maxWidth = '600px';
        });
    }

    function btnFieldsStep4ToStep3() {
        btnFieldsStep4.forEach(element => {
            element.style.maxWidth = '600px'
        });
    }

    function step4ToStep3() {
        btnFieldsStep4.forEach(element => {
            element.style.maxWidth = '150px'
        });
    }

    function step4ToStep5() {
        const btnFieldsArray = Array.from(btnFieldsStep5);
        const firstTwoElements = btnFieldsArray.slice(0, 2);
        firstTwoElements.forEach(element => {
            element.style.maxWidth = '650px';
        });
    }

    function btnFieldsStep5To150() {
        const btnFieldsArray = Array.from(btnFieldsStep5);
        const firstTwoElements = btnFieldsArray.slice(0, 2);
        firstTwoElements.forEach(element => {
            element.style.maxWidth = '150px';
        });
    }

    function textAreaStep6ToBtnField7() {
        textAreaStep6.style.height = '60px';
        textAreaStep6.style.maxWidth = '650px';
    }

    function textAreaStep6ToFull() {
        textAreaStep6.style.height = '378px';
        textAreaStep6.style.maxWidth = '516px';
    }

    function btnFieldsStep7ToTextarea() {
        const btnFieldsArray = Array.from(btnFieldsStep7);
        const firstElements = btnFieldsArray.slice(0, 1);
        firstElements.forEach(element => {
            // element.style.width = '518px';
            element.style.height = '378px';
            element.style.maxWidth = '518px'
        });
    }

    function btnFieldsStep7ToBase() {
        const btnFieldsArray = Array.from(btnFieldsStep7);
        const firstElements = btnFieldsArray.slice(0, 1);
        firstElements.forEach(element => {

            element.style.height = '60px';
            element.style.maxWidth = '190px'
            element.style.transitionDuration = '0.5s';
        });
    }

    function BtnField7ToTextArea6() {
        const btnFieldsArray = Array.from(btnFieldsStep7);
        const firstElements = btnFieldsArray.slice(0, 1);

        firstElements.forEach(element => {
            element.style.maxWidth = '518px';
            element.style.height = '378px';
            element.style.transitionDuration = '2.5s';
        });
    }

    function textAreaStep8ToFull() {
        textAreaStep8.style.height = '378px';
        textAreaStep8.style.maxWidth = '516px';
    }

    function textAreaStep8ToBtnFieldsStep9() {
        textAreaStep8.style.height = '60px';
        textAreaStep8.style.maxWidth = '350px';
    }

    function step8ToStep9() {
        textAreaStep8.style.height = '60px';
        textAreaStep8.style.maxWidth = '190px';
    }

    function TextareaToBtnFieldsStep9() {
        const btnFieldsArray = Array.from(btnFieldsStep9);
        const firstElements = btnFieldsArray.slice(0, 1);
        firstElements.forEach(element => {
            element.style.height = '378px';
            element.style.maxWidth = '518px';
        });
    }

    function btnFieldsStep9ToBase() {
        const btnFieldsArray = Array.from(btnFieldsStep9);
        const firstElements = btnFieldsArray.slice(0, 1);
        firstElements.forEach(element => {
            element.style.height = '60px';
            element.style.maxWidth = '350px'
        });
    }

    function textArea8ToBase9() {
        textAreaStep8.style.width = '518px';
        textAreaStep8.style.height = '378px';

    }


    function hideStepContent(from, to) {
        from.style.opacity = '1'
        to.style.opacity = '0'
    }

    function showStepContent(from, to) {
        from.style.opacity = '0'
        // to.style.opacity = '0'
        setTimeout(() => {
            to.style.opacity = '1'
        }, 100);
    }


    prevButton.addEventListener('click', () => {
        if (activeIndex === 0) {
            console.log('prev activeIndex - ', activeIndex)

            stepContent1.style.opacity = '1'

        }

        if (activeIndex === 1) {
            console.log('prev activeIndex - ', activeIndex);
            hideStepContent(stepContent1, stepContent2);
        }

        if (activeIndex === 2) {
            console.log('prev activeIndex - ', activeIndex);
            hideStepContent(stepContent2, stepContent3);
        }

        if (activeIndex === 3) {
            console.log('prev activeIndex - ', activeIndex)
            hideStepContent(stepContent3, stepContent4);
            btnFieldsStep4ToStep3()
            btnFieldsStep3ToBase()
        }
        if (activeIndex === 4) {
            console.log('prev activeIndex - ', activeIndex)
            hideStepContent(stepContent4, stepContent5);


            setTimeout(() => {
                step4ToStep3();
                btnFieldsStep5To150();
            }, 300);
        }

        if (activeIndex === 5) {
            console.log('prev activeIndex - ', activeIndex)
            hideStepContent(stepContent5, stepContent6);

            textAreaStep6ToBtnField7();
            btnFieldsStep7ToTextarea();
        }

        if (activeIndex === 6) {
            console.log('prev activeIndex - ', activeIndex)

            hideStepContent(stepContent6, stepContent7);

            setTimeout(() => {
                textAreaStep6ToFull();
            }, 300);
            BtnField7ToTextArea6();

        }

        if (activeIndex === 7) {
            console.log('prev activeIndex - ', activeIndex)

            hideStepContent(stepContent7, stepContent8);

            setTimeout(() => {
                textAreaStep8ToFull();
            }, 300);
            btnFieldsStep7ToBase();
            // textAreaStep8ToBase();
            setTimeout(() => {
                TextareaToBtnFieldsStep9()
            }, 300);

        }
        if (activeIndex === 8) {
            console.log('prev activeIndex - ', activeIndex)

            hideStepContent(stepContent8, stepContent9);

            setTimeout(() => {
                textAreaStep8ToFull()
            }, 300);
            setTimeout(() => {
                btnFieldsStep9ToBase();
            }, 300);
            TextareaToBtnFieldsStep9()

        }
        if (activeIndex === 9) {
            console.log('prev activeIndex - ', activeIndex)

            hideStepContent(stepContent9, stepContent10);
            btnFieldsStep9ToBase();


        }

        if (activeIndex === 10) {
            console.log('prev activeIndex - ', activeIndex)

            hideStepContent(stepContent10, stepContent11);
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
            }, 200);

            // setActiveStep();
        }
    });


    nextButton.addEventListener('click', () => {

        if (activeIndex === 0) {
            console.log('step-1', 'next activeIndex - ', activeIndex);

            const email = emailInput.value.trim();
            if (!email || !isEmailValid(email)) {
                const errorMessage = document.querySelector('.step-1 .err');
                errorMessage.textContent = 'To continue you need to enter e-mail address';
                return;
            }

            showStepContent(stepContent1, stepContent2);
        }

        if (activeIndex === 1) {
            console.log('step-2', 'next activeIndex - ', activeIndex);

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

            showStepContent(stepContent2, stepContent3);
        }

        if (activeIndex === 2) {
            console.log('step-3', 'next activeIndex - ', activeIndex);
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

            setTimeout(() => {
                step3ToStep4();
            }, 200);

            showStepContent(stepContent3, stepContent4);

            setTimeout(() => {
                step4ToStep3();

            }, 100);
        }

        if (activeIndex === 3) {
            console.log('step-4', 'next activeIndex - ', activeIndex);

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

            showStepContent(stepContent4, stepContent5);

            setTimeout(() => {
                step4ToStep5();
            }, 100);

            btnFieldsStep4ToStep3();
        }

        if (activeIndex === 4) {
            console.log('step-5', ' next activeIndex - ', activeIndex);

            setTimeout(() => {
                textAreaStep6ToFull();
            }, 300);


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

            showStepContent(stepContent5, stepContent6)
        }

        if (activeIndex === 5) {
            console.log('step-6', 'next activeIndex - ', activeIndex);


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

            showStepContent(stepContent6, stepContent7);

            // btnFieldsStep7ToTextarea();
            textAreaStep6ToBtnField7();
            setTimeout(() => {
                btnFieldsStep7ToBase();
            }, 100);

            BtnField7ToTextArea6();


        }

        if (activeIndex === 6) {
            console.log('step-7', 'next activeIndex - ', activeIndex);
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
            textAreaStep6ToBtnField7();
            showStepContent(stepContent7, stepContent8);

            BtnField7ToTextArea6();
            setTimeout(() => {
                textAreaStep8ToFull();
            }, 100);

        }

        if (activeIndex === 7) {
            let textareaValid = false;
            console.log('step-8', 'next activeIndex - ', activeIndex);
            // Отримуємо значення textarea та видаляємо пробіли з початку і кінця тексту
            const textarea = document.querySelector('.step-8 .textarea-step-8');

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

            showStepContent(stepContent8, stepContent9);

            textAreaStep8ToBtnFieldsStep9();
            step8ToStep9();
        }

        if (activeIndex === 8) {
            console.log('step-9', 'next activeIndex - ', activeIndex);

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

            showStepContent(stepContent9, stepContent10);


        }
        if (activeIndex === 9) {
            console.log('step-10', 'next activeIndex - ', activeIndex);

            showStepContent(stepContent10, stepContent11)
        }


        if (activeIndex < steps.length - 1) {
            activeIndex++;
            // setTimeout(() => {
            //     setActiveStep();
            // }, 200);
            setActiveStep();
        }
    });

// function sendData() {
//     console.log(data);
// }

});