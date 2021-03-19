
//function Node(x, y, value) {
//    X = x;
//    Y = y;
//    Value = value;
//    this.DrawCircleNumber = dar;


//}
//function dar() {
//    ctx.beginPath();
//    ctx.arc(X + 110, Y + 20, 30, 0, 2 * Math.PI);
//    ctx.font = "30px arial";
//    ctx.fillText(Value, X + 102, Y + 30);
//    ctx.stroke();



//}

//function ConnectionLine(currentX, currentY, nextX, nextY) {

//    ctx.moveTo(currentX + 10, currentY + 10);
//    ctx.lineTo(nextX + 10, nextY + 10);
//    ctx.stroke();
//}


//var next_node;

//function Sekvencialna_Izvor(polje) {

//    next_node = new Node(Memorize_point_X[Memorize_point_X.length - 1], Memorize_point_Y[Memorize_point_Y.length - 1], prva_vrijednost);
//    next_node.DrawCircleNumber();
//    ctx.moveTo(Memorize_point_X[Memorize_point_X.length - 1] + 139, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//    ctx.lineTo(Memorize_point_X[Memorize_point_X.length - 1] + 175, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//    ctx.stroke();
//    Memorize_point_X.push(X);
//    Memorize_point_Y.push(Y);
//    checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//    //checkif2values2.push(filldatagrid2[parseInt(prva_vrijednost),odrediste]);
//    if (checkif2values[checkif2values.length - 1].length > 1) {
//        var temp = polje[izvor][odrediste];
//        for (j = 1; j < temp.length; j++) {
//            if (temp[j] != ',') {
//                izvorisni_clanovi.push(temp[j].toString());
//            }
//        }
//    }
//    else if (checkif2values[checkif2values.length - 1] == odrediste.toString()) { return; }
//    else if (checkif2values[checkif2values.length - 1].length > 1) {
//        var temporary = Memorize_point_X.pop() - 60;
//        Memorize_point_X.pop();
//        Memorize_point_X.push(temporary);
//        return;
//    }
//    else {
//        Memorize_point_X.pop();
//        Memorize_point_X.push(X += 94);
//        prva_vrijednost = polje[parseInt(prva_vrijednost)][odrediste].substring(0);
//        Sekvencialna_Izvor(polje);
//    }

//}
//function Sekvencialna(polje) {
//    do {
//        if (checkif2values[checkif2values.length - 1].length > 1 && checkif2values[checkif2values.length - 1] != polje[izvor][odrediste]) {
//            if (Grananje(polje[parseInt(prva_vrijednost)][odrediste]) > 1) {
//                vrijednost_noda.push(checkif2values[checkif2values.length - 1].substring(4, 5));
//                mem_tockeX.push(Memorize_point_X[Memorize_point_X.length - 1]);
//                mem_tockeY.push(Memorize_point_Y[Memorize_point_Y.length - 1]);
//            }
//            xyz = true;
//            vrijednost_noda.push(checkif2values[checkif2values.length - 1].substring(2, 3));
//            mem_tockeX.push(Memorize_point_X[Memorize_point_X.length - 1]);
//            mem_tockeY.push(Memorize_point_Y[Memorize_point_Y.length - 1]);
//        }
//        prva_vrijednost = polje[parseInt(prva_vrijednost)][odrediste].substring(0, 1);
//        if (prva_vrijednost == "X") break;
//        x = Memorize_point_X[Memorize_point_X.length - 1];
//        y = Memorize_point_Y[Memorize_point_Y.length - 1];


//        next_node = new Node(x + 100, y, prva_vrijednost);
//        next_node.DrawCircleNumber();

//        ctx.moveTo(Memorize_point_X[Memorize_point_X.length - 1] + 139, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//        ctx.lineTo(Memorize_point_X[Memorize_point_X.length - 1] + 180, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//        ctx.stroke();

