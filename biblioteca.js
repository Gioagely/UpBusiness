// ===== DADOS E CONFIGURAÇÕES =====
let clientes = {};
let empresas = [];

// Variáveis globais
let currentClient = null;
let currentVideos = [];
let currentVideoIndex = -1;
let currentModuleFilter = 'todos';
let isAdmin = false;
let editandoEmpresa = null;
let charts = {};

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", async function() {
    await loadData();
    initializeTheme();
    setupEventListeners();
    showLoginArea();
    carregarDados();
    carregarDadosKanban();
});

function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle i');
    if (document.documentElement.classList.contains('light-theme')) {
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    }
}

function setupEventListeners() {
    // Event listeners para navegação por categorias
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
            
            // Atualizar tab ativo
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Event listener para busca global
    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('input', function() {
            filterVideos(this.value);
        });
    }

    // Event listener para checkbox de conclusão
    const completedCheckbox = document.getElementById('completedCheckbox');
    if (completedCheckbox) {
        completedCheckbox.addEventListener('change', function() {
            updateVideoProgress();
        });
    }
}

// ===== FUNÇÕES DE LOGIN =====
function alternarTipoAcesso() {
    const isAdminMode = document.getElementById("accessToggle").checked;
    const userForm = document.getElementById("userForm");
    const adminForm = document.getElementById("adminForm");
    const clienteText = document.getElementById("clienteText");
    const adminText = document.getElementById("adminText");

    // Toggle forms
    userForm.style.display = isAdminMode ? "none" : "block";
    adminForm.style.display = isAdminMode ? "block" : "none";

    // Toggle labels
    clienteText.classList.toggle("active", !isAdminMode);
    adminText.classList.toggle("active", isAdminMode);

    // Clear error messages
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
        showAdminArea();
    } else {
        showErrorMessage('adminErrorMsg', 'Credenciais incorretas!');
    }
}

function showErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 3000);
    }
}

function hideErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.style.display = 'none');
}

function clearFormInputs() {
    document.getElementById('domainInput').value = '';
    document.getElementById('adminUser').value = '';
    document.getElementById('adminPass').value = '';
}

// ===== FUNÇÕES DE NAVEGAÇÃO =====
function showLoginArea() {
    document.getElementById('loginArea').style.display = 'block';
    document.getElementById('videoArea').style.display = 'none';
    document.getElementById('adminArea').style.display = 'none';
    document.getElementById('mainNav').style.display = 'none';
    document.getElementById('headerSearch').style.display = 'none';
    
    // Reset login state
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('userBtn').style.display = 'none';
}

function showVideoArea() {
    document.getElementById('loginArea').style.display = 'none';
    document.getElementById('videoArea').style.display = 'block';
    document.getElementById('adminArea').style.display = 'none';
    document.getElementById('mainNav').style.display = 'block';
    document.getElementById('headerSearch').style.display = 'block';
    
    // Update header
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('userBtn').style.display = 'block';
    document.getElementById('userName').textContent = currentClient.nome;
    
    // Update branding
    updateClientBranding();
    
    // Load videos
    loadClientVideos();
}

function showAdminArea() {
    document.getElementById('loginArea').style.display = 'none';
    document.getElementById('videoArea').style.display = 'none';
    document.getElementById('adminArea').style.display = 'block';
    document.getElementById('mainNav').style.display = 'none';
    document.getElementById('headerSearch').style.display = 'none';
    
    // Update header
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('userBtn').style.display = 'block';
    document.getElementById('userName').textContent = 'Administrador';
    
    // Load admin content
    renderAdminContent();
}

function voltarInicio() {
    currentClient = null;
    isAdmin = false;
    showLoginArea();
    clearFormInputs();
    hideErrorMessages();
}

function mostrarLogin() {
    showLoginArea();
}

