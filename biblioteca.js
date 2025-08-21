// ===== DADOS E CONFIGURAÇÕES =====
let clientes = {
    grupoduzani: {
        nome: "Grupo Duzani",
        cor: "#FF5733",
        logo: "https://via.placeholder.com/150x50?text=Duzani",
        modulos: [
            {
                nome: "Cadastro de Pessoas",
                icone: "fas fa-user-friends",
                videos: [
                    { id: "Zi_XLOBDo_Y", titulo: "Gerenciamento de Clientes e Fornecedores", duracao: "08:10", descricao: "Entenda como gerenciar pessoas no sistema." }
                ]
            },
            
             {
                nome: "Cadastro de Produtos",
                icone: "fas fa-box-open",
                videos: [
                    { id: "kXYiU_JCYtU", titulo: "Cadastrando Novos Produtos", duracao: "06:45", descricao: "Tutorial passo a passo sobre o cadastro de produtos." }
                ]
            },
            {
                nome: "Vendas",
                icone: "fas fa-chart-line",
                videos: [
                    { id: "dQw4w9WgXcQ", titulo: "Introdução às Vendas", duracao: "05:00", descricao: "Aprenda os conceitos básicos do módulo de vendas." },
                    { id: "hY7m5jjJ9mM", titulo: "Gestão de Pipeline", duracao: "07:30", descricao: "Como gerenciar oportunidades de vendas no sistema." }
                ]
            },
           
            {
                nome: "Fiscal",
                icone: "fas fa-file-invoice",
                videos: [
                    { id: "3JZ_D3ELwOQ", titulo: "Notas Fiscais Eletrônicas", duracao: "07:20", descricao: "Como emitir e gerenciar NF-es." }
                ]
            },

            {
                nome: "Financeiro",
                icone: "fas fa-dollar-sign",
                videos: [
                    { id: "RgKAFK5djSk", titulo: "Fluxo de Caixa", duracao: "09:00", descricao: "Aprenda a controlar o fluxo de caixa da sua empresa." }
                ]
            },
            {
                nome: "Manufatura",
                icone: "fas fa-industry",
                videos: [
                    { id: "tAGnKpE4NCI", titulo: "Ordens de Produção", duracao: "10:15", descricao: "Gestão de ordens de produção dentro do ERP." }
                ]
            }
        ]
    }
}
clientes.becker = {
        nome: "Becker",
        cor: "#FF5733",
        logo: "https://via.placeholder.com/150x50?text=Becker",
        modulos: [
           {
                nome: "Cadastro de Pessoas",
                icone: "fas fa-user-friends",
                videos: [
                    { id: "Zi_XLOBDo_Y", titulo: "Gerenciamento de Clientes e Fornecedores", duracao: "08:10", descricao: "Entenda como gerenciar pessoas no sistema." }
                ]
            },
            
             {
                nome: "Cadastro de Produtos",
                icone: "fas fa-box-open",
                videos: [
                    { id: "kXYiU_JCYtU", titulo: "Cadastrando Novos Produtos", duracao: "06:45", descricao: "Tutorial passo a passo sobre o cadastro de produtos." }
                ]
            },
            {
                nome: "Vendas",
                icone: "fas fa-chart-line",
                videos: [
                    { id: "dQw4w9WgXcQ", titulo: "Introdução às Vendas", duracao: "05:00", descricao: "Aprenda os conceitos básicos do módulo de vendas." },
                    { id: "hY7m5jjJ9mM", titulo: "Gestão de Pipeline", duracao: "07:30", descricao: "Como gerenciar oportunidades de vendas no sistema." }
                ]
            },
           
            {
                nome: "Fiscal",
                icone: "fas fa-file-invoice",
                videos: [
                    { id: "3JZ_D3ELwOQ", titulo: "Notas Fiscais Eletrônicas", duracao: "07:20", descricao: "Como emitir e gerenciar NF-es." }
                ]
            },

            {
                nome: "Financeiro",
                icone: "fas fa-dollar-sign",
                videos: [
                    { id: "RgKAFK5djSk", titulo: "Fluxo de Caixa", duracao: "09:00", descricao: "Aprenda a controlar o fluxo de caixa da sua empresa." }
                ]
            },
            {
                nome: "Manufatura",
                icone: "fas fa-industry",
                videos: [
                    { id: "tAGnKpE4NCI", titulo: "Ordens de Produção", duracao: "10:15", descricao: "Gestão de ordens de produção dentro do ERP." }
                ]
            }
        ]
    }
    clientes.thaiscarvalhojoias = {
        nome: "Thais Carvalho Joias",
        cor: "#FF5733",
        logo: "https://via.placeholder.com/150x50?text=thaiscarvalhojoias",
        modulos: [
           {
                nome: "Cadastro de Pessoas",
                icone: "fas fa-user-friends",
                videos: [
                    
                ]
            },
            
             {
                nome: "Cadastro de Produtos",
                icone: "fas fa-box-open",
                videos: [
                    { id: "HEZGPzA7QJY", titulo: "Cadastro de Produtos", duracao: "09:27", descricao: "Tutorial passo a passo sobre o cadastro de produtos." }
                ]
            },
            {
                nome: "Vendas",
                icone: "fas fa-chart-line",
                videos: [
                    { id: "bqpirA5K2UQ", titulo: "Lançamento De Vendas Consignadas", duracao: "10:07", descricao: "Aprenda os conceitos básicos do módulo de vendas." },
                    { id: "H5tEfnAw3T0", titulo: "Acerto Com Consultora, Fechamento de Venda Consignada", duracao: "08:46", descricao: "Como gerenciar oportunidades de vendas no sistema." }
                ]
            },
           
            {
                nome: "Fiscal",
                icone: "fas fa-file-invoice",
                videos: [
                   
                ]
            },

            {
                nome: "Contabil",
                icone: "fas fa-calculator",
                videos: [
                    
                ]
            },

            {
                nome: "Financeiro",
                icone: "fas fa-dollar-sign",
                videos: [
                    
                ]
            },

            {
                nome: "Manufatura",
                icone: "fas fa-industry",
                videos: [
                    
                ]
            }
        ]
    }


// DADOS PARA AS NOVAS FUNCIONALIDADES
let dadosImplantacao = [
    { 
        id: 1, 
        nome: "Empresa Alpha", 
        responsavel: "João Silva", 
        status: "em-andamento", 
        modulos: { 
            Vendas: true, 
            Financeiro: true, 
            Fiscal: false, 
            Manufatura: false, 
            'Cadastro de Produtos': true, 
            'Cadastro de Pessoas': false 
        } 
    },
    { 
        id: 2, 
        nome: "Empresa Beta", 
        responsavel: "Maria Oliveira", 
        status: "concluido", 
        modulos: { 
            Vendas: true, 
            Financeiro: true, 
            Fiscal: true, 
            Manufatura: true, 
            'Cadastro de Produtos': true, 
            'Cadastro de Pessoas': true 
        } 
    },
    { 
        id: 3, 
        nome: "Empresa Gama", 
        responsavel: "Pedro Costa", 
        status: "iniciado", 
        modulos: { 
            Vendas: true, 
            Financeiro: false, 
            Fiscal: false, 
            Manufatura: false, 
            'Cadastro de Produtos': false, 
            'Cadastro de Pessoas': false 
        } 
    },
    { 
        id: 4, 
        nome: "Empresa Delta", 
        responsavel: "Ana Santos", 
        status: "em-andamento", 
        modulos: { 
            Vendas: true, 
            Financeiro: true, 
            Fiscal: true, 
            Manufatura: false, 
            'Cadastro de Produtos': true, 
            'Cadastro de Pessoas': true 
        } 
    }
];

