document.addEventListener('DOMContentLoaded', function() {
    // MENU HAMBÚRGUER 
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('header');
    
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '&#9776; Menu';

    if (mainNav && header) {
        if (window.innerWidth <= 767 || !document.querySelector('.sidebar-menu-toggle')) {
            header.insertBefore(menuToggle, mainNav);
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (mainNav) {
                mainNav.classList.toggle('active');
            }
        });
    }

    // MENU LATERAL 
    const sidebarMenu = document.querySelector('.sidebar-menu');
    const sidebarMenuToggle = document.querySelector('.sidebar-menu-toggle');
    const mainContent = document.getElementById('main-content');

    if (sidebarMenu && sidebarMenuToggle && mainContent) {
        sidebarMenuToggle.addEventListener('click', function() {
            sidebarMenu.classList.toggle('open');
            mainContent.classList.toggle('content-shifted');
        });

        const dropdownSidebarItems = document.querySelectorAll('.dropdown-sidebar');
        dropdownSidebarItems.forEach(item => {
            item.querySelector('a').addEventListener('click', function(event) {
                event.preventDefault(); 
                item.classList.toggle('open');
            });
        });
    }

    // FORMULÁRIO
    const artistForm = document.getElementById('artistForm');
    const dadosExibidos = document.getElementById('dadosExibidos');

    if (artistForm && dadosExibidos) {
        artistForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nomeCompleto = document.getElementById('nomeCompleto').value;
            const emailContato = document.getElementById('emailContato').value;
            const telefone = document.getElementById('telefone').value;
            const tipoArte = document.getElementById('tipoArte').value;
            const linkPortifolio = document.getElementById('linkPortifolio').value;
            const mensagem = document.getElementById('mensagem').value;
            const termos = document.getElementById('termos').checked;

            dadosExibidos.innerHTML = `
                <h3>Dados Recebidos:</h3>
                <p><strong>Nome Completo:</strong> ${nomeCompleto || 'Não informado'}</p>
                <p><strong>E-mail:</strong> ${emailContato || 'Não informado'}</p>
                <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
                <p><strong>Tipo de Arte:</strong> ${tipoArte || 'Não selecionado'}</p>
                <p><strong>Link Portfólio:</strong> ${linkPortifolio || 'Não informado'}</p>
                <p><strong>Mensagem/Biografia:</strong> ${mensagem || 'Não informada'}</p>
                <p><strong>Termos Aceitos:</strong> ${termos ? 'Sim' : 'Não'}</p>
                <p style="margin-top: 15px; color: var(--cor-acento-vermelho);">Seu formulário foi processado (simulado)!</p>
            `;
        });
    }
});