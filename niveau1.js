function getLastDelegation(delegation) {
    let indexDelegation=[];
    let seconde=[];

    for (let index = 0; index < delegation.length; index++) {
        delegation[index]=delegation[index].split(" ")
        indexDelegation.push(delegation[index])
    }
    for (let j = 0; j < indexDelegation.length; j++) {
        seconde.push((Number(indexDelegation[j][2])/Number(indexDelegation[j][1])))
    }
    max=seconde.Math.max(...Array)
    for (let i = 0; i < seconde.length; index++) {
        if (seconde[i]==max) {
            return indexDelegation[i][0]
            
            
        }
        
    }
}
console.log(getLastDelegation(["Chili 101 2","estonia 58 1","romainia 102 3","ecuador 103 "]));








