// FisioStudio: comportamento mínimo, com o conteúdo legível sem JavaScript.
(function () {
  'use strict';

  // Menu em ecrãs pequenos
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    var close = function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });
    var header = toggle.closest('header');
    header.addEventListener('focusout', function (e) {
      if (menu.classList.contains('is-open') && e.relatedTarget && !header.contains(e.relatedTarget)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        close();
        toggle.focus();
      }
    });
  }

  // Linha da vida: separadores acessíveis (padrão WAI-ARIA Tabs)
  var map = document.querySelector('[data-line-map]');
  if (map) {
    var tabs = Array.prototype.slice.call(map.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });

    var select = function (index, focus) {
      tabs.forEach(function (tab, i) {
        var on = i === index;
        tab.setAttribute('aria-selected', String(on));
        tab.tabIndex = on ? 0 : -1;
        panels[i].hidden = !on;
      });
      if (focus) tabs[index].focus();
    };

    var initial = 0;
    select(initial, false);

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(i, false); });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = tabs.length - 1;
        if (next !== null) { e.preventDefault(); select(next, true); }
      });
    });

    // Links das direções (#paragem-x) abrem a paragem certa e levam o foco até ela
    var openById = function (id, focus) {
      var idx = panels.findIndex(function (p) { return p && p.id === id; });
      if (idx < 0) return false;
      select(idx, false);
      map.scrollIntoView({ block: 'start' });
      if (focus) tabs[idx].focus({ preventScroll: true });
      return true;
    };
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#paragem-"]');
      if (!link) return;
      if (openById(link.hash.slice(1), true)) {
        e.preventDefault();
        history.replaceState(null, '', link.hash);
      }
    });
    window.addEventListener('hashchange', function () { openById(location.hash.slice(1), false); });
    if (location.hash) openById(location.hash.slice(1), false);

    // A linha desenha-se uma vez quando entra no ecrã
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            map.classList.add('is-drawn');
            io.disconnect();
          }
        });
      }, { threshold: 0.3 });
      io.observe(map);
    } else {
      map.classList.add('is-drawn');
    }
  }

  // Formulário para lares: validação acessível
  var form = document.querySelector('[data-request-form]');
  if (form) {
    var status = form.querySelector('.form-status');
    var messages = {
      nome: 'Indique o seu nome.',
      instituicao: 'Indique o nome da instituição.',
      email: 'Indique um email válido, por exemplo nome@instituicao.pt.',
      pedido: 'Escolha pelo menos uma opção.',
      consentimento: 'Para o contactarmos, precisamos do seu consentimento.'
    };

    var setError = function (name, show) {
      var err = document.getElementById('erro-' + name);
      var fields = form.querySelectorAll('[name="' + name + '"]');
      if (err) err.hidden = !show;
      fields.forEach(function (f) {
        if (show) f.setAttribute('aria-invalid', 'true');
        else f.removeAttribute('aria-invalid');
      });
    };

    var check = function () {
      var problems = [];
      var nome = form.elements.nome.value.trim();
      var inst = form.elements.instituicao.value.trim();
      var email = form.elements.email.value.trim();
      var pedidos = form.querySelectorAll('[name="pedido"]:checked').length;
      var consent = form.elements.consentimento.checked;

      setError('nome', !nome); if (!nome) problems.push('nome');
      setError('instituicao', !inst); if (!inst) problems.push('instituicao');
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setError('email', !emailOk); if (!emailOk) problems.push('email');
      setError('pedido', !pedidos); if (!pedidos) problems.push('pedido');
      setError('consentimento', !consent); if (!consent) problems.push('consentimento');
      return problems;
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var problems = check();
      status.className = 'form-status';
      if (problems.length) {
        status.classList.add('form-status--error');
        status.textContent = (problems.length === 1 ? 'Falta corrigir 1 campo. ' : 'Faltam corrigir ' + problems.length + ' campos. ')
          + problems.map(function (n) { return messages[n]; }).join(' ');
        var first = form.querySelector('[name="' + problems[0] + '"]');
        if (first) first.focus();
        return;
      }
      var el = form.elements;
      var pedidos = Array.prototype.map.call(form.querySelectorAll('[name="pedido"]:checked'), function (c) {
        return c.value === 'dossier' ? 'Receber o dossier (PDF)' : 'Agendar a sessão de demonstração';
      });
      var linhas = [
        'Nome: ' + el.nome.value.trim(),
        'Cargo: ' + (el.cargo.value.trim() || '-'),
        'Instituição: ' + el.instituicao.value.trim(),
        'Email: ' + el.email.value.trim(),
        'Telefone: ' + (el.telefone.value.trim() || '-'),
        'N.º aproximado de residentes: ' + (el.residentes.value.trim() || '-'),
        'Pedido: ' + pedidos.join('; '),
        '',
        'Consentimento: aceito que a FisioStudio use estes dados apenas para responder a este pedido.'
      ];
      var assunto = 'Pedido de ' + (pedidos.length > 1 ? 'dossier e demonstração' : (pedidos[0].indexOf('dossier') > -1 ? 'dossier' : 'sessão de demonstração')) + ' - ' + el.instituicao.value.trim();
      window.location.href = 'mailto:fisiostudioab@gmail.com?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(linhas.join('\n'));
      status.classList.add('form-status--ok');
      status.textContent = 'Abrimos o seu programa de email com o pedido preenchido. Só falta carregar em enviar. Se não abrir, escreva para fisiostudioab@gmail.com ou ligue para o 963 108 844.';
      status.focus();
    });

    form.addEventListener('input', function (e) {
      if (e.target.getAttribute('aria-invalid') === 'true') check();
    });
  }
})();
