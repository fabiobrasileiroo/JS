function nota(a){
    switch(a){
        case 10: return "A+"; 
        case 9: return "A"; 
        case 8: return "B+"; 
        case 7: return "B"; 
        case 6: return "C+";
        case 5: return "C"; 
        case 4: return "D+";
        case 3: return "D"; 
        case 2: return "E+";
        case 1: return "E"; 
        case 0: return "F"; 
        default: return null;
    }
}
console.log(nota(11))
// nao existe null