
function precioFinal() {
    const coupons = [
        {
            name: "cupon1",
            discount: 15,
        },
        {
            name: "cupon2",
            discount: 25,
        },
        {
            name: "cupon3",
            discount: 30,
        },
    ];
    

    const inputPrice = document.getElementById("inputPrice");
    const precioValue = inputPrice.value;

    const inputDesc = document.getElementById("inputDesc");
    const descuentoValue = inputDesc.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(precioValue, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
}


function calcularPrecioConDescuento(precio, desc) {
    const valorDescuento = (precio * desc) / 100;
    const precioFinalProducto = precio - valorDescuento;
    return precioFinalProducto;
}

function calcularDescuento() {
    const inputPrice = document.getElementById("inputPrice");
    const precioValue = inputPrice.value;

    const inputDesc = document.getElementById("inputDesc");
    const descuentoValue = inputDesc.value;
    
    const trabajo = calcularPrecioConDescuento(precioValue, descuentoValue)
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + trabajo;
}