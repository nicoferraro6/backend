import moment from "moment";

const hoy = moment();

const fechaNacimiento = moment('2000-11-06','YYYY-MM-DD');

if(fechaNacimiento.isValid()){
    let dif = hoy.diff(fechaNacimiento, 'days');
    console.log(`Desde mi nacimiento pasaron ${dif}) dias`);
}else{
    console.log('La fecha no es valida')
}
