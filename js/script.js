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

function addImg(arr, offset, number) {
    let workImgContainer = $('.work-img-container')[0];
    let workImgItems = $(document.createDocumentFragment());
    let loopEnd = arr.length - (offset + number) > 0 ? offset + number : arr.length;
    for (offset; offset < loopEnd; offset++) {
        workImgItems = workImgItems.append($('<img src="" alt="work-example" class="work-img-item">'));
    }
    let workContainer = workImgItems[0].children;
    for (let item of workContainer) {
        $(item).attr('src', arr[($(item).index() + workImgContainer.children.length)].img);
    }
    workImgContainer.append(workImgItems[0]);
}

function changeWorkTab() {
    let categoryArray = workContent;
    const workTabContainer = $('#workTabContainer');
    $(workTabContainer).click((event) => {
        let currentCategory = event.target.id;
        categoryArray = currentCategory === 'all' ? workContent : workContent.filter((item, index)=>{
            return workContent[index].category === currentCategory;
        });
        let isActive = event.target.classList.contains('work-active');
        if (!isActive) {
            $(`#workTabContainer > .work-tab-item`).removeClass('work-active');
            $(event.target).addClass('work-active');
            $('.work-img-item').remove();
            addImg(categoryArray, 0, 12);
        }
        if ($('.work-img-container')[0].children.length === categoryArray.length) {
            $(loadMoreBtn).hide()

        }else {
            $(loadMoreBtn).show()
        }
    });

    let loadMoreBtn = $('#loadMoreBtn');
    $(loadMoreBtn).click(() => {
        addImg(categoryArray, $('.work-img-container')[0].children.length, 12);
        if ($('.work-img-container')[0].children.length === categoryArray.length) {
            $(loadMoreBtn).hide()
        }
    });
}


function changeReview(target) {
    target.click((event) => {
        // let isActive = event.target.classList.contains('slick-current');
        if (event.target.classList.contains('review-author-photo-item')) {
            $(`.review-author-photo-item`).removeClass('review-author-photo-item-active');
            $(event.target).addClass('review-author-photo-item-active');
        }
    });
}


// const workHover = $('<div class="work-img-item-hover">\n' +
//     '                    <div class="icon-wrapper">\n' +
//     '                        <div class="first-icon-item icon-item">\n' +
//     '\n' +
//     '                        </div>\n' +
//     '                        <div class="second-icon-item icon-item">\n' +
//     '                            <img src="img/works/work_hover/Layer 23@1X.png" alt="">\n' +
//     '                        </div>\n' +
//     '                    </div>\n' +
//     '                    <h3 class="work-hover-title">creative design</h3>\n' +
//     '                    <p class="work-hover-subtitle">Web Design</p>\n' +
//     '                </div>');

$(document).ready(function(){
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

changeServiceTab();
changeWorkTab();
const reviewAuthorContainer = $('#reviewAuthorContainer');
changeReview(reviewAuthorContainer);
addImg(workContent, 0, 12);

$('.review-item-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // console.log(nextSlide);
        $(`.review-author-photo-item`).removeClass('review-author-photo-item-active');
        let nextItem = $('.review-author-photo-item')[nextSlide];
        $(nextItem).addClass('review-author-photo-item-active');
});