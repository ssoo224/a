// تحديد عناصر الصفحة
const animeList = document.getElementById("animeList");
const titleInput = document.getElementById("titleInput");
const videoUrlInput = document.getElementById("videoUrlInput");
const thumbnailUrlInput = document.getElementById("thumbnailUrlInput");
const addButton = document.getElementById("addButton");

// دالة لإضافة مقطع جديد
function addAnimeClip() {
    const title = titleInput.value;
    const videoUrl = videoUrlInput.value;
    const thumbnailUrl = thumbnailUrlInput.value;

    // التحقق من وجود القيم
    if (title && videoUrl && thumbnailUrl) {
        const animeItem = document.createElement("div");
        animeItem.className = "anime-item";

        animeItem.innerHTML = `
            <a href="${videoUrl}" target="_blank">
                <img src="${thumbnailUrl}" alt="${title}">
                <h3>${title}</h3>
            </a>
        `;

        // إضافة العنصر الجديد إلى القائمة
        animeList.appendChild(animeItem);

        // مسح الحقول بعد الإضافة
        titleInput.value = "";
        videoUrlInput.value = "";
        thumbnailUrlInput.value = "";
    } else {
        alert("يرجى ملء جميع الحقول!");
    }
}

// إضافة حدث عند الضغط على الزر
addButton.addEventListener("click", addAnimeClip);
