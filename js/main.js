var add_rest_button = document.querySelector("#submitbutton");

var phone_input = document.querySelector("#phonenumber");
var muted_click = true;
phone_input.addEventListener("click", (e) => {
    if (muted_click) {
        phone_input.value = "+90"
        muted_click = false;
    }
})
phone_input.addEventListener("input", (e) => {
    console.log(muted_click);

})

$(document).ready(function () {
    $("#phonenumber").on("keyup", function () {

        var value = $(this).val();
        $(this).val($(this).data("initial") + value.substring(3));
    });
});

var getirradio = document.getElementById("getircheck");
var trendyolradio = document.getElementById("trendyolcheck");
var yemeksepetiradio = document.getElementById("yemeksepeticheck");

var check_radio_button;

var getir_all_container = document.getElementById("getirallcontainer");
var trendyol_all_container = document.getElementById("trendyolallcontainer");
var yemeksepeti_all_container = document.getElementById("yemeksepetiallcontainer");

function checked_radio(id) {
    if (id == "getir") {
        getirradio.checked = true
        trendyolradio.checked = false
        yemeksepetiradio.checked = false
        border_check(id);
        check_radio_button = id;
        secret_all_container(id)
    } else if (id == "trendyol") {
        getirradio.checked = false
        trendyolradio.checked = true
        yemeksepetiradio.checked = false
        border_check(id)
        check_radio_button = id;
        secret_all_container(id)
    } else if (id == "yemeksepeti") {
        getirradio.checked = false
        trendyolradio.checked = false
        yemeksepetiradio.checked = true
        border_check(id);
        check_radio_button = id;
        secret_all_container(id)
    }

}

function border_check(id) {
    if (id == "getir") {
        getir.children[0].style.border = "1px solid blue"
        trendyol.children[0].style.border = "1px solid gray"
        yemeksepeti.children[0].style.border = "1px solid gray"
       
    } else if (id == "trendyol") {
        getir.children[0].style.border = "1px solid gray"
        trendyol.children[0].style.border = "1px solid blue"
        yemeksepeti.children[0].style.border = "1px solid gray"
    } else if (id == "yemeksepeti") {
        getir.children[0].style.border = "1px solid gray"
        trendyol.children[0].style.border = "1px solid gray"
        yemeksepeti.children[0].style.border = "1px solid blue"
    }
}

function secret_all_container(id) {
    if (id == "getir") {
        if (trendyol_close) {
            trendyol_all_container.style.display = "none";
            trendyol.style.display = "none";

            trendyol_up.style.display = "none";
            up_container_control("trendyol", rows_length);
        }
        if (yemeksepeti_close) {
            yemeksepeti_all_container.style.display = "none";
            yemeksepeti.style.display = "none";

            yemeksepeti_up.style.display = "none";
            up_container_control("yemeksepeti", rows_length);
        }

        add_rest_button.style.background = "transparent";
        add_rest_button.style.border = "1px solid rgb(255, 132, 0)";
        add_rest_button.style.color = "rgb(255, 132, 0)";
        add_rest_button.innerHTML = "Restoran Ekle"

        getir_all_container.style.display = "block";
        trendyol_all_container.style.display = "none";
        yemeksepeti_all_container.style.display = "none";
    } else if (id == "trendyol") {
        if (getir_close) {
            getir_all_container.style.display = "none";
            getir.style.display = "none";
            getir_up.style.display = "none";
            up_container_control("getir", rows_length);
        }
        if (yemeksepeti_close) {
            yemeksepeti_all_container.style.display = "none";
            yemeksepeti.style.display = "none";

            yemeksepeti_up.style.display = "none";
            up_container_control("yemeksepeti", rows_length);
        }

        add_rest_button.style.background = "transparent";
        add_rest_button.style.border = "1px solid rgb(255, 132, 0)";
        add_rest_button.style.color = "rgb(255, 132, 0)";
        add_rest_button.innerHTML = "Restoran Ekle"

        getir_all_container.style.display = "none";
        trendyol_all_container.style.display = "block";
        yemeksepeti_all_container.style.display = "none";
    } else if (id == "yemeksepeti") {
        if (trendyol_close) {
            trendyol_all_container.style.display = "none";
            trendyol.style.display = "none";

            trendyol_up.style.display = "none";
            up_container_control("trendyol", rows_length);
        }
        if (getir_close) {
            getir_all_container.style.display = "none";
            getir.style.display = "none";
            getir_up.style.display = "none";
            up_container_control("getir", rows_length);
        }

        add_rest_button.style.background = "transparent";
        add_rest_button.style.border = "1px solid rgb(255, 132, 0)";
        add_rest_button.style.color = "rgb(255, 132, 0)";
        add_rest_button.innerHTML = "Restoran Ekle"

        getir_all_container.style.display = "none";
        trendyol_all_container.style.display = "none";
        yemeksepeti_all_container.style.display = "block";
    }
}

