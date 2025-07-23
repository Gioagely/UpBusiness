// Dados das empresas e implantações
        let empresas = [
            {
                id: 1,
                nome: "Grupo Duzani",
                dominio: "grupoduzani",
                contato: "João Silva",
                email: "joao@grupoduzani.com",
                temas: {
                    "etiqueta": false,
                    "cadastro_produto": true,
                    "cadastro_pessoas": true,
                    "venda": true,
                    "financeiro": false,
                    "fiscal": false,
                    "importacao": false,
                    "estoque": false,
                    "relatorios": false,
                    "backup": false
                }
            },
            {
                id: 2,
                nome: "Becker Sistemas",
                dominio: "becker",
                contato: "Maria Santos",
                email: "maria@becker.com",
                temas: {
                    "etiqueta": true,
                    "cadastro_produto": true,
                    "cadastro_pessoas": false,
                    "venda": true,
                    "financeiro": true,
                    "fiscal": false,
                    "importacao": false,
                    "estoque": true,
                    "relatorios": false,
                    "backup": false
                }
            },
            {
                id: 3,
                nome: "Grupo Duzani",
                dominio: "grupoduzani",
                contato: "João Silva",
                email: "joao@grupoduzani.com",
                temas: {
                    "etiqueta": false,
                    "cadastro_produto": true,
                    "cadastro_pessoas": true,
                    "venda": true,
                    "financeiro": false,
                    "fiscal": false,
                    "importacao": false,
                    "estoque": false,
                    "relatorios": false,
                    "backup": false
                }
            },
            {
                id: 4,
                nome: "Grupo Duzani",
                dominio: "grupoduzani",
                contato: "João Silva",
                email: "joao@grupoduzani.com",
                temas: {
                    "etiqueta": false,
                    "cadastro_produto": true,
                    "cadastro_pessoas": true,
                    "venda": true,
                    "financeiro": false,
                    "fiscal": false,
                    "importacao": false,
                    "estoque": false,
                    "relatorios": false,
                    "backup": false
                }
            },
            {
                id: 5,
                nome: "Grupo Duzani",
                dominio: "grupoduzani",
                contato: "João Silva",
                email: "joao@grupoduzani.com",
                temas: {
                    "etiqueta": false,
                    "cadastro_produto": true,
                    "cadastro_pessoas": true,
                    "venda": true,
                    "financeiro": false,
                    "fiscal": false,
                    "importacao": false,
                    "estoque": false,
                    "relatorios": false,
                    "backup": false
                }
            },
            {
                id: 6,
                nome: "Grupo Duzani",
                dominio: "grupoduzani",
                contato: "João Silva",
                email: "joao@grupoduzani.com",
                temas: {
                    "etiqueta": false,
                    "cadastro_produto": true,
                    "cadastro_pessoas": true,
                    "venda": true,
                    "financeiro": false,
                    "fiscal": false,
                    "importacao": false,
                    "estoque": false,
                    "relatorios": false,
                    "backup": false
                }
            },
            {
                id: 7,
                nome: "Grupo Duzani",
                dominio: "grupoduzani",
                contato: "João Silva",
                email: "joao@grupoduzani.com",
                temas: {
                    "etiqueta": false,
                    "cadastro_produto": true,
                    "cadastro_pessoas": true,
                    "venda": true,
                    "financeiro": false,
                    "fiscal": false,
                    "importacao": false,
                    "estoque": false,
                    "relatorios": false,
                    "backup": false
                }
            },
            {
                id: 8,
                nome: "Grupo Duzani",
                dominio: "grupoduzani",
                contato: "João Silva",
                email: "joao@grupoduzani.com",
                temas: {
                    "etiqueta": false,
                    "cadastro_produto": true,
                    "cadastro_pessoas": true,
                    "venda": true,
                    "financeiro": false,
                    "fiscal": false,
                    "importacao": false,
                    "estoque": false,
                    "relatorios": false,
                    "backup": false
                }
            },
            {
                id: 9,
                nome: "Grupo Duzani",
                dominio: "grupoduzani",
                contato: "João Silva",
                email: "joao@grupoduzani.com",
                temas: {
                    "etiqueta": false,
                    "cadastro_produto": true,
                    "cadastro_pessoas": true,
                    "venda": true,
                    "financeiro": false,
                    "fiscal": false,
                    "importacao": false,
                    "estoque": false,
                    "relatorios": false,
                    "backup": false
                }
            },
            {
                id: 1,
                nome: "Grupo Duzani",
                dominio: "grupoduzani",
                contato: "João Silva",
                email: "joao@grupoduzani.com",
                temas: {
                    "etiqueta": false,
                    "cadastro_produto": true,
                    "cadastro_pessoas": true,
                    "venda": true,
                    "financeiro": false,
                    "fiscal": false,
                    "importacao": false,
                    "estoque": false,
                    "relatorios": false,
                    "backup": false
                }
            }
        ];

        let temasImplantacao = [
            "etiqueta",
            "cadastro_produto",
            "cadastro_pessoas",
            "venda",
            "financeiro",
            "fiscal",
            "importacao",
            "estoque",
            "relatorios",
            "backup"
        ];

        let temasNomes = {
            "etiqueta": "Etiquetas",
            "cadastro_produto": "Cadastro de Produtos",
            "cadastro_pessoas": "Cadastro de Pessoas",
            "venda": "Vendas",
            "financeiro": "Financeiro",
            "fiscal": "Fiscal",
            "importacao": "Importação",
            "estoque": "Estoque",
            "relatorios": "Relatórios",
            "backup": "Backup"
        };

        let editingEmpresaId = -1;

        // Dados das tarefas
        let tarefas = [
            {
                id: 1,
                titulo: "Configurar ambiente",
                descricao: "Configurar servidor e banco de dados para o cliente",
                status: "todo",
                prioridade: "Alta",
                responsavel: "João Silva",
                empresa: "Grupo Duzani",
                prazo: "2023-12-15",
                dataCriacao: "2023-12-01"
            },
            {
                id: 2,
                titulo: "Treinamento inicial",
                descricao: "Realizar treinamento básico com a equipe do cliente",
                status: "progress",
                prioridade: "Média",
                responsavel: "Maria Santos",
                empresa: "Becker Sistemas",
                prazo: "2023-12-20",
                dataCriacao: "2023-12-05"
            }
        ];

        let editingTarefaId = -1;

        // Funções para navegação do admin
        function mostrarSecaoAdmin(secao) {
            // Atualizar botões de navegação
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`[onclick="mostrarSecaoAdmin('${secao}')"]`).classList.add('active');

            // Mostrar seção correspondente
            document.querySelectorAll('.admin-section').forEach(section => section.classList.remove('active'));
            
            if (secao === 'videos') {
                document.getElementById('adminVideosSection').classList.add('active');
            } else if (secao === 'implantacoes') {
                document.getElementById('adminImplantacoesSection').classList.add('active');
                renderEmpresas();
            } else if (secao === 'scrum') {
                document.getElementById('adminScrumSection').classList.add('active');
                renderScrumBoard();
            }
        }

        // Funções para gerenciar empresas
        function renderEmpresas() {
            const container = document.getElementById('empresasGrid');
            container.innerHTML = '';

            empresas.forEach(empresa => {
                const temasCompletos = Object.values(empresa.temas).filter(Boolean).length;
                const totalTemas = Object.keys(empresa.temas).length;
                const progresso = Math.round((temasCompletos / totalTemas) * 100);

                const empresaCard = document.createElement('div');
                empresaCard.className = 'empresa-card';
                empresaCard.innerHTML = `
                    <div class="empresa-header">
                        <div class="empresa-info">
                            <h3>${empresa.nome}</h3>
                            <p>${empresa.contato} • ${empresa.email}</p>
                            <p><strong>Domínio:</strong> ${empresa.dominio}</p>
                        </div>
                        <div class="empresa-actions">
                            <button class="edit" onclick="editarEmpresa(${empresa.id})" title="Editar">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="delete" onclick="excluirEmpresa(${empresa.id})" title="Excluir">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div class="temas-grid">
                        ${temasImplantacao.map(tema => `
                            <div class="tema-item ${empresa.temas[tema] ? 'completed' : ''}" onclick="toggleTema(${empresa.id}, '${tema}')">
                                <span class="tema-nome">${temasNomes[tema]}</span>
                                <input type="checkbox" class="tema-checkbox" ${empresa.temas[tema] ? 'checked' : ''} onclick="event.stopPropagation(); toggleTema(${empresa.id}, '${tema}')">
                            </div>
                        `).join('')}
                    </div>
                    <div class="progresso-geral">
                        <div class="progresso-header">
                            <span class="progresso-label">Progresso da Implantação</span>
                            <span class="progresso-porcentagem">${progresso}%</span>
                        </div>
                        <div class="progresso-bar">
                            <div class="progresso-fill" style="width: ${progresso}%"></div>
                        </div>
                    </div>
                `;

                container.appendChild(empresaCard);
            });
        }

        function toggleTema(empresaId, tema) {
            const empresa = empresas.find(e => e.id === empresaId);
            if (empresa) {
                empresa.temas[tema] = !empresa.temas[tema];
                renderEmpresas();
            }
        }

        function abrirModalEmpresa() {
            editingEmpresaId = -1;
            document.getElementById('empresaModalTitle').textContent = 'Nova Empresa';
            document.getElementById('empresaNome').value = '';
            document.getElementById('empresaDominio').value = '';
            document.getElementById('empresaContato').value = '';
            document.getElementById('empresaEmail').value = '';
            document.getElementById('empresaConfirmBtn').textContent = 'Adicionar';
            document.getElementById('empresaModal').style.display = 'flex';
        }

        function editarEmpresa(id) {
            const empresa = empresas.find(e => e.id === id);
            if (empresa) {
                editingEmpresaId = id;
                document.getElementById('empresaModalTitle').textContent = 'Editar Empresa';
                document.getElementById('empresaNome').value = empresa.nome;
                document.getElementById('empresaDominio').value = empresa.dominio;
                document.getElementById('empresaContato').value = empresa.contato;
                document.getElementById('empresaEmail').value = empresa.email;
                document.getElementById('empresaConfirmBtn').textContent = 'Salvar';
                document.getElementById('empresaModal').style.display = 'flex';
            }
        }

        function confirmarEmpresa() {
            const nome = document.getElementById('empresaNome').value.trim();
            const dominio = document.getElementById('empresaDominio').value.trim();
            const contato = document.getElementById('empresaContato').value.trim();
            const email = document.getElementById('empresaEmail').value.trim();

            if (!nome || !dominio || !contato || !email) {
                alert('Todos os campos são obrigatórios!');
                return;
            }

            const novaEmpresa = {
                nome,
                dominio,
                contato,
                email,
                temas: {}
            };

            // Inicializar todos os temas como false
            temasImplantacao.forEach(tema => {
                novaEmpresa.temas[tema] = false;
            });

            if (editingEmpresaId > 0) {
                // Editar empresa existente
                const index = empresas.findIndex(e => e.id === editingEmpresaId);
                if (index >= 0) {
                    empresas[index] = { ...empresas[index], ...novaEmpresa };
                }
            } else {
                // Adicionar nova empresa
                novaEmpresa.id = Math.max(...empresas.map(e => e.id), 0) + 1;
                empresas.push(novaEmpresa);
            }

            renderEmpresas();
            fecharModalEmpresa();
        }

        function excluirEmpresa(id) {
            if (confirm('Tem certeza que deseja excluir esta empresa?')) {
                const index = empresas.findIndex(e => e.id === id);
                if (index >= 0) {
                    empresas.splice(index, 1);
                    renderEmpresas();
                }
            }
        }

        function fecharModalEmpresa() {
            document.getElementById('empresaModal').style.display = 'none';
        }

        // Funções do Dashboard de BI
        function mostrarDashboard() {
            document.getElementById('dashboardBI').style.display = 'block';
            setTimeout(() => {
                gerarGraficos();
                atualizarKPIs();
            }, 100);
        }

        function ocultarDashboard() {
            document.getElementById('dashboardBI').style.display = 'none';
        }

        function gerarGraficos() {
            gerarGraficoProgressoGeral();
            gerarGraficoStatusTemas();
            gerarGraficoEmpresasConclusao();
            gerarGraficoTimeline();
        }

        function gerarGraficoProgressoGeral() {
            const ctx = document.getElementById('progressoGeralChart').getContext('2d');
            const dados = empresas.map(empresa => {
                const temasCompletos = Object.values(empresa.temas).filter(Boolean).length;
                const totalTemas = Object.keys(empresa.temas).length;
                return Math.round((temasCompletos / totalTemas) * 100);
            });

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: empresas.map(e => e.nome),
                    datasets: [{
                        label: 'Progresso (%)',
                        data: dados,
                        backgroundColor: empresas.map((_, i) => 
                            dados[i] === 100 ? '#28a745' :
                            dados[i] >= 70 ? '#00ff80' :
                            dados[i] >= 40 ? '#ffc107' : '#ff4444'
                        ),
                        borderColor: '#00ff80',
                        borderWidth: 2,
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        }

        function gerarGraficoStatusTemas() {
            const ctx = document.getElementById('statusTemasChart').getContext('2d');
            const statusTemas = {};

            temasImplantacao.forEach(tema => {
                statusTemas[tema] = empresas.filter(empresa => empresa.temas[tema]).length;
            });

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(statusTemas).map(tema => temasNomes[tema]),
                    datasets: [{
                        data: Object.values(statusTemas),
                        backgroundColor: [
                            '#00ff80', '#28a745', '#20c997', '#17a2b8',
                            '#007bff', '#6f42c1', '#e83e8c', '#fd7e14',
                            '#ffc107', '#dc3545'
                        ],
                        borderWidth: 2,
                        borderColor: '#ffffff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 20,
                                usePointStyle: true
                            }
                        }
                    }
                }
            });
        }

        function gerarGraficoEmpresasConclusao() {
            const ctx = document.getElementById('empresasConclusaoChart').getContext('2d');
            const niveis = {
                'Iniciando (0-25%)': 0,
                'Em Progresso (26-50%)': 0,
                'Avançado (51-75%)': 0,
                'Quase Completo (76-99%)': 0,
                'Completo (100%)': 0
            };

            empresas.forEach(empresa => {
                const temasCompletos = Object.values(empresa.temas).filter(Boolean).length;
                const totalTemas = Object.keys(empresa.temas).length;
                const progresso = Math.round((temasCompletos / totalTemas) * 100);

                if (progresso === 100) niveis['Completo (100%)']++;
                else if (progresso >= 76) niveis['Quase Completo (76-99%)']++;
                else if (progresso >= 51) niveis['Avançado (51-75%)']++;
                else if (progresso >= 26) niveis['Em Progresso (26-50%)']++;
                else niveis['Iniciando (0-25%)']++;
            });

            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: Object.keys(niveis),
                    datasets: [{
                        data: Object.values(niveis),
                        backgroundColor: [
                            '#ff4444', '#ffc107', '#17a2b8', '#00ff80', '#28a745'
                        ],
                        borderWidth: 2,
                        borderColor: '#ffffff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 15,
                                usePointStyle: true
                            }
                        }
                    }
                }
            });
        }

        function gerarGraficoTimeline() {
            const ctx = document.getElementById('timelineChart').getContext('2d');
            // Simular dados de timeline (em um sistema real, viria do banco de dados)
            const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
            const implantacoesIniciadas = [1, 0, 1, 2, 0, 1];
            const implantacoesConcluidas = [0, 1, 0, 1, 2, 0];

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: meses,
                    datasets: [{
                        label: 'Iniciadas',
                        data: implantacoesIniciadas,
                        borderColor: '#00ff80',
                        backgroundColor: 'rgba(0, 255, 128, 0.1)',
                        tension: 0.4,
                        fill: true
                    }, {
                        label: 'Concluídas',
                        data: implantacoesConcluidas,
                        borderColor: '#28a745',
                        backgroundColor: 'rgba(40, 167, 69, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        }

        function atualizarKPIs() {
            const totalEmpresas = empresas.length;
            let temasCompletos = 0;
            let somaProgressos = 0;
            let empresasCompletas = 0;

            empresas.forEach(empresa => {
                const temasEmpresa = Object.values(empresa.temas).filter(Boolean).length;
                const totalTemas = Object.keys(empresa.temas).length;
                const progresso = (temasEmpresa / totalTemas) * 100;

                temasCompletos += temasEmpresa;
                somaProgressos += progresso;

                if (progresso === 100) {
                    empresasCompletas++;
                }
            });

            const mediaProgresso = totalEmpresas > 0 ? Math.round(somaProgressos / totalEmpresas) : 0;

            document.getElementById('totalEmpresas').textContent = totalEmpresas;
            document.getElementById('temasCompletos').textContent = temasCompletos;
            document.getElementById('mediaProgresso').textContent = mediaProgresso + '%';
            document.getElementById('empresasCompletas').textContent = empresasCompletas;
        }

        let clientes = {
            "grupoduzani": {
                cor: "#00ff80",
                logo: "images-removebg-preview.png",
                modulos: [
                    {
                        nome: "Vendas",
                        videos: [
                            { id: "JiEhrPTtHI0", titulo: "Lançamento de Pré Venda", duracao: "7:45" },
                            { id: "JiEhrPTtHI0", titulo: "Vendas Diretas", duracao: "4:12" },
                            { id: "JiEhrPTtHI0", titulo: "Vitrine", duracao: "3:55" }
                        ]
                    },
                    {
                        nome: "Cadastros",
                        videos: [
                            { id: "JiEhrPTtHI0", titulo: "Cadastro de Produto Simplificado", duracao: "5:23" },
                            { id: "JiEhrPTtHI0", titulo: "Cadastro de Pessoa", duracao: "4:35" }
                        ]
                    },
                    {
                        nome: "Financeiro",
                        videos: [
                            { id: "JiEhrPTtHI0", titulo: "Contas a Pagar", duracao: "5:45" },
                            { id: "JiEhrPTtHI0", titulo: "Contas a receber", duracao: "6:10" },
                            { id: "JiEhrPTtHI0", titulo: "Caixa", duracao: "7:15" }
                        ]
                    },
                    {
                        nome: "Operações",
                        videos: [
                            { id: "JiEhrPTtHI0", titulo: "Manufatura", duracao: "6:30" },
                            { id: "JiEhrPTtHI0", titulo: "Emissão de Nota Fiscal", duracao: "8:20" }
                        ]
                    }
                ]
            },
            "becker": {
                cor: "#00ff80",
                logo: "images-removebg-preview.png",
                modulos: [
                    {
                        nome: "Vendas",
                        videos: [
                            { id: "JiEhrPTtHI0", titulo: "Vendas Básicas", duracao: "6:20" },
                            { id: "JiEhrPTtHI0", titulo: "Promoções", duracao: "4:45" }
                        ]
                    },
                    {
                        nome: "Estoque",
                        videos: [
                            { id: "JiEhrPTtHI0", titulo: "Controle de Estoque", duracao: "5:30" },
                            { id: "JiEhrPTtHI0", titulo: "Inventário", duracao: "7:15" }
                        ]
                    }
                ]
            }
        };

        // Variáveis globais
        let currentVideos = [];
        let currentVideoIndex = -1;
        let currentDominio = '';
        let isAdmin = false;
        let editingVideoIndex = -1;

        // Função para alternar entre os tipos de acesso
        function alternarTipoAcesso() {
            const isAdminMode = document.getElementById('accessToggle').checked;
            document.getElementById('userForm').classList.toggle('active', !isAdminMode);
            document.getElementById('adminForm').classList.toggle('active', isAdminMode);

            // Atualizar texto do toggle
            document.getElementById('clienteText').classList.toggle('active', !isAdminMode);
            document.getElementById('adminText').classList.toggle('active', isAdminMode);

            // Limpar mensagens de erro ao alternar
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('adminErrorMsg').style.display = 'none';

            // Limpar campos ao alternar
            if (!isAdminMode) {
                document.getElementById('adminUser').value = '';
                document.getElementById('adminPass').value = '';
            } else {
                document.getElementById('domainInput').value = '';
            }
        }

        function formatarDominio(input) {
            input.value = input.value.toLowerCase().replace(/[^a-z0-9.-]/g, '');
        }

        function validarDominio() {
            const dominio = document.getElementById('domainInput').value.trim().toLowerCase();
            const errorMsg = document.getElementById('errorMsg');

            if (clientes[dominio]) {
                const cliente = clientes[dominio];
                currentVideos = cliente.modulos;
                currentDominio = dominio;
                isAdmin = false;

                document.documentElement.style.setProperty('--primary-color', cliente.cor);
                document.getElementById('logoHeader').src = cliente.logo;
                document.getElementById('logoFooter').src = cliente.logo;

                document.getElementById('loginArea').style.display = 'none';
                document.getElementById('videoArea').style.display = 'block';
                renderVideos(currentVideos);
                errorMsg.style.display = 'none';
            } else {
                errorMsg.style.display = 'block';
            }
        }

        function validarAdmin() {
            const usuario = document.getElementById('adminUser').value;
            const senha = document.getElementById('adminPass').value;
            const errorMsg = document.getElementById('adminErrorMsg');

            if (usuario === 'upvendas' && senha === '123') {
                isAdmin = true;
                document.getElementById('loginArea').style.display = 'none';
                document.getElementById('adminArea').style.display = 'block';

                // Carrega todos os vídeos de todos os clientes para o admin
                currentVideos = [];
                for (const dominio in clientes) {
                    clientes[dominio].modulos.forEach(modulo => {
                        modulo.videos.forEach(video => {
                            currentVideos.push({
                                ...video,
                                modulo: modulo.nome,
                                dominio: dominio
                            });
                        });
                    });
                }

                renderVideosAdmin();
                errorMsg.style.display = 'none';
            } else {
                errorMsg.style.display = 'block';
            }
        }

        // Funções para renderizar vídeos
        function renderVideos(listaModulos) {
            const container = document.getElementById('videoList');
            container.innerHTML = "";

            listaModulos.forEach((modulo, modIndex) => {
                const moduleDiv = document.createElement('div');
                moduleDiv.className = 'module';

                const moduleHeader = document.createElement('div');
                moduleHeader.className = 'module-header collapsed';
                moduleHeader.innerHTML = `
                    ${modulo.nome}
                    <i class="fas fa-chevron-down"></i>
                `;

                moduleHeader.onclick = function() {
                    this.classList.toggle('collapsed');
                    const content = this.nextElementSibling;
                    content.classList.toggle('expanded');

                    // Atualizar ícone
                    const icon = this.querySelector('i');
                    if (this.classList.contains('collapsed')) {
                        icon.style.transform = 'rotate(-90deg)';
                    } else {
                        icon.style.transform = 'rotate(0deg)';
                    }
                };

                const moduleContent = document.createElement('div');
                moduleContent.className = 'module-content';

                modulo.videos.forEach((video, vidIndex) => {
                    const videoKey = `completed_${video.id}`;
                    const isCompleted = localStorage.getItem(videoKey) === 'true';
                    const isActive = currentVideoIndex === `${modIndex}-${vidIndex}`;

                    const item = document.createElement('div');
                    item.className = `video-item ${isActive ? 'active' : ''}`;
                    item.setAttribute("data-title", video.titulo.toLowerCase());
                    item.setAttribute("data-index", `${modIndex}-${vidIndex}`);
                    item.onclick = () => abrirVideo(`${modIndex}-${vidIndex}`);

                    item.innerHTML = `
                        <div class="completed-status ${isCompleted ? 'completed' : ''}">
                            ${isCompleted ? '✓' : ''}
                        </div>
                        <div class="video-info">
                            <div class="video-title">${video.titulo}</div>
                            <div class="video-meta">
                                <div class="video-duration">
                                    <i class="fas fa-clock"></i>
                                    ${video.duracao}
                                </div>
                                <div class="video-progress">
                                    <div class="progress-bar">
                                        <div class="progress-fill"></div>
                                    </div>
                                    ${isCompleted ? '100%' : '0%'}
                                </div>
                            </div>
                        </div>
                    `;

                    moduleContent.appendChild(item);
                });

                moduleDiv.appendChild(moduleHeader);
                moduleDiv.appendChild(moduleContent);
                container.appendChild(moduleDiv);
            });

            // Se não houver vídeo selecionado, seleciona o primeiro do primeiro módulo
            if (currentVideoIndex === -1 && listaModulos.length > 0 && listaModulos[0].videos.length > 0) {
                abrirVideo('0-0');
            }
        }

        function renderVideosAdmin() {
            const container = document.getElementById('adminVideoList');
            container.innerHTML = "";

            // Agrupar vídeos por módulo para o admin
            const modulosMap = {};
            currentVideos.forEach(video => {
                if (!modulosMap[video.modulo]) {
                    modulosMap[video.modulo] = [];
                }
                modulosMap[video.modulo].push(video);
            });

            // Criar módulos para o admin
            Object.keys(modulosMap).forEach((moduloNome, modIndex) => {
                const videos = modulosMap[moduloNome];

                const moduleDiv = document.createElement('div');
                moduleDiv.className = 'module';

                const moduleHeader = document.createElement('div');
                moduleHeader.className = 'module-header collapsed';
                moduleHeader.innerHTML = `
                    ${moduloNome}
                    <i class="fas fa-chevron-down"></i>
                `;

                moduleHeader.onclick = function() {
                    this.classList.toggle("collapsed");
                    const content = this.nextElementSibling;
                    content.classList.toggle("expanded");

                    // Atualizar ícone
                    const icon = this.querySelector("i");
                    if (this.classList.contains("collapsed")) {
                        icon.style.transform = "rotate(-90deg)";
                    } else {
                        icon.style.transform = "rotate(0deg)";
                    }
                };

                const moduleContent = document.createElement('div');
                moduleContent.className = 'module-content';

                videos.forEach((video, vidIndex) => {
                    const globalIndex = currentVideos.findIndex(v => v.id === video.id && v.titulo === video.titulo);
                    const isActive = currentVideoIndex === globalIndex.toString();

                    const item = document.createElement('div');
                    item.className = `video-item ${isActive ? 'active' : ''}`;
                    item.setAttribute("data-title", video.titulo.toLowerCase());
                    item.setAttribute("data-index", globalIndex);

                    item.innerHTML = `
                        <div class="video-info">
                            <div class="video-title" onclick="abrirVideoAdmin(${globalIndex})">${video.titulo} <small>(${video.dominio})</small></div>
                            <div class="video-duration">Duração: ${video.duracao}</div>
                        </div>
                        <div class="admin-actions" style="margin-left: auto;">
                            <button class="admin-btn edit" onclick="editarVideo(${globalIndex}, event)">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="admin-btn delete" onclick="excluirVideo(${globalIndex}, event)">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;

                    moduleContent.appendChild(item);
                });

                moduleDiv.appendChild(moduleHeader);
                moduleDiv.appendChild(moduleContent);
                container.appendChild(moduleDiv);
            });

            // Se não houver vídeo selecionado, seleciona o primeiro
            if (currentVideoIndex === -1 && currentVideos.length > 0) {
                abrirVideoAdmin(0);
            }
        }

        // Funções para manipulação de vídeos
        function abrirVideo(index) {
            currentVideoIndex = index;
            const [modIndex, vidIndex] = index.split('-').map(Number);
            const video = clientes[currentDominio].modulos[modIndex].videos[vidIndex];
            const modulo = clientes[currentDominio].modulos[modIndex];

            // Ocultar placeholder e mostrar iframe
            document.getElementById('videoPlaceholder').style.display = 'none';
            document.getElementById('currentVideo').style.display = 'block';

            // Atualizar o player de vídeo
            document.getElementById('currentVideo').src = `https://www.youtube.com/embed/${video.id}?autoplay=0`;
            document.getElementById('videoPageTitle').textContent = video.titulo;

            // Mostrar e atualizar estatísticas
            document.getElementById('videoStats').style.display = 'flex';
            document.getElementById('videoDurationStat').textContent = video.duracao;
            document.getElementById('videoModuleStat').textContent = modulo.nome;

            // Verificar se há vídeos anterior/próximo
            const hasPrev = modIndex > 0 || vidIndex > 0;
            const hasNext = modIndex < clientes[currentDominio].modulos.length - 1 ||
                           vidIndex < clientes[currentDominio].modulos[modIndex].videos.length - 1;

            document.getElementById('prevVideoBtn').disabled = !hasPrev;
            document.getElementById('nextVideoBtn').disabled = !hasNext;

            // Carregar estado do checkbox
            const videoKey = `completed_${video.id}`;
            document.getElementById('completedCheckbox').checked = localStorage.getItem(videoKey) === 'true';
            document.getElementById('completedCheckbox').closest('.completed-checkbox').style.display = 'flex';

            // Atualizar a lista para destacar o vídeo atual
            renderVideos(clientes[currentDominio].modulos);
        }

        function abrirVideoAdmin(index) {
            currentVideoIndex = index.toString();
            const video = currentVideos[index];

            // Atualizar o player de vídeo
            document.getElementById('adminCurrentVideo').src = `https://www.youtube.com/embed/${video.id}?autoplay=0`;
            document.getElementById('adminVideoPageTitle').textContent = `${video.titulo} (${video.dominio})`;

            // Verificar se há vídeos anterior/próximo
            document.getElementById('adminPrevVideoBtn').style.display = index > 0 ? 'block' : 'none';
            document.getElementById('adminNextVideoBtn').style.display = index < currentVideos.length - 1 ? 'block' : 'none';

            // Atualizar a lista para destacar o vídeo atual
            renderVideosAdmin();
        }

        function navegarVideo(direcao) {
            const [currentModIndex, currentVidIndex] = currentVideoIndex.split('-').map(Number);
            const modulos = clientes[currentDominio].modulos;

            // Salvar estado do checkbox antes de navegar
            const currentVideo = modulos[currentModIndex].videos[currentVidIndex];
            const videoKey = `completed_${currentVideo.id}`;
            localStorage.setItem(videoKey, document.getElementById('completedCheckbox').checked);

            let newModIndex = currentModIndex;
            let newVidIndex = currentVidIndex;

            if (direcao === 'anterior') {
                if (currentVidIndex > 0) {
                    newVidIndex--;
                } else if (currentModIndex > 0) {
                    newModIndex--;
                    newVidIndex = modulos[newModIndex].videos.length - 1;
                }
            } else if (direcao === 'proximo') {
                if (currentVidIndex < modulos[currentModIndex].videos.length - 1) {
                    newVidIndex++;
                } else if (currentModIndex < modulos.length - 1) {
                    newModIndex++;
                    newVidIndex = 0;
                }
            }

            if (newModIndex !== currentModIndex || newVidIndex !== currentVidIndex) {
                abrirVideo(`${newModIndex}-${newVidIndex}`);
            }
        }

        function navegarVideoAdmin(direcao) {
            let newIndex = parseInt(currentVideoIndex);

            if (direcao === 'anterior' && newIndex > 0) {
                newIndex--;
            } else if (direcao === 'proximo' && newIndex < currentVideos.length - 1) {
                newIndex++;
            }

            if (newIndex !== parseInt(currentVideoIndex)) {
                abrirVideoAdmin(newIndex);
            }
        }

        function filtrarVideos() {
            const search = document.getElementById('searchInput').value.toLowerCase();
            const items = document.querySelectorAll('#videoList .video-item');

            items.forEach(item => {
                const title = item.getAttribute('data-title');
                item.style.display = title.includes(search) ? "flex" : "none";
            });
        }

        function filtrarVideosAdmin() {
            const search = document.getElementById('adminSearchInput').value.toLowerCase();
            const items = document.querySelectorAll('#adminVideoList .video-item');

            items.forEach(item => {
                const title = item.getAttribute('data-title');
                item.style.display = title.includes(search) ? "flex" : "none";
            });
        }

        function voltarInicio() {
            document.getElementById('videoArea').style.display = 'none';
            document.getElementById('adminArea').style.display = 'none';
            document.getElementById('loginArea').style.display = 'block';
            document.getElementById('domainInput').value = "";
            document.getElementById('searchInput').value = "";
            document.getElementById('adminSearchInput').value = "";
            document.getElementById('currentVideo').src = '';
            document.getElementById('adminCurrentVideo').src = '';
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('adminErrorMsg').style.display = 'none';

            // Resetar o toggle para usuário
            document.getElementById('accessToggle').checked = false;
            alternarTipoAcesso();

            currentVideoIndex = -1;
        }

        // Funções do Administrador
        function abrirModalAdicionar() {
            editingVideoIndex = -1;
            document.getElementById('modalTitle').textContent = 'Adicionar Novo Vídeo';
            document.getElementById('videoId').value = '';
            document.getElementById('videoTitulo').value = '';
            document.getElementById('videoDuracao').value = '';
            document.getElementById('videoModulo').value = '';
            document.getElementById('modalConfirmBtn').textContent = 'Adicionar';

            // Mostrar campo de domínio apenas se estiver em um domínio específico
            if (currentDominio) {
                document.getElementById('dominioGroup').style.display = 'block';
                document.getElementById('videoDominio').value = currentDominio;
            } else {
                document.getElementById('dominioGroup').style.display = 'none';
            }

            document.getElementById('videoModal').style.display = 'flex';
        }

        function abrirModalEditar(index) {
            editingVideoIndex = index;
            const video = currentVideos[index];

            document.getElementById('modalTitle').textContent = 'Editar Vídeo';
            document.getElementById('videoId').value = video.id;
            document.getElementById('videoTitulo').value = video.titulo;
            document.getElementById('videoDuracao').value = video.duracao || '';
            document.getElementById('videoModulo').value = video.modulo || '';
            document.getElementById('modalConfirmBtn').textContent = 'Salvar';

            // Mostrar campo de domínio para edição
            document.getElementById('dominioGroup').style.display = 'block';
            document.getElementById('videoDominio').value = video.dominio || '';

            document.getElementById('videoModal').style.display = 'flex';
        }

        function fecharModal() {
            document.getElementById('videoModal').style.display = 'none';
        }

        function confirmarVideo() {
            const id = document.getElementById('videoId').value.trim();
            const titulo = document.getElementById('videoTitulo').value.trim();
            const duracao = document.getElementById('videoDuracao').value.trim();
            const modulo = document.getElementById('videoModulo').value.trim();
            const dominio = document.getElementById('videoDominio').value.trim();

            if (!id || !titulo || !modulo) {
                alert('ID, Título e Módulo são obrigatórios!');
                return;
            }

            const novoVideo = {
                id: id,
                titulo: titulo,
                duracao: duracao || '0:00',
                modulo: modulo,
                dominio: dominio || currentDominio || 'admin'
            };

            if (editingVideoIndex >= 0) {
                // Editar vídeo existente
                currentVideos[editingVideoIndex] = novoVideo;

                // Atualizar também no cliente específico
                if (clientes[novoVideo.dominio]) {
                    const cliente = clientes[novoVideo.dominio];
                    let moduloEncontrado = cliente.modulos.find(m => m.nome === novoVideo.modulo);

                    if (!moduloEncontrado) {
                        // Se o módulo não existe, criar um novo
                        moduloEncontrado = { nome: novoVideo.modulo, videos: [] };
                        cliente.modulos.push(moduloEncontrado);
                    }

                    // Atualizar ou adicionar o vídeo no módulo
                    const videoIndex = moduloEncontrado.videos.findIndex(v => v.id === id);
                    if (videoIndex >= 0) {
                        moduloEncontrado.videos[videoIndex] = novoVideo;
                    } else {
                        moduloEncontrado.videos.push(novoVideo);
                    }
                }
            } else {
                // Adicionar novo vídeo
                currentVideos.push(novoVideo);

                // Adicionar também ao cliente específico
                if (clientes[novoVideo.dominio]) {
                    const cliente = clientes[novoVideo.dominio];
                    let moduloEncontrado = cliente.modulos.find(m => m.nome === novoVideo.modulo);

                    if (!moduloEncontrado) {
                        // Se o módulo não existe, criar um novo
                        moduloEncontrado = { nome: novoVideo.modulo, videos: [] };
                        cliente.modulos.push(moduloEncontrado);
                    }

                    // Adicionar o vídeo ao módulo
                    moduloEncontrado.videos.push(novoVideo);
                }
            }

            // Atualizar a exibição
            if (isAdmin) {
                renderVideosAdmin();
            } else if (currentDominio) {
                renderVideos(clientes[currentDominio].modulos);
            }

            fecharModal();
        }

        function editarVideo(index, event) {
            event.stopPropagation();
            abrirModalEditar(index);
        }

        function excluirVideo(index, event) {
            event.stopPropagation();
            if (confirm('Tem certeza que deseja excluir este vídeo?')) {
                const video = currentVideos[index];

                // Remover do array principal
                currentVideos.splice(index, 1);

                // Remover também do cliente específico se existir
                if (video.dominio && clientes[video.dominio]) {
                    const cliente = clientes[video.dominio];
                    const moduloIndex = cliente.modulos.findIndex(m => m.nome === video.modulo);
                    if (moduloIndex >= 0) {
                        const modulo = cliente.modulos[moduloIndex];
                        const videoIndex = modulo.videos.findIndex(v => v.id === video.id && v.titulo === video.titulo);
                        if (videoIndex >= 0) {
                            modulo.videos.splice(videoIndex, 1);

                            // Se o módulo ficar vazio, removê-lo
                            if (modulo.videos.length === 0) {
                                cliente.modulos.splice(moduloIndex, 1);
                            }
                        }
                    }
                }

                // Se o vídeo excluído era o que estava sendo exibido, limpar o player
                if (currentVideoIndex === index.toString()) {
                    document.getElementById('adminCurrentVideo').src = '';
                    document.getElementById('adminVideoPageTitle').textContent = 'Selecione um vídeo para assistir';
                    currentVideoIndex = -1;
                }

                renderVideosAdmin();
            }
        }

        // Funções do Scrum Board
        function renderScrumBoard() {
            // Limpar colunas
            document.getElementById('todoTasks').innerHTML = '';
            document.getElementById('progressTasks').innerHTML = '';
            document.getElementById('reviewTasks').innerHTML = '';
            document.getElementById('doneTasks').innerHTML = '';

            // Contadores
            let todoCount = 0;
            let progressCount = 0;
            let reviewCount = 0;
            let doneCount = 0;

            // Preencher colunas
            tarefas.forEach(tarefa => {
                const tarefaCard = document.createElement('div');
                tarefaCard.className = `tarefa-card prioridade-${tarefa.prioridade.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                tarefaCard.setAttribute('draggable', 'true');
                tarefaCard.setAttribute('data-id', tarefa.id);
                tarefaCard.setAttribute('id', `tarefa-${tarefa.id}`);
                tarefaCard.addEventListener('dragstart', drag);

                // Verificar se está vencido
                const hoje = new Date().toISOString().split('T')[0];
                const prazoClass = tarefa.prazo < hoje ? 'vencido' : 
                                  tarefa.prazo === hoje ? 'hoje' : '';

                tarefaCard.innerHTML = `
                    <div class="tarefa-header">
                        <div class="tarefa-titulo">${tarefa.titulo}</div>
                        <div class="tarefa-acoes">
                            <button onclick="editarTarefa(${tarefa.id}, event)">
                                <i class="fas fa-edit"></i>
                            </button>
                        </div>
                    </div>
                    <div class="tarefa-body">
                        <div class="tarefa-descricao">${tarefa.descricao}</div>
                        <span class="tarefa-empresa">${tarefa.empresa}</span>
                    </div>
                    <div class="tarefa-footer">
                        <div class="tarefa-responsavel">
                            <i class="fas fa-user"></i>
                            ${tarefa.responsavel}
                        </div>
                        <div class="tarefa-prazo ${prazoClass}">
                            <i class="fas fa-calendar-alt"></i>
                            ${formatarData(tarefa.prazo)}
                        </div>
                    </div>
                `;

                // Adicionar à coluna correspondente
                switch(tarefa.status) {
                    case 'todo':
                        document.getElementById('todoTasks').appendChild(tarefaCard);
                        todoCount++;
                        break;
                    case 'progress':
                        document.getElementById('progressTasks').appendChild(tarefaCard);
                        progressCount++;
                        break;
                    case 'review':
                        document.getElementById('reviewTasks').appendChild(tarefaCard);
                        reviewCount++;
                        break;
                    case 'done':
                        document.getElementById('doneTasks').appendChild(tarefaCard);
                        doneCount++;
                        break;
                }
            });

            // Atualizar contadores
            document.getElementById('todoCount').textContent = todoCount;
            document.getElementById('progressCount').textContent = progressCount;
            document.getElementById('reviewCount').textContent = reviewCount;
            document.getElementById('doneCount').textContent = doneCount;
        }

        function formatarData(dataString) {
            if (!dataString) return '';
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            return new Date(dataString).toLocaleDateString('pt-BR', options);
        }

        // Funções do modal de tarefa
        function abrirModalTarefa() {
            editingTarefaId = -1;
            document.getElementById('tarefaModalTitle').textContent = 'Nova Tarefa';
            document.getElementById('tarefaTitulo').value = '';
            document.getElementById('tarefaDescricao').value = '';
            document.getElementById('tarefaResponsavel').value = '';
            document.getElementById('tarefaPrioridade').value = 'Média';
            document.getElementById('tarefaEmpresa').value = '';
            document.getElementById('tarefaPrazo').value = '';
            document.getElementById('tarefaConfirmBtn').textContent = 'Adicionar';

            // Preencher empresas
            const selectEmpresa = document.getElementById('tarefaEmpresa');
            selectEmpresa.innerHTML = '<option value="">Selecione...</option>';
            empresas.forEach(empresa => {
                const option = document.createElement('option');
                option.value = empresa.nome;
                option.textContent = empresa.nome;
                selectEmpresa.appendChild(option);
            });

            document.getElementById('tarefaModal').style.display = 'flex';
        }

        function editarTarefa(id, event) {
            event.stopPropagation();
            const tarefa = tarefas.find(t => t.id === id);
            if (tarefa) {
                editingTarefaId = id;
                document.getElementById('tarefaModalTitle').textContent = 'Editar Tarefa';
                document.getElementById('tarefaTitulo').value = tarefa.titulo;
                document.getElementById('tarefaDescricao').value = tarefa.descricao;
                document.getElementById('tarefaResponsavel').value = tarefa.responsavel;
                document.getElementById('tarefaPrioridade').value = tarefa.prioridade;
                document.getElementById('tarefaEmpresa').value = tarefa.empresa;
                document.getElementById('tarefaPrazo').value = tarefa.prazo;
                document.getElementById('tarefaConfirmBtn').textContent = 'Salvar';

                // Preencher empresas
                const selectEmpresa = document.getElementById('tarefaEmpresa');
                selectEmpresa.innerHTML = '<option value="">Selecione...</option>';
                empresas.forEach(empresa => {
                    const option = document.createElement('option');
                    option.value = empresa.nome;
                    option.textContent = empresa.nome;
                    option.selected = empresa.nome === tarefa.empresa;
                    selectEmpresa.appendChild(option);
                });

                document.getElementById('tarefaModal').style.display = 'flex';
            }
        }

        function fecharModalTarefa() {
            document.getElementById('tarefaModal').style.display = 'none';
        }

        function confirmarTarefa() {
            const titulo = document.getElementById('tarefaTitulo').value.trim();
            const descricao = document.getElementById('tarefaDescricao').value.trim();
            const responsavel = document.getElementById('tarefaResponsavel').value.trim();
            const prioridade = document.getElementById('tarefaPrioridade').value;
            const empresa = document.getElementById('tarefaEmpresa').value.trim();
            const prazo = document.getElementById('tarefaPrazo').value;

            if (!titulo || !responsavel || !empresa || !prazo) {
                alert('Título, Responsável, Empresa e Prazo são obrigatórios!');
                return;
            }

            const novaTarefa = {
                titulo,
                descricao,
                responsavel,
                prioridade,
                empresa,
                prazo,
                status: 'todo',
                dataCriacao: new Date().toISOString().split('T')[0]
            };

            if (editingTarefaId > 0) {
                // Editar tarefa existente
                const index = tarefas.findIndex(t => t.id === editingTarefaId);
                if (index >= 0) {
                    tarefas[index] = { ...tarefas[index], ...novaTarefa };
                }
            } else {
                // Adicionar nova tarefa
                novaTarefa.id = Math.max(...tarefas.map(t => t.id), 0) + 1;
                tarefas.push(novaTarefa);
            }

            renderScrumBoard();
            fecharModalTarefa();
        }

        // Funções de Drag and Drop
        function allowDrop(ev) {
            ev.preventDefault();
            ev.currentTarget.classList.add('highlight');
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.getAttribute('data-id'));
            ev.target.classList.add('dragging');
        }

        function drop(ev) {
            ev.preventDefault();
            const tarefaId = ev.dataTransfer.getData("text");
            const tarefaElement = document.getElementById(`tarefa-${tarefaId}`);
            const novaColuna = ev.currentTarget;
            
            // Determinar o novo status baseado na coluna
            let novoStatus = 'todo';
            if (novaColuna.id === 'progressTasks') novoStatus = 'progress';
            else if (novaColuna.id === 'reviewTasks') novoStatus = 'review';
            else if (novaColuna.id === 'doneTasks') novoStatus = 'done';
            
            // Atualizar o status da tarefa
            const tarefaIndex = tarefas.findIndex(t => t.id == tarefaId);
            if (tarefaIndex >= 0) {
                tarefas[tarefaIndex].status = novoStatus;
            }
            
            // Remover highlight das colunas
            document.querySelectorAll('.column-content').forEach(col => {
                col.classList.remove('highlight');
            });
            
            // Remover classe dragging
            document.querySelectorAll('.tarefa-card').forEach(card => {
                card.classList.remove('dragging');
            });
            
            // Renderizar novamente o quadro
            renderScrumBoard();
        }

        // Adicionar event listeners para remover highlight quando o drag sai
        document.querySelectorAll('.column-content').forEach(col => {
            col.addEventListener('dragleave', function() {
                this.classList.remove('highlight');
            });
        });

        // Funções de tema
        function alternarTema() {
            const html = document.documentElement;
            const themeToggle = document.querySelector('.theme-toggle i');

            if (html.classList.contains('light-theme')) {
                html.classList.remove('light-theme');
                html.classList.add('dark-theme');
                localStorage.setItem('tema', 'dark');
                themeToggle.classList.replace('fa-sun', 'fa-moon');
            } else {
                html.classList.remove('dark-theme');
                html.classList.add('light-theme');
                localStorage.setItem('tema', 'light');
                themeToggle.classList.replace('fa-moon', 'fa-sun');
            }
        }

        // Inicializar ícone do tema corretamente
        document.addEventListener('DOMContentLoaded', function() {
            const themeToggle = document.querySelector('.theme-toggle i');
            if (document.documentElement.classList.contains('light-theme')) {
                themeToggle.classList.replace('fa-moon', 'fa-sun');
            }
        });

        // Salvar estado do checkbox quando marcado
        document.getElementById('completedCheckbox').addEventListener('change', function() {
            if (currentVideoIndex && currentDominio) {
                const [modIndex, vidIndex] = currentVideoIndex.split('-').map(Number);
                const video = clientes[currentDominio].modulos[modIndex].videos[vidIndex];
                const videoKey = `completed_${video.id}`;
                localStorage.setItem(videoKey, this.checked);
            }
        });

        // Inicializar o Scrum Board se estiver na seção correta
        if (document.getElementById('adminScrumSection').classList.contains('active')) {
            renderScrumBoard();
        }