//        Memorize_point_X.push(X);
//        Memorize_point_Y.push(Y);
//        if (prva_vrijednost == odrediste.toString()) {
//            global_destinationX.push(X);
//            global_destinationY.push(Y);
//        }
//        checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//        //checkif2values2.push(filldatagrid2[parseInt(prva_vrijednost),odrediste]);
//    } while (prva_vrijednost != odrediste.toString());

//    //------------------------------------------------------------------------------- Main metoda
//    if (vrijednost_noda.length == 0 && xyz) { xyz = false; return; }

//    for (var k = vrijednost_noda.length - 1; k >= 0; k--) {
//        if (mem_tockeX.length != 0 && mem_tockeY.length != 0) {
//            if (vrijednost_noda.length != 0) {
//                next_node = new Node(mem_tockeX[mem_tockeX.length - 1] + 80, global_destinationY[global_destinationY.length - 1] + 90, vrijednost_noda[k]);
//                next_node.DrawCircleNumber();


//                ctx.moveTo(mem_tockeX[mem_tockeX.length - 1] + 120, mem_tockeY[mem_tockeY.length - 1] + 45);
//                ctx.lineTo(X + 104, Y - 7);
//                ctx.stroke();

//                mem_tockeX.pop();
//                mem_tockeY.pop();
//                Memorize_point_X.push(X);
//                Memorize_point_Y.push(Y);
//                prva_vrijednost = vrijednost_noda[k];
//                vrijednost_noda.pop();
//                checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//                Sekvencialna(polje);



//            }
//        }
//    }
//    if (izvorisni_clanovi.length != 0) {
//        next_node = new Node(Memorize_point_X[0] + 55 - angling, Memorize_point_Y[0] + global_destinationY[global_destinationY.length - 1] + 70, izvorisni_clanovi[0]);
//        angling += 20;
//        next_node.DrawCircleNumber();
//        //Conekcija linija Node.ConnectionLine(g, new Point(Memorize_point_X1.First() + 22, Memorize_point_Y1.First() + 28), new Point(next_node.X + 8, next_node.Y + 2));
//        ctx.moveTo(Memorize_point_X[0] + 110, Memorize_point_Y[0] + 50);
//        ctx.lineTo(X + 100, Y - 6);
//        ctx.stroke();
//        Memorize_point_X.push(X);
//        Memorize_point_Y.push(Y);
//        prva_vrijednost = izvorisni_clanovi[0];
//        izvorisni_clanovi.shift();
//        mem_tockeX.push(Memorize_point_X[Memorize_point_X.length - 1]);
//        mem_tockeY.push(Memorize_point_Y[Memorize_point_Y.length - 1]);
//        checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//        Sekvencialna(polje);
//    }

//}

//function SekvencialnaIzvorUzPrenosenjePrva(polje, poljesazvjezdom) {
//    next_node = new Node(Memorize_point_X[Memorize_point_X.length - 1], Memorize_point_Y[Memorize_point_Y.length - 1], prva_vrijednost);
//    next_node.DrawCircleNumber();
//    ctx.moveTo(Memorize_point_X[Memorize_point_X.length - 1] + 139, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//    ctx.lineTo(Memorize_point_X[Memorize_point_X.length - 1] + 175, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//    ctx.stroke();
//    Memorize_point_X.push(X);
//    Memorize_point_Y.push(Y);
//    checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//    checkif2values2.push(poljesazvjezdom[parseInt(prva_vrijednost)][odrediste]);
//    if ((checkif2values2[checkif2values2.length - 1]).indexOf("*") > -1) {
//        var index = parseInt(((poljesazvjezdom[parseInt(prva_vrijednost)][odrediste]).indexOf("*") - 1));
//        privremena = (poljesazvjezdom[parseInt(prva_vrijednost)][odrediste]).substring(index, index + 1);
//    }
//    if (checkif2values[checkif2values.length - 1].length > 1) {
//        var temp = polje[izvor][odrediste];
//        for (j = 1; j < temp.length; j++) {
//            if (temp[j] != ',') {
//                izvorisni_clanovi.push(temp[j].toString());
//            }
//        }
//    }
//    else if (checkif2values[checkif2values.length - 1] == odrediste.toString()) { return; }
//    else if (checkif2values[checkif2values.length - 1].length > 1) {
//        var temporary = Memorize_point_X.pop() - 60;
//        Memorize_point_X.pop();
//        Memorize_point_X.push(temporary);
//        return;
//    }
//    else {
//        Memorize_point_X.pop();
//        Memorize_point_X.push(X += 94);
//        prva_vrijednost = polje[parseInt(prva_vrijednost)][odrediste].substring(0);
//        SekvencialnaIzvorUzPrenosenjePrva(polje, poljesazvjezdom);
//    }