let dadosBI = {
    totalEmpresas: 15,
    implantacoesAtivas: 4,
    modulosPopulares: ["Vendas", "Financeiro"],
    statusImplantacoes: { iniciado: 5, "em-andamento": 4, concluido: 6 },
    tempoMedioImplantacao: 45,
    satisfacaoCliente: 4.8,
    modulosUsados: {
        "Vendas": 12,
        "Financeiro": 10,
        "Fiscal": 8,
        "Manufatura": 6,
        "Cadastro de Produtos": 11,
        "Cadastro de Pessoas": 9
    },
    evolucaoMensal: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        implantacoes: [2, 3, 1, 4, 2, 3],
        treinamentos: [45, 52, 38, 67, 41, 58]
    },
    ticketsSuporte: {
        abertos: 12,
        resolvidos: 89,
        pendentes: 7
    }
};

let kanbanTasks = {
    'a-fazer': [
        { id: 1, titulo: 'Desenvolver API de Pagamentos', desc: 'Integrar com gateway Stripe para processamento de pagamentos.' },
        { id: 4, titulo: 'Configurar ambiente de staging', desc: 'Preparar servidor para testes e homologação.' },
        { id: 7, titulo: 'Implementar autenticação 2FA', desc: 'Adicionar autenticação de dois fatores para maior segurança.' }
    ],
    'em-andamento': [
        { id: 2, titulo: 'Testar Módulo Fiscal', desc: 'Realizar testes de emissão de NF-e e validações fiscais.' },
        { id: 8, titulo: 'Otimizar consultas do banco', desc: 'Melhorar performance das consultas mais utilizadas.' }
    ],
    'concluido': [
        { id: 3, titulo: 'Ajustar Layout da Home', desc: 'Correção de responsividade para dispositivos móveis.' },
        { id: 5, titulo: 'Implementar cache Redis', desc: 'Sistema de cache implementado e funcionando.' },
        { id: 6, titulo: 'Documentação da API', desc: 'Documentação completa da API REST criada.' }
    ]
};

let dadosAnotacoes = [
    {
        id: 1,
        titulo: "Reunião com Empresa Alpha",
        conteudo: "Discutir implementação do módulo fiscal. Cliente tem dúvidas sobre integração com SEFAZ.",
        cor: "amarelo",
        empresa: "Empresa Alpha",
        dataCreacao: "2025-01-15"
    },
    {
        id: 2,
        titulo: "Bug no módulo de vendas",
        conteudo: "Relatado problema na geração de relatórios. Verificar query de performance.",
        cor: "rosa",
        empresa: "",
        dataCreacao: "2025-01-14"
    },
    {
        id: 3,
        titulo: "Treinamento agendado",
        conteudo: "Empresa Beta solicitou treinamento adicional para equipe de vendas na próxima semana.",
        cor: "verde",
        empresa: "Empresa Beta",
        dataCreacao: "2025-01-13"
    }
];

// Variáveis globais
let currentClient = null;
let currentVideos = [];
let currentVideoIndex = -1;
let currentModuleFilter = 'todos';
let isAdmin = false;
let charts = {};
let draggedTask = null;
let editingVideoId = null;
let editingAnotacaoId = null;

// ===== INICIALIZAÇÃO E EVENTOS =====
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    setupEventListeners();
    
    const btnAdicionar = document.getElementById('btnAdicionarVideo');
    if (btnAdicionar) btnAdicionar.addEventListener('click', adicionarVideo);
    
    const closeModalBtn = document.getElementById('closeModalVideo');
    if (closeModalBtn) closeModalBtn.addEventListener('click', fecharModalVideo);

    const cancelarModalBtn = document.getElementById('cancelarModalVideo');
    if (cancelarModalBtn) cancelarModalBtn.addEventListener('click', fecharModalVideo);
});

function initializeTheme() {
    // Carregar tema salvo ou usar tema escuro como padrão
    const savedTheme = localStorage.getItem('tema') || 'dark';
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (savedTheme === 'light') {
        html.classList.remove('dark-theme');
        html.classList.add('light-theme');
        if (themeToggle) themeToggle.classList.replace('fa-moon', 'fa-sun');
    } else {
        html.classList.remove('light-theme');
        html.classList.add('dark-theme');
        if (themeToggle) themeToggle.classList.replace('fa-sun', 'fa-moon');
    }
}

