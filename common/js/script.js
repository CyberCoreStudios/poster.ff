document.addEventListener('DOMContentLoaded', () => {
    const eventsData = {
        "Home Page": [
            {
                type: "social",
                name: "Facebook",
                icon: "common/image/facebook.png",
                url: "https://facebook.com/yourpage"
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
                url: "https://tiktok.com/@yourprofile"
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
            { "type": "event", "image": "https://dl.dir.freefiremobile.com/common/Local/VN/Splash_Upload/250803_OB47VN_FW3_Scattering_Crows.png", "description": "FW3_Scattering_Crows", "startDate": "03/08/2025" },
            { "type": "event", "image": "https://dl.dir.freefiremobile.com/common/Local/VN/Splash_Upload/250802_OB47VN_MS_Minato.png", "description": "MS_Minato", "startDate": "02/08/2025" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
        ],
        "EU": [
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
            { "type": "event", "image": "", "description": "", "startDate": "" },
        ],
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

        if (region === "Home Page") {
            const homeWrapper = document.createElement('div');
            homeWrapper.className = 'home-content-wrapper';

            const socialTitle = document.createElement('div');
            socialTitle.className = 'social-title';
            socialTitle.textContent = 'Connect With Us On Social Media';
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

            const copyright = document.createElement('div');
            copyright.className = 'copyright';
            copyright.textContent = '© 2025 Poster Free Fire. All Rights Reserved Blaze Hunter.';
            homeWrapper.appendChild(copyright);

            contentDiv.appendChild(homeWrapper);
            return;
        }

        const regionTitle = document.createElement('h2');
        regionTitle.textContent = document.querySelector(`.nav-button[data-region="${region}"]`).textContent;
        contentDiv.appendChild(regionTitle);
        
        if (regionData && regionData.length > 0) {
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
        } else {
            contentDiv.innerHTML += '<p style="text-align:center;"></p>';
        }
    }

    closeImageButton.onclick = () => { imageModal.style.display = 'none'; }
    closeTextButton.onclick = () => { textModal.style.display = 'none'; }

    window.onclick = (event) => {
        if (event.target == imageModal) {
            imageModal.style.display = 'none';
        }
        if (event.target == textModal) {
            textModal.style.display = 'none';
        }
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadContent(button.dataset.region);
        });
    });

    const defaultButton = document.querySelector('.nav-button[data-region="Home Page"]');
    if (defaultButton) {
        defaultButton.classList.add('active');
        loadContent('Home Page');
    }

});

