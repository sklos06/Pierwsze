let a = parseInt(prompt('Podaj numer miesiąca(1-12)'));
let b;
function rok(){
    b = parseInt(prompt('Podaj rok'));
    if((b%4==0 && b%100!=0) || (b%400==0)){
        document.write('29 dni');
    }else{
        document.write('28 dni');
    }
}
switch(a){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write('31 dni'); break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.write('30 dni'); break;
    case 2:
        rok(); break;
    default: 
        document.write('Wystąpił błąd'); break;
}