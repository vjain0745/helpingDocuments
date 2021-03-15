function minNotes(amount) {
    let a = 0;
    let b = 0;
    if (amount >= 2000) {
        a = parseInt(amount / 2000);
        amount=amount-(a*2000);
    } else if (amount >= 500) {
        b = parseInt(amount / 500);
        amount=amount-(a*500);
    }
    console.log(a, b);
    // let b = a.toString().split('.');
    // console.log(b);
    // console.log("No. of 2000 notes", b[0]);
}

minNotes(2300);