function setupEventListeners() {
    document.querySelectorAll(".nav-tab").forEach(tab => {
        tab.addEventListener("click", function() {
            const category = this.dataset.category;
            filterByCategory(category);
            document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const globalSearch = document.getElementById("globalSearch");
    if (globalSearch) {
        globalSearch.addEventListener("input", function() { filterVideos(this.value); });
    }

    const completedCheckbox = document.getElementById("completedCheckbox");
    if (completedCheckbox) {
        completedCheckbox.addEventListener("change", updateVideoProgress);
    }

    // Adicionar event listeners para os botões de login
    const acessarBibliotecaBtn = document.querySelector("#userForm .btn-primary");
    if (acessarBibliotecaBtn) {
        acessarBibliotecaBtn.addEventListener("click", validarDominio);
    }

    const entrarAdminBtn = document.querySelector("#adminForm .btn-primary");
    if (entrarAdminBtn) {
        entrarAdminBtn.addEventListener("click", validarAdmin);
    }

    const accessToggle = document.getElementById("accessToggle");
    if (accessToggle) {
        accessToggle.addEventListener("change", alternarTipoAcesso);
    }
}

// ===== FUNÇÕES DE LOGIN =====
function alternarTipoAcesso() {
    const isAdminMode = document.getElementById("accessToggle").checked;
    const userForm = document.getElementById("userForm");
    const adminForm = document.getElementById("adminForm");
    const clienteText = document.getElementById("clienteText");
    const adminText = document.getElementById("adminText");

    if (userForm && adminForm) {
        userForm.classList.toggle("active", !isAdminMode);
        adminForm.classList.toggle("active", isAdminMode);
    }

    if (clienteText && adminText) {
        clienteText.classList.toggle("active", !isAdminMode);
        adminText.classList.toggle("active", isAdminMode);
    }

    hideErrorMessages();
    clearFormInputs();
}

function formatarDominio(input) {
    input.value = input.value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function validarDominio() {
    const dominio = document.getElementById('domainInput').value.trim().toLowerCase();
    if (!dominio) {
        showErrorMessage('errorMsg', 'Por favor, digite um domínio');
        return;
    }
    if (clientes[dominio]) {
        currentClient = clientes[dominio];
        isAdmin = false;
        updateClientBranding(); 
        showVideoArea();
    } else {
        showErrorMessage('errorMsg', 'Domínio não encontrado!');
    }
}

function validarAdmin() {
    const usuario = document.getElementById('adminUser').value.trim();
    const senha = document.getElementById('adminPass').value.trim();
    if (!usuario || !senha) {
        showErrorMessage('adminErrorMsg', 'Por favor, preencha todos os campos');
        return;
    }
    if (usuario === 'upvendas' && senha === '123') {
        isAdmin = true;
        currentClient = clientes['grupoduzani', 'becker'];
        showAdminArea();
    } else {
        showErrorMessage('adminErrorMsg', 'Credenciais incorretas!');
    }
}

function showErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'flex';
        setTimeout(() => { errorElement.style.display = 'none'; }, 3000);
    }
}

function hideErrorMessages() {
    document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
}

function clearFormInputs() {
    const domainInput = document.getElementById('domainInput');
    const adminUser = document.getElementById('adminUser');
    const adminPass = document.getElementById('adminPass');
    
    if (domainInput) domainInput.value = '';
    if (adminUser) adminUser.value = '';
    if (adminPass) adminPass.value = '';
}

// ===== FUNÇÕES DE NAVEGAÇÃO =====
function showLoginArea() {
    document.getElementById('loginArea').style.display = 'block';
    document.getElementById('videoArea').style.display = 'none';
    document.getElementById('adminArea').style.display = 'none';
    document.getElementById('mainNav').style.display = 'none';
    document.getElementById('headerSearch').style.display = 'none';
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('userBtn').style.display = 'none';
}

function showVideoArea() {
    document.getElementById('loginArea').style.display = 'none';
    document.getElementById('videoArea').style.display = 'block';
    document.getElementById('adminArea').style.display = 'none';
    document.getElementById('mainNav').style.display = 'block';
    document.getElementById('headerSearch').style.display = 'block';
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('userBtn').style.display = 'block';
    document.getElementById('userName').textContent = currentClient.nome;
    updateClientBranding();
    loadClientVideos();
}

function showAdminArea() {
    document.getElementById('loginArea').style.display = 'none';
    document.getElementById('videoArea').style.display = 'none';
    document.getElementById('adminArea').style.display = 'block';
    document.getElementById('mainNav').style.display = 'none';
    document.getElementById('headerSearch').style.display = 'none';
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('userBtn').style.display = 'block';
    document.getElementById('userName').textContent = 'Administrador';
    updateClientBranding();
    renderAdminContent();
    mostrarSecaoAdmin('Videos');
}

function voltarInicio() {
    currentClient = null;
    isAdmin = false;
    showLoginArea();
    clearFormInputs();
    hideErrorMessages();
}

function mostrarLogin() { showLoginArea(); }
function irParaLogin() {
    if (document.getElementById('loginArea').style.display !== 'none') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    showLoginArea();
    setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
}
function mostrarPerfil() { console.log('Mostrar perfil'); }

// ===== FUNÇÕES DE TEMA =====
function alternarTema() {
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (html.classList.contains('light-theme')) {
        html.classList.remove('light-theme');
        html.classList.add('dark-theme');
        if (themeToggle) themeToggle.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('tema', 'dark');
    } else {
        html.classList.remove('dark-theme');
        html.classList.add('light-theme');
        if (themeToggle) themeToggle.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('tema', 'light');
    }
}

// ===== FUNÇÕES DE CLIENTE E VÍDEOS =====
function updateClientBranding() {
    const logoPath = "images-removebg-preview.png";
    const logoHeader = document.getElementById('logoHeader');
    const logoFooter = document.getElementById('logoFooter');
    if (logoHeader) { logoHeader.src = logoPath; logoHeader.alt = "Logo Up Business"; }
    if (logoFooter) { logoFooter.src = logoPath; logoFooter.alt = "Logo Up Business"; }
    if (currentClient && currentClient.cor) {
        document.documentElement.style.setProperty('--client-color', currentClient.cor);
    }
}

function loadClientVideos() {
    if (!currentClient) return;
    currentVideos = [];
    currentClient.modulos.forEach(modulo => {
        modulo.videos.forEach(video => {
            currentVideos.push({ ...video, modulo: modulo.nome, icone: modulo.icone });
        });
    });
    renderVideoList();
}

function renderVideoList() {
    const videoList = document.getElementById("videoList");
    if (!videoList) return;
    
    let html = '';
    const moduleGroups = {};
    
    // Filtrar vídeos se necessário
    let filteredVideos = currentVideos;
    if (currentModuleFilter !== 'todos') {
        const moduleMap = {
            'cadastro-de-pessoas': 'Cadastro de Pessoas',
            'cadastro-de-produtos': 'Cadastro de Produtos',
            'vendas': 'Vendas',
            'fiscal': 'Fiscal',
            'financeiro': 'Financeiro',
            'manufatura': 'Manufatura'
        };
        const moduleName = moduleMap[currentModuleFilter];
        if (moduleName) {
            filteredVideos = currentVideos.filter(video => video.modulo === moduleName);
        }
    }
    
    // Agrupar por módulo
    filteredVideos.forEach(video => {
        if (!moduleGroups[video.modulo]) moduleGroups[video.modulo] = [];
        moduleGroups[video.modulo].push(video);
    });
    
    Object.keys(moduleGroups).forEach(moduleName => {
        const videos = moduleGroups[moduleName];
        const moduleIcon = videos[0].icone;
        const moduleId = moduleName.toLowerCase().replace(/\s+/g, '-');
        html += `<div class="module-group">
            <div class="module-header" onclick="toggleModule('${moduleId}')">
                <i class="${moduleIcon}"></i>
                <span>${moduleName}</span>
                <i class="fas fa-chevron-down module-toggle" id="toggle-${moduleId}"></i>
            </div>
            <div class="module-videos" id="videos-${moduleId}" style="display: none;">`;
        
        videos.forEach((video) => {
            const globalIndex = currentVideos.indexOf(video);
            const isActive = globalIndex === currentVideoIndex ? 'active' : '';
            html += `<div class="course-item ${isActive}" onclick="playVideo(${globalIndex})">
                <div class="course-info">
                    <h4>${video.titulo}</h4>
                    <p class="course-description">${video.descricao}</p>
                </div>
            </div>`;
        });
        html += `</div></div>`;
    });
    
    videoList.innerHTML = html;
}

function playVideo(index) {
    if (index < 0 || index >= currentVideos.length) return;
    
    currentVideoIndex = index;
    const video = currentVideos[index];
    const iframe = document.getElementById("currentVideo");
    const placeholder = document.getElementById("videoPlaceholder");
    
    if (iframe && placeholder) {
        iframe.src = `https://www.youtube.com/embed/${video.id}`;
        iframe.style.display = "block";
        placeholder.style.display = "none";
    }
    
    document.getElementById("videoTitle").textContent = video.titulo;
    document.getElementById("videoDuration").textContent = video.duracao || "--:--";
    document.getElementById("videoModule").textContent = video.modulo;
    document.getElementById("videoMeta").style.display = "flex";
    document.getElementById("progressSection").style.display = "block";
    document.getElementById("completionSection").style.display = "block";
    document.getElementById("videoNavigation").style.display = "flex";
    
    // Atualizar navegação
    updateVideoNavigation();
    
    // Atualizar lista visual
    renderVideoList();
}

function updateVideoNavigation() {
    const prevBtn = document.getElementById("prevVideoBtn");
    const nextBtn = document.getElementById("nextVideoBtn");
    
    if (prevBtn) {
        prevBtn.disabled = currentVideoIndex <= 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentVideoIndex >= currentVideos.length - 1;
    }
}

function navegarVideo(direcao) {
    if (direcao === 'anterior' && currentVideoIndex > 0) {
        playVideo(currentVideoIndex - 1);
    } else if (direcao === 'proximo' && currentVideoIndex < currentVideos.length - 1) {
        playVideo(currentVideoIndex + 1);
    }
}

function filterByCategory(category) {
    currentModuleFilter = category;
    document.getElementById("currentModule").textContent = 
        category === 'todos' ? 'Todos os Cursos' : 
        category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    renderVideoList();
}

function filtrarVideos() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    
    if (!searchTerm) {
        // Se não há termo de busca, renderizar lista normal
        renderVideoList();
        return;
    }
    
    // Filtrar vídeos baseado no termo de busca
    const filteredVideos = currentVideos.filter(video => {
        const title = video.titulo.toLowerCase();
        const description = video.descricao.toLowerCase();
        return title.includes(searchTerm) || description.includes(searchTerm);
    });
    
    // Renderizar lista filtrada
    const videoList = document.getElementById("videoList");
    if (!videoList) return;
    
    let html = '';
    const moduleGroups = {};
    
    // Agrupar vídeos filtrados por módulo
    filteredVideos.forEach(video => {
        if (!moduleGroups[video.modulo]) moduleGroups[video.modulo] = [];
        moduleGroups[video.modulo].push(video);
    });
    
    if (Object.keys(moduleGroups).length === 0) {
        html = `<div class="no-results">
            <i class="fas fa-search"></i>
            <h3>Nenhum resultado encontrado</h3>
            <p>Tente usar outros termos de busca</p>
        </div>`;
    } else {
        Object.keys(moduleGroups).forEach(moduleName => {
            const videos = moduleGroups[moduleName];
            const moduleIcon = videos[0].icone;
            const moduleId = moduleName.toLowerCase().replace(/\s+/g, '-');
            html += `<div class="module-group">
                <div class="module-header" onclick="toggleModule('${moduleId}')">
                    <i class="${moduleIcon}"></i>
                    <span>${moduleName}</span>
                    <i class="fas fa-chevron-down module-toggle" id="toggle-${moduleId}"></i>
                </div>
                <div class="module-videos" id="videos-${moduleId}" style="display: block;">`;
            
            videos.forEach((video) => {
                const globalIndex = currentVideos.indexOf(video);
                const isActive = globalIndex === currentVideoIndex ? 'active' : '';
                html += `<div class="course-item ${isActive}" onclick="playVideo(${globalIndex})">
                    <div class="course-info">
                        <h4>${video.titulo}</h4>
                        <p class="course-description">${video.descricao}</p>
                    </div>
                </div>`;
            });
            html += `</div></div>`;
        });
    }
    
    videoList.innerHTML = html;
}

function updateVideoProgress() {
    const checkbox = document.getElementById("completedCheckbox");
    const progressFill = document.getElementById("progressFill");
    const progressPercentage = document.getElementById("progressPercentage");
    
    if (checkbox && progressFill && progressPercentage) {
        const progress = checkbox.checked ? 100 : 0;
        progressFill.style.width = progress + "%";
        progressPercentage.textContent = progress + "%";
    }
}

function copiarTranscricao() {
    const transcriptionContent = document.getElementById("transcriptionContent");
    if (transcriptionContent) {
        navigator.clipboard.writeText(transcriptionContent.textContent);
        // Feedback visual
        const copyBtn = document.querySelector(".copy-btn");
        if (copyBtn) {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }
    }
}

// ===== FUNÇÕES DE ADMIN =====
function renderAdminContent() {
    // Esta função será chamada quando necessário
}

function mostrarSecaoAdmin(secao) {
    // Atualizar navegação ativa
    document.querySelectorAll('.admin-nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="mostrarSecaoAdmin('${secao}')"]`).classList.add('active');
    
    const adminContent = document.querySelector('.admin-content');
    
    switch(secao) {
        case 'Videos':
            renderVideosAdmin();
            break;
        case 'Implantacoes':
            renderImplantacoesAdmin();
            break;
        case 'BI':
            renderBIAdmin();
            break;
        case 'Kanban':
            renderKanbanAdmin();
            break;
        case 'Anotacoes':
            renderAnotacoesAdmin();
            break;
    }
}

function renderVideosAdmin() {
    const adminContent = document.querySelector('.admin-content');
    if (!adminContent) return;
    
    let html = `
        <div class="admin-videos-header">
            <h2>Gerenciar Vídeos</h2>
            <button class="btn-add" onclick="abrirModalVideo()">
                <i class="fas fa-plus"></i> Adicionar Vídeo
            </button>
        </div>
        <div class="videos-table">
            <div class="table-header">
                <div>Título</div>
                <div>Código</div>
                <div>Módulo</div>
                <div>Ações</div>
            </div>`;
    
    if (currentClient && currentClient.modulos) {
        let hasVideos = false;
        currentClient.modulos.forEach(modulo => {
            modulo.videos.forEach((video, index) => {
                hasVideos = true;
                const videoId = `${modulo.nome.toLowerCase().replace(/\s+/g, '-')}-${index}`;
                html += `
                    <div class="table-row">
                        <div class="video-title">${video.titulo}</div>
                        <div class="video-code">${video.id}</div>
                        <div class="video-module">${modulo.nome}</div>
                        <div class="table-actions">
                            <button class="btn-edit" onclick="editarVideo('${videoId}', '${modulo.nome}', ${index})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-danger" onclick="excluirVideo('${modulo.nome}', ${index})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>`;
            });
        });
        
        if (!hasVideos) {
            html += `
                <div class="empty-state">
                    <i class="fas fa-video"></i>
                    <h3>Nenhum vídeo encontrado</h3>
                    <p>Adicione o primeiro vídeo para começar</p>
                </div>`;
        }
    }
    
    html += `</div>`;
    adminContent.innerHTML = html;
}

function renderImplantacoesAdmin() {
    const adminContent = document.querySelector('.admin-content');
    if (!adminContent) return;
    
    let html = `
        <div class="admin-videos-header">
            <h2><i class="fas fa-cogs"></i> Implantações</h2>
            <button class="btn-add" onclick="abrirModalImplantacao()">
                <i class="fas fa-plus"></i> Nova Implantação
            </button>
        </div>
        <div class="implantacoes-grid">`;
    
    dadosImplantacao.forEach(implantacao => {
        // Definir checklist padrão se não existir
        if (!implantacao.checklist) {
            implantacao.checklist = {
                etiqueta: false,
                importacao: false,
                cadastroProduto: false,
                cadastroPessoas: false,
                venda: false,
                financeiro: false,
                fiscal: false,
                manufatura: false
            };
        }
        
        const checklistItems = [
            { key: 'etiqueta', label: 'Etiqueta', icon: 'fas fa-tag' },
            { key: 'importacao', label: 'Importação', icon: 'fas fa-download' },
            { key: 'cadastroProduto', label: 'Cadastro de Produto', icon: 'fas fa-box' },
            { key: 'cadastroPessoas', label: 'Cadastro de Pessoas', icon: 'fas fa-users' },
            { key: 'venda', label: 'Venda', icon: 'fas fa-shopping-cart' },
            { key: 'financeiro', label: 'Financeiro', icon: 'fas fa-dollar-sign' },
            { key: 'fiscal', label: 'Fiscal', icon: 'fas fa-file-invoice' },
            { key: 'manufatura', label: 'Manufatura', icon: 'fas fa-industry' }
        ];
        
        const totalItens = checklistItems.length;
        const itensCompletos = checklistItems.filter(item => implantacao.checklist[item.key]).length;
        const progresso = Math.round((itensCompletos / totalItens) * 100);
        
        const statusClass = implantacao.status === 'concluido' ? 'status-concluido' : 
                           implantacao.status === 'em-andamento' ? 'status-emandamento' : 'status-iniciado';
        
        // Definir cores dos badges baseado no status
        const statusBadges = [];
        if (implantacao.status === 'concluido') {
            statusBadges.push({ color: '#10b981', label: 'C' });
            statusBadges.push({ color: '#ef4444', label: '!' });
        } else if (implantacao.status === 'em-andamento') {
            statusBadges.push({ color: '#f59e0b', label: '?' });
            statusBadges.push({ color: '#ef4444', label: '!' });
        } else {
            statusBadges.push({ color: '#f59e0b', label: '?' });
            statusBadges.push({ color: '#ef4444', label: '!' });
        }
        
        html += `
            <div class="implantacao-card">
                <div class="card-header">
                    <div class="card-title">
                        <h3>${implantacao.nome}</h3>
                        <div class="status-badges">
                            ${statusBadges.map(badge => `
                                <span class="status-badge-icon" style="background-color: ${badge.color};">${badge.label}</span>
                            `).join('')}
                        </div>
                        <span class="${statusClass}">${implantacao.status.replace('-', ' ').toUpperCase()}</span>
                    </div>
                    <div class="card-actions">
                        <button class="btn-edit" onclick="editarImplantacao(${implantacao.id})" title="Editar">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-danger" onclick="excluirImplantacao(${implantacao.id})" title="Excluir">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                
                <div class="card-info">
                    <p><i class="fas fa-user"></i> <strong>Responsável:</strong> ${implantacao.responsavel}</p>
                    <p><i class="fas fa-calendar"></i> <strong>Início:</strong> ${formatarData(implantacao.dataInicio || '2024-12-31')}</p>
                </div>
                
                <div class="progress-section">
                    <div class="progress-header">
                        <span>Progresso da Implantação</span>
                        <span class="progress-percentage">${progresso}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progresso}%"></div>
                    </div>
                </div>
                
                <div class="checklist-section">
                    <h4><i class="fas fa-tasks"></i> Checklist de Implantação</h4>
                    <div class="checklist-grid">
                        ${checklistItems.map(item => `
                            <label class="checklist-item ${implantacao.checklist[item.key] ? 'completed' : ''}">
                                <input type="checkbox" 
                                       ${implantacao.checklist[item.key] ? 'checked' : ''} 
                                       onchange="toggleChecklistItem(${implantacao.id}, '${item.key}')">
                                <span class="checkmark"></span>
                                <i class="${item.icon}"></i>
                                <span class="item-label">${item.label}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            </div>`;
    });
    
    html += `</div>`;
    adminContent.innerHTML = html;
}

function toggleChecklistItem(implantacaoId, itemKey) {
    const implantacao = dadosImplantacao.find(impl => impl.id === implantacaoId);
    if (implantacao) {
        if (!implantacao.checklist) {
            implantacao.checklist = {
                etiqueta: false,
                importacao: false,
                cadastroProduto: false,
                cadastroPessoas: false,
                venda: false,
                financeiro: false,
                fiscal: false,
                manufatura: false
            };
        }
        
        implantacao.checklist[itemKey] = !implantacao.checklist[itemKey];
        
        // Atualizar status baseado no progresso
        const checklistItems = Object.keys(implantacao.checklist);
        const itensCompletos = checklistItems.filter(key => implantacao.checklist[key]).length;
        const progresso = (itensCompletos / checklistItems.length) * 100;
        
        if (progresso === 100) {
            implantacao.status = 'concluido';
        } else if (progresso > 0) {
            implantacao.status = 'em-andamento';
        } else {
            implantacao.status = 'iniciado';
        }
        
        renderImplantacoesAdmin();
    }
}

function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
}

function renderBIAdmin() {
    const adminContent = document.querySelector('.admin-content');
    if (!adminContent) return;
    
    // Calcular métricas dinâmicas baseadas nos dados de implantação
    const totalEmpresas = dadosImplantacao.length;
    const implantacoesAtivas = dadosImplantacao.filter(impl => impl.status === 'em-andamento').length;
    const implantacoesConcluidas = dadosImplantacao.filter(impl => impl.status === 'concluido').length;
    const implantacoesIniciadas = dadosImplantacao.filter(impl => impl.status === 'iniciado').length;
    
    // Calcular progresso médio das implantações
    let progressoTotal = 0;
    dadosImplantacao.forEach(impl => {
        const modulosAtivos = Object.values(impl.modulos).filter(Boolean).length;
        const totalModulos = Object.keys(impl.modulos).length;
        progressoTotal += (modulosAtivos / totalModulos) * 100;
    });
    const progressoMedio = totalEmpresas > 0 ? Math.round(progressoTotal / totalEmpresas) : 0;
    
    // Calcular módulos mais implementados
    const modulosCount = {};
    dadosImplantacao.forEach(impl => {
        Object.entries(impl.modulos).forEach(([modulo, ativo]) => {
            if (ativo) {
                modulosCount[modulo] = (modulosCount[modulo] || 0) + 1;
            }
        });
    });
    
    adminContent.innerHTML = `
        <div class="bi-dashboard-modern">
            <!-- Conteúdo Principal -->
            <div class="bi-main-content-full">
                <div class="bi-header">
                    <h1>Business Intelligence</h1>
                    <div class="bi-date-range">Dados atualizados em tempo real</div>
                </div>
                
                <div class="bi-widgets-grid">
                    <!-- Widget 1: Total de Empresas -->
                    <div class="bi-widget">
                        <div class="bi-widget-header">
                            <div>
                                <h3 class="bi-widget-title">Total de Empresas</h3>
                                <p class="bi-widget-subtitle">Empresas em processo de implantação</p>
                            </div>
                        </div>
                        <div class="bi-metric-large">
                            <div class="metric-number">${totalEmpresas}</div>
                            <div class="metric-label">Empresas Ativas</div>
                        </div>
                    </div>
                    
                    <!-- Widget 2: Status das Implantações -->
                    <div class="bi-widget">
                        <div class="bi-widget-header">
                            <h3 class="bi-widget-title">Status das Implantações</h3>
                        </div>
                        <div class="bi-bar-chart">
                            <div class="bar-item">
                                <div class="bar-label">Iniciado</div>
                                <div class="bar-container">
                                    <div class="bar-fill gray" style="width: ${(implantacoesIniciadas/totalEmpresas)*100}%;"></div>
                                </div>
                                <div class="bar-value">${implantacoesIniciadas}</div>
                            </div>
                            <div class="bar-item">
                                <div class="bar-label">Em Andamento</div>
                                <div class="bar-container">
                                    <div class="bar-fill blue" style="width: ${(implantacoesAtivas/totalEmpresas)*100}%;"></div>
                                </div>
                                <div class="bar-value">${implantacoesAtivas}</div>
                            </div>
                            <div class="bar-item">
                                <div class="bar-label">Concluído</div>
                                <div class="bar-container">
                                    <div class="bar-fill green" style="width: ${(implantacoesConcluidas/totalEmpresas)*100}%;"></div>
                                </div>
                                <div class="bar-value">${implantacoesConcluidas}</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Widget 3: Progresso Médio -->
                    <div class="bi-widget">
                        <div class="bi-widget-header">
                            <h3 class="bi-widget-title">Progresso Médio</h3>
                            <p class="bi-widget-subtitle">Baseado nos módulos implementados</p>
                        </div>
                        <div class="bi-circular-progress">
                            <svg class="circular-chart" viewBox="0 0 36 36">
                                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path class="circle blue" stroke-dasharray="${progressoMedio}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            </svg>
                            <div class="percentage-text">${progressoMedio}%</div>
                        </div>
                        <div class="progress-label">Módulos Implementados</div>
                    </div>
                    
                    <!-- Widget 4: Módulos Mais Implementados -->
                    <div class="bi-widget">
                        <div class="bi-widget-header">
                            <h3 class="bi-widget-title">Módulos Mais Implementados</h3>
                        </div>
                        <div class="skills-list">
                            ${Object.entries(modulosCount)
                                .sort(([,a], [,b]) => b - a)
                                .slice(0, 5)
                                .map(([modulo, count], index) => {
                                    const percentage = Math.round((count / totalEmpresas) * 100);
                                    const iconClass = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'][index];
                                    return `
                                        <div class="skill-item">
                                            <div class="skill-info">
                                                <div class="skill-icon ${iconClass}">${modulo.charAt(0)}</div>
                                                <span class="skill-name">${modulo}</span>
                                            </div>
                                            <span class="skill-percentage">${percentage}%</span>
                                        </div>
                                    `;
                                }).join('')}
                        </div>
                    </div>
                    
                    <!-- Widget 5: Taxa de Conclusão -->
                    <div class="bi-widget">
                        <div class="bi-widget-header">
                            <h3 class="bi-widget-title">Taxa de Conclusão</h3>
                        </div>
                        <div class="bi-circular-progress">
                            <svg class="circular-chart" viewBox="0 0 36 36">
                                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path class="circle green" stroke-dasharray="${Math.round((implantacoesConcluidas/totalEmpresas)*100)}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            </svg>
                            <div class="percentage-text">${Math.round((implantacoesConcluidas/totalEmpresas)*100)}%</div>
                        </div>
                        <div class="progress-label">Implantações Finalizadas</div>
                    </div>
                    
                    <!-- Widget 6: Detalhes das Empresas -->
                    <div class="bi-widget">
                        <div class="bi-widget-header">
                            <h3 class="bi-widget-title">Empresas por Status</h3>
                        </div>
                        <div class="bi-data-table">
                            <div class="table-header">
                                <div>Empresa</div>
                                <div>Responsável</div>
                                <div>Status</div>
                                <div>Módulos</div>
                                <div>Progresso</div>
                            </div>
                            ${dadosImplantacao.map(impl => {
                                const modulosAtivos = Object.values(impl.modulos).filter(Boolean).length;
                                const totalModulos = Object.keys(impl.modulos).length;
                                const progresso = Math.round((modulosAtivos / totalModulos) * 100);
                                const statusClass = impl.status === 'concluido' ? 'status-success' : 
                                                   impl.status === 'em-andamento' ? 'status-warning' : 'status-info';
                                
                                return `
                                    <div class="table-row">
                                        <div class="empresa-name">${impl.nome}</div>
                                        <div class="responsavel-name">${impl.responsavel}</div>
                                        <div class="status-badge ${statusClass}">${impl.status.replace('-', ' ')}</div>
                                        <div class="modulos-count">${modulosAtivos}/${totalModulos}</div>
                                        <div class="progress-mini">
                                            <div class="progress-bar-mini">
                                                <div class="progress-fill-mini" style="width: ${progresso}%;"></div>
                                            </div>
                                            <span class="progress-text-mini">${progresso}%</span>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Adicionar interatividade
    setTimeout(() => {
        animateCircularCharts();
        animateBars();
    }, 100);
}

function criarGraficoModulos() {
    const modulos = [
        { nome: 'Importação', concluidos: 8, total: 10, icon: 'fas fa-download' },
        { nome: 'Cadastro Produto', concluidos: 7, total: 10, icon: 'fas fa-box' },
        { nome: 'Vendas', concluidos: 6, total: 10, icon: 'fas fa-shopping-cart' },
        { nome: 'Contabil', concluidos: 5, total: 10, icon: 'fas fa-calculator' },
        { nome: 'Financeiro', concluidos: 5, total: 10, icon: 'fas fa-dollar-sign' },
        { nome: 'Cadastro Pessoas', concluidos: 4, total: 10, icon: 'fas fa-users' },
        { nome: 'Fiscal', concluidos: 3, total: 10, icon: 'fas fa-file-invoice' },
        { nome: 'Manufatura', concluidos: 2, total: 10, icon: 'fas fa-industry' },
        { nome: 'Etiqueta', concluidos: 1, total: 10, icon: 'fas fa-tag' }
    ];
    
    return modulos.map(modulo => {
        const percentual = Math.round((modulo.concluidos / modulo.total) * 100);
        return `
            <div class="module-item">
                <div class="module-info">
                    <i class="${modulo.icon}"></i>
                    <span class="module-name">${modulo.nome}</span>
                </div>
                <div class="module-progress">
                    <div class="progress-bar small">
                        <div class="progress-fill" style="width: ${percentual}%"></div>
                    </div>
                    <span class="progress-text">${percentual}%</span>
                </div>
            </div>
        `;
    }).join('');
}

function criarLinhaPerformance(implantacao) {
    // Calcular progresso
    let progresso = 0;
    if (implantacao.checklist) {
        const checklistItems = Object.keys(implantacao.checklist);
        const itensCompletos = checklistItems.filter(key => implantacao.checklist[key]).length;
        progresso = Math.round((itensCompletos / checklistItems.length) * 100);
    }
    
    // Calcular tempo decorrido
    const dataInicio = new Date(implantacao.dataInicio || '2025-01-01');
    const hoje = new Date();
    const diasDecorridos = Math.floor((hoje - dataInicio) / (1000 * 60 * 60 * 24));
    
    const statusClass = implantacao.status === 'concluido' ? 'status-concluido' : 
                       implantacao.status === 'em-andamento' ? 'status-emandamento' : 'status-iniciado';
    
    return `
        <div class="table-row">
            <div class="empresa-info">
                <strong>${implantacao.nome}</strong>
            </div>
            <div class="responsavel-info">${implantacao.responsavel}</div>
            <div class="progress-cell">
                <div class="progress-bar mini">
                    <div class="progress-fill" style="width: ${progresso}%"></div>
                </div>
                <span>${progresso}%</span>
            </div>
            <div class="status-cell">
                <span class="${statusClass}">${implantacao.status.replace('-', ' ')}</span>
            </div>
            <div class="tempo-cell">${diasDecorridos} dias</div>
        </div>
    `;
}

function atualizarBI() {
    const periodo = document.getElementById('biPeriodoFilter').value;
    // Aqui você pode implementar filtros baseados no período
    renderBIAdmin();
}

function renderKanbanAdmin() {
    const adminContent = document.querySelector('.admin-content');
    if (!adminContent) return;
    
    let html = `
        <div class="admin-videos-header">
            <h2><i class="fas fa-tasks"></i> Kanban</h2>
            <button class="btn-add" onclick="abrirModalKanban()">
                <i class="fas fa-plus"></i> Nova Tarefa
            </button>
        </div>
        <div class="kanban-board-modern">`;
    
    const colunas = [
        { id: 'a-fazer', titulo: 'A Fazer', icone: 'fas fa-clock', cor: '#64748b' },
        { id: 'em-andamento', titulo: 'Em Andamento', icone: 'fas fa-play', cor: '#6b7280' },
        { id: 'concluido', titulo: 'Concluído', icone: 'fas fa-check', cor: '#9ca3af' }
    ];
    
    colunas.forEach(coluna => {
        html += `
            <div class="kanban-column-modern" data-status="${coluna.id}">
                <div class="kanban-header-modern" style="border-left: 4px solid ${coluna.cor}">
                    <div class="header-info">
                        <i class="${coluna.icone}" style="color: ${coluna.cor}"></i>
                        <span class="column-title">${coluna.titulo}</span>
                    </div>
                    <span class="task-count-modern">${kanbanTasks[coluna.id].length}</span>
                </div>
                <div class="kanban-tasks-grid">`;
        
        kanbanTasks[coluna.id].forEach((task, index) => {
            const priority = ['alta', 'média', 'baixa'][index % 3];
            const priorityColor = priority === 'alta' ? '#ef4444' : priority === 'média' ? '#f59e0b' : '#10b981';
            
            html += `
                <div class="kanban-task-modern" draggable="true" data-task-id="${task.id}">
                    <div class="task-header">
                        <div class="task-priority" style="background: ${priorityColor}"></div>
                        <div class="task-id">#${task.id}</div>
                    </div>
                    <h4 class="task-title">${task.titulo}</h4>
                    <p class="task-description">${task.desc}</p>
                    <div class="task-meta">
                        <div class="task-info">
                            <span class="priority-label" style="color: ${priorityColor}">${priority}</span>
                            <span class="task-date">Hoje</span>
                        </div>
                        <div class="task-actions-modern">
                            <button class="btn-action edit" onclick="editarTarefa(${task.id})" title="Editar">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-action delete" onclick="excluirTarefa(${task.id})" title="Excluir">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>`;
        });
        
        html += `</div></div>`;
    });
    
    html += `</div>`;
    adminContent.innerHTML = html;
    
    // Adicionar funcionalidade de drag and drop com delay para garantir que DOM esteja pronto
    setTimeout(() => {
        initializeKanbanDragDrop();
        console.log('Kanban drag and drop inicializado');
    }, 100);
}

// ===== FUNÇÕES DE MODAL E CRUD =====
function abrirModalVideo(videoId = null, moduleName = null, videoIndex = null) {
    const modal = document.getElementById('modalAdicionarVideo');
    const titulo = document.getElementById('videoTituloInput');
    const id = document.getElementById('videoIdInput');
    const modulo = document.getElementById('videoModuloSelect');
    const modalTitle = modal.querySelector('h2');
    const btnAdicionar = document.getElementById('btnAdicionarVideo');
    
    if (videoId && moduleName !== null && videoIndex !== null) {
        // Modo edição
        editingVideoId = { moduleName, videoIndex };
        const video = currentClient.modulos.find(m => m.nome === moduleName).videos[videoIndex];
        
        modalTitle.textContent = 'Editar Vídeo';
        btnAdicionar.textContent = 'Salvar Alterações';
        titulo.value = video.titulo;
        id.value = video.id;
        modulo.value = moduleName.toLowerCase().replace(/\s+/g, '-');
    } else {
        // Modo criação
        editingVideoId = null;
        modalTitle.textContent = 'Adicionar Novo Vídeo';
        btnAdicionar.textContent = 'Adicionar Vídeo';
        titulo.value = '';
        id.value = '';
        modulo.value = 'vendas';
    }
    
    modal.style.display = 'flex';
    modal.classList.add('show');
    setTimeout(() => titulo.focus(), 100);
}

function fecharModalVideo() {
    const modal = document.getElementById('modalAdicionarVideo');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        editingVideoId = null;
    }, 300);
}

function adicionarVideo() {
    const titulo = document.getElementById('videoTituloInput').value.trim();
    const videoId = document.getElementById('videoIdInput').value.trim();
    const moduloSelecionado = document.getElementById('videoModuloSelect').value;
    
    if (!titulo || !videoId) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    const moduleMap = {
        'cadastro-de-pessoas': 'Cadastro de Pessoas',
        'cadastro-de-produtos': 'Cadastro de Produtos',
        'vendas': 'Vendas',
        'fiscal': 'Fiscal',
        'financeiro': 'Financeiro',
        'manufatura': 'Manufatura'
    };
    
    const moduleName = moduleMap[moduloSelecionado];
    const modulo = currentClient.modulos.find(m => m.nome === moduleName);
    
    if (!modulo) {
        alert('Módulo não encontrado.');
        return;
    }
    
    const novoVideo = {
        id: videoId,
        titulo: titulo,
        duracao: "00:00",
        descricao: "Novo vídeo adicionado"
    };
    
    if (editingVideoId) {
        // Modo edição
        const { moduleName: editModuleName, videoIndex } = editingVideoId;
        const editModulo = currentClient.modulos.find(m => m.nome === editModuleName);
        
        if (editModulo && editModulo.videos[videoIndex]) {
            // Se mudou de módulo, remove do antigo e adiciona no novo
            if (editModuleName !== moduleName) {
                editModulo.videos.splice(videoIndex, 1);
                modulo.videos.push(novoVideo);
            } else {
                // Atualiza no mesmo módulo
                editModulo.videos[videoIndex] = { ...editModulo.videos[videoIndex], ...novoVideo };
            }
        }
    } else {
        // Modo criação
        modulo.videos.push(novoVideo);
    }
    
    fecharModalVideo();
    renderVideosAdmin();
    
    // Atualizar lista de vídeos se estiver na área de cliente
    if (document.getElementById('videoArea').style.display !== 'none') {
        loadClientVideos();
    }
}

function editarVideo(videoId, moduleName, videoIndex) {
    abrirModalVideo(videoId, moduleName, videoIndex);
}

function excluirVideo(moduleName, videoIndex) {
    if (confirm('Tem certeza que deseja excluir este vídeo?')) {
        const modulo = currentClient.modulos.find(m => m.nome === moduleName);
        if (modulo && modulo.videos[videoIndex]) {
            modulo.videos.splice(videoIndex, 1);
            renderVideosAdmin();
            
            // Atualizar lista de vídeos se estiver na área de cliente
            if (document.getElementById('videoArea').style.display !== 'none') {
                loadClientVideos();
            }
        }
    }
}

// ===== FUNÇÕES AUXILIARES =====
function abrirModalImplantacao() {
    const modal = document.getElementById('modalNovaImplantacao');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('show');
    }
}

function fecharModalImplantacao() {
    const modal = document.getElementById('modalNovaImplantacao');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

function adicionarImplantacao() {
    const nome = document.getElementById('empresaNomeInput').value.trim();
    const responsavel = document.getElementById('empresaResponsavelInput').value.trim();
    const status = document.getElementById('empresaStatusSelect').value;
    
    if (!nome || !responsavel) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    const novaImplantacao = {
        id: dadosImplantacao.length + 1,
        nome: nome,
        responsavel: responsavel,
        status: status,
        modulos: {
            Vendas: false,
            Financeiro: false,
            Fiscal: false,
            Manufatura: false,
            'Cadastro de Produtos': false,
            'Cadastro de Pessoas': false
        }
    };
    
    dadosImplantacao.push(novaImplantacao);
    fecharModalImplantacao();
    renderImplantacoesAdmin();
}

function editarImplantacao(id) {
    console.log('Editar implantação:', id);
}

function excluirImplantacao(id) {
    if (confirm('Tem certeza que deseja excluir esta implantação?')) {
        const index = dadosImplantacao.findIndex(impl => impl.id === id);
        if (index !== -1) {
            dadosImplantacao.splice(index, 1);
            renderImplantacoesAdmin();
        }
    }
}

function abrirModalKanban() {
    const modal = document.getElementById('modalNovaTarefa');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('show');
    }
}

function fecharModalKanban() {
    const modal = document.getElementById('modalNovaTarefa');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

function editarTarefa(id) {
    console.log('Editar tarefa:', id);
}

function excluirTarefa(id) {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
        // Encontrar e remover a tarefa
        Object.keys(kanbanTasks).forEach(status => {
            const index = kanbanTasks[status].findIndex(task => task.id === id);
            if (index !== -1) {
                kanbanTasks[status].splice(index, 1);
            }
        });
        renderKanbanAdmin();
    }
}


// Funções para interatividade do BI Dashboard
function animateCircularCharts() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const dashArray = circle.getAttribute('stroke-dasharray');
        if (dashArray) {
            circle.style.strokeDasharray = '0, 100';
            setTimeout(() => {
                circle.style.strokeDasharray = dashArray;
            }, 500);
        }
    });
}

