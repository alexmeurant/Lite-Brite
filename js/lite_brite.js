function main() {
    
    // holds the color in a variable:
    let colorClass = '';
    
    // selects the color:   
    $('.select-color').on('click', function () {

        // gets the element's class:
        let selectedColor = $(this).attr('class');

        // checks the selected color block and gives color to boxes:
        if (selectedColor === "select-color cyan not-selected") {
            colorClass = "cyan";
            $('.box').css('color', '#1ebacc');
        } else if (selectedColor === "select-color yellow not-selected") {
            colorClass = "yellow";
            $('.box').css('color', '#ffea4e');
        } else if (selectedColor === "select-color magenta not-selected") {
            colorClass = "magenta";
            $('.box').css('color', '#ff2f9e');
        }

        // Displays selected color:
        $(this).removeClass("not-selected");
        $(this).siblings().addClass('not-selected');

        // selects boxes and changes their color:   
        $('.box').on('click', function () {
            $(this).toggleClass(colorClass);
        });

        // blinks selected boxes:
        $('.toggle-blink').on('click', function () {
            // checks if boxes are colored:
            if (colorClass) {
                // blink block is lighted up:
                $(this).toggleClass('opacity');
            }
            // blinks selected boxes:
            setInterval(function () {
                $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
            }, 350);
        });
    });


}

$(document).ready(main);
