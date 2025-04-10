// 视频模态窗口控制
document.addEventListener('DOMContentLoaded', function() {
    // 获取模态窗口元素
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('trailer-video');
    const watchButton = document.getElementById('watch-trailer');
    const mvButton = document.getElementById('play-mv');
    const closeButton = document.querySelector('.close-modal');
    
    // 点击观看预告按钮打开模态窗口
    if(watchButton) {
        watchButton.addEventListener('click', function(e) {
            e.preventDefault();
            // 设置预告片视频源
            video.querySelector('source').src = 'video/aespa-trailer.mp4';
            video.load(); // 重新加载视频
            // 设置较低的初始音量
            video.volume = 0.2;
            modal.style.display = 'block';
            // 自动播放视频
            video.play().catch(e => console.log("视频播放失败:", e));
        });
    }
    
    // 点击播放MV按钮打开模态窗口
    if(mvButton) {
        mvButton.addEventListener('click', function(e) {
            e.preventDefault();
            // 设置MV视频源
            video.querySelector('source').src = 'video/aespa-whiplash.mp4';
            video.load(); // 重新加载视频
            // 设置较低的初始音量
            video.volume = 0.2;
            modal.style.display = 'block';
            // 自动播放视频
            video.play().catch(e => console.log("视频播放失败:", e));
        });
    }
    
    // 点击关闭按钮关闭模态窗口
    if(closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
            // 暂停视频
            video.pause();
            video.currentTime = 0;
        });
    }
    
    // 点击模态窗口外部区域关闭模态窗口
    window.addEventListener('click', function(e) {
        if(e.target === modal) {
            modal.style.display = 'none';
            // 暂停视频
            video.pause();
            video.currentTime = 0;
        }
    });
});