function reset(){
    const div_sel = document.activeElement.parentNode.parentNode;

    for (let sel of div_sel.getElementsByTagName('input'))
        sel.value = "";

    const output_sel = div_sel.querySelector('.output');
    if (output_sel.textContent !== "Invalid Formula"){
        const parts = output_sel.textContent.split(' ');
        output_sel.textContent = parts.slice(0, parts.length-1).join(' ') + ' 0';
    }
}


function f1() {
    const div_sel = document.querySelector('.f1');

    const fee_sel = div_sel.querySelector('#fee');
    const count_sel = div_sel.querySelector('#count');
    const discount_sel = div_sel.querySelector('#discount');
    const output_sel = div_sel.querySelector('.output');
    const formula = div_sel.querySelector('formula').getAttribute("evaluator");

    try {
        let fee = 0;
        let count = 0;
        let discount = 0;
        output_sel.textContent = `Total: ${eval(formula)}`;

        for (let sel of [fee_sel, count_sel, discount_sel]) {
            for (let event_type of ['input', 'change']) {
                sel.addEventListener(event_type, function(){
                    fee = Number(fee_sel.value);
                    count = Number(count_sel.value);
                    discount = Number(discount_sel.value);
                    output_sel.textContent = `Total: ${eval(formula)}`;
                });
            }
        }
    } catch (error) {
        output_sel.textContent = "Invalid Formula";
        const button_sel = div_sel.querySelector('.btn')
        for (let sel of [button_sel, fee_sel, count_sel, discount_sel])
            sel.disabled = true;
    }
}


function f2() {
    const div_sel = document.querySelector('.f2');

    const radius_sel = div_sel.querySelector('#radius');
    const diameter_sel = div_sel.querySelector('#diameter');
    const formula = div_sel.querySelector('formula').getAttribute('evaluator');
    const output_sel = div_sel.querySelector('.output');

    try {
        let radius = 0;
        const pi = Math.PI;
        output_sel.textContent = `Area: ${eval(formula)}`;

        for (let event_type of ['input', 'change']) {
            radius_sel.addEventListener(event_type, function(){
                radius = Number(radius_sel.value);
                diameter_sel.value = radius * 2;
                output_sel.textContent = `Area: ${eval(formula)}`;
            });
        }

        for (let event_type of ['input', 'change']) {
            diameter_sel.addEventListener(event_type, function(){
                radius_sel.value = Number(diameter_sel.value) / 2;
                radius = Number(radius_sel.value);
                output_sel.textContent = `Area: ${eval(formula)}`;
            });
        }
    } catch (error) {
        output_sel.textContent = "Invalid Formula";
        const button_sel = div_sel.querySelector('.btn');
        for (let sel of [button_sel, radius_sel, diameter_sel])
            sel.disabled = true;
    }
}


function f3() {
    const div_sel = document.querySelector('.f3');

    const mass_sel = div_sel.querySelector('#mass');
    const acceleration_sel = div_sel.querySelector('#acceleration');
    const theta_sel = div_sel.querySelector('#theta');
    const formula = div_sel.querySelector('formula').getAttribute('evaluator');
    const output_sel = div_sel.querySelector('.output');

    try {
        let m = 0;
        let a = 0;
        output_sel.textContent = `Force (N): ${eval(formula)}`;

        for (let sel of [mass_sel, acceleration_sel, theta_sel]) {
            for (let event_type of ['input', 'change']) {
                sel.addEventListener(event_type, function(){
                    m = Number(mass_sel.value);
                    a = Number(acceleration_sel.value) * Math.cos(Math.PI*(theta_sel.value / 180));
                    output_sel.textContent = `Force (N): ${eval(formula)}`;
                });
            }
        }
    } catch (error) {
        output_sel.textContent = "Invalid Formula";
        const button_sel = div_sel.querySelector('.btn');
        for (let sel of [button_sel, mass_sel, acceleration_sel, theta_sel]) {
            sel.disabled = true;
        }
    }
}


window.onload=function(){
    f1();
    f2();
    f3();
}
