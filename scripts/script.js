// Haetaan päivämäärä, ja APIn kautta tulee päivän numero ja sama roomalaisin numeroin
fetch('https://api.math.tools/numbers/nod')
    .then(response => response.json())
    .then(data => {
        let date = new Date();
        document.getElementById('api-here').innerHTML = date.toLocaleDateString('en-US') + "<br>" + 
        data.contents.nod.numbers.number + "<br>" +
        data.contents.nod.numbers.numerals.roman.value;
    });