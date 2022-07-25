let ccn = new Cleave('#cc-number', {
    creditCard: true,
});

var ccExp = new Cleave('#cc-exp', {
    date: true,
    datePattern: ['m', 'y']
});
