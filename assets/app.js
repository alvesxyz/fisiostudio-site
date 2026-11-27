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
      if (ready && tabs[index].scrollIntoView && window.matchMedia('(max-width: 56rem)').matches) {
        tabs[index].scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    };

    var ready = false;
    var initial = 0;
    select(initial, false);
    ready = true;

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

  // Formulários (marcação e lares): validação acessível e envio por email
  var ENDPOINT = 'https://formsubmit.co/ajax/fisiostudioab@gmail.com';
  var CLINIC_EMAIL = 'fisiostudioab@gmail.com';

  Array.prototype.forEach.call(document.querySelectorAll('[data-form]'), function (form) {
    var status = form.querySelector('.form-status');
    var button = form.querySelector('button[type="submit"]');
    var buttonText = button ? button.textContent : '';

    var setError = function (name, show) {
      var err = document.getElementById('erro-' + name);
      if (err) err.hidden = !show;
      form.querySelectorAll('[name="' + name + '"]').forEach(function (f) {
        if (show) f.setAttribute('aria-invalid', 'true');
        else f.removeAttribute('aria-invalid');
      });
    };

    var check = function () {
      var problems = [];
      var seen = {};
      form.querySelectorAll('[required], [data-required-group]').forEach(function (node) {
        var name = node.getAttribute('data-required-group') || node.name;
        if (!name || seen[name]) return;
        seen[name] = true;
        var ok;
        if (node.hasAttribute('data-required-group')) {
          ok = form.querySelectorAll('[name="' + name + '"]:checked').length > 0;
        } else if (node.type === 'checkbox') {
          ok = node.checked;
        } else if (node.type === 'radio') {
          ok = form.querySelectorAll('[name="' + name + '"]:checked').length > 0;
        } else if (node.type === 'email') {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(node.value.trim());
        } else if (node.type === 'tel') {
          ok = node.value.replace(/\D/g, '').length >= 9;
        } else {
          ok = node.value.trim().length > 0;
        }
        setError(name, !ok);
        if (!ok) problems.push(name);
      });
      // Email opcional: só valida se estiver preenchido
      form.querySelectorAll('input[type="email"]:not([required])').forEach(function (node) {
        var v = node.value.trim();
        var ok = !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        setError(node.name, !ok);
        if (!ok) problems.push(node.name);
      });
      return problems;
    };

    var collect = function () {
      var data = {};
      var groups = {};
      Array.prototype.forEach.call(form.elements, function (f) {
        if (!f.name || f.name.charAt(0) === '_' || f.type === 'submit') return;
        var label = f.getAttribute('data-label') || (f.closest('fieldset') && f.closest('fieldset').getAttribute('data-label')) || f.name;
        if (f.type === 'checkbox' || f.type === 'radio') {
          if (!f.checked) return;
          var text = f.getAttribute('data-value') || f.value;
          if (f.name === 'consentimento') { data['Consentimento'] = 'Sim'; return; }
          groups[label] = (groups[label] ? groups[label] + '; ' : '') + text;
          return;
        }
        if (f.tagName === 'SELECT') { data[label] = f.options[f.selectedIndex].text; return; }
        var v = f.value.trim();
        if (v) data[label] = v;
      });
      Object.keys(groups).forEach(function (k) { data[k] = groups[k]; });
      return data;
    };

    var mailtoFrom = function (subject, data) {
      var body = Object.keys(data).map(function (k) { return k + ': ' + data[k]; }).join('\n');
      return 'mailto:' + CLINIC_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    };

    var show = function (kind, html) {
      status.className = 'form-status form-status--' + kind;
      status.innerHTML = html;
      status.focus();
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var problems = check();
      if (problems.length) {
        var msgs = problems.map(function (n) {
          var err = document.getElementById('erro-' + n);
          return err ? err.textContent : '';
        });
        status.className = 'form-status form-status--error';
        status.textContent = (problems.length === 1 ? 'Falta corrigir 1 campo. ' : 'Faltam corrigir ' + problems.length + ' campos. ') + msgs.join(' ');
        var first = form.querySelector('[name="' + problems[0] + '"]');
        if (first) first.focus();
        return;
      }
      if (form.elements._honey && form.elements._honey.value) return;

      var data = collect();
      var who = form.elements.instituicao ? form.elements.instituicao.value.trim() : form.elements.nome.value.trim();
      var subject = (form.getAttribute('data-subject') || 'Pedido pelo site') + ' - ' + who;
      var fallback = mailtoFrom(subject, data);
      var payload = Object.assign({ _subject: subject, _template: 'table', _captcha: 'false' }, data);
      if (data.Email) payload._replyto = data.Email;

      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      button.textContent = 'A enviar…';
      status.className = 'form-status';
      status.textContent = '';

      var done = function () {
        button.disabled = false;
        button.removeAttribute('aria-busy');
        button.textContent = buttonText;
      };

      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (r) { return r.json(); }).then(function (res) {
        done();
        if (res && (res.success === true || res.success === 'true')) {
          show('ok', form.getAttribute('data-success'));
          form.reset();
        } else {
          throw new Error('envio recusado');
        }
      }).catch(function () {
        done();
        show('error', 'Não conseguimos enviar o pedido pelo site. <a href="' + fallback + '">Enviar por email</a> (abre o seu email com o pedido já escrito) ou ligue para o <a href="tel:+351963108844">963 108 844</a>.');
      });
    });

    form.addEventListener('input', function (e) {
      if (e.target.getAttribute('aria-invalid') === 'true') check();
    });
    form.addEventListener('change', function (e) {
      if (e.target.getAttribute('aria-invalid') === 'true') check();
    });

    // Pré-selecionar a especialidade a partir do link (?servico=...)
    var sel = form.querySelector('select[name="servico"]');
    var wanted = new URLSearchParams(location.search).get('servico');
    if (sel && wanted) {
      Array.prototype.forEach.call(sel.options, function (o) { if (o.value === wanted) sel.value = wanted; });
    }
  });
})();
