function ang_for_loop() {
    var ang_number = prompt("magbigay ng no.", 1);
    ang_number = parseInt(ang_number);

    if (isNaN(ang_number)){
        document.write("Dapat number lang!");
        return;
    }
    for (var i=0; i<ang_number; i++) {
       setTimeout(function() {
         var da_circle = document.createElement("div");
         da_circle.classList.add("circle");
         document.body.appendChild(da_circle);
        }, 500 * i);
    }
}