// alert("HelloWorld!");

// 静态注册
const showObj = {
    name: "小李",
    age: 18,
    show: function () {
        alert("姓名：" + this.name + "，年龄：" + this.age + "。")
    }
};

// alert( showObj.name );
// showObj.show();

// 动态注册
window.onload = function () {
    const dong = document.getElementById("dongtaizhuce");
    // alert(dong);
    dong.onclick = function () {
        alert("泥吼啊！");
    }

    const shi = document.getElementById("shiqujiaodian");
    shi.onblur = function () {
        if(shi.value === "") {
            alert("你还没输入信息~");
        }
        else {
            alert("输入正确！")
        }
    }

    const getForm = document.getElementById("getInfo");
    getForm.onsubmit = function () {
        alert("信息不完整，将不会提交，请重新检查。");
        // 加了下面这个return就会防止错误的信息被提交，让传参及时被阻止
        return false;
    }
}

function checkInfomation() {
    const username = document.getElementById("information");
    const usernameText = username.value;
    const patt = /^\w{5,12}$/;
    // const pattern = new RegExp("e");
    const pattern = /^\w{5,12}$/;
    if(username.value === "") {
        alert("你还没输入信息~");
    }
    else {
        if(patt.test(usernameText)){
            alert("输入正确！")
        }
        else {
            alert("输入信息不合法！")
        }
    }
}

function usernameCheck() {
    const uc = document.getElementById("check");
    const un = document.getElementById("username");
    const patt = /^\w{3,5}$/;
    const unc = un.value;


    if(unc === "") {
        uc.innerHTML = "<font color=\"red\">你还没输入信息~</font>";
    }
    else {
        if(patt.test(unc)){
            uc.innerHTML = "<font color=\"green\">用户名输入正确</font>";
        }
        else {
            uc.innerHTML = "<font color=\"red\">用户名输入不正确</font>";
        }
    }
}

function checkAll() {
    const hobbies = document.getElementsByName("hobby");
    for(let i = 0; i < hobbies.length; i++) {
        hobbies[i].checked = true;
    }

    const divObj = document.createElement("div");
    divObj.innerHTML = "一个Tag标签被创建了！";
    document.body.appendChild(divObj);
}
function checkNo() {
    const hobbies = document.getElementsByName("hobby");
    for(let i = 0; i < hobbies.length; i++) {
        hobbies[i].checked = false;
    }
}
function checkReverse() {
    const hobbies = document.getElementsByName("hobby");
    for(let i = 0; i < hobbies.length; i++) {
        // hobbies[i].checked = hobbies[i].checked !== true;
        hobbies[i].checked =! hobbies[i].checked;
    }
}