const workContent = [
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design1.jpg',
    },
    {
        category: 'workLandingPage',
        img: 'img/works/landing page/landing-page1.jpg',
    },
    {
        category: 'workLandingPage',
        img: 'img/works/landing page/landing-page2.jpg'
    },
    {
        category: 'workLandingPage',
        img: 'img/works/landing page/landing-page3.jpg'
    },
    {
        category: 'workWebDesign',
        img: 'img/works/web design/web-design2.jpg',
    },
    {
        category: 'workWebDesign',
        img: 'img/works/web design/web-design3.jpg',
    },
    {
        category: 'workWebDesign',
        img: 'img/works/web design/web-design4.jpg',
    },
    {
        category: 'workWordpress',
        img: 'img/works/wordpress/wordpress4.jpg',
    },
    {
        category: 'workWordpress',
        img: 'img/works/wordpress/wordpress5.jpg',
    },
    {
        category: 'workWordpress',
        img: 'img/works/wordpress/wordpress6.jpg',
    },
    {
        category: 'workWordpress',
        img: 'img/works/wordpress/wordpress7.jpg',
    },
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design2.jpg',
    },
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design3.jpg',
    },
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design4.jpg',
    },
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design5.jpg',
    },
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design6.jpg',
    },
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design7.jpg',
    },
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design8.jpg',
    },
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design9.jpg',
    },
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design10.jpg',
    },
    {
        category: 'workGraphicDesign',
        img: 'img/works/graphic design/graphic-design11.jpg',
    },
    {
        category: 'workLandingPage',
        img: 'img/works/landing page/landing-page4.jpg',
    },
    {
        category: 'workLandingPage',
        img: 'img/works/landing page/landing-page5.jpg',
    },
    {
        category: 'workLandingPage',
        img: 'img/works/landing page/landing-page6.jpg',
    },
    {
        category: 'workLandingPage',
        img: 'img/works/landing page/landing-page7.jpg',
    },
    {
        category: 'workWebDesign',
        img: 'img/works/web design/web-design1.jpg',
    },
    {
        category: 'workWebDesign',
        img: 'img/works/web design/web-design5.jpg',
    },
    {
        category: 'workWebDesign',
        img: 'img/works/web design/web-design6.jpg',
    },
    {
        category: 'workWebDesign',
        img: 'img/works/web design/web-design7.jpg',
    },
    {
        category: 'workWordpress',
        img: 'img/works/wordpress/wordpress1.jpg',
    },
    {
        category: 'workWordpress',
        img: 'img/works/wordpress/wordpress2.jpg',
    },
    {
        category: 'workWordpress',
        img: 'img/works/wordpress/wordpress3.jpg',
    },
    {
        category: 'workWordpress',
        img: 'img/works/wordpress/wordpress8.jpg',
    },
    {
        category: 'workWordpress',
        img: 'img/works/wordpress/wordpress9.jpg',
    },
    {
        category: 'workWordpress',
        img: 'img/works/wordpress/wordpress10.jpg',
    },


];

