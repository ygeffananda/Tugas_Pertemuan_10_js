function showAlert() {
    alert("Take action!");
}
  
  function send() {
        
    try {
      document.getElementById("form").addEventListener("submit", (x) => {
        x.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        var show = document.getElementById("show_response")

        show.innerHTML = `
          <div class="container pb-5" id="show">
            <h1 style="color:#06BEE1;">Thanks for your response. Your data recorded as :</h1>
            <div class="d-flex">
              <h5 class="">Hello, my name is : </h5>
              <h5 class="fw-bold" id="show_name"> </h5>
            </div>
            <div class="d-flex">
              <h5 class="">Please contact me through : </h5>
              <h5 class=" fw-bold" id="show_email"> </h5>
            </div>
            <div class="d-flex">
              <h5 class="">I want to say about :</h5>
              <h5 class="d-inline-block fw-bold" id="show_message"> </h5>
            </div>
          </div>`;


        document.getElementById("show_name").innerText = name;
        document.getElementById("show_email").innerText = email;
        document.getElementById("show_message").innerText = message;

      });
    } catch (err) {
      alert(err.message);
    }
  } 