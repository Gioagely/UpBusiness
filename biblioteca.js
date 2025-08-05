// ===== DADOS E CONFIGURAÇÕES =====
let clientes = {
    grupoduzani: {
        nome: "Grupo Duzani",
        cor: "#FF5733",
        logo: "https://via.placeholder.com/150x50?text=Duzani",
        modulos: [
            {
                nome: "Vendas",
                icone: "fas fa-chart-line",
                videos: [
                    { id: "dQw4w9WgXcQ", titulo: "Introdução às Vendas", duracao: "05:00", descricao: "Aprenda os conceitos básicos do módulo de vendas." },
                    { id: "hY7m5jjJ9mM", titulo: "Gestão de Pipeline", duracao: "07:30", descricao: "Como gerenciar oportunidades de vendas no sistema." }
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
                nome: "Cadastro de Pessoas",
                icone: "fas fa-user-friends",
                videos: [
                    { id: "Zi_XLOBDo_Y", titulo: "Gerenciamento de Clientes e Fornecedores", duracao: "08:10", descricao: "Entenda como gerenciar pessoas no sistema." }
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
                nome: "Fiscal",
                icone: "fas fa-file-invoice",
                videos: [
                    { id: "3JZ_D3ELwOQ", titulo: "Notas Fiscais Eletrônicas", duracao: "07:20", descricao: "Como emitir e gerenciar NF-es." }
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
};

let empresas = [];

// Variáveis globais
let currentClient = null;
let currentVideos = [];
let currentVideoIndex = -1;
let currentModuleFilter = 'todos';
let isAdmin = false;
let editandoEmpresa = null;
let charts = {};

// ===== INICIALIZAÇÃO E EVENTOS =====
document.addEventListener('DOMContentLoaded', ( ) => {
    initializeTheme();
    setupEventListeners();
    carregarDados();
    carregarDadosKanban();
    
    // Adiciona eventos aos botões do modal de vídeo
    const btnAdicionar = document.getElementById('btnAdicionarVideo');
    if (btnAdicionar) {
        btnAdicionar.addEventListener('click', adicionarVideo);
    }
    
    const closeModalBtn = document.getElementById('closeModalVideo');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', fecharModalVideo);
    }

    const cancelarModalBtn = document.getElementById('cancelarModalVideo');
    if (cancelarModalBtn) {
        cancelarModalBtn.addEventListener('click', fecharModalVideo);
    }
});


function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle i');
    if (document.documentElement.classList.contains('light-theme')) {
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    }
}

function setupEventListeners() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('input', function() {
            filterVideos(this.value);
        });
    }

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

    userForm.style.display = isAdminMode ? "none" : "block";
    adminForm.style.display = isAdminMode ? "block" : "none";

    clienteText.classList.toggle("active", !isAdminMode);
    adminText.classList.toggle("active", isAdminMode);

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
        // Define o cliente atual
        currentClient = clientes[dominio];
        isAdmin = false;

        // **CORREÇÃO ADICIONADA AQUI**
        // Força a atualização da logo imediatamente após definir o cliente.
        updateClientBranding(); 
        
        // Mostra a área de vídeos (que também chama a atualização, mas agora garantimos)
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
        currentClient = clientes['grupoduzani'];
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
    
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('userBtn').style.display = 'none';
}

function showVideoArea() {
    document.getElementById('loginArea').style.display = 'none';
    document.getElementById('videoArea').style.display = 'block';
    document.getElementById('adminArea').style.display = 'none';
    document.getElementById('mainNav').style.display = 'block';
    document.getElementById('headerSearch').style.display = 'block';
    
    // Atualiza o cabeçalho
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('userBtn').style.display = 'block';
    document.getElementById('userName').textContent = currentClient.nome;
    
    // Garante que a logo seja atualizada
    updateClientBranding();
    
    // Carrega os vídeos do cliente
    loadClientVideos();
}

function showAdminArea() {
    document.getElementById('loginArea').style.display = 'none';
    document.getElementById('videoArea').style.display = 'none';
    document.getElementById('adminArea').style.display = 'block';
    document.getElementById('mainNav').style.display = 'none';
    document.getElementById('headerSearch').style.display = 'none';
    
    // Atualiza o cabeçalho
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('userBtn').style.display = 'block';
    document.getElementById('userName').textContent = 'Administrador';
    
    // Garante que a logo seja atualizada também para o admin
    updateClientBranding();
    
    // Carrega o conteúdo do admin
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
    if (document.getElementById('loginArea').style.display !== 'none') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    showLoginArea();
    
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

function mostrarPerfil() {
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
    const logoPath = "images-removebg-preview.png";

    const logoHeader = document.getElementById('logoHeader');
    const logoFooter = document.getElementById('logoFooter');

    if (logoHeader) {
        logoHeader.src = logoPath;
        logoHeader.alt = "Logo Up Business";
    }

    if (logoFooter) {
        logoFooter.src = logoPath;
        logoFooter.alt = "Logo Up Business";
    }

    // Ainda mantém a cor do cliente, se houver
    if (currentClient && currentClient.cor) {
        document.documentElement.style.setProperty('--client-color', currentClient.cor);
    }
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
    
    // Agrupa os vídeos por módulo
    const moduleGroups = {};
    currentVideos.forEach(video => {
        if (!moduleGroups[video.modulo]) {
            moduleGroups[video.modulo] = [];
        }
        moduleGroups[video.modulo].push(video);
    });
    
    // Renderiza cada módulo
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
        
        videos.forEach((video) => {
            const globalIndex = currentVideos.indexOf(video);
            html += `
                <div class="course-item" onclick="playVideo(${globalIndex})">
                    <div class="course-thumbnail">
                        <i class="fas fa-play"></i>
                    </div>
                    <div class="course-info">
                        <h4>${video.titulo}</h4>
                        <div class="course-meta">
                            <!-- A DURAÇÃO FOI REMOVIDA DAQUI -->
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
    
    const iframe = document.getElementById('currentVideo');
    const placeholder = document.getElementById('videoPlaceholder');
    
    if (iframe && placeholder) {
        iframe.src = `https://www.youtube.com/embed/${video.id}`;
        iframe.style.display = 'block';
        placeholder.style.display = 'none';
    }
    
    document.getElementById('videoTitle' ).textContent = video.titulo;
    document.getElementById('videoDuration').textContent = video.duracao || '--:--';
    document.getElementById('videoModule').textContent = video.modulo;
    
    document.getElementById('videoMeta').style.display = 'flex';
    document.getElementById('progressSection').style.display = 'block';
    document.getElementById('completionSection').style.display = 'block';
    document.getElementById('transcriptionSection').style.display = 'block';
    document.getElementById('videoNavigation').style.display = 'flex';
    
    updateNavigationButtons();
    updateTranscription(video);
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevVideoBtn');
    const nextBtn = document.getElementById('nextVideoBtn');
    
    if (prevBtn) prevBtn.disabled = currentVideoIndex <= 0;
    if (nextBtn) nextBtn.disabled = currentVideoIndex >= currentVideos.length - 1;
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
            <p><strong>Duração:</strong> ${video.duracao || 'N/D'}</p>
            <p><strong>Módulo:</strong> ${video.modulo}</p>
            <p>Assista agora e aprimore suas habilidades!</p>
        `;
    }
}

function copiarTranscricao() {
    const transcriptionContent = document.getElementById('transcriptionContent');
    if (transcriptionContent) {
        navigator.clipboard.writeText(transcriptionContent.innerText).then(() => {
            showNotification('Transcrição copiada!', 'success');
        });
    }
}

function updateVideoProgress() {
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
        const originalVideos = [...currentVideos];
        const filtered = originalVideos.filter(video => 
            video.modulo.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
        );
        
        const tempVideos = [...currentVideos];
        currentVideos = filtered;
        renderVideoList();
        currentVideos = tempVideos;
    }
    
    const moduleNames = {
        'todos': 'Todos os Cursos',
        'vendas': 'Vendas',
        'cadastro-de-produtos': 'Cadastro de Produtos',
        'cadastro-de-pessoas': 'Cadastro de Pessoas',
        'financeiro': 'Financeiro',
        'fiscal': 'Fiscal',
        'manufatura': 'Manufatura'
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
            item.style.display = 'flex';
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
            <div class="admin-table-container">
                <table class="admin-table">
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
                    <tbody id="videosTableBody"></tbody>
                </table>
            </div>
        </div>
        
        <div id="adminImplantacoes" class="admin-section">
            <h2>Controle de Implantação</h2>
            <!-- Conteúdo de implantações aqui -->
        </div>
        
        <div id="adminBI" class="admin-section">
            <h2>Business Intelligence</h2>
            <!-- Conteúdo de BI aqui -->
        </div>
        
        <div id="adminScrum" class="admin-section">
            <h2>Esteira de Produção (Kanban)</h2>
            <!-- Conteúdo do Kanban aqui -->
        </div>
    `;
    
    loadAdminVideos();
    // Chamar outras funções de renderização se necessário
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
                        <td>${video.duracao || 'N/D'}</td>
                        <td>${modulo.nome}</td>
                        <td>${dominio}</td>
                        <td>
                            <button class="btn-action edit" onclick="editarVideo('${dominio}', '${modulo.nome}', ${index})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-action delete" onclick="deletarVideo('${dominio}', '${modulo.nome}', ${index})">
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
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(`admin${secao.charAt(0).toUpperCase() + secao.slice(1)}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    document.querySelectorAll('.admin-nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(secao)) {
            btn.classList.add('active');
        }
    });
}

// ===== FUNÇÕES DO MODAL DE VÍDEO (CORRIGIDO) =====

// Abre o modal e carrega os módulos
function abrirModalVideo() {
    const modal = document.getElementById('modalAdicionarVideo');
    const selectModulo = document.getElementById('videoModuloSelect');

    // Limpa as opções antigas
    selectModulo.innerHTML = '';

    // Usa o cliente atual (currentClient) para popular os módulos
    if (currentClient && currentClient.modulos && currentClient.modulos.length > 0) {
        currentClient.modulos.forEach(modulo => {
            const option = document.createElement('option');
            option.value = modulo.nome;
            option.textContent = modulo.nome;
            selectModulo.appendChild(option);
        });
    } else {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Nenhum módulo disponível';
        selectModulo.appendChild(option);
    }

    // Limpa os campos do formulário
    document.getElementById('videoTituloInput').value = '';
    document.getElementById('videoIdInput').value = '';
    
    modal.style.display = 'flex';
}

// Fecha o modal
function fecharModalVideo() {
    const modal = document.getElementById('modalAdicionarVideo');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Adiciona o vídeo ao módulo selecionado
function adicionarVideo() {
    const tituloField = document.getElementById('videoTituloInput');
    const idField = document.getElementById('videoIdInput');
    const moduloField = document.getElementById('videoModuloSelect');

    if (!tituloField || !idField || !moduloField) {
        console.error('Campos do modal não encontrados no DOM!');
        return;
    }

    const titulo = tituloField.value.trim();
    const videoId = idField.value.trim();
    const moduloNome = moduloField.value;

    if (!titulo) {
        alert('Por favor, preencha o título do vídeo.');
        return;
    }

    if (!videoId) {
        alert('Por favor, preencha o ID do vídeo.');
        return;
    }

    if (!moduloNome) {
        alert('Por favor, selecione um módulo.');
        return;
    }

    if (!currentClient) {
        alert('Nenhum cliente selecionado. Não é possível adicionar o vídeo.');
        return;
    }

    const targetModulo = currentClient.modulos.find(m => m.nome === moduloNome);

    if (!targetModulo) {
        alert(`Módulo "${moduloNome}" não encontrado para o cliente atual!`);
        return;
    }

    // Adiciona o novo vídeo ao array de vídeos do módulo
    targetModulo.videos.push({
        id: videoId,
        titulo: titulo,
        duracao: "N/D", // Você pode adicionar um campo para duração se quiser
        descricao: "Vídeo Upbusinees"
    });

    fecharModalVideo();
    loadAdminVideos(); // Atualiza a tabela de vídeos no painel admin
    loadClientVideos(); // Atualiza a lista de vídeos para o usuário

    showNotification('Vídeo adicionado com sucesso!', 'success');
}


function editarVideo(dominio, moduloNome, videoIndex) {
    // Lógica para editar um vídeo (pode abrir o mesmo modal preenchido)
    alert(`Funcionalidade de editar vídeo ainda não implementada.`);
    console.log('Editando vídeo:', dominio, moduloNome, videoIndex);
}

function deletarVideo(dominio, moduloNome, videoIndex) {
    if (confirm('Tem certeza que deseja deletar este vídeo?')) {
        const cliente = clientes[dominio];
        if (cliente) {
            const modulo = cliente.modulos.find(m => m.nome === moduloNome);
            if (modulo && modulo.videos[videoIndex]) {
                modulo.videos.splice(videoIndex, 1);
                loadAdminVideos();
                loadClientVideos();
                showNotification('Vídeo deletado com sucesso!', 'success');
            }
        }
    }
}


// ===== FUNÇÕES DE PERSISTÊNCIA E UTILITÁRIOS =====
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

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i><span>${message}</span>`;
    
    document.body.appendChild(notification);
    
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
    .notification {
        position: fixed;
        top: 90px;
        right: 20px;
        background: rgba(0, 123, 255, 0.9);
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
    }
    .notification-success {
        background: rgba(40, 167, 69, 0.9);
    }
    @keyframes slideInRight {
        from { opacity: 0; transform: translateX(100%); }
        to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideOutRight {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(100%); }
    }
`;
document.head.appendChild(notificationStyles);


// ===== EXPOSIÇÃO GLOBAL DAS FUNÇÕES (para `onclick` no HTML) =====
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
window.fecharModalVideo = fecharModalVideo;
window.adicionarVideo = adicionarVideo;
window.editarVideo = editarVideo;
window.deletarVideo = deletarVideo;
