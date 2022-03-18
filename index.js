document.querySelector('#signup-form .actions ul li:last-child a').onclick = function (){
    var arrInput = document.querySelectorAll("#signup-form .fieldset-content .form-group input, #signup-form .fieldset-content .form-group select,#signup-form .fieldset-content .form-date .form-date-group input");
    let thongTin = {};
    for (let index of arrInput){
        let {id, value} = index;
        thongTin = {...thongTin, [id]:value}
    }
    let html = '';
    for (let key in thongTin){
        html += `
        <tr>
            <td>${key}</td>
            <td>${thongTin[key]}</td>
        </tr>
        `
    }
    document.querySelector('#tableHienThi').innerHTML = html;
}



