
jQuery(document).ready(function() {
 
    $( "#vuelta" ).datepicker(); // Desplegar el calendario al hacer click sobre el input
    $( "#ida" ).datepicker();

    $( "#mySliderDiv" ).slider({  // Un slider horizontal, se puede usar para formularios 
        orientation: "horizontal",
         min: 0,
        max: 80,
        value: 50
    });

    $( "#menu" ).menu();
    $( "#dir").draggable() ;     // Arrastrar cualquier div
    $( "#fox" ).resizable();   // Maximizar y minimizar el div arrastrando

    $( "#selectable" ).selectable();  //Selecccionar un solo item en una lista
    $( "#accordion" ).accordion();   // clikc y desplegar texto
    $( "#tabs" ).tabs(); // Tabla con distintos textos

});