var getir = document.querySelector("#getir");
var trendyol = document.querySelector("#trendyol");
var yemeksepeti = document.querySelector("#yemeksepeti");

getir.addEventListener("click", (e) => {
    console.log(getir.children[0])
    checked_radio("getir");
});

trendyol.addEventListener("click", (e) => {
    console.log(trendyol.children[0])
    checked_radio("trendyol");
});

yemeksepeti.addEventListener("click", (e) => {
    console.log(yemeksepeti.children[0])
    checked_radio("yemeksepeti");
});




var getir_acor = document.querySelector("#getir_acor");
var trendyol_acor = document.querySelector("#trendyol_acor");
var yemeksepeti_acor = document.querySelector("#yemeksepeti_acor");


var getir_up = document.getElementById("getirup");
var trendyol_up = document.getElementById("trendyolup");
var yemeksepeti_up = document.getElementById("yemeksepetiup");

var getir_close = false;
var trendyol_close = false;
var yemeksepeti_close = false;

function success_button(status) {

    if (status == 1) {
        add_rest_button.style.background = "#85e3cd";
        add_rest_button.style.border = "1px solid #85e3cd";
        add_rest_button.style.color = "white";
        add_rest_button.innerHTML = '<i class="fas fa-check" style="margin-right:10px;"></i>' + "Tebrikler! Entegrasyon Tamamlandı"
    } else if (status == 2) {
        add_rest_button.style.background = "transparent";
        add_rest_button.style.border = "1px solid rgb(255, 132, 0)";
        add_rest_button.style.color = "rgb(255, 132, 0)";
        add_rest_button.innerHTML = "Restoran Ekle"
    }

}

