document.getElementById('calculateButton').onclick = function() {
    calculateArea();
  };

  function calculateArea() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
      alert('Please enter valid numbers for base and height.');
      return;
    }

    var area = 0.5 * base * height;
    document.getElementById('result').innerHTML = 'Area: ' + area.toFixed(2);
  }