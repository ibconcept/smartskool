// document.addEventListener('DOMContentLoaded', async function () {
//     const images = document.querySelectorAll('img');

//     function loadImage(image) {
//         return new Promise((resolve) => {
//             if (image.complete) {
//                 resolve();
//             } else {
//                 image.addEventListener('load', resolve);
//             }
//         });
//     }

//     async function loadImages(images) {
//         for (const image of images) {
//             await loadImage(image);
//         }

//         images.forEach(image => {
//             image.style.display = 'block';
//             image.style.opacity = '0';
//             setTimeout(() => {
//                 image.style.transition = 'opacity 0.5s ease-in-out';
//                 image.style.opacity = '1';
//             }, 100);
//         });
//     }

//     await loadImages(images);
// });