function animateBars() {
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 200 + (index * 100));
    });
}



// Função para inicializar drag and drop do Kanban
function initializeKanbanDragDrop() {
    const tasks = document.querySelectorAll('.kanban-task-modern');
    const columns = document.querySelectorAll('.kanban-column-modern');
    
    console.log(`Inicializando drag and drop: ${tasks.length} tasks, ${columns.length} columns`);
    
    tasks.forEach((task, index) => {
        task.addEventListener('dragstart', (e) => {
            draggedTask = e.target;
            e.target.style.opacity = '0.5';
            e.target.classList.add('dragging');
            console.log(`Drag iniciado: task ${e.target.dataset.taskId}`);
        });
        
        task.addEventListener('dragend', (e) => {
            e.target.style.opacity = '1';
            e.target.classList.remove('dragging');
            draggedTask = null;
            console.log('Drag finalizado');
            
            // Remover feedback visual de todas as colunas
            columns.forEach(col => {
                col.classList.remove('drag-over');
            });
        });
    });
    
    columns.forEach((column, index) => {
        console.log(`Adicionando listeners à coluna ${index}: ${column.dataset.status}`);
        
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            column.classList.add('drag-over');
            console.log(`Dragover na coluna: ${column.dataset.status}`);
        });
        
        column.addEventListener('dragleave', (e) => {
            // Só remove o feedback se realmente saiu da coluna
            if (!column.contains(e.relatedTarget)) {
                column.classList.remove('drag-over');
                console.log(`Dragleave da coluna: ${column.dataset.status}`);
            }
        });
        
        column.addEventListener('drop', (e) => {
            e.preventDefault();
            column.classList.remove('drag-over');
            console.log(`Drop na coluna: ${column.dataset.status}`);
            
            if (draggedTask) {
                const taskId = parseInt(draggedTask.dataset.taskId);
                const newStatus = column.dataset.status;
                console.log(`Movendo task ${taskId} para ${newStatus}`);
                moveTask(taskId, newStatus);
            }
        });
    });
    
    console.log('Drag and drop inicializado com sucesso');
}

