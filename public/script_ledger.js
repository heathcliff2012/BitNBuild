        const ledgerData = {
            "publicLedgerView": {
                "title": "Public Verifiable Ledger",
                "description": "Explore how public funds are allocated and utilized across key sectors. Every transaction is recorded on-chain for complete transparency.",
                "categories": [
                    { "id": "transport", "title": "Transport", "description": "Funds for city buses, metro subsidies, and road maintenance.", "icon": "bus", "stats": { "budget": 500000000, "utilized": 320000000, "projects": 15 }, "recentTransactions": [{ "transactionId": "TXN_METRO_01", "item": "Phase 2 Metro Line Construction", "amount": 50000000, "status": "Verified ✅" }, { "transactionId": "TXN_BUS_01", "item": "Procurement of 50 Electric Buses", "amount": 25000000, "status": "Verified ✅" }] },
                    { "id": "infrastructure", "title": "Infrastructure", "description": "Development of public parks, water supply, and sanitation projects.", "icon": "buildings", "stats": { "budget": 800000000, "utilized": 650000000, "projects": 22 }, "recentTransactions": [{ "transactionId": "TXN_INFRA_FLYOVER_01", "item": "New Flyover Project - Hebbal", "amount": 120000000, "status": "Verified ✅" }, { "transactionId": "TXN_INFRA_WATER_01", "item": "City Water Pipeline Upgrade", "amount": 75000000, "status": "Pending Approval" }] },
                    { "id": "education", "title": "Public Education", "description": "Funding for public schools, educational materials, and teacher salaries.", "icon": "book-open", "stats": { "budget": 450000000, "utilized": 400000000, "projects": 128 }, "recentTransactions": [{ "transactionId": "TXN_EDU_SCHOOL_01", "item": "Upgrade of 20 Public Schools", "amount": 90000000, "status": "Verified ✅" }] },
                    { "id": "subsidies", "title": "Subsidies", "description": "Financial support for essential goods like food grains and cooking fuel.", "icon": "sprout", "stats": { "budget": 600000000, "utilized": 250000000, "projects": 3 }, "recentTransactions": [{ "transactionId": "TXN_SUB_FARMER_01", "item": "Farmer Loan Subsidy Disbursement", "amount": 80000000, "status": "Verified ✅" }] },
                    { "id": "college_funds", "title": "College Scholarship Funds", "description": "Scholarships and research grants for students in public universities.", "icon": "graduation-cap", "stats": { "budget": 200000000, "utilized": 150000000, "projects": 5000 }, "recentTransactions": [{ "transactionId": "TXN_SCHOLAR_01", "item": "Merit Scholarship Payout - Batch 2025", "amount": 30000000, "status": "Verified ✅" }] },
                    { "id": "healthcare", "title": "Public Healthcare", "description": "Funding for public hospitals, medical supplies, and community health programs.", "icon": "heart-pulse", "stats": { "budget": 950000000, "utilized": 780000000, "projects": 45 }, "recentTransactions": [{ "transactionId": "TXN_HEALTH_HOSPITAL_01", "item": "Equipment for New City Hospital", "amount": 95000000, "status": "Verified ✅" }] }
                ]
            },
            "transactionRepository": {
                "TXN_LAB_01": { "overview": { "type": "Expenditure", "from": "Project: Lab Upgrade", "to": "Vendor: EquipPro", "amount": { "value": 200000, "currency": "INR" }, "status": "PAID & VERIFIED", "timestamp": "2025-08-10T12:00:00Z" }, "onChainData": { "blockNumber": 6501, "transactionHash": "0xabc...ghi789", "chaincodeFunction": "ApprovePayment", "approverIdentity": "HOD_Science@uvce.edu" }, "documentVerification": { "documentName": "Invoice_EP456.pdf", "ipfsCid": "QmXYZ...123", "retrievalStatus": "SUCCESS", "integrityCheck": "PASSED" }, "anomalyAnalysis": { "isAnomaly": false, "reason": null, "recommendation": null }, "communityForum": { "threads": [{ "queryId": "q2", "user": "StudentRep_04", "query": "Is there a warranty included?", "response": "Yes, a 3-year comprehensive warranty is included as per the attached IPFS document." }] } },
                "TXN_METRO_01": { "overview": { "type": "Public Expenditure", "from": "Transport Budget", "to": "Bengaluru Metro Rail Corp", "amount": { "value": 50000000, "currency": "INR" }, "status": "PAID & VERIFIED", "timestamp": "2025-09-10T10:00:00Z" }, "onChainData": { "blockNumber": 7105, "transactionHash": "0xdef...456jkl", "chaincodeFunction": "DisburseFunds", "approverIdentity": "TransportDeptHead@gov.in" }, "documentVerification": { "documentName": "BMRCL_Invoice_P2_01.pdf", "ipfsCid": "QmDEF...456", "retrievalStatus": "SUCCESS", "integrityCheck": "PASSED" }, "anomalyAnalysis": { "isAnomaly": false, "reason": null, "recommendation": null }, "communityForum": { "threads": [{ "queryId": "q3", "user": "CitizenJournalist_1", "query": "What's the completion timeline for this phase?", "response": "The projected completion is Q4 2026 as per the linked project proposal." }] } },
                "TXN_BUS_01": { "overview": { "type": "Public Expenditure", "from": "Transport Budget", "to": "EV Bus Vendor Inc.", "amount": { "value": 25000000, "currency": "INR" }, "status": "PAID & VERIFIED", "timestamp": "2025-09-12T11:30:00Z" }, "onChainData": { "blockNumber": 7112, "transactionHash": "0xghi...789mno", "chaincodeFunction": "ApprovePayment", "approverIdentity": "TransportDeptHead@gov.in" }, "documentVerification": { "documentName": "EVBus_Invoice_001.pdf", "ipfsCid": "QmGHI...789", "retrievalStatus": "SUCCESS", "integrityCheck": "PASSED" }, "anomalyAnalysis": { "isAnomaly": false, "reason": null, "recommendation": null }, "communityForum": { "threads": [{ "queryId": "q4", "user": "EnviroActivist_5", "query": "Do these buses meet the latest emission standards?", "response": "Yes, these are zero-emission electric vehicles." }] } },
                "TXN_INFRA_FLYOVER_01": { "overview": { "type": "Public Expenditure", "from": "Infrastructure Budget", "to": "Construction Co.", "amount": { "value": 120000000, "currency": "INR" }, "status": "PAID & VERIFIED", "timestamp": "2025-09-05T15:00:00Z" }, "onChainData": { "blockNumber": 7080, "transactionHash": "0xjkl...123pqr", "chaincodeFunction": "DisburseFunds", "approverIdentity": "InfraDeptHead@gov.in" }, "documentVerification": { "documentName": "Flyover_Invoice_Phase1.pdf", "ipfsCid": "QmJKL...123", "retrievalStatus": "SUCCESS", "integrityCheck": "PASSED" }, "anomalyAnalysis": { "isAnomaly": false, "reason": null, "recommendation": null }, "communityForum": { "threads": [{ "queryId": "q5", "user": "Commuter_22", "query": "Will this solve the traffic issue at Hebbal?", "response": "Simulations project a 40% reduction in peak hour congestion." }] } },
                "TXN_HEALTH_HOSPITAL_01": { "overview": { "type": "Public Expenditure", "from": "Healthcare Budget", "to": "Medi-Equip Solutions", "amount": { "value": 95000000, "currency": "INR" }, "status": "PAID & VERIFIED", "timestamp": "2025-09-15T14:00:00Z" }, "onChainData": { "blockNumber": 7150, "transactionHash": "0xstu...456vwx", "chaincodeFunction": "DisburseFunds", "approverIdentity": "HealthDeptHead@gov.in" }, "documentVerification": { "documentName": "MediEquip_Invoice_08.pdf", "ipfsCid": "QmSTU...456", "retrievalStatus": "SUCCESS", "integrityCheck": "PASSED" }, "anomalyAnalysis": { "isAnomaly": false, "reason": null, "recommendation": null }, "communityForum": { "threads": [{ "queryId": "q6", "user": "Doctor_Asha", "query": "Does this equipment include new MRI machines?", "response": "Yes, the procurement includes two next-generation MRI machines as per the tender document." }] } }
            }
        };

        const { publicLedgerView, transactionRepository } = ledgerData;
        const contentArea = document.getElementById('content-area');
        const modal = document.getElementById('transaction-modal');
        const modalContent = document.getElementById('modal-content');
        
        // --- GEMINI API INTEGRATION ---
        const callGeminiAPI = async (prompt, systemInstruction, loaderElement, responseElement) => {
            loaderElement.style.display = 'flex';
            responseElement.style.display = 'none';
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
            const payload = {
                contents: [{ parts: [{ text: prompt }] }],
                systemInstruction: { parts: [{ text: systemInstruction }] }
            };

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();
                const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) {
                    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/^- (.*$)/gm, '<ul><li>$1</li></ul>').replace(/<\/ul>\n<ul>/g, '');
                    responseElement.innerHTML = html;
                } else {
                    throw new Error("Invalid API response structure.");
                }
            } catch (error) {
                console.error("Gemini API call failed:", error);
                responseElement.innerHTML = `<p class="text-danger">Sorry, the AI assistant is currently unavailable.</p>`;
            } finally {
                loaderElement.style.display = 'none';
                responseElement.style.display = 'block';
            }
        };
        
        // --- PAGE RENDERING ---
        const renderPublicLedgerPage = () => {
            const { title, description, categories } = publicLedgerView;
            contentArea.innerHTML = `
                <div class="animate-slide-up">
                    <header class="flex flex-col lg:flex-row justify-between items-center mb-12 border-b border-accent/20 pb-6 gap-6">
                        <div class="w-full">
                            <h2 class="text-4xl font-extrabold tracking-tight text-primary">${title}</h2>
                            <p class="mt-2 max-w-3xl text-lg text-secondary">${description}</p>
                        </div>
                        <div class="w-full lg:w-auto flex flex-col sm:flex-row gap-4 items-center">
                            <div class="relative w-full max-w-xs">
                                <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary z-10"></i>
                                <input type="text" id="search-input" placeholder="Search sectors..." class="w-full bg-foreground/50 border-2 border-transparent rounded-lg py-3 pl-10 pr-4 text-primary focus:border-accent focus:ring-0 transition">
                            </div>
                        30+    <a href="dashboard-public" class="w-full sm:w-auto flex-shrink-0 bg-accent text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                <i data-lucide="home" class="w-4 h-4"></i>
                                Back to Home
                            </a>
                        </div>
                    </header>
                    <div id="ledger-cards-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${categories.map((cat, i) => createLedgerCategoryCard(cat, i)).join('')}
                    </div>
                    <div id="no-results" class="hidden text-center py-16 animate-slide-up">
                        <i data-lucide="search-x" class="w-16 h-16 mx-auto text-secondary"></i>
                        <h3 class="mt-4 text-2xl font-bold text-primary">No Results Found</h3>
                        <p class="mt-1 text-secondary">Try searching for a different keyword.</p>
                    </div>
                </div>
            `;

            document.querySelectorAll('.transaction-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    renderTransactionModal(e.currentTarget.dataset.txid);
                });
            });
            lucide.createIcons();
        };

        const createLedgerCategoryCard = (category, index) => {
            const formatCurrency = (value) => `₹${(value / 10000000).toFixed(1)} Cr`;
            const searchTerms = `${category.title} ${category.description}`.toLowerCase();
            return `
                <div class="bg-foreground p-6 rounded-2xl animate-slide-up ledger-card" style="animation-delay: ${index * 100}ms;" data-search-terms="${searchTerms}">
                    <div class="flex items-center gap-4 mb-4">
                        <i data-lucide="${category.icon}" class="w-8 h-8 text-accent"></i>
                        <h3 class="text-xl font-bold text-primary">${category.title}</h3>
                    </div>
                    <div class="grid grid-cols-3 gap-2 text-center mb-4 border-y border-gray-700 py-3">
                        <div><p class="text-sm text-secondary">Budget</p><p class="font-bold text-primary text-lg">${formatCurrency(category.stats.budget)}</p></div>
                        <div><p class="text-sm text-secondary">Utilized</p><p class="font-bold text-primary text-lg">${formatCurrency(category.stats.utilized)}</p></div>
                        <div><p class="text-sm text-secondary">Projects</p><p class="font-bold text-primary text-lg">${category.stats.projects.toLocaleString()}</p></div>
                    </div>
                    <h4 class="font-semibold text-primary mb-2">Recent Verifiable Transactions</h4>
                    <ul class="space-y-2">
                        ${category.recentTransactions.map(tx => `
                            <li class="flex justify-between items-center text-sm p-2 bg-slate-800/50 rounded-md">
                                <div><p class="font-medium text-primary">${tx.item}</p><a href="#" data-txid="${tx.transactionId}" class="transaction-link text-xs text-accent hover:underline">ID: ${tx.transactionId}</a></div>
                                <span class="font-semibold text-primary">₹${(tx.amount/100000).toLocaleString()}L</span>
                            </li>`).join('')}
                    </ul>
                </div>`;
        };
        
        // --- SEARCH FUNCTIONALITY ---
        const setupSearch = () => {
            const searchInput = document.getElementById('search-input');
            const cardsContainer = document.getElementById('ledger-cards-container');
            const noResultsMessage = document.getElementById('no-results');

            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase().trim();
                let visibleCount = 0;
                
                const filteredCategories = publicLedgerView.categories.filter(cat => {
                    const searchTerms = `${cat.title} ${cat.description}`.toLowerCase();
                    return searchTerms.includes(searchTerm);
                });

                if(filteredCategories.length > 0) {
                    cardsContainer.innerHTML = filteredCategories.map((cat, i) => createLedgerCategoryCard(cat, i)).join('');
                    noResultsMessage.classList.add('hidden');
                    // Re-attach event listeners for the new cards
                    document.querySelectorAll('.transaction-link').forEach(link => {
                        link.addEventListener('click', (e) => {
                            e.preventDefault();
                            renderTransactionModal(e.currentTarget.dataset.txid);
                        });
                    });
                    lucide.createIcons();
                } else {
                    cardsContainer.innerHTML = '';
                    noResultsMessage.classList.remove('hidden');
                }
            });
        };

        // --- MODAL ---
        const renderTransactionModal = (txId) => {
            const txData = transactionRepository[txId];
            if (!txData) return;

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            modalContent.innerHTML = `
                <button id="close-modal" class="absolute top-4 right-4 text-secondary hover:text-primary transition-colors"><i data-lucide="x"></i></button>
                <h2 class="text-2xl font-bold text-primary mb-1">Transaction Details</h2>
                <p class="text-sm text-accent font-mono mb-6">${txId}</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                    ${createModalStat('Status', txData.overview.status, 'shield-check', 'text-green-500')}
                    ${createModalStat('Amount', `₹${txData.overview.amount.value.toLocaleString('en-IN')}`, 'banknote')}
                    ${createModalStat('Type', txData.overview.type, 'arrow-right-left')}
                    ${createModalStat('Timestamp', new Date(txData.overview.timestamp).toLocaleDateString(), 'calendar')}
                </div>
                <div class="space-y-6">
                    ${createModalSection('On-Chain Verification', 'cpu', [{ label: 'Block Number', value: txData.onChainData.blockNumber }, { label: 'Transaction Hash', value: `<span class="font-mono text-xs">${txData.onChainData.transactionHash}</span>` }, { label: 'Approver', value: txData.onChainData.approverIdentity }])}
                    ${createModalSection('Document Verification (IPFS)', 'file-check-2', [{ label: 'Document', value: txData.documentVerification.documentName }, { label: 'IPFS CID', value: `<span class="font-mono text-xs">${txData.documentVerification.ipfsCid}</span>` }, { label: 'Integrity Check', value: `<span class="font-semibold text-green-500">${txData.documentVerification.integrityCheck}</span>` }])}
                    ${createModalSection('Community Forum', 'message-square-more', `<div class="bg-slate-800/50 p-3 rounded-lg"><p class="text-sm text-secondary">${txData.communityForum.threads[0].user}: "${txData.communityForum.threads[0].query}"</p><p class="text-sm text-primary mt-2 pl-4 border-l-2 border-accent"><strong>Response:</strong> ${txData.communityForum.threads[0].response}</p></div>`)}
                    <div id="gemini-assistant-container" class="mt-6">
                        <h3 class="text-lg font-bold text-primary flex items-center gap-2 mb-3"><i data-lucide="sparkles" class="w-5 h-5 text-accent"></i>AuraFlow AI Assistant</h3>
                        <div class="bg-slate-800/50 p-4 rounded-lg">
                            <div id="gemini-response-tx" class="text-sm text-secondary prose max-w-none">Need a simple explanation? Let our AI assistant break it down.</div>
                            <div id="gemini-loader-tx" class="hidden justify-center items-center py-4"><div class="loader"></div></div>
                            <button id="summarize-tx-btn" class="mt-4 w-full bg-accent text-white font-semibold py-2 px-4 rounded-lg shadow-lg flex items-center justify-center gap-2">✨ Explain This Transaction</button>
                        </div>
                    </div>
                </div>`;
            document.getElementById('summarize-tx-btn').addEventListener('click', (e) => {
                e.currentTarget.disabled = true;
                const prompt = `Explain the following blockchain transaction from AuraFlow in simple terms. Transaction ID: ${txId}. Amount: ${txData.overview.amount.value} ${txData.overview.amount.currency}. From: ${txData.overview.from}. To: ${txData.overview.to}. Status: ${txData.overview.status}. It was recorded on the blockchain in block number ${txData.onChainData.blockNumber}. The associated document is ${txData.documentVerification.documentName}. A community member asked '${txData.communityForum.threads[0].query}' and was told '${txData.communityForum.threads[0].response}'. Summarize this in a brief paragraph.`;
                const systemInstruction = "You are a helpful financial analyst for AuraFlow. Explain complex blockchain transactions in simple terms for students and donors. Avoid technical jargon.";
                callGeminiAPI(prompt, systemInstruction, document.getElementById('gemini-loader-tx'), document.getElementById('gemini-response-tx'));
            });
            document.getElementById('close-modal').addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
            lucide.createIcons();
        };

        const createModalStat = (label, value, icon, colorClass = 'text-accent') => `
            <div class="bg-slate-800/50 p-3 rounded-lg"><i data-lucide="${icon}" class="w-6 h-6 mx-auto ${colorClass}"></i><p class="text-sm font-semibold mt-2 text-primary">${value}</p><p class="text-xs text-secondary">${label}</p></div>`;

        const createModalSection = (title, icon, content) => `
            <div><h3 class="text-lg font-bold text-primary flex items-center gap-2 mb-3"><i data-lucide="${icon}" class="w-5 h-5 text-accent"></i>${title}</h3>
            ${typeof content === 'string' ? content : `<div class="text-sm space-y-2 pl-7">${content.map(item => `<div class="flex justify-between items-start"><span class="text-secondary">${item.label}:</span><span class="text-primary text-right font-medium">${item.value}</span></div>`).join('')}</div>`}</div>`;

        const closeModal = () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            modalContent.innerHTML = '';
        };
        
        // --- BACKGROUND CONSTELLATION ANIMATION (from other pages) ---
        const setupConstellation = () => {
            const canvas = document.getElementById('background-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let particles = [];
            const particleCount = window.innerWidth > 768 ? 100 : 40;
            const maxDistance = 120;
            const resizeCanvas = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; initParticles(); };
            class Particle { constructor(x,y,dX,dY,s,c){this.x=x;this.y=y;this.dX=dX;this.dY=dY;this.s=s;this.c=c;} draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.s,0,Math.PI*2);ctx.fillStyle=this.c;ctx.fill();} update(){if(this.x>canvas.width||this.x<0)this.dX=-this.dX;if(this.y>canvas.height||this.y<0)this.dY=-this.dY;this.x+=this.dX;this.y+=this.dY;this.draw();}}
            const initParticles=()=>{particles=[];for(let i=0;i<particleCount;i++){let s=Math.random()*2+1,x=Math.random()*(canvas.width-s*2)+s,y=Math.random()*(canvas.height-s*2)+s,dX=(Math.random()*.4)-.2,dY=(Math.random()*.4)-.2;particles.push(new Particle(x,y,dX,dY,s,'rgba(6,182,212,.7)'));}};
            const connectParticles=()=>{for(let a=0;a<particles.length;a++){for(let b=a;b<particles.length;b++){let d=((particles[a].x-particles[b].x)**2)+((particles[a].y-particles[b].y)**2);if(d<(maxDistance**2)){let o=1-(d/(maxDistance**2));ctx.strokeStyle=`rgba(209,250,229,${o*.5})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(particles[a].x,particles[a].y);ctx.lineTo(particles[b].x,particles[b].y);ctx.stroke();}}}}
            const animate=()=>{requestAnimationFrame(animate);ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>p.update());connectParticles();}
            window.addEventListener('resize',resizeCanvas);
            resizeCanvas();
            animate();
        };

        document.addEventListener('DOMContentLoaded', () => {
            renderPublicLedgerPage();
            setupSearch();
            setupConstellation(); // Initialize constellation background
        });
