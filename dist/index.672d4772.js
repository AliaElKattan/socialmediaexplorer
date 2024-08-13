// $('.text_select').change(function(){
//     $('#aggregator_name').html($(this).val());
// });
// $(function(){            
//     $('select#speedA').selectmenu({
//         style:'popup'
//     });
//     $('select#speedAa').selectmenu({
//         style:'popup', 
//         maxHeight: 150,
//         wrapperElement: "<div class='wrap' />"
//     });
//     $('select#speedB').selectmenu({
//         style:'popup', 
//         width: 300,
//         format: addressFormatting
//     });
//     $('select#speedC').selectmenu();
//     $('select#speedD').selectmenu({
//         menuWidth: 400,
//         format: addressFormatting
//     });
//     $('select#filesC').selectmenu({
//         style:'popup', 
//         positionOptions: {
//             my: "left center",
//             at: "right center",
//             offset: "10 0"
//         }
//     });    
// });        
// //a custom format option callback
// var addressFormatting = function(text){
//     var newText = text;
//     //array of find replaces
//     var findreps = [
//         {find:/^([^\-]+) \- /g, rep: '<span class="ui-selectmenu-item-header">$1</span>'},
//         {find:/([^\|><]+) \| /g, rep: '<span class="ui-selectmenu-item-content">$1</span>'},
//         {find:/([^\|><\(\)]+) (\()/g, rep: '<span class="ui-selectmenu-item-content">$1</span>$2'},
//         {find:/([^\|><\(\)]+)$/g, rep: '<span class="ui-selectmenu-item-content">$1</span>'},
//         {find:/(\([^\|><]+\))$/g, rep: '<span class="ui-selectmenu-item-footer">$1</span>'}
//     ];
//     for(var i in findreps){
//         newText = newText.replace(findreps[i].find, findreps[i].rep);
//     }
//     return newText;
// }        

//# sourceMappingURL=index.672d4772.js.map