// Função para mover tarefa entre colunas
function moveTask(taskId, newStatus) {
    let task = null;
    let oldStatus = null;
    
    // Encontrar a tarefa e seu status atual
    for (const status in kanbanTasks) {
        const taskIndex = kanbanTasks[status].findIndex(t => t.id === taskId);
        if (taskIndex !== -1) {
            task = kanbanTasks[status][taskIndex];
            oldStatus = status;
            kanbanTasks[status].splice(taskIndex, 1);
            break;
        }
    }
    
    // Adicionar a tarefa na nova coluna
    if (task && oldStatus !== newStatus) {
        kanbanTasks[newStatus].push(task);
        renderKanbanAdmin(); // Re-renderizar o kanban
    }
}


// ===== FUNÇÕES DE ANOTAÇÕES =====
function renderAnotacoesAdmin() {
    const adminContent = document.querySelector('.admin-content');
    if (!adminContent) return;
    
    // Atualizar select de empresas no modal
    atualizarSelectEmpresas();
    
    let html = `
        <div class="anotacoes-container">
            <div class="anotacoes-header">
                <h2><i class="fas fa-sticky-note"></i> Anotações</h2>
                <button class="btn-add-anotacao" onclick="abrirModalAnotacao()">
                    <i class="fas fa-plus"></i> Nova Anotação
                </button>
            </div>`;
    
    if (dadosAnotacoes.length === 0) {
        html += `
            <div class="anotacoes-empty">
                <i class="fas fa-sticky-note"></i>
                <h3>Nenhuma anotação encontrada</h3>
                <p>Crie sua primeira anotação para começar a organizar suas informações</p>
                <button class="btn-add-anotacao" onclick="abrirModalAnotacao()">
                    <i class="fas fa-plus"></i> Criar Primeira Anotação
                </button>
            </div>`;
    } else {
        html += `<div class="post-its-grid">`;
        
        dadosAnotacoes.forEach(anotacao => {
            const dataFormatada = formatarDataBR(anotacao.dataCreacao);
            const empresaTag = anotacao.empresa ? `<span class="post-it-empresa">${anotacao.empresa}</span>` : '';
            
            html += `
                <div class="post-it ${anotacao.cor}" data-id="${anotacao.id}">
                    <div class="post-it-header">
                        <h3 class="post-it-titulo">${anotacao.titulo}</h3>
                        <div class="post-it-acoes">
                            <button class="post-it-btn edit" onclick="editarAnotacao(${anotacao.id})" title="Editar">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="post-it-btn delete" onclick="excluirAnotacao(${anotacao.id})" title="Excluir">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div class="post-it-conteudo">${anotacao.conteudo}</div>
                    <div class="post-it-footer">
                        <span class="post-it-data">${dataFormatada}</span>
                        ${empresaTag}
                    </div>
                </div>`;
        });
        
        html += `</div>`;
    }
    
    html += `</div>`;
    adminContent.innerHTML = html;
}

