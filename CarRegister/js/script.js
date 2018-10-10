//Event listeners
$("#register_form").submit(function(e) {
    e.preventDefault();
    registerCar();
});

let noImgUrl = 'https://via.placeholder.com/250x125/d2d2d2/?text=no%20image%20yet';

// Atvaizdavimas pasikrovus
let CARS = getCarsFromStorage();

printArray(CARS);

// Funkcijos
function registerCar(){

    //1) Surinkti duomenys apie masina ir sukurti masina
    let car = createCar();
    let saveCar = true;

    // 1.1) Ar masina neturi duplikatu?
    if(findCarDuplicate(car, CARS)){
        if(confirm("Tokia masina yra, ar tikrai saugom?") === false){
            saveCar = false;
        }
    }
    
    if(saveCar){
        //3) Isaugoti masina
        saveCarData(car, CARS);
        //4) Atvaizduoti masiva
        printArray(CARS);
    }    

    //5) Isvalyti visus laukelius
    document.getElementById("register_form").reset();
}

function findCarDuplicate(car, CARS){
    //TODO: Sugalvoki geresni buda tikrinti visus properties.
    let found = false;
    //1) Foreach 
    for(let i = 0; i < CARS.length; i++){
        let c = CARS[i];
        if(c.brand == car.brand && c.model == car.model && c.engine == car.engine && c.price == car.price && c.fuel == car.fuel && c.used == car.used)
        {
            found = true;
        }
    }
    return found;
}

function getCarsFromStorage(){
    let carsArray = [];
    let CARS_JSON_string = localStorage.getItem("cars");
    if(CARS_JSON_string !== null){
        try{
            carsArray = JSON.parse(CARS_JSON_string); 
        }catch(err){
            alert(err.message);
            console.log(err);
        }
    }
    return carsArray;
}

function saveCarData(car, carsArray){
    carsArray.push(car);
    
    let CARS_string = JSON.stringify(carsArray);
    // CARS_STRING kazkodel yra undefined???


    localStorage.setItem("cars", CARS_string);
}

function deleteCar(id){
    // //1. rasti masina pagal ID
    // let targetCar = CARS.filter(function(x) {
    //     console.log(x.id+" === "+id);
    //     return x.id === id;
    // })[0]; // .filter() funkcija, grazina masiva, delto mes turim gale naudot [0]

    let targetCar = CARS.find(function(x) {
        console.log(x.id+" === "+id);
        return x.id === id;
    });

    //2. pasalinti masina
    CARS.splice(CARS.indexOf(targetCar), 1);
    
    //3. perpiesti lentele, nes pasalinom masina, ir tai reikia atvaizduot.
    printArray(CARS);

    //4. Isaugoti masiva po pakeitimu
    let CARS_string = JSON.stringify(CARS);
    localStorage.setItem("cars", CARS_string);
}

function printArray(carsArray){
    let h = "";

    for(let i = 0; i < carsArray.length; i++){ 
        // let imgUrl = carsArray[i].mainImgUrl;
        
        // if(typeof imgUrl === 'undefined'){
        //     imgUrl = noImgUrl;
        // }  
        
        let imgUrl = `/img/${carsArray[i].brand.toLowerCase()}.png`;
        
        let altText = `${carsArray[i].brand} ${carsArray[i].model}`;
        
        h += `
        <tr><td><img src="${imgUrl}" onerror="this.src='${noImgUrl}';" alt="${altText}" title="${altText}" class='carImg' /></td>
            <td>${carsArray[i].id}</td>
            <td>${carsArray[i].brand}</td>
            <td>${carsArray[i].model}</td>
            <td>${carsArray[i].engine}</td>
            <td>${carsArray[i].price}</td>
            <td><button class="car-remove fas fa-trash-alt btn  btn-danger" onclick="deleteCar(${carsArray[i].id})" ></button></td>
        </tr>`;    
    }
     document.getElementById("tbody_cars").innerHTML = h;
}

function createCar(){
    let brand = $("#brand").val();
    let model = $("#model").val();
    let engine = Number($("#engine").val()); // Skaicius
    let price = Number($("#price").val()); // Skaicius
    
    if(brand){    
        var patt = new RegExp("^[a-zA-Z ąĄčČęĘėĖįĮšŠųŲūŪžŽ]+$");        
        if(patt.test(brand)){
            $("#brand").removeClass("is-invalid");  
            $("span.invalid-feedback[for='brand']").text("");
        }else{
            $("#brand").addClass("is-invalid");  
            $("span.invalid-feedback[for='brand']").text("Leidziama naudoti tiktai raides A-Ž ir tarpus.");
        }
    }else{
        $("#brand").addClass("is-invalid");
        $("span.invalid-feedback[for='brand']").text("Laukelis yra privalomas"); ;   
    }

    let fuel = $("#fuel").val();
    let used = false;
    if($("#chk_used").val() === 'on'){
        used = true;
    }

    var c = new Car({        
        brand: brand,
        model: model,
        engine: engine,
        price: price,
        fuel: fuel,
        used: used,
        mainImgUrl: noImgUrl
    });

    return c;
}


