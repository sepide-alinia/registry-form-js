let Name =''
let Lang ='' 
let daate = ''
let creditCard = ''
let Pass = ''
let confPass = ''
let e = ''

$(document).ready(function (){

$('#lang').on('click',function(){
    Lang = $('#lang').val() ;

if(Lang=='japanese'){
        $('#langImg').attr('src','img/nihongo.jpg')
}else if(Lang=='korean'){
    $('#langImg').attr('src','img/korean.jpg')
}else if(Lang=='chinese'){
    $('#langImg').attr('src','img/chinese.jpg')}
})


$('#name').on('blur',function(){
     let cmnt1 = $('.comment')[1]
    Name = $('#name').val() ;

    if(Name==''||Name==null){
    $(cmnt1).text('please fill the blank')
}else{
    $('#name').attr('class','valid')
}
})


$('#date').change(function(){
    daate = $('#date').val()
    
})

$('#credit-card').blur(function(){
    let cmnt3 = $('.comment')[3];
     creditCard = $('#credit-card').val();
    let creditCardle = $('#credit-card').val().length;

    if(creditCard==''||creditCard==null){
        $(cmnt3).text('please fill the blank');
        $('#credit-card').removeAttr('class','valid');

        }else if(creditCardle>16 || creditCardle<16){
            $(cmnt3).text('please enter valid credit card number');
            $('#credit-card').removeAttr('class','valid');

        }else if(creditCard!=''||creditCard!=null &&creditCardle==16){
            $('#credit-card').attr('class','valid');
            $(cmnt3).text('');

        }
    })


    $('#pass').blur(function(){

        let cmnt4 = $('.comment')[4];
         Pass = $('#pass').val() ;

        if(Pass==''||Pass==null){
            $(cmnt4).text('please fill the blank');
            $('#pass').removeAttr('class','valid');
        }else{
            $('#pass').attr('class','valid');
            $(cmnt4).text('');
        }
    })

    $('#conf-pass').blur(function(){

        let Pass = $('#pass').val() ;
        let cmnt5 = $('.comment')[5];
         confPass = $('#conf-pass').val() ;
        
        if(confPass==''||confPass==null){
            $(cmnt5).text('please reconfirm your password');
            $('#conf-pass').removeAttr('class','valid');

        }else if(confPass===Pass && Pass!='' && confPass!=''){
            
            $('#conf-pass').attr('class','valid');
            $(cmnt5).text('');

            }else{
                $(cmnt5).text('passwords do not match');
                $('#conf-pass').removeAttr('class','valid');
            }
           
    })


$('#confirmed').change(function(){
    let cnfrm = $('#confirmed').val()
    if(cnfrm=='on'){
    $('#btn').removeAttr('disabled')
}else if(cnfrm=='off'){
    $('#btn').attrttr('disabled','on')
}
})
Gval = (e) => {

}

$('#btn').click(function(){
let UserData=[Name,Lang,daate,creditCard,Pass,confPass,e];
console.log(UserData)
let myJSON = JSON.stringify(UserData)    
 localStorage.setItem('myData', myJSON)})
 
 })
        




