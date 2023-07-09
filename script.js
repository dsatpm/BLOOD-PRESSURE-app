function calculateBloodPressure() {
    var systolicInput = document.getElementById('systolic').value;
    var diastolicInput = document.getElementById('diastolic').value;

    var systolic = parseInt(systolicInput);
    var diastolic = parseInt(diastolicInput);

    if (isNaN(systolic) || isNaN(diastolic)) {
      document.getElementById('result').innerHTML = 'Please enter valid numbers.';
      return;
    }

    var average = (systolic + diastolic) / 2;

    var resultContainer = document.getElementById('result');
       resultContainer.innerHTML = 'Your blood pressure is: ' + average + '<br>';

    if (average < 120) {
        resultContainer.innerHTML = 'Your blood pressure is within a healthy range.'
    } else if (average >= 120 && average <= 129) {
        resultContainer.innerHTML = 'Your blood pressure is elevated. Consider taking measures to maintain a healthy lifestyle.';
    } else if (average >=130 && average <= 139) {
        resultContainer.innerHTML = 'Your blood pressure is in stage 1 hypertension. Consider consulting with a healthcare professional.';
    } else if (average >= 140 && average <= 180) {
        resultContainer.innerHTML = 'Your blood pressure is in stage 2 hypertension. It is highly recommended to seek medical advice and treatment.';
    } else {
        resultContainer.innerHTML = 'Your blood pressure is in the hypertension crisis range. Please seek immediate medical attention.';
    }

    if (average >= 120) {
      var recommendations = [
        {
            logo: 'images/aha_logo.jpg',
            url: 'https://www.heart.org/en/health-topics/high-blood-pressure/changes-you-can-make-to-manage-high-blood-pressure'
        },
        {
            logo: 'images/mayo.png',
            url: 'https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410'
        },
        {
            logo: 'images/nhlb.png',
            url: 'https://www.nhlbi.nih.gov/education/dash-eating-plan'
        },
        {
            logo: 'images/cdc.jpg',
            url: 'https://www.cdc.gov/bloodpressure/prevent.htm'
        }
      ];

      var recommendationsContainer = document.createElement('div');

      recommendations.forEach(function(recommendation) {
        var linkElement = document.createElement('a');
        linkElement.href = recommendation.url;
        linkElement.target = '_blank';
        linkElement.classList.add('logo-link');

        var imageElement = document.createElement('img');
        imageElement.src = recommendation.logo;
        imageElement.alt = 'Logo';

        linkElement.appendChild(imageElement);
        recommendationsContainer.appendChild(linkElement);
      });

      resultContainer.appendChild(document.createElement('br'));
      resultContainer.appendChild(document.createTextNode('Visit the following websites for tips on how to maintain a healthy lifestyle and regulate your blood pressure:'));
      resultContainer.appendChild(recommendationsContainer);

      setTimeout(function() {
        var logoElements = document.querySelectorAll('.logo-link');
        logoElements.forEach(function(element) {
          element.classList.add('fade-in');
        });
      }, 100);
    }
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      calculateBloodPressure();
    }
  });

  var form = document.getElementById('bloodPressureForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });