// 唱片音乐播放控制
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有唱片元素
    const soloItems = document.querySelectorAll('.solo div');
    
    // 为每个唱片添加鼠标事件
    soloItems.forEach(item => {
        const img = item.querySelector('img');
        const audio = item.querySelector('audio');
        
        if (audio) {
            // 监听音频播放结束事件
            audio.addEventListener('ended', function() {
                // 音频播放结束后重置到开始位置
                this.currentTime = 0;
            });
            
            // 鼠标悬停时播放音乐
            img.addEventListener('mouseenter', function() {
                // 确保音频已重置到开始位置
                if (audio.paused) {
                    audio.currentTime = 0;
                    audio.volume = 0.5; // 设置音量
                    audio.play().catch(e => console.log("播放失败:", e));
                }
            });
            
            // 鼠标离开时暂停音乐
            img.addEventListener('mouseleave', function() {
                // 淡出效果
                let volume = audio.volume;
                const fadeOut = setInterval(function() {
                    if (volume > 0.1) {
                        volume -= 0.1;
                        audio.volume = volume;
                    } else {
                        clearInterval(fadeOut);
                        audio.pause();
                        audio.currentTime = 0; // 重置播放位置
                        audio.volume = 0.7; // 恢复音量
                    }
                }, 100);
            });
        }
    });
});