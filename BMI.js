document.getElementById("mySubmit").onclick = function(){
  let weight = document.getElementById("myText1").value;
  let height = document.getElementById("myText2").value;

  // Check if input values are not empty
  if (weight.trim() === "" || height.trim() === "") {
      alert("Please enter both weight and height values.");
      return;
  }

  // Convert input values to numbers
  let weightNum = Number(weight);
  let heightNum = Number(height);

  // Check if input values are valid numbers
  if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      alert("Please enter valid numerical values for weight and height.");
      return;
  }

  let heightN = heightNum * heightNum;

  let bmi = weightNum / heightN;
  let limitedBmi = bmi.toFixed(2);
  document.getElementById("myH3").textContent = `Your BMI is ${limitedBmi} kg/m²`;


  // Check BMI range and provide dietary advice
  if (limitedBmi < 18.5) {
      document.getElementById("myH4").innerHTML = `Weight Status: Underweight.<br><br><br>DIETARY ADVICE: <br> - Increase your calorie intake <br> - Add butter or margarine to your food <br> - Healthy sources of protein foods such as seafood, lean meats, eggs, legumes (beans and peas), soy products, nuts, and seeds. <br> - Choose whole milk instead of skimmed or semi-skimmed milk`;
  } else if (limitedBmi >= 18.5 && limitedBmi <= 24.9) {
    document.getElementById("myH4").innerHTML = `Weight Status: Healthy weight.<br><br><br>DIETARY ADVICE: <br> - Emphasizes fruits, vegetables, whole grains, and fat-free or low-fat milk and milk products <br> - Healthy sources of protein such as seafood, lean meats, eggs, legumes (beans and peas), soy products, nuts, and seeds. <br> - Stays within your daily calorie needs`;
  } else if (limitedBmi >= 25 && limitedBmi <= 29.9) {
    document.getElementById("myH4").innerHTML = `Weight Status: Overweight.<br><br><br>DIETARY ADVICE: <br> - Choose minimally processed, whole foods <br> - Whole grains (Whole wheat, steel cut oats, brown rice) <br> - Vegetables (a colorful variety - not potatoes) <br> - Whole fruits <br> - Healthy sources of protein foods such as seafood, lean meats, eggs, legumes (beans and peas), soy products, nuts, and seeds.`;
  } else {
    document.getElementById("myH4").innerHTML = `Weight Status: Obese.<br><br><br>DIETARY ADVICE: <br> - Choose minimally processed, whole foods <br> - Whole grains (Whole wheat, steel cut oats, brown rice) <br> - Vegetables (a colorful variety - not potatoes) <br> - Whole fruits <br> - Healthy sources of protein foods such as seafood, lean meats, eggs, legumes (beans and peas), soy products, nuts, and seeds.`;
  }
      

  // Calculate and display minimum and maximum weight
  let minWeight = heightN * 18.5;
  let maxWeight = heightN * 24.9;
  let limitedMinWeight = minWeight.toFixed(2);
  let limitedMaxWeight = maxWeight.toFixed(2);

  document.getElementById("myH5").textContent = `The minimum weight you should have: ${limitedMinWeight}kg`;
  document.getElementById("myH6").textContent = `The maximum weight you should have: ${limitedMaxWeight}kg`;

  document.getElementById("myH7").innerHTML = `Keep your BMI between 18.5 and 24.9 <br>Have a nice day !`;
}