//}
//function SekvencialnaIzvorUzPrenosenjeDruga(polje, poljesazvjezdom) {
//    do {
//        if (checkif2values[checkif2values.length - 1].length > 1 && checkif2values[checkif2values.length - 1] != polje[izvor][odrediste]) {

//            if ((checkif2values2[checkif2values2.length - 1]).indexOf("*") > -1) {
//                xyz = true;
//                var index = (poljesazvjezdom[parseInt(prva_vrijednost)][odrediste]).indexOf("*") - 1;
//                privremena = (poljesazvjezdom[parseInt(prva_vrijednost)][odrediste]).substring(index, 1);
//            }
//        }
//        prva_vrijednost = polje[parseInt(prva_vrijednost)][odrediste].substring(0, 1);
//        if (prva_vrijednost == "X") break;
//        x = Memorize_point_X[Memorize_point_X.length - 1];
//        y = Memorize_point_Y[Memorize_point_Y.length - 1];


//        next_node = new Node(x + 100, y, prva_vrijednost);
//        next_node.DrawCircleNumber();

//        ctx.moveTo(Memorize_point_X[Memorize_point_X.length - 1] + 139, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//        ctx.lineTo(Memorize_point_X[Memorize_point_X.length - 1] + 180, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//        ctx.stroke();

//        Memorize_point_X.push(X);
//        Memorize_point_Y.push(Y);
//        if (prva_vrijednost == privremena) {
//            if (Grananje(polje[parseInt(prva_vrijednost)][odrediste]) > 1) {
//                vrijednost_noda.push(polje[parseInt(privremena)][odrediste].substring(4, 5));
//                mem_tockeX.push(Memorize_point_X[Memorize_point_X.length - 1]);
//                mem_tockeY.push(Memorize_point_Y[Memorize_point_Y.length - 1]);
//            }
//            vrijednost_noda.push(polje[parseInt(privremena)][odrediste].substring(2, 3));
//            mem_tockeX.push(Memorize_point_X[Memorize_point_X.length - 1]);
//            mem_tockeY.push(Memorize_point_Y[Memorize_point_Y.length - 1]);
//        }
//        if (prva_vrijednost == odrediste.toString()) {
//            global_destinationX.push(X);
//            global_destinationY.push(Y);
//        }
//        checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//        checkif2values2.push(poljesazvjezdom[parseInt(prva_vrijednost)][odrediste]);
//    } while (prva_vrijednost != odrediste.toString());

//    //------------------------------------------------------------------------------- Main metoda
//    if (vrijednost_noda.length == 0 && xyz) { xyz = false; return; }

//    for (var k = vrijednost_noda.length - 1; k >= 0; k--) {
//        if (mem_tockeX.length != 0 && mem_tockeY.length != 0) {
//            if (vrijednost_noda.length != 0) {
//                next_node = new Node(mem_tockeX[mem_tockeX.length - 1] + 80, global_destinationY[global_destinationY.length - 1] + 90, vrijednost_noda[k]);
//                next_node.DrawCircleNumber();


//                ctx.moveTo(mem_tockeX[mem_tockeX.length - 1] + 120, mem_tockeY[mem_tockeY.length - 1] + 45);
//                ctx.lineTo(X + 104, Y - 7);
//                ctx.stroke();

