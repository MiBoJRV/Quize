document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');
    const mainContent = document.querySelector('.main_content');
    const sliderButtons = document.querySelector('.slider-btn');
    const steps = document.querySelectorAll('.step');
    const emailInput = document.getElementById('email');
    const emojiIcons = document.querySelectorAll('.emoji-icon img');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const btnFields = [
        document.querySelectorAll('.step-3 .btn-field'),
        document.querySelectorAll('.step-4 .btn-field'),
        document.querySelectorAll('.step-5 .btn-field'),
        document.querySelectorAll('.step-7 .btn-field'),
        document.querySelectorAll('.step-9 .btn-field')
    ];
    const textAreas = [
        document.querySelector('.step-6 .textarea-step-6'),
        document.querySelector('.step-8 .textarea-step-8')
    ];
    let activeIndex = 0;

    function setActiveStep() {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === activeIndex);
            main.classList.toggle(`step-${index + 1}`, index === activeIndex);
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
        if (activeIndex > 0) {
            activeIndex--;
            const stepContent = document.querySelector(`.step-${activeIndex + 1}-content`);
            stepContent.style.opacity = '0';
            setTimeout(() => {
                stepContent.style.opacity = '1';
                setActiveStep();
            }, 1500);
        }
    });

    function isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    emailInput.addEventListener('input', function (event) {
        const inputValue = event.target.value.trim();
        const errorMessage = document.querySelector('.step-1 .err.step-1');

        if (email || isEmailValid(email)) {
            errorMessage.textContent = '';
        }
    });

    emojiIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            emojiIcons.forEach(item => {
                item.classList.remove('active');
            });
            icon.classList.add('active');
            const errorParagraph = document.querySelector('.step-2 .err.step-2');
            errorParagraph.textContent = '';
        });
    });

    btnFields.forEach((btnFieldGroup, index) => {
        btnFieldGroup.forEach(btnField => {
            btnField.addEventListener('click', () => {
                btnFieldGroup.forEach(element => {
                    element.classList.remove('active');
                });
                btnField.classList.add('active');
                const errorParagraph = document.querySelector(`.step-${index + 3} .err.step-${index + 3}`);
                errorParagraph.textContent = '';
            });
        });
    });

    textAreas.forEach((textArea, index) => {
        textArea.addEventListener('input', function (event) {
            const inputValue = event.target.value.trim();
            const errorMessage = document.querySelector(`.step-${index + 6} .err.step-${index + 6}`);

            if (inputValue.length >= 20) {
                errorMessage.textContent = '';
            } else {
                errorMessage.textContent = 'To continue you need to fill in the answer field (at least 20 characters).';
            }
        });
    });

    nextButton.addEventListener('click', () => {
        if (activeIndex < steps.length - 1) {
            activeIndex++;
            const stepContent = document.querySelector(`.step-${activeIndex + 1}-content`);
            stepContent.style.opacity = '0';
            setTimeout(() => {
                stepContent.style.opacity = '1';
                setActiveStep();
            }, 1500);
        }
    });

    // function sendData() {
    //     console.log(data);
    // }
});
