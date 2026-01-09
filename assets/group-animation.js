document.addEventListener('DOMContentLoaded', function() {
  // 创建 Intersection Observer
  const observerOptions = {
    threshold: 0.3, // 当元素 10% 可见时触发
    rootMargin: '0px 0px 0px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // 添加动画类
        element.classList.add('animate');
        
        // 停止观察已触发动画的元素
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // 获取所有需要动画的元素
  const animatedElements = document.querySelectorAll('[data-group-animation]');
  
  // 开始观察每个元素
  animatedElements.forEach(function(element) {
    observer.observe(element);
  });
});