//                mem_tockeX.pop();
//                mem_tockeY.pop();
//                Memorize_point_X.push(X);
//                Memorize_point_Y.push(Y);
//                prva_vrijednost = vrijednost_noda[k];
//                vrijednost_noda.pop();
//                checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//                checkif2values2.push(poljesazvjezdom[parseInt(prva_vrijednost)][odrediste]);
//                SekvencialnaIzvorUzPrenosenjeDruga(polje, poljesazvjezdom);



//            }
//        }
//    }
//    if (izvorisni_clanovi.length != 0) {
//        next_node = new Node(Memorize_point_X[0] + 55 - angling, Memorize_point_Y[0] + global_destinationY[global_destinationY.length - 1] + 70, izvorisni_clanovi[0]);
//        angling += 20;
//        next_node.DrawCircleNumber();
//        //Conekcija linija Node.ConnectionLine(g, new Point(Memorize_point_X1.First() + 22, Memorize_point_Y1.First() + 28), new Point(next_node.X + 8, next_node.Y + 2));
//        ctx.moveTo(Memorize_point_X[0] + 110, Memorize_point_Y[0] + 50);
//        ctx.lineTo(X + 100, Y - 6);
//        ctx.stroke();
//        Memorize_point_X.push(X);
//        Memorize_point_Y.push(Y);
//        prva_vrijednost = izvorisni_clanovi[0];
//        if (prva_vrijednost == privremena) {
//            vrijednost_noda.push(polje[parseInt(privremena)][odrediste].substring(2, 3)); // inace briem da to trea mjenjat
//            mem_tockeX.push(Memorize_point_X[Memorize_point_X.length - 1]);
//            mem_tockeY.push(Memorize_point_Y[Memorize_point_Y.length - 1]);
//        }
//        izvorisni_clanovi.shift();
//        mem_tockeX.push(Memorize_point_X[Memorize_point_X.length - 1]);
//        mem_tockeY.push(Memorize_point_Y[Memorize_point_Y.length - 1]);
//        checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//        checkif2values2.push(poljesazvjezdom[parseInt(prva_vrijednost)][odrediste]);
//        SekvencialnaIzvorUzPrenosenjeDruga(polje, poljesazvjezdom);
//    }

//}
//function SekvencialnaIzvorIzvorPrvi(polje, poljesazvjezdom) {
//    next_node = new Node(Memorize_point_X[Memorize_point_X.length - 1], Memorize_point_Y[Memorize_point_Y.length - 1], prva_vrijednost);
//    next_node.DrawCircleNumber();
//    ctx.moveTo(Memorize_point_X[Memorize_point_X.length - 1] + 139, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//    ctx.lineTo(Memorize_point_X[Memorize_point_X.length - 1] + 175, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//    ctx.stroke();
//    Memorize_point_X.push(X);
//    Memorize_point_Y.push(Y);
//    checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//    //checkif2values2.push(filldatagrid2[parseInt(prva_vrijednost),odrediste]);
//    if (checkif2values[checkif2values.length - 1].length > 1) {
//        iz_izvorista = true;
//        var temp = polje[izvor][odrediste];
//        for (j = 1; j < temp.length; j++) {
//            if (temp[j] != ',') {
//                izvorisni_clanovi.push(temp[j].toString());
//            }
//        }
//    }
//    else if (checkif2values[checkif2values.length - 1] == odrediste.toString()) { return; }
//    else if (checkif2values[checkif2values.length - 1].length > 1) {
//        iz_izvorista = true;
//        var temporary = Memorize_point_X.pop() - 60;
//        Memorize_point_X.pop();
//        Memorize_point_X.push(temporary);
//        return;
//    }
//    else {
//        iz_izvorista = true;
//        Memorize_point_X.pop();
//        Memorize_point_X.push(X += 94);
//        prva_vrijednost = polje[parseInt(prva_vrijednost)][odrediste].substring(0);
//        SekvencialnaIzvorIzvorPrvi(polje, poljesazvjezdom);
//    }
//}
//function SekvencialnaIzvorIzvorDrugi(polje, poljesazvjezdom) {
//    do {
//        if (checkif2values[checkif2values.length - 1].length > 1 && checkif2values[checkif2values.length - 1] != polje[izvor][odrediste]) {
//            xyz = true;
//            vrijednost_noda.push(checkif2values[checkif2values.length - 1].substring(2, 3));
//            mem_tockeX.push(Memorize_point_X[Memorize_point_X.length - 1]);
//            mem_tockeY.push(Memorize_point_Y[Memorize_point_Y.length - 1]);
//        }
//        prva_vrijednost = polje[parseInt(prva_vrijednost)][odrediste].substring(0, 1);
//        if (prva_vrijednost == "X") break;
//        x = Memorize_point_X[Memorize_point_X.length - 1];
//        y = Memorize_point_Y[Memorize_point_Y.length - 1];


