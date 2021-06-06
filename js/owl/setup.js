$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function carregar(){
    window.open("https://www.livrosgratis.com.br/ler-livro-online-28943/elementos-de-geometria");
}

function play(){
    window.location.href = "https://estadodaarte.estadao.com.br/podcast-os-elementos-de-euclides-2/"
}