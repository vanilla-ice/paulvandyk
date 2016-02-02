$(document).ready ->
  

  inlineSVG.init()
 
  
  $('.burger-menu').click ->
    $(this).toggleClass('open')
    if $('#menu').hasClass('unhidden') is true
      $('#menu').removeClass('unhidden')     
      $('body').css('overflow','initial')
    else
      $('#menu').addClass('unhidden')
      $('body').css('overflow','hidden')
  


  $('.header').find('li').click ->
    $('li').removeClass('current')
    $(this).addClass('current')

  $('#menu').find('li').click ->
    $('li').removeClass('current')
    $(this).addClass('current')

  $('.list').find('li').click ->
    $('li').removeClass('active')
    $(this).addClass('active')

  

  $('.slider').slick(
    infinite: false
    focusOnSelect: true
    arrows: false
    dots: true
    variableWidth: true
    )
 

  

  $('.slider').find('.slick-dots').detach().prependTo('.slider-inner')
  


  $('.slick-dots').find('li').click ->
    $('li').removeClass('slick-active')
    $(this).addClass('slick-active')
  


  wavesurfer = WaveSurfer.create
    container: '#wave'
    waveColor: 'blue'
    progressColor: '#0b63ed'
    backend: 'MediaElement'
  

    
  
  $('.play').click ->
    if($('.play').hasClass('onPlay') == false)
      $('.play').addClass('onPlay')
      $('.play').find('.start').removeClass('active')
      $('.play').find('.pause').addClass('active')
      wavesurfer.play()
    else
      $('.play').removeClass('onPlay')
      $('.play').find('.pause').removeClass('active')
      $('.play').find('.start').addClass('active')
      wavesurfer.pause()



    wavesurfer.on 'audioprocess', 
      setInterval((->
        progress = wavesurfer.getCurrentTime()
        progressMin = Math.floor(progress/60)
        progressSec = (Math.floor(progress)) - (progressMin*60)      
        if (progressMin < 10)
          $('.time').find('.min').html('0' + progressMin)
        else
          $('.time').find('.min').html(progressMin)
        if (progressSec < 10)
          $('.time').find('.sec').html('0' + progressSec)
        else
          $('.time').find('.sec').html(progressSec)
        return
      ), 950)

      

      
    
  wavesurfer.load('https://psv4.vk.me/c422830/u141498593/audios/726cbda51535.mp3?extra=Ajwe-TqW54w6-e1NW1lBPoiBGUcYwa1B9jgNLpe3SO61MzwCNAkYT3OmN8Svio35ed8YUWDzESj0EHEeIaOVbMmq4o5sa9oJ4VwIgb_Tx2UBfCP8,81')
  