function changeServiceTab() {
    const serviceContent = [
        {
            id: 'webDesign',
            img: 'img/services/web_design.png',
            content: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                '                    tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident,\n' +
                '                    sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\n' +
                '                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                '                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n' +
                '                    est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip\n' +
                '                    isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint\n' +
                '                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 'graphicDesign',
            img: 'img/services/graphic_design.jpg',
            content: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                '                    tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident,\n' +
                '                    sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\n' +
                '                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                '                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n' +
                '                    est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip\n' +
                '                    isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint\n' +
                '                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 'onlineSupport',
            img: 'img/services/online_support.jpg',
            content: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                '                    tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident,\n' +
                '                    sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\n' +
                '                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                '                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n' +
                '                    est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip\n' +
                '                    isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint\n' +
                '                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 'appDesign',
            img: 'img/services/app_design.jpg',
            content: '4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                '                    tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident,\n' +
                '                    sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\n' +
                '                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                '                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n' +
                '                    est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip\n' +
                '                    isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint\n' +
                '                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 'onlineMarketing',
            img: 'img/services/online_marketing.jpg',
            content: '5Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                '                    tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident,\n' +
                '                    sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\n' +
                '                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                '                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n' +
                '                    est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip\n' +
                '                    isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint\n' +
                '                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 'seoService',
            img: 'img/services/seo_service.jpg',
            content: '6Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                '                    tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident,\n' +
                '                    sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\n' +
                '                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                '                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n' +
                '                    est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip\n' +
                '                    isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint\n' +
                '                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ];
    const serviceTabContainer = $('#tabContainer');
    $(serviceTabContainer).click((event) => {
        let isActive = event.target.classList.contains('service-active');
        const tabName = event.target.id;
        if (!isActive) {
            $(`#tabContainer > .service-tab-item`).removeClass('service-active');
            $(event.target).addClass('service-active');
            $("#tabImgItem").attr('src', serviceContent.find(item => item.id === tabName).img);
            $('#tabContentItem')[0].textContent = serviceContent.find(item => item.id === tabName).content;
        }
    });
}

function addImg(arr, offset, number, parent, block) {
    let imgItem = $('');
    let imgItems = $(document.createDocumentFragment());
    let loopEnd = arr.length - (offset + number) > 0 ? offset + number : arr.length;
    for (offset; offset < loopEnd; offset++) {
        if (block === 'Work') {
            imgItem = $(`<div class="work-img-item-block">
            <img src="" alt="work-example" class="work-img-item" id="itemImg${offset}">
            <div class="work-img-item-hover" id="itemHover${offset}">
            <div class="icon-wrapper">
            <div class="first-icon-item icon-item"></div>
            <div class="second-icon-item icon-item">
            <img src="img/works/work_hover/Layer 23@1X.png" alt="">
            </div>
            </div>
            <h3 class="work-hover-title">creative design</h3>
            <p class="work-hover-subtitle">Web Design</p>
            </div>
            </div>`)
        } else {
            imgItem = $(`<div class="gallery-wrapper-item">
                            <img src= ${arr[offset]} alt="gallery-image" >
                            <div class="cover-item-gallery" id="coverItem${offset}">
                                <a href="" class="cover-item-gallery-link">
                                    <i class="cover-item-search cover-item-gallery-item fa fa-search fa-2x"></i>
                                    <i class="cover-item-expand fas fa-expand-arrows-alt fa-2x"></i>
                                </a>
                            </div>
                        </div>`);
        }
        imgItems = imgItems.append(imgItem);
    }
    let endContainer = imgItems[0].children;
    for (let item of endContainer) {
        $(item.children[0]).attr('src', arr[($(item).index() + parent.children.length)].img);
    }
    parent.append(imgItems[0]);
}

function changeWorkTab() {
    let categoryArray = workContent;
    const workTabContainer = $('#workTabContainer');
    $(workTabContainer).click((event) => {
        let currentCategory = event.target.id;
        categoryArray = currentCategory === 'all' ? workContent : workContent.filter((item, index) => {
            return workContent[index].category === currentCategory;
        });
        let isActive = event.target.classList.contains('work-active');
        if (!isActive) {
            $(`.work-tab-item`).removeClass('work-active');
            $(event.target).addClass('work-active');
            $('.work-img-item-block').remove();
            addImg(categoryArray, 0, 12, workImgContainer, 'Work');
        }
        workHover();
        if ($('.work-img-container')[0].children.length === categoryArray.length) {
            $(workLoadMoreBtn).hide()

        } else {
            $(workLoadMoreBtn).show()
        }
    });

    let workLoadMoreBtn = $('#workLoadMoreBtn');
    $(workLoadMoreBtn).click(() => {
        addImg(categoryArray, $('.work-img-container')[0].children.length, 12, workImgContainer, 'Work');
        if ($('.work-img-container')[0].children.length === categoryArray.length) {
            $(workLoadMoreBtn).hide()
        }
        workHover();
    });
}

function slowScroll(className) {
    $(className).on("click", function (event) {
        event.preventDefault();

        let scrollTo = $(this).attr('href'),
            top = $(scrollTo).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
}

function slickCarousel() {
    $(document).ready(function () {
        $('.review-item-container').slick({
            arrows: true,
            // asNavFor: '.review-author-photo-wrapper' // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию)
            nextArrow: $('.angle-right')[0],
        });
    });

    $('.review-author-photo-wrapper').slick({ // настройка навигации
        slidesToShow: 4, // указываем что нужно показывать 3 навигационных изображения
        asNavFor: '.review-item-container', // указываем что это навигация для блока выше
        focusOnSelect: true // указываем что бы слайделось по клику
    });


    $('.review-item-container').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // console.log(nextSlide);
        $(`.review-author-photo-item`).removeClass('review-author-photo-item-active');
        let nextItem = $('.review-author-photo-item')[nextSlide];
        $(nextItem).addClass('review-author-photo-item-active');
    });
}

function workHover() {
    const imgItemBlock = $('.work-img-item-block');
    $(imgItemBlock).hover(
        function () {
            let id = $(event.currentTarget).index();
            $(`.work-img-item-block > #itemImg${id}`).css('opacity', '0');
            $(`.work-img-item-block > #itemHover${id}`).css('opacity', '1');


        }, function () {
            let id = $(event.currentTarget).index();
            $(`.work-img-item-block > #itemImg${id}`).css('opacity', '1');
            $(`.work-img-item-block > #itemHover${id}`).css('opacity', '0');

        });
}

function masonryInit() {
    let galleryContainer = $('.gallery-wrapper');
    galleryContainer.masonry({
        columnWidth: 50,
        itemSelector: '.gallery-wrapper-item',
        gutter: 15,
        isAnimated: true,

    });
    $(galleryContainer).imagesLoaded().progress( function() {
        galleryContainer.masonry('reloadItems');
        galleryContainer.masonry('layout');
    });




}

function galleryHover() {
    $('.gallery-wrapper-item').hover(
        function () {
            $(this).find('.cover-item-gallery').fadeIn();
        },
        function () {
            $(this).find('.cover-item-gallery').fadeOut();
        }
    );
}

function addGalleryImages() {
    const imageArray = [
        'img/gallery/Gallery0.jpg',
        'img/gallery/Gallery1.png',
        'img/gallery/Gallery2.png',
        'img/gallery/Gallery3.png',
        'img/gallery/Gallery4.png',
        'img/gallery/Gallery5.png',
        'img/gallery/Gallery6.png',
        'img/gallery/Gallery7.png',
        'img/gallery/Gallery8.png',
        'img/gallery/Gallery9.png',
        'img/gallery/Gallery10.png',
        'img/gallery/Gallery11.png',
        'img/gallery/Gallery12.png',
        'img/gallery/Gallery13.png',
        'img/gallery/Gallery14.png',
        'img/gallery/Gallery15.png',
        'img/gallery/Gallery16.png',
        'img/gallery/Gallery17.png',
        'img/gallery/Gallery18.jpg',
        'img/gallery/Gallery19.jpg',
        'img/gallery/Gallery20.jpg',
        'img/gallery/Gallery21.jpg',
        'img/gallery/Gallery22.jpg',
        'img/gallery/Gallery23.jpg',
        'img/gallery/Gallery24.jpg',
        'img/gallery/Gallery25.jpg',
        'img/gallery/Gallery26.jpg',
        'img/gallery/Gallery27.jpg',
        'img/gallery/Gallery28.jpg',
        'img/gallery/Gallery29.jpg',
        'img/gallery/Gallery30.jpg',
        'img/gallery/Gallery31.jpg',
        'img/gallery/Gallery32.jpg',
        'img/gallery/Gallery33.jpg',
        'img/gallery/Gallery34.jpg',
        'img/gallery/Gallery35.jpg',
        'img/gallery/Gallery36.jpg',

    ];
    // let galleryImgContainer = $('.gallery-wrapper')[0];
    const limitGalleryImg = imageArray.length;
    let galleryLoadMoreBtn = $('#galleryLoadMoreBtn');
    $(galleryLoadMoreBtn).click(() => {
        let galleryImgContainer = $('.gallery-wrapper')[0];
        addImg(imageArray, galleryImgContainer.children.length, 12, galleryImgContainer, 'Gallery');
        $(galleryImgContainer).imagesLoaded().progress( function() {
            $(galleryImgContainer).masonry('reloadItems');
            $(galleryImgContainer).masonry('layout');
        });

        if (galleryImgContainer.children.length === limitGalleryImg) {
            $(galleryLoadMoreBtn).hide()
        }
        galleryHover();
    });

}


slickCarousel();
changeServiceTab();
changeWorkTab();
let workImgContainer = $('.work-img-container')[0];
addImg(workContent, 0, 12, workImgContainer, 'Work');
slowScroll('.nav-item');
workHover();
masonryInit();
addGalleryImages();
galleryHover();