//        next_node = new Node(x + 100, y, prva_vrijednost);
//        next_node.DrawCircleNumber();

//        ctx.moveTo(Memorize_point_X[Memorize_point_X.length - 1] + 139, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//        ctx.lineTo(Memorize_point_X[Memorize_point_X.length - 1] + 180, Memorize_point_Y[Memorize_point_Y.length - 1] + 13);
//        ctx.stroke();

//        Memorize_point_X.push(X);
//        Memorize_point_Y.push(Y);
//        if (prva_vrijednost == odrediste.toString()) {
//            global_destinationX.push(X);
//            global_destinationY.push(Y);
//        }
//        checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//        //checkif2values2.push(filldatagrid2[parseInt(prva_vrijednost),odrediste]);
//    } while (prva_vrijednost != odrediste.toString());

//    //------------------------------------------------------------------------------- Main metoda
//    if (vrijednost_noda.length == 0 && xyz) { xyz = false; return; }

//    for (var k = vrijednost_noda.length - 1; k >= 0; k--) {
//        if (!iz_izvorista) {
//            if (mem_tockeX.length != 0 && mem_tockeY.length != 0) {
//                if (vrijednost_noda.length != 0) {
//                    next_node = new Node(mem_tockeX[mem_tockeX.length - 1] + 80, global_destinationY[global_destinationY.length - 1] + 90, vrijednost_noda[k]);
//                    next_node.DrawCircleNumber();


//                    ctx.moveTo(mem_tockeX[mem_tockeX.length - 1] + 120, mem_tockeY[mem_tockeY.length - 1] + 45);
//                    ctx.lineTo(X + 104, Y - 7);
//                    ctx.stroke();

//                    mem_tockeX.pop();
//                    mem_tockeY.pop();
//                    Memorize_point_X.push(X);
//                    Memorize_point_Y.push(Y);
//                    prva_vrijednost = vrijednost_noda[k];
//                    vrijednost_noda.pop();
//                    checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//                    SekvencialnaIzvorIzvorDrugi(polje, poljesazvjezdom);



//                }
//            }
//        }
//    }
//    if (izvorisni_clanovi.length != 0) {
//        next_node = new Node(Memorize_point_X[0] + 55 - angling, Memorize_point_Y[0] + global_destinationY[global_destinationY.length - 1] + 70, izvorisni_clanovi[0]);
//        angling += 20;
//        next_node.DrawCircleNumber();
//        //Conekcija linija Node.ConnectionLine(g, new Point(Memorize_point_X1.First() + 22, Memorize_point_Y1.First() + 28), new Point(next_node.X + 8, next_node.Y + 2));
//        ctx.moveTo(Memorize_point_X[0] + 110, Memorize_point_Y[0] + 50);
//        ctx.lineTo(X + 100, Y - 6);
//        ctx.stroke();
//        Memorize_point_X.push(X);
//        Memorize_point_Y.push(Y);
//        prva_vrijednost = izvorisni_clanovi[0];
//        izvorisni_clanovi.shift();
//        mem_tockeX.push(Memorize_point_X[Memorize_point_X.length - 1]);
//        mem_tockeY.push(Memorize_point_Y[Memorize_point_Y.length - 1]);
//        checkif2values.push(polje[parseInt(prva_vrijednost)][odrediste]);
//        SekvencialnaIzvorIzvorDrugi(polje, poljesazvjezdom);
//    }
//}
//function Grananje(grana) {
//    var counterneki = 0;
//    for (var i = 0; i < grana.length; i++) {
//        if (grana[i] == ',') {
//            counterneki++;
//        }

