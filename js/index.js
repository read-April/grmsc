window.addEventListener('load', function () {
    let choices = this.document.querySelectorAll('.head button');
    let cards = this.document.querySelectorAll('.card>div');
    let list = this.document.querySelector('.list');
    let audio = this.document.querySelector('.wrap_bottom  audio');
    // console.log(choices, cards);
    // let flag = false;
    // 循环绑定点击事件
    for (let i = 0; i < choices.length; i++) {
        choices[i].onclick = function () {
            audio.pause();
            // if (i == 0) {
            //     flag = false;
            // } else {
            //     flag = true;
            // }
            for (let j = 0; j < choices.length; j++) {
                choices[j].className = '';
                cards[j].className = '';
            }
            choices[i].className = 'active';
            cards[i].className = 'show';
        }
    }



    // 1. 提取数据放到数组中
    let audio_arr = [
        { imgSrc: 'peter.jpeg', name: 'peter pan was right' },
        { imgSrc: '小孩.jpg', name: '小孩' },
        { imgSrc: '小尖尖.jpg', name: '小尖尖' },
        { imgSrc: '小尖尖.jpg', name: '耗尽' },
        { imgSrc: '背过手.jpg', name: '背过手' },
        { imgSrc: '肆无忌惮.jpg', name: '肆无忌惮' },
        { imgSrc: '小尖尖.jpg', name: '耗尽' },
        { imgSrc: '背过手.jpg', name: '背过手' },
        { imgSrc: '肆无忌惮.jpg', name: '肆无忌惮' },
    ]

    // 循环数组 创建标签
    for (let i = 0; i < audio_arr.length; i++) {
        let LI = this.document.createElement('li');
        LI.innerHTML = `<img title="${audio_arr[i].name}" src="./img/${audio_arr[i].imgSrc}" alt="">
                        <span ></span >
                        <p>${audio_arr[i].name}</p>`;
        // console.log(LI);
        list.appendChild(LI);
    }



    let wrap_bottom_img = this.document.querySelector('.wrap_bottom img');
    // console.log(wrap_bottom_img);

    // console.log(audio);
    // 申明音频数组  替换音频的src
    let myAudio = [
        './audio/Peter Pan Was Right - Anson Seabra.mp3',
        './audio/小孩 - 薛之谦.mp3',
        './audio/小尖尖 - 韩红、薛之谦.mp3',
        './audio/耗尽 - 薛之谦、郭聪明.mp3',
        './audio/背过手 - 薛之谦.mp3',
        './audio/肆无忌惮 - 薛之谦.mp3',
    ],

        // console.log(myAudio);
        // 申明图片数组  替换图片的src
        imgAll = ['./img/peter.jpeg',
            './img/小孩.jpg',
            './img/小尖尖.jpg',
            './img/小尖尖.jpg',
            './img/背过手.jpg',
            './img/肆无忌惮.jpg'];
    // console.log(imgAll);


    // console.log(audio.src);
    let img_list = this.document.querySelectorAll('.list li');
    // console.log(list);
    // console.log(img_list);
    // addEventListener需要将事件绑定在标签上 而不是在节点上
    for (let j = 0; j < imgAll.length; j++) {
        img_list[j].addEventListener('click', function () {
            wrap_bottom_img.src = imgAll[j];
            wrap_bottom_img.className = 'xuanzhuan';
            audio.src = myAudio[j];
            audio.play();
            // 循环播放
            setInterval(function () {
                if (audio.ended) {
                    let num = ++j;
                    if (num >= myAudio.length) {
                        num = 0;
                    }
                    wrap_bottom_img.src = imgAll[num];
                    audio.src = myAudio[num];
                    audio.play();
                }
            }, 1000)
            // if (flag) {
            //     audio.pause();
            // }
        })
        // if (choices[i]) {

        // }
    }

    // 判断音频是否为播放状态  如果暂停 则停止图片的旋转
    // if (audio.paused) {
    //     wrap_bottom_img.classList.remove = 'xuanzhuan';
    // } else {
    //     wrap_bottom_img.classList.remove = 'xuanzhuan';
    //     // wrap_bottom_img.className('xuanzhuan');
    // }

    console.dir(audio);


















    // 视频部分
    let video_ul = this.document.querySelector('.video_wrap_left ul');
    let video_list = video_ul.getElementsByTagName('li')
    // console.log(video_ul);
    // console.log(video_list);

    // 使用数据渲染渲染视图
    // 提取数据到数组中
    let video_wrap_arr = [
        { titletext: '奥特曼踏山河', imgSrc: '奥特大英雄.png', release_date: '发布日期', author: '作者' },
        { titletext: '海绵宝宝', imgSrc: '海绵宝宝.png', release_date: '发布日期', author: '作者' },
        { titletext: ' 阿福丝滑小连招', imgSrc: '成龙历险记.png', release_date: '发布日期', author: '作者' },
        { titletext: '落落历险记', imgSrc: '落落历险记.png', release_date: '发布日期', author: '作者' },
        { titletext: '我不是死猪 我是GGbond', imgSrc: 'GGbond.png', release_date: '发布日期', author: '作者' },

    ]

    // 循环数组 创建标签
    for (let i = 0; i < video_wrap_arr.length; i++) {
        let LI = this.document.createElement('li');
        LI.innerHTML = ` <img title="${video_wrap_arr[i].titletext}" src="./video/${video_wrap_arr[i].imgSrc}" alt="">
                                <p>
                                    <strong>${video_wrap_arr[i].titletext}</strong>
                                    <i>${video_wrap_arr[i].release_date}</i>
                                    <em>${video_wrap_arr[i].author}</em>
                                </p>`
        video_ul.appendChild(LI);
    }


    // 获取视频播放盒子
    let video = this.document.querySelector('.video_wrap_right video');
    // console.log(video);

    // 获取视频素材
    let videoAll = [
        './video/奥特曼踏山河.mp4',
        './video/海绵宝宝.mp4',
        './video/成龙历险记.mp4',
        './video/落落历险记.mp4',
        './video/GGbond.mp4',
    ]

    // 循环绑定图片点击事件
    console.log(video_list);
    for (let i = 0; i < video_list.length; i++) {
        video_list[i].addEventListener('click', function () {
            video.src = videoAll[i];
            video.play();
            console.log(videoAll[i]);
        })

    }

    // console.log(video_list[1]);





























})