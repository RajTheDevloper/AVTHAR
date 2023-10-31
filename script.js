function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower();


$(document).ready(function(){
    $('button').click(function(){
        const name = $('#nameId').val();
        // alert(name);
        $('#imgID').attr('src',`https://joesch.moe/api/v1/${name}`);
    });
});