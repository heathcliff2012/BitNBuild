        const jsonData = {
            "projectConfig": {
                "projectName": "AuraFlow: Financial Clarity Platform",
                "version": "4.0.0-genesis",
                "branding": {
                    "logoLightUrl": "https://placehold.co/200x60/ffffff/0f172a?text=AuraFlow",
                    "logoDarkUrl": "https://placehold.co/200x60/0b1120/f8fafc?text=AuraFlow",
                    "faviconUrl": "https://placehold.co/32x32/22c55e/ffffff?text=A",
                    "tagline": "Transparency in Every Transaction."
                },
                "themes": {
                    "auraFlow": { "background": "radial-gradient(circle at 20% 30%,#2563eb,#22c55e)", "foreground": "rgba(0,0,0,0.2)", "textPrimary": "#f8fafc", "textSecondary": "#d1fae5", "accent": "#06b6d4", "highlight": "#fcd34d" }
                },
                "animations": { "tooltip": "fade-in", "button": "pulse-on-hover", "cardEntry": "slide-up", "alertHighlight": "shake", "graphFlow": "glow-trail", "modal": "scale-in" }
            },
            "landingPage": {
                "hero": {
                    "headline": "Transparency. Trust. Together.",
                    "subheadline": "Track every rupee from budget to impact with complete clarity.",
                    "callToActions": [
                         { "text": "View Infographics", "actionId": "view_infographics" }
                    ]
                }
            },
            "viewContext": {
                "userProfile": { "name": "<%= username %>", "role": "Public Viewer" },
            }
        };

        const { projectConfig, landingPage, viewContext } = jsonData;

        const contentArea = document.getElementById('content-area');

        // --- GNEWS API INTEGRATION ---
        const fetchNews = async () => {
            // IMPORTANT: Replace with your actual GNews API key.
            const apiKey = '9f9a725cf16c160da14a55bca1879d57'; 
            const newsContainer = document.getElementById('news-section-container');
            
            if (apiKey === '9f9a725cf16c160da14a55bca1879d57E') {
                newsContainer.innerHTML = `
                    <div class="text-center bg-foreground/50 p-6 rounded-2xl">
                        <h3 class="text-xl font-bold text-highlight">News Service Not Configured</h3>
                        <p class="text-secondary mt-2">Please add a valid GNews API key in the script to see live news.</p>
                    </div>`;
                return;
            }

            const query = encodeURIComponent('"financial transparency" OR "digital ledger" OR "public funds" OR "fintech india"');
            const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=in&max=3&token=${apiKey}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`GNews API error! Status: ${response.status}`);
                }
                const data = await response.json();
                newsContainer.innerHTML = createNewsSectionHTML(data.articles);
            } catch (error) {
                console.error("Failed to fetch news:", error);
                newsContainer.innerHTML = `
                    <div class="text-center bg-foreground/50 p-6 rounded-2xl">
                         <h3 class="text-xl font-bold text-danger">Could Not Load News</h3>
                         <p class="text-secondary mt-2">There was an issue fetching the latest news. Please try again later.</p>
                    </div>`;
            }
        };

        // --- GEMINI API INTEGRATION ---
        const callGeminiAPI = async (prompt, systemInstruction, loaderElement, responseElement) => {
            const smallLoaderClass = 'w-5 h-5 border-2';
            loaderElement.innerHTML = `<div class="loader ${smallLoaderClass}"></div>`;
            loaderElement.style.display = 'flex';
            responseElement.style.display = 'none';

            const apiKey = ""; // Left empty for environment injection
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            const apiPayload = {
                contents: [{ parts: [{ text: prompt }] }],
                systemInstruction: { parts: [{ text: systemInstruction }] }
            };

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(apiPayload)
                });
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();
                const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) {
                    responseElement.innerHTML = text.replace(/\n/g, '<br>');
                } else {
                    throw new Error("Invalid API response.");
                }
            } catch (error) {
                console.error("Gemini API call failed:", error);
                responseElement.innerHTML = `<p class="text-danger">Sorry, the AI assistant is currently unavailable.</p>`;
            } finally {
                loaderElement.style.display = 'none';
                responseElement.style.display = 'block';
            }
        };

        // --- THEME MANAGER ---
        const setupTheme = () => {
            // Logo element has been removed.
        };
        
        // --- HEADER & GLOBAL UI ---
        const setupHeader = () => {
            document.title = projectConfig.projectName;
            document.querySelector('link[rel="icon"]').href = projectConfig.branding.faviconUrl;
            // Project name and tagline elements have been removed.
        };

        // --- CHARTING ---
        // Charting and dashboard rendering functions have been removed.

        // --- VIEW RENDERING ---
        const renderLandingPage = () => {
            clearDashboard();
            const { hero } = landingPage;
            contentArea.innerHTML = `
                <div class="text-center py-16 sm:py-24 animate-slide-up">
                    <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-primary">${hero.headline}</h1>
                    <p class="mt-4 max-w-2xl mx-auto text-lg text-secondary">${hero.subheadline}</p>
                    <div class="mt-8 flex justify-center items-center flex-wrap gap-4">
                        <a href="#" id="infographics-btn" class="btn-secondary-animated inline-flex items-center gap-2 bg-foreground/50 text-primary font-semibold py-3 px-8 rounded-lg">
                            <i data-lucide="pie-chart" class="w-5 h-5"></i>
                            <span>View Infographics</span>
                        </a>
                        <a href="/public-ledger" class="btn-secondary-animated inline-flex items-center gap-2 bg-foreground/50 text-primary font-semibold py-3 px-8 rounded-lg">
                            <i data-lucide="book-open-check" class="w-5 h-5"></i>
                            <span>Public Ledger</span>
                        </a>
                        <a href="/community-feedback" class="btn-secondary-animated inline-flex items-center gap-2 bg-foreground/50 text-primary font-semibold py-3 px-8 rounded-lg">
                            <i data-lucide="messages-square" class="w-5 h-5"></i>
                            <span>Community Feedback</span>
                        </a>
                    </div>
                </div>
                <div id="news-section-container" class="mt-16 animate-slide-up" style="animation-delay: 200ms;">
                    <h2 class="text-3xl font-bold text-center text-primary mb-8">Latest News on Financial Transparency</h2>
                    <div class="flex justify-center items-center h-40">
                        <div class="loader"></div>
                    </div>
                </div>
            `;
            // Event listener for infographics button removed as the dashboard is no longer integrated.
            fetchNews(); // Fetch news after rendering the landing page structure
            lucide.createIcons();
        };
        
        const createNewsSectionHTML = (articles) => {
            if (!articles || articles.length === 0) return `
                <div class="text-center bg-foreground/50 p-6 rounded-2xl">
                    <h3 class="text-xl font-bold text-primary">No Relevant News Found</h3>
                    <p class="text-secondary mt-2">We couldn't find any recent news matching our criteria.</p>
                </div>`;

            return `
                <h2 class="text-3xl font-bold text-center text-primary mb-8">Latest News</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${articles.map((item, index) => `
                        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="block bg-foreground/50 backdrop-blur-sm rounded-2xl flex flex-col overflow-hidden card-glow" style="animation-delay: ${index * 100}ms;">
                            <img src="${item.image}" alt="${item.title}" class="w-full h-40 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1e293b/f8fafc?text=News';">
                            <div class="p-6 flex flex-col flex-grow">
                                <h3 class="text-lg font-bold text-primary">${item.title}</h3>
                                <div class="flex items-center text-xs text-secondary mt-2 mb-4">
                                    <span>${item.source.name}</span>
                                    <span class="mx-2">•</span>
                                    <span>${new Date(item.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                                <p class="text-sm text-secondary flex-grow">${item.description}</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            `;
        };

        const clearDashboard = () => {
            contentArea.innerHTML = '';
        };

        // --- BACKGROUND CONSTELLATION ANIMATION ---
        const setupConstellation = () => {
            const canvas = document.getElementById('background-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let particles = [];
            const particleCount = window.innerWidth > 768 ? 100 : 40;
            const maxDistance = 120;
            let mouse = { x: null, y: null, radius: 150 };

            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initParticles(); // Re-initialize particles on resize to fit new screen
            };
            window.addEventListener('resize', resizeCanvas);

            window.addEventListener('mousemove', (event) => {
                mouse.x = event.x;
                mouse.y = event.y;
            });

            window.addEventListener('mouseout', () => {
                mouse.x = null;
                mouse.y = null;
            });
            
            class Particle {
                constructor(x, y, directionX, directionY, size, color) {
                    this.x = x;
                    this.y = y;
                    this.directionX = directionX;
                    this.directionY = directionY;
                    this.size = size;
                    this.color = color;
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
                update() {
                    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
                    
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + this.size) {
                        if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 2;
                        if (mouse.x > this.x && this.x > this.size * 10) this.x -= 2;
                        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 2;
                        if (mouse.y > this.y && this.y > this.size * 10) this.y -= 2;
                    }

                    this.x += this.directionX;
                    this.y += this.directionY;
                    this.draw();
                }
            }
            
            const initParticles = () => {
                particles = [];
                for (let i = 0; i < particleCount; i++) {
                    let size = Math.random() * 2 + 1;
                    let x = Math.random() * (canvas.width - size * 2) + size;
                    let y = Math.random() * (canvas.height - size * 2) + size;
                    let directionX = (Math.random() * 0.4) - 0.2;
                    let directionY = (Math.random() * 0.4) - 0.2;
                    let color = 'rgba(6, 182, 212, 0.7)';
                    particles.push(new Particle(x, y, directionX, directionY, size, color));
                }
            };
            
            const connectParticles = () => {
                for (let a = 0; a < particles.length; a++) {
                    for (let b = a; b < particles.length; b++) {
                        let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                                       ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                        if (distance < (maxDistance * maxDistance)) {
                            let opacity = 1 - (distance / (maxDistance * maxDistance));
                            ctx.strokeStyle = `rgba(209, 250, 229, ${opacity * 0.5})`;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particles[a].x, particles[a].y);
                            ctx.lineTo(particles[b].x, particles[b].y);
                            ctx.stroke();
                        }
                    }
                }
            };

            const animate = () => {
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(p => p.update());
                connectParticles();
            };
            
            resizeCanvas(); // Initial setup
            animate();
        };
        
        // --- APP INITIALIZATION ---
        const init = () => {
            setupHeader();
            setupTheme();
            setupConstellation();
            renderLandingPage();
            lucide.createIcons();
        };

        document.addEventListener('DOMContentLoaded', init);