const slider = document.querySelector('#slider');
const inputFrom = document.querySelector('#input-from');
const inputTo = document.querySelector('#input-to');
const inputs = [inputFrom, inputTo];

function setSliderValue (handler, value) {
    const valuesArr = [null, null];
    valuesArr[handler] = value;

    slider.noUiSlider.set(valuesArr);
}

function getInputValue () {
    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setSliderValue(index, e.currentTarget.value);
        })
    })
}

function setInputsValue () {
    slider.noUiSlider.on('update', function(value, handle) {
        inputs[handle].value = Math.round(value[handle])
    })
}

export default function initSlider () {
    noUiSlider.create(slider, {
        start: [0, 900],
        connect: true,
        range: {
            'min': 0,
            'max': 1000
        }
    });

    setInputsValue();
    getInputValue();
}