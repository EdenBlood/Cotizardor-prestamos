//* Creamos una funcion que formatea la cantidad utilizando una API
const formatearDinero = valor => {
    //* es una API de internacionalización de JavaScript para formatear números.Configuramos el formateador con:
    const formatter = new Intl.NumberFormat('en-US', { //* 'en-US': Locale (configuración regional para Estados Unidos).
        style: 'currency', //* style: 'currency': Indica que queremos formato de moneda.
        currency: 'USD' //* currency: 'USD': La moneda a usar (dólares estadounidenses).
    })
    //* El método .format() del objeto formatter convierte el número (valor) en un string con formato de moneda.
    return formatter.format(valor);
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    //* Mientras mayor es la cantidad, menor es el interés
    if(cantidad < 5000) {
        total = cantidad * 1.5; //* 50%
    }else if(cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4; //* 40%
    }else if(cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3; //* 30%
    } else {
        total = cantidad * 1.2; //* 20%
    }

    //* plazo - más plazo, mayor interes.
    if(plazo === 6) {
        total *= 1.1;
    } else if(plazo === 12) {
        total *= 1.2;
    } else {
        total *= 1.40;
    }

    return total;
}

export {
    formatearDinero,
    calcularTotalPagar
}