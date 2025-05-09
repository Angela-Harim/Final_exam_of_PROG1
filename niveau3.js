function isOpposite(dir1, dir2) {
    if (dir1 + dir2 === 'SUDNORD') return true;
     if (dir1 + dir2 === 'NORDSUD')return true;
        if (dir1 + dir2 === 'ESTOUEST') return true;
            if (dir1 + dir2 === 'OUESTEST') return true;
            return false;
}

export function reduceDirections(array) {
    let len = array.length;
    for (let i = 0; i < len - 1; i++) {
        if (isOpposite(array[i], array[i+1])) {
            array.splice(i, 2);
            return reduceDirections (array);
        }
        
    }
    return array;
}
