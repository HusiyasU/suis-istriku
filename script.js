const mainContainer = document.querySelector(".main-container"),
        imagePreviews = document.querySelectorAll(".image-preview"),
        images = mainContainer.querySelectorAll(".image-preview img"),
        video = mainContainer.querySelectorAll("video");

window.onload = () => {
    mainContainer.onmouseenter = () => {
        imagePreviews.forEach((imagePreview) => {
            imagePreview.querySelector("img").style.opacity = 0.5;
        });
    };

    mainContainer.onmouseleave = () => {
        imagePreviews.forEach((imagePreview) => {
            imagePreview.querySelector("img").style.opacity = 1;
        });
    };

    let tl = gsap.timeline();

    imagePreviews.forEach((imagePreview, index) => {
        tl.to(imagePreview, {
            duration: 1,
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            stagger: 0.1
        });
    });

    imagePreviews.forEach((image, index) => {
        image.onmouseenter = () => {
            video[index].play();
        }
        image.onmouseleave =() => {
            video[index].pause();
        }
    })
};