//    }
//    return counterneki;
//}
//MAIN FUNCTIONS END
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------


//function clearGraphics() {
//    var d = document.getElementById("myCanvas");
//    var gcd = d.getContext("2d");
//    gcd.clearRect(0, 0, myCanvas.width, myCanvas.height);
//    checkif2values = [];
//    Memorize_point_X = [];
//    Memorize_point_Y = [];
//    izvorisni_clanovi = [];
//    global_destinationX = [];
//    global_destinationY = [];
//    prva_vrijednost = "";
//    vrijednost_noda = [];
//    x = 30;
//    y = 20;
//    angling = 0;
//    document.getElementById('broj1').innerHTML = "0";
//    document.getElementById('broj2').innerHTML = "0";
//    varijabla2 = 0;
//    varijalba = 0;
//    odrediste = 0;
//    izvor = 0;
//    checkif2values2 = [];
//    privremena = "";
//    xyz = false;
//    iz_izvorista = false;
//    already_drawn = false;
//    mem_tockeY = [];
//}

//var varijalba = 0;
//var varijabla2 = 0;

//function povecaj() {
//    alert("dsnaksd");
//    var x;
//    if (firstselected) { x = 17; }
//    else { x = 5; }
//    if (varijalba >= 0 && varijalba < x) {
//        varijalba = varijalba + 1;
//        document.getElementById('broj1').innerHTML = varijalba.toString();
//        izvor = varijalba;
//    }
//}


//function smanji(x) {
//    if (firstselected) { x = 17; }
//    else { x = 5; }
//    if (varijalba > 0 && varijalba <= x) {
//        varijalba = varijalba - 1;
//        document.getElementById('broj1').innerHTML = varijalba.toString();
//        izvor = varijalba;
//    }
//}


//function povecaj2(x) {
//    if (firstselected && (!secondselected)) { document.getElementById("tablica1").style.background = "orange"; }
//    if (firstselected) { x = 8; }
//    else { x = 5; }
//    if (varijabla2 >= 0 && varijabla2 < x) {
//        varijabla2 = varijabla2 + 1;
//        document.getElementById('broj2').innerHTML = varijabla2.toString();
//        odrediste = varijabla2;
//    }
//}

//function smanji2(x) {
//    if (firstselected) { x = 8; }
//    else { x = 5; }
//    if (varijabla2 > 0 && varijabla2 <= x) {
//        varijabla2 = varijabla2 - 1;
//        document.getElementById('broj2').innerHTML = varijabla2.toString();
//        odrediste = varijabla2;
//    }


