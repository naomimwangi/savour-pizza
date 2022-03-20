function Buypizza(flavor, size, crust, topping, total) {
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}
let total=0;
let checkout=0;

$("button.proceed").click(function (event) {
    let pname = $("#flavor option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
});
    $.each($("input[name='toppings']:checked"), function () {
        ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

    switch (psize) {
        case "large":
            price = 1200;
            console.log(price);
            break;
        case "medium":
            price = 900;
            console.log("The price is " + price);
            break;
        case "small":
            price = 600;
            console.log(price);
        default:
            console.log("error");
    }
    switch (pcrust) {
        case "Crispy":
            crust_price = 100;
            break;
        case "Stuffed":
            crust_price = 150;
            break;
        case "Gluten-free":
            crust_price = 150;
            break;
        default:
            console.log("No price");
    }  
    
    let toppingCost = ptopping.length * 100;
    console.log("toppins cost" + toppingCost);

    let deliveryCost = 200;

    total = price + crust_price + toppingCost;
    console.log(total);

    checkout = total + deliveryCost;
    console.log(checkout);

$("#contact").submit(function () {
    event.preventDefault();
    let name = $("input#text").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();
    console.log (contact);
    alert(name + " " + "we have received your message. Thank you for reaching out to us.");

});  