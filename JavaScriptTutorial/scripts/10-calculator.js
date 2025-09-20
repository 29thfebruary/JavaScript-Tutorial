let calculation = localStorage.getItem('calculation') || '';

      displayCalculation();

      //if (!calculation) {
      //  calculation = '';
      //}

      function updateCalculation(value) {
        calculation += value;
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        document.querySelector('.js-calculation')
          .innerHTML = calculation;
      }