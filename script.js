window.addEventListener('load', function () {
    get_date_time(); // 7 point
    dishes();
    add_drinks(); // 3 point
    keyEvent(); // 4b point
    discount_text(); //4c point
    table_data();
    createStyleSheet(); // Point 11
});

function keyEvent() {
    // Hold arrow up and arrow down key to scroll page.
    document.addEventListener('keydown',function (e) {
        document.getElementById('pagescroll').style.visibility = "visible";
        if(e.key == 'ArrowDown') {
            document.getElementById('pagescroll').innerText = 'Page scrolling down';
        } else if(e.key == 'ArrowUp') {
            document.getElementById('pagescroll').innerText = 'Page scrolling up';
        }
    });
    document.addEventListener('keyup',function (e) {
        document.getElementById('pagescroll').innerText = '';
        document.getElementById('pagescroll').style.visibility = "hidden";
    });
}

function add_drinks() {
    if(document.getElementById('add_drinks')) {
    document.getElementById('add_drinks').addEventListener('click', function () {

        // 3.a point Create additional html content +++
        var node = document.createElement("LI");
        node.setAttribute("ondblclick", "mouse_event('Cold Tea',this)");
        var textnode = document.createTextNode("Water");
        node.appendChild(textnode);

        if (document.querySelectorAll("#drink_list li").length > 4) {
            alert('Only 5 items available.');

            // 3.b point Modify content +++
            document.getElementById('add_drinks').innerText = 'No  more Drinks.';
        } else {

            // 3.a point Append content into dom +++
            document.getElementById("drink_list").appendChild(node);
        }
    });
    }
}

function mouse_event(text,j) {
    //console.log(j);
    j.innerHTML = text+' <span>Ordered</span>';
}

function get_date_time() {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if(document.getElementById('date_time')) {
        document.getElementById('date_time').innerHTML = 'Current Time: ' + date + time;
    }
}

function dishes() {
    var veg = document.querySelectorAll('.veg_item');
    var nonveg = document.querySelectorAll('.non_veg_item');
    if(document.getElementsByClassName('show-veg')[0]) {
        document.getElementsByClassName('show-veg')[0].addEventListener('click', function (e) {
            for (var i = 0; i < veg.length; i++) {
                veg[i].classList.remove("fade");
            }
            for (var i = 0; i < nonveg.length; i++) {
                nonveg[i].classList.add("fade");
            }
        });
    }
    if(document.getElementsByClassName('show-nonveg')[0]) {
        document.getElementsByClassName('show-nonveg')[0].addEventListener('click', function (e) {
            for (var i = 0; i < veg.length; i++) {
                veg[i].classList.add("fade");
            }
            for (var i = 0; i < nonveg.length; i++) {
                nonveg[i].classList.remove("fade");
            }
        });
    }

}

function  discount_text() {
    // Mouse event 4a point
    if(document.getElementsByClassName('our-offers')[0]){
    document.getElementsByClassName('our-offers')[0].addEventListener('mouseover',function () {
        this.style.background = '#6684b1';
    });
    document.getElementsByClassName('our-offers')[0].addEventListener('mouseleave',function () {
        this.style.background = 'transparent';
    });
    
    
    // Timer 4c point
    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
    var countDownDate = new Date("Aug 5, 2020 15:37:25").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("discount").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("discount").innerHTML = "EXPIRED";
        }
    }, 1000);
    }
}


// 5 point start
function add_item() {
    var input_div = document.createElement("div");
    input_div.setAttribute("class", "input");

    var input_tag = document.createElement("input");
    input_tag.setAttribute("type", "text");

    var removeBtn = document.createElement("button");
    removeBtn.setAttribute("type", "button");
    removeBtn.setAttribute("onclick", "remove_item(this)");
    var removeBtnText = document.createTextNode("Remove");
    removeBtn.appendChild(removeBtnText);

    input_div.appendChild(input_tag);
    input_div.appendChild(removeBtn);

    document.getElementsByClassName("fields")[0].appendChild(input_div);
}
function remove_item(input) {
    var input_div = input.parentElement;
    var fields = document.getElementsByClassName("fields")[0];
    fields.removeChild(input_div);

}
// 5 point end


// 8 point
function table_data() {
    var rows = [];
    var total = 0;
    rows.push({cx:'cx 1',address:'abc,city',phone:'797979',amount:122.99});
    rows.push({cx:'cx 2',address:'def,city',phone:'123654',amount:79.99});
    rows.push({cx:'cx 3',address:'ghi,city',phone:'545452',amount:99.80});
    rows.push({cx:'cx 4',address:'xyz,city',phone:'151919',amount:112.99});

    var table = document.querySelector('#customers tbody');
    if(table) {
        for(var i = 0; i<rows.length;i++) {
        total += rows[i].amount;
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        var name = document.createTextNode(rows[i].cx);
        var address = document.createTextNode(rows[i].address);
        var phone = document.createTextNode(rows[i].phone);
        var amount = document.createTextNode(rows[i].amount);
        td1.appendChild(name);
        td2.appendChild(address);
        td3.appendChild(phone);
        td4.appendChild(amount);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        table.appendChild(tr);
    }

        document.getElementById('total').innerHTML = 'Total: '+Math.round(total);
    }
}

function createStyleSheet () {
    // Point 11
    // Reference site https://stackoverflow.com/questions/28930846/how-to-use-cssstylesheet-insertrule-properly

    var el   = document.createElement('style');
    el.appendChild(document.createTextNode(''));
    el.type  = 'text/css';
    el.rel   = 'stylesheet';
    el.media = 'all';
    document.head.appendChild(el);
    console.log(el.sheet);
    var style = el.sheet;
    style.insertRule('body{background:#ddd;}', 0);
}