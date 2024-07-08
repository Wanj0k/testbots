
var energy = localStorage.getItem('energy_saved') || 300;
var maxEnergy = localStorage.getItem('maxEnergy_saved') || 300;
var i = localStorage.getItem('i_saved') || 1;
var up = localStorage.getItem('up_saved') || 1;;
let a = localStorage.getItem('a_saved') || 0;
var elb = localStorage.getItem('elb_saved') || 1;
var ba = localStorage.getItem('ba_saved') || energy/ 3;
var enp = false;
var up2 = localStorage.getItem('up2_saved') || 100;;
jQuery('#points').html( Number (a));

jQuery('#boost').hide()
jQuery('#back1').hide()
$('#pic').html(`+${i}`);


function progress(times){
    var pbe = document.getElementById('progB')
    var intID = setInterval(function(){
        if (energy+3 > maxEnergy){
            clearInterval(intID);
            pbe.value = 100;
            enp = false;       
        }            
        else{     
            enp = true;   
            ba = energy/3;
            pbe.value = ba;
            

        
        } 
            energy++}, times)
}

function updates(){
    setInterval(function(){
    $("#enpo").html(energy)
    if (energy <maxEnergy && enp == false){
        progress(1000)
    }
    $("#cen1").html(`цена: ${up}`);
    $("#cen2").html(`цена: ${up2}`);
    jQuery('#points').html( Number (a));







    }, 300)


}
    
jQuery('.poi').on('click', function(){
    if(energy>0){
        a = Number(a);
        i = Number(i);
        a +=i;
        
        energy= Number(energy);
        
        energy -=i;
        localStorage.setItem('energy_saved', Number (energy));
        localStorage.setItem('a_saved', Number (a));
     
    
        jQuery('#points').html( Number (a));}

    })
jQuery('#openBoost').mousedown('click', function(){
    jQuery("#main").hide()
    jQuery('#boost').show()
    jQuery('#back1').show()
    jQuery('#openBoost').hide()
    $('html').css({
        'background-color':'black'
      });
})
jQuery('#back1').mousedown('click', function(){
    jQuery("#boost").hide()
    jQuery('#main').show()
    jQuery('#back1').hide()
    jQuery('#openBoost').show()
    $('html').css({
        'background-color':'#1c1f24'
      });

})
    


updates();
progress(1000);


jQuery('h2').html( Number (a));


$("#up1").mousedown(function() {
    if (a >= up){
        a -= up;
        localStorage.setItem('a_saved', Number (a));

        up *=2
        localStorage.setItem('up_saved', Number (up));
        i+=1;
        localStorage.setItem('i_saved', Number (i));
        $('#pic').html(`+ ${i}`);
        jQuery('h2').html( Number (a));

    }})
$("#up2").mousedown(function() {
        if (a >= up2){
            a-= up2;
            localStorage.setItem('a_saved', Number (a));
    
            up2 *=2
            localStorage.setItem('up2_saved', Number (up2));
            maxEnergy +=50;
            localStorage.setItem('maxEnergy_saved', Number (maxEnergy));
            jQuery('h2').html( Number (a));
    
        }


    

});


localStorage.clear();