function abrirModalAnotacao(anotacaoId = null) {
    const modal = document.getElementById('modalNovaAnotacao');
    const titulo = document.getElementById('modalAnotacaoTitulo');
    const btnSalvar = document.getElementById('btnSalvarAnotacao');
    
    if (anotacaoId) {
        // Modo edição
        const anotacao = dadosAnotacoes.find(a => a.id === anotacaoId);
        if (anotacao) {
            editingAnotacaoId = anotacaoId;
            titulo.textContent = 'Editar Anotação';
            btnSalvar.textContent = 'Salvar Alterações';
            
            document.getElementById('anotacaoTituloInput').value = anotacao.titulo;
            document.getElementById('anotacaoConteudoInput').value = anotacao.conteudo;
            document.getElementById('anotacaoCorSelect').value = anotacao.cor;
            document.getElementById('anotacaoEmpresaSelect').value = anotacao.empresa || '';
        }
    } else {
        // Modo criação
        editingAnotacaoId = null;
        titulo.textContent = 'Nova Anotação';
        btnSalvar.textContent = 'Criar Anotação';
        
        document.getElementById('anotacaoTituloInput').value = '';
        document.getElementById('anotacaoConteudoInput').value = '';
        document.getElementById('anotacaoCorSelect').value = 'amarelo';
        document.getElementById('anotacaoEmpresaSelect').value = '';
    }
    
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('show');
        
        // Focar no campo título
        setTimeout(() => {
            document.getElementById('anotacaoTituloInput').focus();
        }, 100);
    }
}

