let hora =-1

switch (hora) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Madrugada');
        break;
    
    case 6:
    case 7:
    case 8:
        console.log('Temprano');
        break;

    case 9:
    case 10:
    case 11:
        console.log('Mañana');
        break;

    case 12:
        console.log('Medio día');
        break;

    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
        console.log('Tarde');
        break;

    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        console.log('Tarde');
        break;
        

    default:
        console.log("Inválido");
        break;
}
