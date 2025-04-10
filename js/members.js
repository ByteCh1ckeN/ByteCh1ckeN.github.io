// 成员介绍页面交互
document.addEventListener('DOMContentLoaded', function() {
    // 获取成员选择器和成员详情元素
    const memberTabs = document.querySelectorAll('.member-tab');
    const memberProfiles = document.querySelectorAll('.member-profile');
    
    // 为每个成员选项卡添加点击事件
    memberTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 获取当前选中的成员
            const member = this.getAttribute('data-member');
            
            // 移除所有选项卡的active类
            memberTabs.forEach(t => t.classList.remove('active'));
            
            // 为当前选项卡添加active类
            this.classList.add('active');
            
            // 隐藏所有成员详情
            memberProfiles.forEach(profile => profile.classList.remove('active'));
            
            // 显示当前选中的成员详情
            document.getElementById(member).classList.add('active');
        });
    });
    
    // 初始化照片墙
    initGallery();
    
    // 创建灯箱容器
    createLightbox();
});

// 初始化照片墙
function initGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    
    // 照片数据
    const photos = [
        'aespa-group-1.jpg',
        'aespa-group-2.jpg',
        'aespa-group-3.jpg',
        'aespa-group-4.jpg',
        'karina-1.jpg',
        'giselle-1.jpg',
        'winter-1.jpg',
        'ningning-1.jpg'
    ];
    
    // 创建照片元素
    if (galleryContainer) {
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = `image/gallery/${photo}`;
            img.alt = photo.split('.')[0];
            
            // 添加点击事件，打开灯箱
            img.addEventListener('click', function() {
                openLightbox(this.src, this.alt);
            });
            
            galleryContainer.appendChild(img);
        });
    }
}

// 创建灯箱容器
function createLightbox() {
    // 检查是否已存在灯箱
    if (document.querySelector('.lightbox')) return;
    
    // 创建灯箱元素
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-img">
            <div class="lightbox-caption"></div>
        </div>
    `;
    
    // 添加到body
    document.body.appendChild(lightbox);
    
    // 关闭灯箱的点击事件
    const closeLightbox = document.querySelector('.close-lightbox');
    closeLightbox.addEventListener('click', function() {
        document.querySelector('.lightbox').classList.remove('active');
    });
    
    // 点击灯箱背景也关闭
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
}

// 打开灯箱
function openLightbox(src, alt) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    // 设置图片和标题
    lightboxImg.src = src;
    lightboxCaption.textContent = alt;
    
    // 显示灯箱
    lightbox.classList.add('active');
}
