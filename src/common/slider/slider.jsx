export const slide2 = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        },
        breakpoint: 991,
        settings: {
            slidesToShow: 2
        }
    }]
}

export const slider8 = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1670,
        settings: {
            slidesToShow: 7
        }
    },
    {
        breakpoint: 1441,
        settings: {
            slidesToShow: 6
        }
    },
    {
        breakpoint: 1367,
        settings: {
            slidesToShow: 5
        }
    },
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 420,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
    ]
}
