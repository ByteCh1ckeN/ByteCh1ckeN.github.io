// 社交动态页面交互
document.addEventListener('DOMContentLoaded', function() {
    // 模拟的社交媒体数据
    const socialData = [
        {
            id: 1,
            member: 'karina',
            username: 'aespa_karina',
            profileImg: 'image/karina-profile.jpg',
            postImg: 'image/social/karina-post-1.jpg',
            caption: '今天的舞台很开心，谢谢MY们的支持！💜 #aespa #KARINA',
            date: '2023-11-15',
            likes: 1250000
        },
        {
            id: 2,
            member: 'giselle',
            username: 'aespa_giselle',
            profileImg: 'image/giselle-profile.jpg',
            postImg: 'image/social/giselle-post-1.jpg',
            caption: '新发型怎么样？💛 #aespa #GISELLE',
            date: '2023-11-14',
            likes: 980000
        },
        {
            id: 3,
            member: 'winter',
            username: 'aespa_winter',
            profileImg: 'image/winter-profile.jpg',
            postImg: 'image/social/winter-post-1.jpg',
            caption: '蓝色是我的代表色 💙 #aespa #WINTER',
            date: '2023-11-13',
            likes: 1100000
        },
        {
            id: 4,
            member: 'ningning',
            username: 'aespa_ningning',
            profileImg: 'image/ningning-profile.jpg',
            postImg: 'image/social/ningning-post-1.jpg',
            caption: '今天的练习很充实 🧡 #aespa #NINGNING',
            date: '2023-11-12',
            likes: 950000
        },
        {
            id: 5,
            member: 'official',
            username: 'aespa_official',
            profileImg: 'image/aespa-logo.png',
            postImg: 'image/social/aespa-group-post-1.jpg',
            caption: '新专辑即将发布，敬请期待！#aespa #comeback',
            date: '2023-11-10',
            likes: 2000000
        },
        {
            id: 6,
            member: 'karina',
            username: 'aespa_karina',
            profileImg: 'image/karina-profile.jpg',
            postImg: 'image/social/karina-post-2.jpg',
            caption: '练习室日常 💜 #aespa #KARINA',
            date: '2023-11-08',
            likes: 1150000
        },
        {
            id: 7,
            member: 'giselle',
            username: 'aespa_giselle',
            profileImg: 'image/giselle-profile.jpg',
            postImg: 'image/social/giselle-post-2.jpg',
            caption: '今天的自拍 💛 #aespa #GISELLE',
            date: '2023-11-07',
            likes: 920000
        },
        {
            id: 8,
            member: 'winter',
            username: 'aespa_winter',
            profileImg: 'image/winter-profile.jpg',
            postImg: 'image/social/winter-post-2.jpg',
            caption: '舞台花絮 💙 #aespa #WINTER',
            date: '2023-11-06',
            likes: 1050000
        },
        {
            id: 9,
            member: 'ningning',
            username: 'aespa_ningning',
            profileImg: 'image/ningning-profile.jpg',
            postImg: 'image/social/ningning-post-2.jpg',
            caption: '录音室日常 🧡 #aespa #NINGNING',
            date: '2023-11-05',
            likes: 900000
        },
        {
            id: 10,
            member: 'official',
            username: 'aespa_official',
            profileImg: 'image/aespa-logo.png',
            postImg: 'image/social/aespa-group-post-2.jpg',
            caption: '感谢MY们的支持，我们会继续努力！#aespa #MY',
            date: '2023-11-03',
            likes: 1800000
        }
    ];
    
    // 当前显示的数据数量
    let currentCount = 6;
    
    // 当前筛选条件
    let currentFilter = 'all';
    
    // 初始化社交媒体内容
    loadSocialContent();
    
    // 筛选按钮点击事件
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 给当前按钮添加active类
            this.classList.add('active');
            
            // 更新筛选条件
            currentFilter = this.getAttribute('data-filter');
            
            // 重置显示数量
            currentCount = 6;
            
            // 重新加载内容
            loadSocialContent();
        });
    });
    
    // 加载更多按钮点击事件
    const loadMoreButton = document.getElementById('load-more');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            // 增加显示数量
            currentCount += 6;
            
            // 重新加载内容
            loadSocialContent();
            
            // 如果已经显示全部内容，隐藏加载更多按钮
            if (currentCount >= getFilteredData().length) {
                this.style.display = 'none';
            }
        });
    }
    
    // 根据筛选条件获取数据
    function getFilteredData() {
        if (currentFilter === 'all') {
            return socialData;
        } else {
            return socialData.filter(item => item.member === currentFilter);
        }
    }
    
    // 加载社交媒体内容
    function loadSocialContent() {
        const socialGrid = document.querySelector('.social-grid');
        if (!socialGrid) return;
        
        // 获取筛选后的数据
        const filteredData = getFilteredData();
        
        // 清空现有内容
        socialGrid.innerHTML = '';
        
        // 显示指定数量的内容
        const displayData = filteredData.slice(0, currentCount);
        
        // 如果没有内容
        if (displayData.length === 0) {
            socialGrid.innerHTML = '<div class="no-content">暂无相关内容</div>';
            return;
        }
        
        // 创建社交媒体项
        displayData.forEach(item => {
            const socialItem = document.createElement('div');
            socialItem.className = 'social-item';
            socialItem.setAttribute('data-member', item.member);
            
            socialItem.innerHTML = `
                <img src="${item.postImg}" alt="${item.username}的帖子">
                <div class="social-info">
                    <div class="username">
                        <img src="${item.profileImg}" alt="${item.username}">
                        <span>${item.username}</span>
                    </div>
                    <div class="caption">${item.caption}</div>
                    <div class="date">${formatDate(item.date)}</div>
                    <div class="likes">❤️ ${formatNumber(item.likes)}</div>
                </div>
            `;
            
            socialGrid.appendChild(socialItem);
        });
        
        // 更新加载更多按钮状态
        const loadMoreButton = document.getElementById('load-more');
        if (loadMoreButton) {
            if (currentCount >= filteredData.length) {
                loadMoreButton.style.display = 'none';
            } else {
                loadMoreButton.style.display = 'inline-block';
            }
        }
    }
    
    // 格式化日期
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    
    // 格式化数字（例如：1,200,000 -> 120万）
    function formatNumber(number) {
        if (number >= 10000) {
            return (number / 10000).toFixed(1) + '万';
        }
        return number.toString();
    }
    
    // 在现有的DOMContentLoaded事件处理函数中添加以下代码
    document.addEventListener('DOMContentLoaded', function() {
        // 现有代码...
        
        // 滑动效果增强
        const slider = document.querySelector('.slider');
        if (slider) {
            // 克隆第一张图片并添加到末尾，实现无缝循环
            const firstSlide = slider.querySelector('.slide:first-child').cloneNode(true);
            slider.appendChild(firstSlide);
            
            // 当动画结束时，重置位置
            slider.addEventListener('animationiteration', function() {
                // 可以添加一些过渡效果
            });
        }
        
        // 其他现有代码...
    });
});