document.addEventListener('DOMContentLoaded', function() {
    const window_input_bad = document.getElementById("searchBox");
  
    if (window_input_bad) {
      window_input_bad.addEventListener('input', function() {
        const window_input = window_input_bad.value;
        console.log(window_input);
      });
    }
  });