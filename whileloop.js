function ang_while_loop() {
    var ang_number = prompt("magbigay ng no.", 1);
    ang_number = parseInt(ang_number);

    if (isNaN(ang_number)){
        document.write("Dapat number lang!");
        return;
    }
        var i=0
        while(i<ang_number) {
       setTimeout(function() {
         var da_triangle = document.createElement("div", i);
         da_triangle.classList.add("triangle");
         document.body.appendChild(da_triangle);
        }, 500 * i);
        i++;
    }
}