function irParaLogin() {
    // Se já estiver na área de login, rolar para o topo
    if (document.getElementById('loginArea').style.display !== 'none') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    // Caso contrário, mostrar a área de login
    showLoginArea();
    
    // Rolar para o topo após um pequeno delay para garantir que a área foi mostrada
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

function mostrarPerfil() {
    // Implementar modal de perfil se necessário
    console.log('Mostrar perfil');
}

// ===== FUNÇÕES DE TEMA =====
function alternarTema() {
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (html.classList.contains('light-theme')) {
        html.classList.remove('light-theme');
        html.classList.add('dark-theme');
        themeToggle.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('tema', 'dark');
    } else {
        html.classList.remove('dark-theme');
        html.classList.add('light-theme');
        themeToggle.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('tema', 'light');
    }
}

// ===== FUNÇÕES DE CLIENTE =====
function updateClientBranding() {
    if (!currentClient) return;
    
    // Update logos
    const logos = document.querySelectorAll('#logoHeader, #logoFooter');
    logos.forEach(logo => {
        logo.src = currentClient.logo;
        logo.alt = `Logo ${currentClient.nome}`;
    });
    
    // Update CSS custom properties for client color
    document.documentElement.style.setProperty('--client-color', currentClient.cor);
}

function loadClientVideos() {
    if (!currentClient) return;
    
    currentVideos = [];
    currentClient.modulos.forEach(modulo => {
        modulo.videos.forEach(video => {
            currentVideos.push({
                ...video,
                modulo: modulo.nome,
                icone: modulo.icone
            });
        });
    });
    
    renderVideoList();
}

function renderVideoList() {
    const videoList = document.getElementById('videoList');
    if (!videoList) return;
    
    let html = '';
    
    // Group videos by module
    const moduleGroups = {};
    currentVideos.forEach(video => {
        if (!moduleGroups[video.modulo]) {
            moduleGroups[video.modulo] = [];
        }
        moduleGroups[video.modulo].push(video);
    });
    
    // Render each module
    Object.keys(moduleGroups).forEach(moduleName => {
        const videos = moduleGroups[moduleName];
        const moduleIcon = videos[0].icone;
        
        html += `
            <div class="module-group">
                <div class="module-header">
                    <i class="${moduleIcon}"></i>
                    <span>${moduleName}</span>
                </div>
                <div class="module-videos">
        `;
        
        videos.forEach((video, index) => {
            const globalIndex = currentVideos.indexOf(video);
            html += `
                <div class="course-item" onclick="playVideo(${globalIndex})">
                    <div class="course-thumbnail">
                        <i class="fas fa-play"></i>
                    </div>
                    <div class="course-info">
                        <h4>${video.titulo}</h4>
                        <div class="course-meta">
                            <span class="duration">
                                <i class="fas fa-clock"></i>
                                ${video.duracao}
                            </span>
                            <span class="module">
                                <i class="${video.icone}"></i>
                                ${video.modulo}
                            </span>
                        </div>
                        <p class="course-description">${video.descricao}</p>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    videoList.innerHTML = html;
}

function playVideo(index) {
    if (index < 0 || index >= currentVideos.length) return;
    
    currentVideoIndex = index;
    const video = currentVideos[index];
    
    // Update video player
    const iframe = document.getElementById('currentVideo');
    const placeholder = document.getElementById('videoPlaceholder');
    
    if (iframe && placeholder) {
        iframe.src = `https://www.youtube.com/embed/${video.id}`;
        iframe.style.display = 'block';
        placeholder.style.display = 'none';
    }
    
    // Update video info
    document.getElementById('videoTitle').textContent = video.titulo;
    document.getElementById('videoDuration').textContent = video.duracao;
    document.getElementById('videoModule').textContent = video.modulo;
    
    // Show video sections
    document.getElementById('videoMeta').style.display = 'flex';
    document.getElementById('progressSection').style.display = 'block';
    document.getElementById('completionSection').style.display = 'block';
    document.getElementById('transcriptionSection').style.display = 'block';
    document.getElementById('videoNavigation').style.display = 'flex';
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Update transcription
    updateTranscription(video);
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevVideoBtn');
    const nextBtn = document.getElementById('nextVideoBtn');
    
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

function updateTranscription(video) {
    const transcriptionContent = document.getElementById("transcriptionContent");
    if (transcriptionContent) {
        transcriptionContent.innerHTML = `
            <h3>Sobre este curso:</h3>
            <p>${video.descricao}</p>
            <p><strong>Duração:</strong> ${video.duracao}</p>
            <p><strong>Módulo:</strong> ${video.modulo}</p>
            <p>Assista agora e aprimore suas habilidades!</p>
        `;
    }
}

function copiarTranscricao() {
    const transcriptionContent = document.getElementById('transcriptionContent');
    if (transcriptionContent) {
        const text = transcriptionContent.innerText;
        navigator.clipboard.writeText(text).then(() => {
            // Show success message
            console.log('Transcrição copiada!');
        });
    }
}

function updateVideoProgress() {
    // Implementar lógica de progresso
    const checkbox = document.getElementById('completedCheckbox');
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById('progressPercentage');
    
    if (checkbox && checkbox.checked) {
        if (progressFill) progressFill.style.width = '100%';
        if (progressPercentage) progressPercentage.textContent = '100%';
    } else {
        if (progressFill) progressFill.style.width = '0%';
        if (progressPercentage) progressPercentage.textContent = '0%';
    }
}

// ===== FUNÇÕES DE FILTRO =====
function filterByCategory(category) {
    currentModuleFilter = category;
    
    if (category === 'todos') {
        loadClientVideos();
    } else {
        const filteredVideos = currentVideos.filter(video => 
            video.modulo.toLowerCase() === category.toLowerCase()
        );
        
        // Temporarily update currentVideos for rendering
        const originalVideos = [...currentVideos];
        currentVideos = filteredVideos;
        renderVideoList();
        currentVideos = originalVideos;
    }
    
    // Update breadcrumb
    const moduleNames = {
        'todos': 'Todos os Cursos',
        'vendas': 'Vendas',
        'cadastros': 'Cadastros',
        'financeiro': 'Financeiro',
        'operacoes': 'Operações'
    };
    
    document.getElementById('currentModule').textContent = moduleNames[category] || category;
}

function filtrarVideos() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const courseItems = document.querySelectorAll('.course-item');
    
    courseItems.forEach(item => {
        const title = item.querySelector('h4').textContent.toLowerCase();
        const description = item.querySelector('.course-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function filterVideos(searchTerm) {
    filtrarVideos();
}

// ===== FUNÇÕES DE ADMIN =====
function renderAdminContent() {
    const adminContent = document.querySelector('.admin-content');
    if (!adminContent) return;
    
    adminContent.innerHTML = `
        <div id="adminVideos" class="admin-section active">
            <div class="admin-header">
                <h2>Gerenciar Vídeos</h2>
                <button class="btn-primary" onclick="abrirModalVideo()">
                    <i class="fas fa-plus"></i>
                    Adicionar Vídeo
                </button>
            </div>
            <div class="admin-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Duração</th>
                            <th>Módulo</th>
                            <th>Domínio</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody id="videosTableBody">
                        <!-- Videos will be loaded here -->
                    </tbody>
                </table>
            </div>
        </div>
        
        <div id="adminImplantacoes" class="admin-section">
            <div class="admin-header">
                <h2>Controle de Implantação</h2>
                <button class="btn-primary" onclick="adicionarEmpresa()">
                    <i class="fas fa-plus"></i>
                    Adicionar Empresa
                </button>
            </div>
            
            <!-- Filtros -->
            <div class="filters-container">
                <div class="filter-group">
                    <label for="statusFilterAdmin">Status:</label>
                    <select id="statusFilterAdmin" onchange="filtrarEmpresasAdmin()">
                        <option value="todos">Todos</option>
                        <option value="iniciado">Iniciado</option>
                        <option value="em-andamento">Em Andamento</option>
                        <option value="concluido">Concluído</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="searchFilterAdmin">Buscar:</label>
                    <input type="text" id="searchFilterAdmin" placeholder="Nome da empresa..." oninput="filtrarEmpresasAdmin()">
                </div>
            </div>
            
            <!-- Cards de Empresas -->
            <div class="empresas-grid" id="empresasGridAdmin">
                <!-- Cards serão gerados dinamicamente -->
            </div>
        </div>
        
        <div id="adminBI" class="admin-section">
            <div class="admin-header">
                <h2>Business Intelligence</h2>
                <div class="bi-controls">
                    <button class="btn-secondary" onclick="exportarRelatorio()">
                        <i class="fas fa-download"></i>
                        Exportar Relatório
                    </button>
                    <button class="btn-secondary" onclick="atualizarDadosBI()">
                        <i class="fas fa-sync-alt"></i>
                        Atualizar Dados
                    </button>
                </div>
            </div>
            
            <!-- Dashboard BI -->
            <div class="bi-dashboard">
                <!-- Métricas Principais -->
                <div class="metrics-row">
                    <div class="metric-card">
                        <div class="metric-icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <div class="metric-content">
                            <h3 id="totalEmpresasBI">0</h3>
                            <p>Total de Empresas</p>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="metric-content">
                            <h3 id="emAndamentoBI">0</h3>
                            <p>Em Andamento</p>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="metric-content">
                            <h3 id="concluidasBI">0</h3>
                            <p>Concluídas</p>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">
                            <i class="fas fa-percentage"></i>
                        </div>
                        <div class="metric-content">
                            <h3 id="percentualConclusaoBI">0%</h3>
                            <p>Taxa de Conclusão</p>
                        </div>
                    </div>
                </div>
                
                <!-- Gráficos -->
                <div class="charts-row">
                    <div class="chart-container">
                        <h3>Status das Implantações</h3>
                        <canvas id="statusChartBI"></canvas>
                    </div>
                    <div class="chart-container">
                        <h3>Progresso por Módulo</h3>
                        <canvas id="modulosChartBI"></canvas>
                    </div>
                </div>
                
                <div class="charts-row">
                    <div class="chart-container full-width">
                        <h3>Timeline de Implantações</h3>
                        <canvas id="timelineChartBI"></canvas>
                    </div>
                </div>
                
                <!-- Tabela de Detalhes -->
                <div class="details-table">
                    <h3>Detalhes das Implantações</h3>
                    <div class="table-container">
                        <table id="detalhesTableBI">
                            <thead>
                                <tr>
                                    <th>Empresa</th>
                                    <th>Progresso</th>
                                    <th>Módulos Concluídos</th>
                                    <th>Data Início</th>
                                    <th>Previsão Conclusão</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody id="detalhesTableBodyBI">
                                <!-- Dados serão preenchidos dinamicamente -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="adminScrum" class="admin-section">
            <h2>Esteira de Produção</h2>
            <div class="admin-header">
                <button class="btn-primary" onclick="abrirModalKanban()">
                    <i class="fas fa-plus"></i>
                    Adicionar Tarefa
                </button>
                <div class="pipeline-stats">
                    <!-- Estatísticas serão atualizadas dinamicamente -->
                </div>
            </div>
            
            <div class="production-pipeline">
                <!-- Pipeline será renderizado dinamicamente -->
            </div>
        </div>
    `;
    
    loadAdminVideos();
    renderEmpresasAdmin();
    initializeBIAdmin();
}

function loadAdminVideos() {
    const tbody = document.getElementById('videosTableBody');
    if (!tbody) return;
    
    let html = '';
    
    Object.keys(clientes).forEach(dominio => {
        const cliente = clientes[dominio];
        cliente.modulos.forEach(modulo => {
            modulo.videos.forEach((video, index) => {
                html += `
                    <tr>
                        <td>${video.id}</td>
                        <td>${video.titulo}</td>
                        <td>${video.duracao}</td>
                        <td>${modulo.nome}</td>
                        <td>${dominio}</td>
                        <td>
                            <button class="btn-edit" onclick="editarVideo('${dominio}', '${modulo.nome}', ${index})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-delete" onclick="deletarVideo('${dominio}', '${modulo.nome}', ${index})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
        });
    });
    
    tbody.innerHTML = html;
}

function mostrarSecaoAdmin(secao) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(`admin${secao.charAt(0).toUpperCase() + secao.slice(1)}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update navigation
    document.querySelectorAll('.admin-nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    // Se for BI, atualizar dados
    if (secao === 'BI') {
        atualizarDadosBI();
    } else if (secao === 'scrum') {
        // Inicializar o Kanban
        updateKanbanDisplay();
    }
}

// ===== FUNÇÕES DE IMPLANTAÇÃO NO ADMIN =====
function renderEmpresasAdmin() {
    const grid = document.getElementById('empresasGridAdmin');
    if (!grid) return;
    
    let html = '';
    
    empresas.forEach(empresa => {
        const progresso = calcularProgresso(empresa);
        const statusClass = `status-${empresa.status}`;
        const statusText = getStatusText(empresa.status);
        
        html += `
            <div class="empresa-card animate-slide-up" data-empresa-id="${empresa.id}">
                <div class="empresa-header">
                    <div class="empresa-info">
                        <h3>${empresa.nome}</h3>
                        <p>Domínio: ${empresa.dominio}</p>
                        <p>Responsável: ${empresa.responsavel}</p>
                    </div>
                    <div class="empresa-status ${statusClass}">
                        ${statusText}
                    </div>
                </div>
                
                <div class="empresa-progress">
                    <div class="progress-header">
                        <span class="progress-label">Progresso Geral</span>
                        <span class="progress-percentage">${progresso}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progresso}%"></div>
                    </div>
                </div>
                
                <div class="modulos-grid">
                    ${renderModulosAdmin(empresa)}
                </div>
                
                <div class="empresa-actions">
                    <button class="btn-action" onclick="editarEmpresa(${empresa.id})">
                        <i class="fas fa-edit"></i>
                        Editar
                    </button>
                    <button class="btn-action" onclick="duplicarEmpresa(${empresa.id})">
                        <i class="fas fa-copy"></i>
                        Duplicar
                    </button>
                    <button class="btn-action" onclick="excluirEmpresa(${empresa.id})">
                        <i class="fas fa-trash"></i>
                        Excluir
                    </button>
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

function renderModulosAdmin(empresa) {
    let html = '';
    
    Object.keys(empresa.modulos).forEach(moduloKey => {
        const modulo = empresa.modulos[moduloKey];
        const checkedClass = modulo.concluido ? 'checked' : '';
        const completedClass = modulo.concluido ? 'completed' : '';
        
        html += `
            <div class="modulo-item ${completedClass}" onclick="toggleModuloAdmin(${empresa.id}, '${moduloKey}')">
                <div class="modulo-header">
                    <div class="modulo-title">
                        <i class="fas fa-cog"></i>
                        ${modulo.nome}
                    </div>
                    <div class="modulo-checkbox ${checkedClass}"></div>
                </div>
            </div>
        `;
    });
    
    return html;
}

function calcularProgresso(empresa) {
    const totalModulos = Object.keys(empresa.modulos).length;
    const modulosConcluidos = Object.values(empresa.modulos).filter(m => m.concluido).length;
    return Math.round((modulosConcluidos / totalModulos) * 100);
}

function getStatusText(status) {
    const statusMap = {
        'iniciado': 'Iniciado',
        'em-andamento': 'Em Andamento',
        'concluido': 'Concluído'
    };
    return statusMap[status] || status;
}

function toggleModuloAdmin(empresaId, moduloKey) {
    const empresa = empresas.find(e => e.id === empresaId);
    if (!empresa) return;
    
    // Toggle do status do módulo
    empresa.modulos[moduloKey].concluido = !empresa.modulos[moduloKey].concluido;
    
    // Atualizar status da empresa baseado no progresso
    const progresso = calcularProgresso(empresa);
    if (progresso === 0) {
        empresa.status = 'iniciado';
    } else if (progresso === 100) {
        empresa.status = 'concluido';
    } else {
        empresa.status = 'em-andamento';
    }
    
    // Re-renderizar
    renderEmpresasAdmin();
    
    // Atualizar BI se estiver visível
    if (document.getElementById('adminBI').classList.contains('active')) {
        atualizarDadosBI();
    }
    
    // Salvar no localStorage
    salvarDados();
}

function filtrarEmpresasAdmin() {
    const statusFilter = document.getElementById('statusFilterAdmin').value;
    const searchFilter = document.getElementById('searchFilterAdmin').value.toLowerCase();
    
    const cards = document.querySelectorAll('#empresasGridAdmin .empresa-card');
    
    cards.forEach(card => {
        const empresaId = parseInt(card.dataset.empresaId);
        const empresa = empresas.find(e => e.id === empresaId);
        
        let mostrar = true;
        
        // Filtro por status
        if (statusFilter !== 'todos' && empresa.status !== statusFilter) {
            mostrar = false;
        }
        
        // Filtro por busca
        if (searchFilter && !empresa.nome.toLowerCase().includes(searchFilter)) {
            mostrar = false;
        }
        
        card.style.display = mostrar ? 'block' : 'none';
    });
}

// ===== FUNÇÕES DE BI NO ADMIN =====
function initializeBIAdmin() {
    atualizarMetricasBI();
    criarGraficosBI();
    atualizarTabelaDetalhesBI();
}

function atualizarDadosBI() {
    atualizarMetricasBI();
    atualizarGraficosBI();
    atualizarTabelaDetalhesBI();
}

function atualizarMetricasBI() {
    const totalEmpresas = empresas.length;
    const emAndamento = empresas.filter(e => e.status === 'em-andamento').length;
    const concluidas = empresas.filter(e => e.status === 'concluido').length;
    const percentualConclusao = totalEmpresas > 0 ? Math.round((concluidas / totalEmpresas) * 100) : 0;
    
    const totalElement = document.getElementById('totalEmpresasBI');
    const andamentoElement = document.getElementById('emAndamentoBI');
    const concluidasElement = document.getElementById('concluidasBI');
    const percentualElement = document.getElementById('percentualConclusaoBI');
    
    if (totalElement) totalElement.textContent = totalEmpresas;
    if (andamentoElement) andamentoElement.textContent = emAndamento;
    if (concluidasElement) concluidasElement.textContent = concluidas;
    if (percentualElement) percentualElement.textContent = percentualConclusao + '%';
}

function criarGraficosBI() {
    criarGraficoStatusBI();
    criarGraficoModulosBI();
    criarGraficoTimelineBI();
}

function atualizarGraficosBI() {
    // Destruir gráficos existentes
    Object.values(charts).forEach(chart => {
        if (chart) chart.destroy();
    });
    
    // Recriar gráficos
    criarGraficosBI();
}

function criarGraficoStatusBI() {
    const ctx = document.getElementById('statusChartBI');
    if (!ctx) return;
    
    const statusCount = {
        'iniciado': empresas.filter(e => e.status === 'iniciado').length,
        'em-andamento': empresas.filter(e => e.status === 'em-andamento').length,
        'concluido': empresas.filter(e => e.status === 'concluido').length
    };
    
    charts.statusBI = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Iniciado', 'Em Andamento', 'Concluído'],
            datasets: [{
                data: [statusCount.iniciado, statusCount['em-andamento'], statusCount.concluido],
                backgroundColor: [
                    '#ffc107',
                    '#007bff',
                    '#28a745'
                ],
                borderWidth: 2,
                borderColor: '#1a1a1a'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#E2E8F0',
                        padding: 20
                    }
                }
            }
        }
    });
}

function criarGraficoModulosBI() {
    const ctx = document.getElementById('modulosChartBI');
    if (!ctx) return;
    
    const modulosData = {};
    
    // Contar módulos concluídos por tipo
    empresas.forEach(empresa => {
        Object.keys(empresa.modulos).forEach(moduloKey => {
            if (!modulosData[moduloKey]) {
                modulosData[moduloKey] = { total: 0, concluidos: 0 };
            }
            modulosData[moduloKey].total++;
            if (empresa.modulos[moduloKey].concluido) {
                modulosData[moduloKey].concluidos++;
            }
        });
    });
    
    const labels = Object.keys(modulosData).map(key => 
        empresas[0].modulos[key].nome
    );
    
    const percentuais = Object.values(modulosData).map(data => 
        data.total > 0 ? Math.round((data.concluidos / data.total) * 100) : 0
    );
    
    charts.modulosBI = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Percentual de Conclusão',
                data: percentuais,
                backgroundColor: '#10e81e',
                borderColor: '#5cee3f',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#E2E8F0',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#E2E8F0',
                        maxRotation: 45
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#E2E8F0'
                    }
                }
            }
        }
    });
}

function criarGraficoTimelineBI() {
    const ctx = document.getElementById('timelineChartBI');
    if (!ctx) return;
    
    charts.timelineBI = new Chart(ctx, {
        type: 'line',
        data: {
            labels: empresas.map(e => e.nome),
            datasets: [{
                label: 'Progresso (%)',
                data: empresas.map(e => calcularProgresso(e)),
                borderColor: '#10e81e',
                backgroundColor: 'rgba(16, 232, 30, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#10e81e',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#E2E8F0',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#E2E8F0',
                        maxRotation: 45
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#E2E8F0'
                    }
                }
            }
        }
    });
}

function atualizarTabelaDetalhesBI() {
    const tbody = document.getElementById('detalhesTableBodyBI');
    if (!tbody) return;
    
    let html = '';
    
    empresas.forEach(empresa => {
        const progresso = calcularProgresso(empresa);
        const modulosConcluidos = Object.values(empresa.modulos).filter(m => m.concluido).length;
        const totalModulos = Object.keys(empresa.modulos).length;
        const statusClass = `status-${empresa.status}`;
        const statusText = getStatusText(empresa.status);
        
        html += `
            <tr>
                <td>${empresa.nome}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="flex: 1; height: 8px; background: #25272a; border-radius: 4px; overflow: hidden;">
                            <div style="height: 100%; background: linear-gradient(135deg, #10e81e 0%, #33c05b 100%); width: ${progresso}%; transition: width 0.3s ease;"></div>
                        </div>
                        <span style="color: #10e81e; font-weight: 600;">${progresso}%</span>
                    </div>
                </td>
                <td>${modulosConcluidos}/${totalModulos}</td>
                <td>${formatarData(empresa.dataInicio)}</td>
                <td>${formatarData(empresa.dataPrevisao)}</td>
                <td><span class="empresa-status ${statusClass}">${statusText}</span></td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html;
}

function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
}

function exportarRelatorio() {
    const dados = {
        timestamp: new Date().toISOString(),
        metricas: {
            totalEmpresas: empresas.length,
            emAndamento: empresas.filter(e => e.status === 'em-andamento').length,
            concluidas: empresas.filter(e => e.status === 'concluido').length
        },
        empresas: empresas.map(empresa => ({
            nome: empresa.nome,
            progresso: calcularProgresso(empresa),
            status: empresa.status,
            responsavel: empresa.responsavel,
            dataInicio: empresa.dataInicio,
            dataPrevisao: empresa.dataPrevisao
        }))
    };
    
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio_implantacoes_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===== FUNÇÕES DE MODAL DE EMPRESA =====
function adicionarEmpresa() {
    editandoEmpresa = null;
    document.getElementById('modalTitle').textContent = 'Adicionar Nova Empresa';
    
    // Limpar formulário
    document.getElementById('nomeEmpresa').value = '';
    document.getElementById('dominioEmpresa').value = '';
    document.getElementById('dataInicio').value = '';
    document.getElementById('dataPrevisao').value = '';
    document.getElementById('responsavel').value = '';
    
    document.getElementById('empresaModal').style.display = 'flex';
}

function editarEmpresa(empresaId) {
    const empresa = empresas.find(e => e.id === empresaId);
    if (!empresa) return;
    
    editandoEmpresa = empresa;
    document.getElementById('modalTitle').textContent = 'Editar Empresa';
    
    // Preencher formulário
    document.getElementById('nomeEmpresa').value = empresa.nome;
    document.getElementById('dominioEmpresa').value = empresa.dominio;
    document.getElementById('dataInicio').value = empresa.dataInicio;
    document.getElementById('dataPrevisao').value = empresa.dataPrevisao;
    document.getElementById('responsavel').value = empresa.responsavel;
    
    document.getElementById('empresaModal').style.display = 'flex';
}

function duplicarEmpresa(empresaId) {
    const empresa = empresas.find(e => e.id === empresaId);
    if (!empresa) return;
    
    const novaEmpresa = {
        ...empresa,
        id: Math.max(...empresas.map(e => e.id)) + 1,
        nome: empresa.nome + ' (Cópia)',
        dominio: empresa.dominio + '_copia',
        status: 'iniciado',
        modulos: {}
    };
    
    // Resetar todos os módulos
    Object.keys(empresa.modulos).forEach(key => {
        novaEmpresa.modulos[key] = {
            ...empresa.modulos[key],
            concluido: false
        };
    });
    
    empresas.push(novaEmpresa);
    renderEmpresasAdmin();
    salvarDados();
}

function excluirEmpresa(empresaId) {
    if (!confirm('Tem certeza que deseja excluir esta empresa?')) return;
    
    empresas = empresas.filter(e => e.id !== empresaId);
    renderEmpresasAdmin();
    salvarDados();
    
    // Atualizar BI se estiver visível
    if (document.getElementById('adminBI').classList.contains('active')) {
        atualizarDadosBI();
    }
}

function fecharModal() {
    document.getElementById('empresaModal').style.display = 'none';
    editandoEmpresa = null;
}

function salvarEmpresa() {
    const nome = document.getElementById('nomeEmpresa').value.trim();
    const dominio = document.getElementById('dominioEmpresa').value.trim();
    const dataInicio = document.getElementById('dataInicio').value;
    const dataPrevisao = document.getElementById('dataPrevisao').value;
    const responsavel = document.getElementById('responsavel').value.trim();
    
    if (!nome || !dominio || !dataInicio || !dataPrevisao || !responsavel) {
        alert('Por favor, preencha todos os campos');
        return;
    }
    
    const modulosDefault = {
        "cadastro-produto": { nome: "Cadastro de Produto", concluido: false },
        "cadastro-pessoa": { nome: "Cadastro de Pessoa", concluido: false },
        "vendas": { nome: "Vendas", concluido: false },
        "financeiro": { nome: "Financeiro", concluido: false },
        "fiscal": { nome: "Fiscal", concluido: false },
        "manufatura": { nome: "Manufatura", concluido: false },
        "pedido-venda": { nome: "Pedido de Venda", concluido: false },
        "vitrine": { nome: "Vitrine", concluido: false },
        "etiqueta": { nome: "Etiqueta", concluido: false },
        "importacao": { nome: "Importação", concluido: false }
    };
    
    if (editandoEmpresa) {
        // Editar empresa existente
        editandoEmpresa.nome = nome;
        editandoEmpresa.dominio = dominio;
        editandoEmpresa.dataInicio = dataInicio;
        editandoEmpresa.dataPrevisao = dataPrevisao;
        editandoEmpresa.responsavel = responsavel;
    } else {
        // Adicionar nova empresa
        const novaEmpresa = {
            id: Math.max(...empresas.map(e => e.id)) + 1,
            nome,
            dominio,
            dataInicio,
            dataPrevisao,
            responsavel,
            status: 'iniciado',
            modulos: modulosDefault
        };
        
        empresas.push(novaEmpresa);
    }
    
    renderEmpresasAdmin();
    fecharModal();
    salvarDados();
    
    // Atualizar BI se estiver visível
    if (document.getElementById('adminBI').classList.contains('active')) {
        atualizarDadosBI();
    }
}

// ===== FUNÇÕES DE PERSISTÊNCIA =====
function salvarDados() {
    localStorage.setItem('empresas_implantacao', JSON.stringify(empresas));
}

function carregarDados() {
    const dadosSalvos = localStorage.getItem('empresas_implantacao');
    if (dadosSalvos) {
        empresas = JSON.parse(dadosSalvos);
    }
}

function salvarDadosKanban() {
    localStorage.setItem('kanban_tasks', JSON.stringify(kanbanTasks));
}

function carregarDadosKanban() {
    const dadosSalvos = localStorage.getItem('kanban_tasks');
    if (dadosSalvos) {
        kanbanTasks = JSON.parse(dadosSalvos);
    }
}

function abrirModalVideo() {
    const modal = document.getElementById('videoModal');
    if (modal) {
        modal.style.display = 'block';
        document.getElementById('modalTitle').textContent = 'Adicionar Novo Vídeo';
        document.getElementById('modalConfirmBtn').textContent = 'Adicionar';
        
        // Clear form
        document.getElementById('videoId').value = '';
        document.getElementById('videoTitulo').value = '';
        document.getElementById('videoDuracao').value = '';
        document.getElementById('videoModulo').value = '';
        document.getElementById('videoDominio').value = '';
        
        // Show domain field for new videos
        document.getElementById('dominioGroup').style.display = 'block';
    }
}

function confirmarVideo() {
    const id = document.getElementById('videoId').value.trim();
    const titulo = document.getElementById('videoTitulo').value.trim();
    const duracao = document.getElementById('videoDuracao').value.trim();
    const modulo = document.getElementById('videoModulo').value.trim();
    const dominio = document.getElementById('videoDominio').value.trim();
    
    if (!id || !titulo || !modulo || !dominio) {
        alert('Por favor, preencha todos os campos obrigatórios');
        return;
    }
    
    // Add video logic here
    console.log('Adicionando vídeo:', { id, titulo, duracao, modulo, dominio });
    
    fecharModal();
    loadAdminVideos();
}

function editarVideo(dominio, moduloNome, videoIndex) {
    console.log('Editando vídeo:', dominio, moduloNome, videoIndex);
}

function deletarVideo(dominio, moduloNome, videoIndex) {
    if (confirm('Tem certeza que deseja deletar este vídeo?')) {
        console.log('Deletando vídeo:', dominio, moduloNome, videoIndex);
        loadAdminVideos();
    }
}

// ===== FUNÇÕES DE ADMIN - IMPLANTAÇÕES =====
function abrirModalImplantacao() {
    adicionarEmpresa();
}

// ===== FUNÇÕES DE ADMIN - KANBAN =====
let kanbanTasks = [
    {
        id: 1,
        title: "Implementar Sistema de Login",
        description: "Desenvolver autenticação completa com JWT e validações de segurança.",
        priority: "high",
        assignee: "João Silva",
        estimate: "8h",
        stage: "backlog",
        progress: 0
    },
    {
        id: 2,
        title: "Criar Dashboard de Vendas",
        description: "Interface para visualização de métricas e relatórios de vendas.",
        priority: "medium",
        assignee: "Maria Santos",
        estimate: "12h",
        stage: "backlog",
        progress: 0
    },
    {
        id: 3,
        title: "Otimizar Performance",
        description: "Melhorar tempo de carregamento e responsividade da aplicação.",
        priority: "low",
        assignee: "Pedro Costa",
        estimate: "6h",
        stage: "backlog",
        progress: 0
    },
    {
        id: 4,
        title: "Análise de Requisitos - CRM",
        description: "Levantamento detalhado dos requisitos para módulo CRM.",
        priority: "high",
        assignee: "Ana Lima",
        estimate: "4h",
        stage: "analysis",
        progress: 0
    },
    {
        id: 5,
        title: "Revisão de Arquitetura",
        description: "Validar estrutura do banco de dados e APIs.",
        priority: "medium",
        assignee: "Carlos Mendes",
        estimate: "3h",
        stage: "analysis",
        progress: 0
    },
    {
        id: 6,
        title: "API de Produtos",
        description: "Desenvolvimento dos endpoints para gestão de produtos.",
        priority: "high",
        assignee: "João Silva",
        estimate: "16h",
        stage: "development",
        progress: 65
    },
    {
        id: 7,
        title: "Interface de Relatórios",
        description: "Componentes React para exibição de relatórios.",
        priority: "medium",
        assignee: "Maria Santos",
        estimate: "10h",
        stage: "development",
        progress: 0
    },
    {
        id: 8,
        title: "Testes de Integração",
        description: "Validar integração entre módulos de vendas e estoque.",
        priority: "high",
        assignee: "Pedro Costa",
        estimate: "8h",
        stage: "testing",
        progress: 0
    },
    {
        id: 9,
        title: "Testes de Performance",
        description: "Avaliar performance sob carga e otimizar gargalos.",
        priority: "medium",
        assignee: "Ana Lima",
        estimate: "6h",
        stage: "testing",
        progress: 0
    },
    {
        id: 10,
        title: "Deploy Módulo Financeiro",
        description: "Publicação em produção do módulo financeiro v2.1.",
        priority: "high",
        assignee: "Carlos Mendes",
        estimate: "2h",
        stage: "deploy",
        progress: 100
    }
];

let draggedTask = null;
let editandoTarefa = null;

function abrirModalKanban() {
    editandoTarefa = null;
    document.getElementById('modalTitleKanban').textContent = 'Adicionar Nova Tarefa';
    document.getElementById('modalConfirmBtnKanban').textContent = 'Adicionar Tarefa';
    
    // Limpar formulário
    document.getElementById('tarefaTitulo').value = '';
    document.getElementById('tarefaDescricao').value = '';
    document.getElementById('tarefaPrioridade').value = 'medium';
    document.getElementById('tarefaResponsavel').value = '';
    document.getElementById('tarefaEstimativa').value = '';
    document.getElementById('tarefaEstagio').value = 'backlog';
    document.getElementById('tarefaProgresso').value = '0';
    
    document.getElementById('kanbanModal').style.display = 'flex';
}

function fecharModalKanban() {
    document.getElementById('kanbanModal').style.display = 'none';
    editandoTarefa = null;
}

function salvarTarefaKanban() {
    const titulo = document.getElementById('tarefaTitulo').value.trim();
    const descricao = document.getElementById('tarefaDescricao').value.trim();
    const prioridade = document.getElementById('tarefaPrioridade').value;
    const responsavel = document.getElementById('tarefaResponsavel').value.trim();
    const estimativa = document.getElementById('tarefaEstimativa').value.trim();
    const estagio = document.getElementById('tarefaEstagio').value;
    const progresso = parseInt(document.getElementById('tarefaProgresso').value) || 0;
    
    if (!titulo || !descricao || !responsavel || !estimativa) {
        alert('Por favor, preencha todos os campos obrigatórios');
        return;
    }
    
    if (editandoTarefa) {
        // Editar tarefa existente
        editandoTarefa.title = titulo;
        editandoTarefa.description = descricao;
        editandoTarefa.priority = prioridade;
        editandoTarefa.assignee = responsavel;
        editandoTarefa.estimate = estimativa;
        editandoTarefa.stage = estagio;
        editandoTarefa.progress = progresso;
        
        showNotification(`Tarefa "${titulo}" atualizada com sucesso!`, 'success');
    } else {
        // Adicionar nova tarefa
        const novaTarefa = {
            id: Math.max(...kanbanTasks.map(t => t.id)) + 1,
            title: titulo,
            description: descricao,
            priority: prioridade,
            assignee: responsavel,
            estimate: estimativa,
            stage: estagio,
            progress: progresso
        };
        
        kanbanTasks.push(novaTarefa);
        showNotification(`Tarefa "${titulo}" adicionada com sucesso!`, 'success');
    }
    
    // Atualizar display do Kanban
    updateKanbanDisplay();
    
    // Fechar modal
    fecharModalKanban();
    
    // Salvar no localStorage
    salvarDadosKanban();
}

function editarTarefaKanban(taskId) {
    const tarefa = kanbanTasks.find(t => t.id === taskId);
    if (!tarefa) return;
    
    editandoTarefa = tarefa;
    document.getElementById('modalTitleKanban').textContent = 'Editar Tarefa';
    document.getElementById('modalConfirmBtnKanban').textContent = 'Salvar Alterações';
    
    // Preencher formulário
    document.getElementById('tarefaTitulo').value = tarefa.title;
    document.getElementById('tarefaDescricao').value = tarefa.description;
    document.getElementById('tarefaPrioridade').value = tarefa.priority;
    document.getElementById('tarefaResponsavel').value = tarefa.assignee;
    document.getElementById('tarefaEstimativa').value = tarefa.estimate;
    document.getElementById('tarefaEstagio').value = tarefa.stage;
    document.getElementById('tarefaProgresso').value = tarefa.progress;
    
    document.getElementById('kanbanModal').style.display = 'flex';
}

function excluirTarefaKanban(taskId) {
    const tarefa = kanbanTasks.find(t => t.id === taskId);
    if (!tarefa) return;
    
    if (!confirm(`Tem certeza que deseja excluir a tarefa "${tarefa.title}"?`)) return;
    
    kanbanTasks = kanbanTasks.filter(t => t.id !== taskId);
    updateKanbanDisplay();
    salvarDadosKanban();
    
    showNotification(`Tarefa "${tarefa.title}" excluída com sucesso!`, 'success');
}

function adicionarTarefaStage(stage) {
    // Abrir modal com estágio pré-selecionado
    abrirModalKanban();
    document.getElementById('tarefaEstagio').value = stage;
}

function renderKanbanBoard() {
    const stages = ['backlog', 'analysis', 'development', 'testing', 'deploy'];
    const stageNames = {
        'backlog': 'Backlog',
        'analysis': 'Análise',
        'development': 'Desenvolvimento',
        'testing': 'Testes',
        'deploy': 'Deploy'
    };
    const stageIcons = {
        'backlog': 'fas fa-inbox',
        'analysis': 'fas fa-search',
        'development': 'fas fa-code',
        'testing': 'fas fa-bug',
        'deploy': 'fas fa-rocket'
    };

    let pipelineHTML = '';
    
    stages.forEach(stage => {
        const stageTasks = kanbanTasks.filter(task => task.stage === stage);
        const taskCount = stageTasks.length;
        
        pipelineHTML += `
            <div class="pipeline-stage" id="${stage}Stage" ondrop="dropTask(event, '${stage}')" ondragover="allowDrop(event)">
                <div class="stage-header">
                    <div class="stage-title">
                        <i class="${stageIcons[stage]}"></i>
                        <h3>${stageNames[stage]}</h3>
                        <span class="task-count">${taskCount}</span>
                    </div>
                    <div class="stage-actions">
                        <button class="stage-btn" onclick="adicionarTarefaStage('${stage}')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="stage-content">
                    ${renderStageTasks(stageTasks)}
                </div>
            </div>
        `;
    });

    return pipelineHTML;
}

function renderStageTasks(tasks) {
    return tasks.map(task => {
        const priorityClass = `priority-${task.priority}`;
        const statusClass = task.progress === 100 ? 'completed' : (task.progress > 0 ? 'in-progress' : '');
        
        let progressHTML = '';
        if (task.progress > 0 && task.progress < 100) {
            progressHTML = `
                <div class="card-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${task.progress}%"></div>
                    </div>
                    <span class="progress-text">${task.progress}%</span>
                </div>
            `;
        }
        
        let completedHTML = '';
        if (task.progress === 100) {
            completedHTML = `
                <div class="card-completed">
                    <i class="fas fa-check-circle"></i>
                    Concluído
                </div>
            `;
        }
        
        return `
            <div class="pipeline-card ${priorityClass} ${statusClass}" 
                 draggable="true" 
                 ondragstart="dragStart(event, ${task.id})"
                 data-task-id="${task.id}">
                <div class="card-header">
                    <div class="card-priority">${task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}</div>
                    <div class="card-id">#${task.id.toString().padStart(3, '0')}</div>
                </div>
                <div class="card-actions">
                    <button class="card-action-btn edit" onclick="editarTarefaKanban(${task.id})" title="Editar tarefa">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="card-action-btn delete" onclick="excluirTarefaKanban(${task.id})" title="Excluir tarefa">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <h4>${task.title}</h4>
                <p>${task.description}</p>
                ${progressHTML}
                <div class="card-footer">
                    <div class="card-assignee">
                        <i class="fas fa-user"></i>
                        ${task.assignee}
                    </div>
                    <div class="card-estimate">${task.estimate}</div>
                </div>
                ${completedHTML}
            </div>
        `;
    }).join('');
}

function dragStart(event, taskId) {
    draggedTask = taskId;
    event.dataTransfer.effectAllowed = "move";
    
    // Adicionar efeito visual ao card sendo arrastado
    const card = event.target;
    card.style.opacity = "0.5";
    card.style.transform = "rotate(5deg)";
}

function allowDrop(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    
    // Adicionar efeito visual na área de drop
    const stage = event.currentTarget;
    stage.style.backgroundColor = "rgba(16, 232, 30, 0.1)";
    stage.style.borderColor = "var(--alura-primary)";
}

function dropTask(event, targetStage) {
    event.preventDefault();
    
    if (draggedTask) {
        // Encontrar a tarefa
        const task = kanbanTasks.find(t => t.id === draggedTask);
        if (task && task.stage !== targetStage) {
            // Atualizar o estágio da tarefa
            task.stage = targetStage;
            
            // Resetar progresso se movendo para estágios anteriores
            if (targetStage === 'backlog' || targetStage === 'analysis') {
                task.progress = 0;
            } else if (targetStage === 'deploy' && task.progress < 100) {
                task.progress = 100;
            }
            
            // Re-renderizar o Kanban
            updateKanbanDisplay();
            
            // Mostrar notificação de sucesso
            showNotification(`Tarefa "${task.title}" movida para ${getStageDisplayName(targetStage)}`, 'success');
        }
    }
    
    // Remover efeitos visuais
    const stage = event.currentTarget;
    stage.style.backgroundColor = "";
    stage.style.borderColor = "";
    
    // Resetar card arrastado
    if (draggedTask) {
        const card = document.querySelector(`[data-task-id="${draggedTask}"]`);
        if (card) {
            card.style.opacity = "";
            card.style.transform = "";
        }
    }
    
    draggedTask = null;
}

function getStageDisplayName(stage) {
    const stageNames = {
        'backlog': 'Backlog',
        'analysis': 'Análise',
        'development': 'Desenvolvimento',
        'testing': 'Testes',
        'deploy': 'Deploy'
    };
    return stageNames[stage] || stage;
}

function updateKanbanDisplay() {
    const pipelineContainer = document.querySelector('.production-pipeline');
    if (pipelineContainer) {
        pipelineContainer.innerHTML = renderKanbanBoard();
        updateKanbanStats();
    }
}

function updateKanbanStats() {
    const totalTasks = kanbanTasks.length;
    const inProgressTasks = kanbanTasks.filter(task => task.stage === 'development' || task.stage === 'testing').length;
    const completedTasks = kanbanTasks.filter(task => task.progress === 100).length;
    const efficiency = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    // Atualizar estatísticas no cabeçalho
    const statsContainer = document.querySelector('.pipeline-stats');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-item">
                <span class="stat-number">${totalTasks}</span>
                <span class="stat-label">Total de Tarefas</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${inProgressTasks}</span>
                <span class="stat-label">Em Produção</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${efficiency}%</span>
                <span class="stat-label">Eficiência</span>
            </div>
        `;
    }
}

function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Adicionar estilos inline para a notificação
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(40, 167, 69, 0.9)' : 'rgba(0, 123, 255, 0.9)'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        animation: slideInRight 0.3s ease-out;
        font-size: 14px;
        font-weight: 500;
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Adicionar estilos CSS para as animações de notificação
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .pipeline-stage {
        transition: all 0.3s ease;
    }
    
    .pipeline-stage:hover {
        transform: translateY(-2px);
    }
    
    .pipeline-card {
        transition: all 0.3s ease;
    }
    
    .pipeline-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .pipeline-card[draggable="true"]:hover {
        cursor: grab;
    }
    
    .pipeline-card[draggable="true"]:active {
        cursor: grabbing;
    }
`;
document.head.appendChild(notificationStyles);

// ===== EXPOSIÇÃO GLOBAL DAS FUNÇÕES =====
window.alternarTipoAcesso = alternarTipoAcesso;
window.formatarDominio = formatarDominio;
window.validarDominio = validarDominio;
window.validarAdmin = validarAdmin;
window.alternarTema = alternarTema;
window.voltarInicio = voltarInicio;
window.mostrarLogin = mostrarLogin;
window.irParaLogin = irParaLogin;
window.mostrarPerfil = mostrarPerfil;
window.playVideo = playVideo;
window.navegarVideo = navegarVideo;
window.copiarTranscricao = copiarTranscricao;
window.filterByCategory = filterByCategory;
window.filtrarVideos = filtrarVideos;
window.filterVideos = filterVideos;
window.mostrarSecaoAdmin = mostrarSecaoAdmin;
window.abrirModalVideo = abrirModalVideo;
window.fecharModal = fecharModal;
window.confirmarVideo = confirmarVideo;
window.editarVideo = editarVideo;
window.deletarVideo = deletarVideo;
window.abrirModalImplantacao = abrirModalImplantacao;
window.abrirModalKanban = abrirModalKanban;
window.adicionarTarefaStage = adicionarTarefaStage;

// Funções de implantação
window.adicionarEmpresa = adicionarEmpresa;
window.editarEmpresa = editarEmpresa;
window.duplicarEmpresa = duplicarEmpresa;
window.excluirEmpresa = excluirEmpresa;
window.salvarEmpresa = salvarEmpresa;
window.toggleModuloAdmin = toggleModuloAdmin;
window.filtrarEmpresasAdmin = filtrarEmpresasAdmin;
window.exportarRelatorio = exportarRelatorio;
window.atualizarDadosBI = atualizarDadosBI;

// Funções do Kanban
window.fecharModalKanban = fecharModalKanban;
window.salvarTarefaKanban = salvarTarefaKanban;
window.editarTarefaKanban = editarTarefaKanban;
window.excluirTarefaKanban = excluirTarefaKanban;
window.dragStart = dragStart;
window.allowDrop = allowDrop;
window.dropTask = dropTask;

async function atualizarJson() {
    const response = await fetch('/.netlify/functions/updateGitHubJson', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // Envie o conteúdo do JSON atualizado aqui
            clientes: {
                grupoduzani: {
                    nome: "Novo Nome",
                    cor: "#FF5733",
                    logo: "nova_imagem.png",
                    modulos: [
                        // dados dos módulos
                    ]
                }
            }
        }),
    });

    const result = await response.json();
    if (response.status === 200) {
        alert('Arquivo JSON atualizado com sucesso!');
    } else {
        alert('Falha ao atualizar o arquivo JSON');
    }
}

const updateButton = document.querySelector('.update-button');

updateButton.addEventListener('click', async () => {
    const updatedData = {
        clientes: {
            grupoduzani: {
                nome: "Novo Nome",
                cor: "#FF5733",
                logo: "nova_imagem.png",
                modulos: [
                    { "nome": "Vendas", "videos": ["Video 1", "Video 2"] }
                ]
            }
        }
    };

    const response = await fetch('/.netlify/functions/updateGitHubJson', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData)
    });

    const result = await response.json();
    console.log(result);
});



async function loadData() {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        clientes = data.clientes;
        empresas = data.empresas;
    } catch (error) {
        console.error("Erro ao carregar dados do JSON:", error);
    }
}