function fecharModalAnotacao() {
    const modal = document.getElementById('modalNovaAnotacao');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }
    editingAnotacaoId = null;
}

function salvarAnotacao() {
    const titulo = document.getElementById('anotacaoTituloInput').value.trim();
    const conteudo = document.getElementById('anotacaoConteudoInput').value.trim();
    const cor = document.getElementById('anotacaoCorSelect').value;
    const empresa = document.getElementById('anotacaoEmpresaSelect').value;
    
    if (!titulo || !conteudo) {
        alert('Por favor, preencha o título e o conteúdo da anotação.');
        return;
    }
    
    if (editingAnotacaoId) {
        // Modo edição
        const anotacao = dadosAnotacoes.find(a => a.id === editingAnotacaoId);
        if (anotacao) {
            anotacao.titulo = titulo;
            anotacao.conteudo = conteudo;
            anotacao.cor = cor;
            anotacao.empresa = empresa;
        }
    } else {
        // Modo criação
        const novaAnotacao = {
            id: Math.max(...dadosAnotacoes.map(a => a.id), 0) + 1,
            titulo: titulo,
            conteudo: conteudo,
            cor: cor,
            empresa: empresa,
            dataCreacao: new Date().toISOString().split('T')[0]
        };
        
        dadosAnotacoes.push(novaAnotacao);
    }
    
    fecharModalAnotacao();
    renderAnotacoesAdmin();
}

