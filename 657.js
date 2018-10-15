var judgeCircle = function(moves) {
    var Moves = moves.split("");
    U = Moves.filter(e=>e=="U").length;
    D = Moves.filter(e=>e=="D").length;
    L = Moves.filter(e=>e=="L").length;
    R = Moves.filter(e=>e=="R").length;
    return (U==D && L==R);
};