//}
//function odaberiPrvu() {
//    document.getElementById("tablica1").style.background = "orange";
//    document.getElementById("tablica2").style.background = "none";
//    document.getElementById("tablica3").style.background = "none";
//    firstselected = true;
//    secondselected = false;
//    thirdselected = false;
//    document.getElementById('broj1').innerHTML = "0";
//    document.getElementById('broj2').innerHTML = "0";
//    varijabla2 = 0;
//    varijalba = 0;
//    odrediste = 0;
//    izvor = 0;
//}
//function odaberiDrugu() {
//    document.getElementById("tablica2").style.background = "orange";
//    document.getElementById("tablica1").style.background = "none";
//    document.getElementById("tablica3").style.background = "none";
//    secondselected = true;
//    firstselected = false;
//    thirdselected = false;
//    document.getElementById('broj1').innerHTML = "0";
//    document.getElementById('broj2').innerHTML = "0";
//    varijabla2 = 0;
//    varijalba = 0;
//    odrediste = 0;
//    izvor = 0;
//}
//function odaberiTrecu() {
//    document.getElementById("tablica2").style.background = "none";
//    document.getElementById("tablica1").style.background = "none";
//    document.getElementById("tablica3").style.background = "orange";
//    thirdselected = true;
//    secondselected = false;
//    firstselected = false;
//    document.getElementById('broj1').innerHTML = "0";
//    document.getElementById('broj2').innerHTML = "0";
//    varijabla2 = 0;
//    varijalba = 0;
//    odrediste = 0;
//    izvor = 0;
//}

//ESTETIKA
function adjustOdrediste() {
    car = document.getElementById("myCanvas");
    ytong = car.getContext("2d");
    var max_x = global_destinationX[0];

    for (var d = 0; d < global_destinationX.length; d++) {
        if (global_destinationX[d] > max_x) {
            max_x = global_destinationX[d];
        }
    }
    for (var d = 0; d < global_destinationX.length; d++) {
        if (global_destinationX[d] < max_x) {
            ytong.clearRect(global_destinationX[d] + 70, global_destinationY[d] - 30, 100, 100);
            ytong.beginPath();
            ytong.arc(global_destinationX[d] + (max_x - global_destinationX[d]) + 110, global_destinationY[d] + 20, 30, 0, 2 * Math.PI);
            ytong.moveTo(global_destinationX[d] + 50, global_destinationY[d] + 13);
            ytong.lineTo(global_destinationX[d] + (max_x - global_destinationX[d]) + 80, global_destinationY[d] + 13);
            ytong.font = "30px arial";
            ytong.fillText(odrediste, global_destinationX[d] + (max_x - global_destinationX[d]) + 80 + 22, global_destinationY[d] + 13 + 16);
            var img = document.getElementById("numberpi");
            ytong.drawImage(img, global_destinationX[d] + (max_x - global_destinationX[d]) + 80 + 22 + 45, global_destinationY[d] - 5);


            if (d == 0) {
                ytong.font = "20px arial";
                ytong.fillText("(" + d + ")" + ". prioritet", global_destinationX[d] + (max_x - global_destinationX[d]) + 80 + 122, global_destinationY[d] + 13 + 32);
            }
            else {
                ytong.font = "20px arial";
                ytong.fillText("(" + d + ")" + ". alternativni", global_destinationX[d] + (max_x - global_destinationX[d]) + 80 + 122, global_destinationY[d] + 13 + 32);
            }
            ytong.stroke();
        }
        else {
            if (d == 0) {
                ytong.font = "20px arial";
                ytong.drawImage(img, global_destinationX[d] + (max_x - global_destinationX[d]) + 80 + 22 + 45, global_destinationY[d] - 5);
                ytong.fillText("(" + d + ")" + ". prioritet", global_destinationX[d] + (max_x - global_destinationX[d]) + 80 + 122, global_destinationY[d] + 13 + 32);
                ytong.stroke();
            }
            else {
                ytong.font = "20px arial";
                ytong.drawImage(img, global_destinationX[d] + (max_x - global_destinationX[d]) + 80 + 22 + 45, global_destinationY[d] - 5);
                ytong.fillText("(" + d + ")" + ". alternativni", global_destinationX[d] + (max_x - global_destinationX[d]) + 80 + 122, global_destinationY[d] + 13 + 32);
            }
            ytong.stroke();
        }
    }

}
//ESTETIKA END
////GLAVNE 3 METODE U KOJIMA MJENJAMO PARAMETRE------------------------------------------------------------------------------------------
//function crtajMetodaSekvencialna() {
//    prva_vrijednost = izvor.toString();
//    Memorize_point_X.push(x);
//    Memorize_point_Y.push(y);

