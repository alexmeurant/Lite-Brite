function main() {
    // selects the color:   
    $('.select-color').on('click', function () {
        // gets the element's class:
        let selectedColor = $(this).attr('class');
        // checks the selected color block and gives color to boxes:
        if (selectedColor === "select-color cyan not-selected"){
            $('.box').css('color', '#1ebacc');
        } else if (selectedColor === "select-color yellow not-selected"){
            $('.box').css('color', '#ffea4e');
        } else if (selectedColor === "select-color magenta not-selected"){
            $('.box').css('color', '#ff2f9e');
        }
    }
}

$(document).ready(main);