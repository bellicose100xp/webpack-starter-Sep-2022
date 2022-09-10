import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './css/app.css';

import { html } from './utils/htmlTaggedTemplate';
import { debounce } from './utils/debounce';
import { throttle } from './utils/throttle';

const inputForm = html`
<div class="container-sm">
    <div class="input-group my-3">
        <span class="input-group-text" id="basic-addon1">Input</span>
        <input id="data" type="text" class="form-control" placeholder="" aria-label="Username"
            aria-describedby="basic-addon1">
    </div>
    <div id="output-group">
        <div id="default-container">
            <span class="fs-5 fw-bold">&nbsp;Realtime:</span> <span id="realtime" class="e"></span>
        </div>
        <div id="debounce-container">
            <span class="fs-5 fw-bold">Debounce:</span> <span id="debounce" class=""></span>
        </div>
        <div id="throttle-container">
            <span class="fs-5 fw-bold">Throttle:</span> <span id="throttle" class=""></span>
        </div>
    </div>

</div>
`;
const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = inputForm;

const input = document.querySelector('#data') as HTMLInputElement;
const realtimeElem = document.querySelector('#realtime') as HTMLSpanElement;
const debounceElem = document.querySelector('#debounce') as HTMLSpanElement;
const throttleElem = document.querySelector('#throttle') as HTMLSpanElement;

const updateText = (text: string, elem: HTMLSpanElement): void => {
    elem.textContent = text;
};

const updateDebouncedText = debounce(updateText);
const updateThrottleText = throttle(updateText);

input.addEventListener('input', (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value: string = target.value;

    // update realtime element
    realtimeElem.innerText = value;

    updateDebouncedText(value, debounceElem);
    updateThrottleText(value, throttleElem);
    
});