//    if (firstselected) {
//        Sekvencialna_Izvor(mrvelj);
//        Sekvencialna(mrvelj);
//        adjustOdrediste();
//    }
//    else if (thirdselected)// tu staviti else if za trecu tablicu
//    {
//        Sekvencialna_Izvor(filldatagrid33);
//        Sekvencialna(filldatagrid33);
//        adjustOdrediste();
//    }
//    else {
//        Sekvencialna_Izvor(filldatagrid22);
//        Sekvencialna(filldatagrid22);
//        adjustOdrediste();
//    }

//}

//function crtajMetodaIzvor() {
//    prva_vrijednost = izvor.toString();
//    Memorize_point_X.push(x);
//    Memorize_point_Y.push(y);
//    if (firstselected) {

//        SekvencialnaIzvorIzvorPrvi(filldatagrid, filldatagridwithstar1);
//        SekvencialnaIzvorIzvorDrugi(filldatagrid, filldatagridwithstar1);
//        adjustOdrediste();
//    }
//    else if (thirdselected)// tu staviti else if za trecu tablicu
//    {
//        SekvencialnaIzvorIzvorPrvi(filldatagrid33, filldatagridwithstar2);
//        SekvencialnaIzvorIzvorDrugi(filldatagrid33, filldatagridwithstar2);
//        adjustOdrediste();
//    }
//    else {
//        SekvencialnaIzvorIzvorPrvi(filldatagrid22, filldatagridwithstar2);
//        SekvencialnaIzvorIzvorDrugi(filldatagrid22, filldatagridwithstar2);
//        adjustOdrediste();
//    }

//}

//function crtajMetodaUzPrenosenje() {
//    prva_vrijednost = izvor.toString();
//    Memorize_point_X.push(x);
//    Memorize_point_Y.push(y);
//    if (firstselected) {
//        SekvencialnaIzvorUzPrenosenjePrva(filldatagrid, filldatagridwithstar1);
//        SekvencialnaIzvorUzPrenosenjeDruga(filldatagrid, filldatagridwithstar1);
//        adjustOdrediste();
//    }

//    else if (thirdselected)// tu staviti else if za trecu tablicu
//    {
//        SekvencialnaIzvorUzPrenosenjePrva(filldatagrid33, filldatagridwithstar2);
//        SekvencialnaIzvorUzPrenosenjeDruga(filldatagrid33, filldatagridwithstar2);
//        adjustOdrediste();
//    }

//    else {
//        SekvencialnaIzvorUzPrenosenjePrva(filldatagrid22, filldatagridwithstar2);
//        SekvencialnaIzvorUzPrenosenjeDruga(filldatagrid22, filldatagridwithstar2);
//        adjustOdrediste();
//    }

//    //GLAVNE 3 METODE U KOJIMA MJENJAMO PARAMETRE------------------------------------------------------------------------------------------

//}
// FIXNA METODA---------------------------------------------------------------------------------------------------------------------------
//function crtaj()  // METODA SVIH METODA METODA SVIH METODA METODA SVIH METODA METODA SVIH METODA METODA SVIH METODA
//{
//    if (izvor == 0 || odrediste == 0) {
//        alert('Unesite broj izvorišta i odredišta');
//    }
//    else if (izvor == odrediste) {
//        alert('Izvor i odredište ne mogu biti jednaki');
//    }
//    else {
//        if (!already_drawn) {
//            already_drawn = true;
//            if (document.getElementById('radio1').checked) {
//                crtajMetodaSekvencialna();
//            }
//            else if (document.getElementById('radio2').checked) {
//                crtajMetodaIzvor();
//            }
//            else {
//                crtajMetodaUzPrenosenje();
//            }
//        }
//        else { alert('Izbrišite dijagram prije ponovnog crtanja'); }
//    }

//}
//// FIXNA METODA---------------------------------------------------------------------------------------------------------------------------
