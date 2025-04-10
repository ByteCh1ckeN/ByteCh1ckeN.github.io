// aespa网站的主要JavaScript功能

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取logo元素
    const logo = document.querySelector('h1');
    
    // 为logo添加点击事件，点击后跳转到首页
    if (logo) {
        logo.addEventListener('click', function() {
            // 跳转到首页
            window.location.href = 'index.html';
        });
        
        // 添加鼠标样式，提示可点击
        logo.style.cursor = 'pointer';
    }
    
    // 创建回到顶部按钮
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    // 监听滚动事件，控制按钮显示/隐藏
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // 为回到顶部按钮添加点击事件
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
