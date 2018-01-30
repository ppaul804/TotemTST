function testAnim(x) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
};
$('#myModal').on('show.bs.modal', function (e) {
      testAnim("zoomIn");
})
$('#myModal').on('hide.bs.modal', function (e) {
      testAnim("zoomOut");
})
