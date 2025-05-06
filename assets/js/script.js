document.addEventListener("DOMContentLoaded", function () {
  // Set the date we're counting down to (3 days from now)
  const countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 3);

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML =
      hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML =
      seconds < 10 ? "0" + seconds : seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "0";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);

  // Prevent form submission (for demo purposes)
  document
    .querySelector(".subscription-form form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Cảm ơn bạn đã đăng ký nhận thông tin khuyến mãi!");
    });

  // Testimonials interaction
  document
    .querySelectorAll(".testimonial-avatar-container")
    .forEach((container) => {
      container.addEventListener("click", () => {
        const content = container.parentElement.querySelector(
          ".testimonial-content"
        );
        content.classList.toggle("show");
      });
    });

  document.querySelectorAll(".comment-icon").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering the container's click event
      const content = icon
        .closest(".testimonial-item")
        .querySelector(".testimonial-content");
      content.classList.toggle("show");
    });
  });

  // Animation cho menu items khi scroll
  // Function kiểm tra phần tử có trong viewport không
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  // Function xử lý animation khi scroll
  function handleMenuAnimation() {
    const menuSection = document.querySelector(".menu-section");
    const menuItems = document.querySelectorAll(".menu-item");

    if (isElementInViewport(menuSection)) {
      // Thêm time delay cho từng item để tạo hiệu ứng lần lượt
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("appear");
        }, index * 150); // Delay mỗi item 150ms
      });

      // Xóa event listener sau khi animation đã chạy
      window.removeEventListener("scroll", handleMenuAnimation);
    }
  }

  // Kiểm tra ngay khi trang load
  handleMenuAnimation();

  // Thêm event listener cho scroll
  window.addEventListener("scroll", handleMenuAnimation);
});

// Thêm ripple effect khi hover vào button
document
  .querySelector(".contact-button")
  .addEventListener("mousemove", function (e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--x", x + "px");
    button.style.setProperty("--y", y + "px");
  });
