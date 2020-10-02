window.onload = function () {
    const sign = document.getElementById("sign");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const result = document.getElementById("result");

    one.innerText = "第一个数";
    two.innerText = "第二个数";
    result.innerText = "计算结果";
}

function js(number) {
    const sign = document.getElementById("sign");
    const sign2 = document.getElementById("sign2");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const result = document.getElementById("result");

    switch (number) {
        case 10: {
            sign.innerText = "+";
            sign2.value = "1";
            break;
        }
        case 11: {
            sign.innerText = "-";
            sign2.value = "2";
            break;
        }
        case 12: {
            sign.innerText = "×";
            sign2.value = "3";
            break;
        }
        case 13: {
            sign.innerText = "÷";
            sign2.value = "4";
            break;
        }
        case 14: {
            sign.innerText = "符号";
            sign2.value = "0";
            one.value = "数据清空";
            two.value = "数据清空";
            result.value = "数据清空";
            break;
        }
        case 15: {
            if(sign2.value == 1) {
                result.value = Number(one.value) + Number(two.value);
            }
            if(sign2.value == 2) {
                result.value = Number(one.value) - Number(two.value);
            }
            if(sign2.value == 3) {
                result.value = Number(one.value) * Number(two.value);
            }
            if(sign2.value == 4) {
                result.value = Number(one.value) / Number(two.value);
            }
            break;
        }
        default:
            if(isNaN(one.value)) {
                one.value = number;
            }
            else {
                if(sign2.value == 0) {
                    one.value = one.value * 10 + number;
                }
                else {
                    if(isNaN(two.value)) {
                        two.value = number;
                    }
                    else {
                        two.value = two.value * 10 + number;
                    }
                }
            }
            break;
    }
}