function up_container_control(id, rows_len) {
    if (id == "getir") {
        getir_acor.style.display = "block";

        var getir_collapsecontent = document.getElementById("getircollapsecontent");
        var getir_key = document.getElementById("getirkey").value;
        var getirrestaurantkey = document.getElementById("getirrestaurantkey").value;
        getir_collapsecontent.innerHTML = getir_all_container.innerHTML;
        document.getElementById("getirkey").value = getir_key;
        document.getElementById("getirrestaurantkey").value = getirrestaurantkey;
        success_button(1);

        getir_close = true;
        
        console.log("Rows lentg getir : " + rows_len)

        if (rows_len - 1 == 2) {
            if (!getir_close) {
                trendyol_up.className = "col-md-6";
                yemeksepeti_up.className = "col-md-6"
            }

        }
        else if (rows_len - 1 == 1) {
            var not_none;
            var rows_data = document.querySelector("#rowschild");
            for (var i = 0; i < rows_data.children.length; i++) {
                if (rows_data.children[i].style.display != "none") {
                    console.log("rows childhren : " + rows_data.children[i]);
                    not_none = rows_data.children[i];
                }
            }
            not_none.className = "col-md-12";
        }

    } else if (id == "trendyol") {
        trendyol_acor.style.display = "block";


        var trendyol_collapsecontent = document.getElementById("trendyolcollapsecontent");
        var trendyolkey = document.getElementById("trendyolkey").value;
        var trendyolrestaurantkey = document.getElementById("trendyolrestaurantkey").value;
        var trendyolsuperkey = document.getElementById("trendyolsuperkey").value;
        trendyol_collapsecontent.innerHTML = trendyol_all_container.innerHTML;
        document.getElementById("trendyolkey").value = trendyolkey;
        document.getElementById("trendyolrestaurantkey").value = trendyolrestaurantkey;
        document.getElementById("trendyolsuperkey").value = trendyolsuperkey;

        success_button(1);

        trendyol_close = true;
       
        console.log("Rows lentg trendyol : " + rows_len)

        if (rows_len - 1 == 2) {
            if (!trendyol_close) {
                getir_up.className = "col-md-6";
                yemeksepeti_up.className = "col-md-6"
            }

        }
        else if (rows_len - 1 == 1) {
            var not_none;
            var rows_data = document.querySelector("#rowschild");
            for (var i = 0; i < rows_data.children.length; i++) {
                if (rows_data.children[i].style.display != "none") {
                    console.log("rows childhren : " + rows_data.children[i]);
                    not_none = rows_data.children[i];
                }
            }
            not_none.className = "col-md-12";
        }


    } else if (id == "yemeksepeti") {
        yemeksepeti_acor.style.display = "block";


        var yemeksepeti_collapsecontent = document.getElementById("yemeksepeticollapsecontent");
        var yemeksepetiusername = document.getElementById("yemeksepetiusername").value;
        var yemeksepetipassword = document.getElementById("yemeksepetipassword").value;
        var yemeksepeticatalog = document.getElementById("yemeksepeticatalog").value;
        var yemeksepeticatalogid = document.getElementById("yemeksepeticatalogid").value;
        yemeksepeti_collapsecontent.innerHTML = yemeksepeti_all_container.innerHTML;
        document.getElementById("yemeksepetiusername").value = yemeksepetiusername;
        document.getElementById("yemeksepetipassword").value = yemeksepetipassword;
        document.getElementById("yemeksepeticatalog").value = yemeksepeticatalog;
        document.getElementById("yemeksepeticatalogid").value = yemeksepeticatalogid;

        success_button(1);

        yemeksepeti_close = true;

        console.log("Rows lentg yemek : " + rows_len)

        if (rows_len - 1 == 2) {
            if (!yemeksepeti_close) {
                trendyol_up.className = "col-md-6";
                getir_up.className = "col-md-6"
            }

        }
        else if (rows_len - 1 == 1) {
            var not_none;
            var rows_data = document.querySelector("#rowschild");
            for (var i = 0; i < rows_data.children.length; i++) {
                if (rows_data.children[i].style.display != "none") {
                    console.log("rows childhren : " + rows_data.children[i]);
                    not_none = rows_data.children[i];
                }
            }
            not_none.className = "col-md-12";
        }

    }
}


var rows_length;
function uzunluk() {
    rows_length = 0;
    var rows_data = document.querySelector("#rowschild");
    console.log(rows_data);
    for (var i = 0; i < rows_data.children.length; i++) {
        if (rows_data.children[i].style.display != "none") {
            rows_length += 1;
        }
    }
    if (rows_length - 1 == 0) {
        document.getElementById("content").style.display = "none";
        var hr_tag = document.querySelectorAll(".hrtag");
        hr_tag[0].style.display = "none";
        hr_tag[1].style.display = "none";
        add_rest_button.style.display = "none"
    }


}

add_rest_button.addEventListener("click", (e) => {

    uzunluk();
    console.log(rows_length);
    up_container_control(check_radio_button, rows_length);
})