function editarAnotacao(anotacaoId) {
    abrirModalAnotacao(anotacaoId);
}

function excluirAnotacao(anotacaoId) {
    if (confirm('Tem certeza que deseja excluir esta anotação?')) {
        const index = dadosAnotacoes.findIndex(a => a.id === anotacaoId);
        if (index !== -1) {
            dadosAnotacoes.splice(index, 1);
            renderAnotacoesAdmin();
        }
    }
}

function atualizarSelectEmpresas() {
    const select = document.getElementById('anotacaoEmpresaSelect');
    if (!select) return;
    
    // Limpar opções existentes (exceto a primeira)
    while (select.children.length > 1) {
        select.removeChild(select.lastChild);
    }
    
    // Adicionar empresas dos dados de implantação
    dadosImplantacao.forEach(empresa => {
        const option = document.createElement('option');
        option.value = empresa.nome;
        option.textContent = empresa.nome;
        select.appendChild(option);
    });
}

function formatarDataBR(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
}



// Função para alternar visibilidade dos módulos
function toggleModule(moduleId) {
    const moduleVideos = document.getElementById(`videos-${moduleId}`);
    const toggleIcon = document.getElementById(`toggle-${moduleId}`);
    
    if (moduleVideos && toggleIcon) {
        if (moduleVideos.style.display === 'none') {
            moduleVideos.style.display = 'block';
            toggleIcon.classList.remove('fa-chevron-down');
            toggleIcon.classList.add('fa-chevron-up');
        } else {
            moduleVideos.style.display = 'none';
            toggleIcon.classList.remove('fa-chevron-up');
            toggleIcon.classList.add('fa-chevron-down');
        }
    }
}

