document.addEventListener('DOMContentLoaded', () => {
    const eventsData = {
        "Home Page": [
             {
                type: "social",
                name: "Facebook",
                icon: "common/image/facebook.png",
                url: "https://www.facebook.com/blazehuntervn/"
            },
            {
                type: "social",
                name: "YouTube",
                icon: "common/image/youtube.png",
                url: "https://www.youtube.com/@blazehuntervn"
            },
            {
                type: "social",
                name: "TikTok",
                icon: "common/image/tiktok.png",
                url: "https://www.tiktok.com/@blazehuntervn26"
            }
        ],
        "ID": [
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
        ],
        "IN": [
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
        ],
        "PK": [
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
        ],
        "BR": [
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
        ],
        "SG": [
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
        ],
        "BD": [
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
        ],
        "TW": [
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
        ],
        "TH": [
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "MS_Minato", "": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
        ],
        "VN": [
            { type: "event", image: "https://dl.aw.freefiremobile.com/common/Local/VN/Splash_Upload/250815_OB47VN_TW3_Madara.png", description: "TW3_Madara", startDate: "15/08/2025" },
            { type: "event", image: "https://dl.dir.freefiremobile.com/common/Local/VN/Splash_Upload/250809_OB47VN_FW1_Skydive_Itachi.png", description: "FW1_Skydive_Itachi", startDate: "09/08/2025" },
            { type: "event", image: "https://dl.dir.freefiremobile.com/common/Local/VN/Splash_Upload/250808_OB47VN_TW1_Pain_Tendo.png", description: "TW1_Pain_Tendo", startDate: "08/08/2025" },
            { type: "event", image: "https://dl.dir.freefiremobile.com/common/Local/VN/Splash_Upload/250806_OB47VN_TW2_MP40_Uchiha.png", description: "TW2_MP40_Uchiha", startDate: "06/08/2025" },
        ]
    };

    const navButtons = document.querySelectorAll('.nav-button');
    const contentDiv = document.getElementById('content');
    const imageModal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const closeImageButton = document.getElementsByClassName('close-image')[0];
    const textModal = document.getElementById('textModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const closeTextButton = document.getElementsByClassName('close-text')[0];

    const loadContent = (region) => {
        contentDiv.innerHTML = '';
        const regionData = eventsData[region];
        const newPath = region === 'Home Page' ? '/' : `/${region.toLowerCase()}`;
        history.pushState({ region: region }, region, newPath);

        if (region === "Home Page") {
            const homeWrapper = document.createElement('div');
            homeWrapper.className = 'home-content-wrapper';
            const socialTitle = document.createElement('div');
            socialTitle.className = 'social-title';
            socialTitle.textContent = 'Connect With Us';
            homeWrapper.appendChild(socialTitle);
            const socialIcons = document.createElement('div');
            socialIcons.className = 'social-icons';
            regionData.forEach(item => {
                const a = document.createElement('a');
                a.href = item.url;
                a.target = '_blank';
                a.title = item.name;
                const img = document.createElement('img');
                img.src = item.icon;
                img.alt = item.name;
                a.appendChild(img);
                socialIcons.appendChild(a);
            });
            homeWrapper.appendChild(socialIcons);
            contentDiv.appendChild(homeWrapper);
        } else {
            const regionTitle = document.createElement('h2');
            regionTitle.textContent = document.querySelector(`.nav-button[data-region="${region}"]`).textContent;
            contentDiv.appendChild(regionTitle);
            regionData.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('event-item');
                contentDiv.appendChild(itemDiv);
                
                if (item.image) {
                    itemDiv.innerHTML = '<p class="loading-text">Loading...</p>';
                    const img = new Image();
                    img.onload = () => {
                        itemDiv.innerHTML = '';
                        itemDiv.appendChild(img);
                        img.addEventListener('click', () => {
                            imageModal.style.display = 'block';
                            modalImg.src = item.image;
                        });
                    };
                    img.onerror = () => {
                        itemDiv.innerHTML = '';
                        const titleElement = document.createElement('p');
                        titleElement.classList.add('event-title-card');
                        titleElement.textContent = item.description || 'Poster Will Be Updated Later';
                        itemDiv.appendChild(titleElement);
                    };
                    img.src = item.image;
                } else {
                    itemDiv.classList.add('event-item-no-image');
                    const titleElement = document.createElement('p');
                    titleElement.classList.add('event-title-card');
                    titleElement.textContent = item.description || 'Updating';
                    itemDiv.appendChild(titleElement);
                    itemDiv.addEventListener('click', () => {
                        modalTitle.textContent = item.description || 'Updating';
                        modalDate.textContent = `Start Date: ${item.startDate || 'Updating...'}`;
                        textModal.style.display = 'block';
                    });
                }
            });
        }
    };

    closeImageButton.onclick = () => { imageModal.style.display = 'none'; };
    closeTextButton.onclick = () => { textModal.style.display = 'none'; };

    window.onclick = (event) => {
        if (event.target == imageModal) {
            imageModal.style.display = 'none';
        }
        if (event.target == textModal) {
            textModal.style.display = 'none';
        }
    };

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadContent(button.dataset.region);
        });
    });

    window.addEventListener('popstate', (event) => {
        let region = 'Home Page';
        const path = window.location.pathname.replace(/\//g, '').toUpperCase();
        const foundRegion = Object.keys(eventsData).find(key => key === path);
        if (foundRegion) {
            region = foundRegion;
        }
        loadContent(region);
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.region === region) {
                btn.classList.add('active');
            }
        });
    });
    
    // Logic mới để xử lý URL khi trang tải lại trên GitHub Pages
    const urlParams = new URLSearchParams(window.location.search);
    const initialPath = urlParams.get('path') || window.location.pathname;

    let initialRegion = 'Home Page';
    if (initialPath && initialPath !== '/') {
        const pathSegments = initialPath.split('/').filter(Boolean);
        if (pathSegments.length > 0) {
            const regionCode = pathSegments[0].toUpperCase();
            const foundRegion = Object.keys(eventsData).find(key => key === regionCode);
            if (foundRegion) {
                initialRegion = foundRegion;
            }
        }
    }

    const initialButton = document.querySelector(`.nav-button[data-region="${initialRegion}"]`);
    if (initialButton) {
        initialButton.classList.add('active');
        loadContent(initialRegion);
    }
});


