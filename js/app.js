/**
 * JanSahay - Government Schemes Plain-Language Portal (Rajasthan)
 * Core Application Controller
 */

import { schemesData } from './data/schemes.js';
import { translations } from './translations.js';

class JanSahayApp {
  constructor() {
    this.currentLang = localStorage.getItem('jansahay_lang') || 'en';
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.selectedAge = 'all';
    this.selectedAudience = 'all';
    this.sortBy = 'popular';
    
    // Session state
    this.eligibilityAnswers = {}; // { [schemeId]: 'yes' | 'no' }
    this.selectedForCompare = new Set();
    this.checkedDocuments = {};   // { [schemeId]: Set of doc indices }
    this.activeModalScheme = null;

    this.init();
  }

  init() {
    this.cacheDom();
    this.bindEvents();
    this.initFontScaling();
    this.updateLanguageUI();
    this.renderSchemes();
  }

  cacheDom() {
    // Top Nav / Controls
    this.langEnBtn = document.getElementById('lang-en-btn');
    this.langHiBtn = document.getElementById('lang-hi-btn');
    this.btnFontNormal = document.getElementById('font-normal');
    this.btnFontLarge = document.getElementById('font-large');
    this.btnFontLarger = document.getElementById('font-larger');
    this.findForMeHeaderBtn = document.getElementById('btn-find-schemes-header');

    // Hero Search & Tags
    this.searchInput = document.getElementById('global-search-input');
    this.searchClearBtn = document.getElementById('search-clear-btn');
    this.categoryTagButtons = document.querySelectorAll('.cat-pill-btn');

    // Sidebar Filters
    this.filterCategorySelect = document.getElementById('filter-category-select');
    this.filterAgeSelect = document.getElementById('filter-age-select');
    this.filterAudienceSelect = document.getElementById('filter-audience-select');
    this.btnClearFiltersMini = document.getElementById('btn-clear-filters-mini');
    this.btnClearAllFilters = document.getElementById('btn-clear-all-filters');
    this.sortSelect = document.getElementById('sort-schemes-select');

    // Grid Elements
    this.schemesGrid = document.getElementById('schemes-grid');
    this.schemesCountBadge = document.getElementById('schemes-count-badge');
    this.activeFiltersBar = document.getElementById('active-filters-bar');

    // Bottom Flow CTA
    this.btnStartWizard = document.getElementById('btn-start-wizard');

    // Floating Compare Bar
    this.comparisonBar = document.getElementById('comparison-floating-bar');
    this.compareCountBadge = document.getElementById('compare-count-badge');
    this.btnOpenCompareModal = document.getElementById('btn-open-compare-modal');
    this.btnClearCompare = document.getElementById('btn-clear-compare');

    // Modals
    this.detailModal = document.getElementById('detail-modal');
    this.detailModalClose = document.getElementById('detail-modal-close');
    this.comparisonModal = document.getElementById('comparison-modal');
    this.comparisonModalClose = document.getElementById('comparison-modal-close');
    this.wizardModal = document.getElementById('wizard-modal');
    this.wizardModalClose = document.getElementById('wizard-modal-close');
  }

  bindEvents() {
    // Language switching
    this.langEnBtn.addEventListener('click', () => this.setLanguage('en'));
    this.langHiBtn.addEventListener('click', () => this.setLanguage('hi'));

    // Search with debounce
    let searchTimeout;
    this.searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.searchClearBtn.classList.toggle('visible', this.searchQuery.length > 0);
      searchTimeout = setTimeout(() => this.renderSchemes(), 250);
    });

    this.searchClearBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.searchClearBtn.classList.remove('visible');
      this.renderSchemes();
      this.searchInput.focus();
    });

    // Category pills in hero
    this.categoryTagButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.cat;
        if (this.selectedCategory === cat) {
          this.selectedCategory = 'all';
          btn.classList.remove('active');
        } else {
          this.selectedCategory = cat;
          this.categoryTagButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
        if (this.filterCategorySelect) {
          this.filterCategorySelect.value = this.selectedCategory;
        }
        this.renderSchemes();
      });
    });

    // Sidebar filters
    this.filterCategorySelect.addEventListener('change', (e) => {
      this.selectedCategory = e.target.value;
      this.categoryTagButtons.forEach(b => {
        b.classList.toggle('active', b.dataset.cat === this.selectedCategory);
      });
      this.renderSchemes();
    });

    this.filterAgeSelect.addEventListener('change', (e) => {
      this.selectedAge = e.target.value;
      this.renderSchemes();
    });

    this.filterAudienceSelect.addEventListener('change', (e) => {
      this.selectedAudience = e.target.value;
      this.renderSchemes();
    });

    this.sortSelect.addEventListener('change', (e) => {
      this.sortBy = e.target.value;
      this.renderSchemes();
    });

    // Clear filters
    const clearAllHandler = () => {
      this.selectedCategory = 'all';
      this.selectedAge = 'all';
      this.selectedAudience = 'all';
      this.searchQuery = '';
      this.searchInput.value = '';
      this.searchClearBtn.classList.remove('visible');
      this.filterCategorySelect.value = 'all';
      this.filterAgeSelect.value = 'all';
      this.filterAudienceSelect.value = 'all';
      this.categoryTagButtons.forEach(b => b.classList.remove('active'));
      this.renderSchemes();
    };

    this.btnClearFiltersMini.addEventListener('click', clearAllHandler);
    this.btnClearAllFilters.addEventListener('click', clearAllHandler);

    // Header CTA & Wizard Trigger
    const openWizard = () => this.openWizardModal();
    this.findForMeHeaderBtn.addEventListener('click', openWizard);
    this.btnStartWizard.addEventListener('click', openWizard);

    // Modal close buttons
    this.detailModalClose.addEventListener('click', () => this.detailModal.close());
    this.comparisonModalClose.addEventListener('click', () => this.comparisonModal.close());
    this.wizardModalClose.addEventListener('click', () => this.wizardModal.close());

    // Light dismiss for native dialogs
    [this.detailModal, this.comparisonModal, this.wizardModal].forEach(dialog => {
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
          dialog.close();
        }
      });
    });

    // Comparison actions
    this.btnOpenCompareModal.addEventListener('click', () => this.openComparisonModal());
    this.btnClearCompare.addEventListener('click', () => {
      this.selectedForCompare.clear();
      this.updateComparisonBar();
      this.renderSchemes();
    });

    // Keyboard shortcut '/' to search
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== this.searchInput && !document.querySelector('dialog[open]')) {
        e.preventDefault();
        this.searchInput.focus();
        this.searchInput.select();
      }
    });
  }

  /* ========================================================================
     Font Scaling Accessibility
     ======================================================================== */
  initFontScaling() {
    const saved = localStorage.getItem('jansahay_font_size') || 'normal';
    this.setFontScale(saved);

    this.btnFontNormal.addEventListener('click', () => this.setFontScale('normal'));
    this.btnFontLarge.addEventListener('click', () => this.setFontScale('large'));
    this.btnFontLarger.addEventListener('click', () => this.setFontScale('larger'));
  }

  setFontScale(scale) {
    if (scale === 'large') {
      document.documentElement.setAttribute('data-font-size', 'large');
    } else if (scale === 'larger') {
      document.documentElement.setAttribute('data-font-size', 'larger');
    } else {
      document.documentElement.removeAttribute('data-font-size');
      scale = 'normal';
    }
    localStorage.setItem('jansahay_font_size', scale);
    this.btnFontNormal.classList.toggle('active', scale === 'normal');
    this.btnFontLarge.classList.toggle('active', scale === 'large');
    this.btnFontLarger.classList.toggle('active', scale === 'larger');
  }

  /* ========================================================================
     Localization Engine
     ======================================================================== */
  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('jansahay_lang', lang);
    this.updateLanguageUI();
    this.renderSchemes();
  }

  updateLanguageUI() {
    const t = translations[this.currentLang] || translations.en;
    document.documentElement.lang = this.currentLang;

    this.langEnBtn.classList.toggle('active', this.currentLang === 'en');
    this.langHiBtn.classList.toggle('active', this.currentLang === 'hi');

    // Update all static data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update input placeholders
    if (this.searchInput) {
      this.searchInput.placeholder = t.searchPlaceholder;
    }
  }

  /* ========================================================================
     Schemes Filtering, Sorting & Rendering
     ======================================================================== */
  filterAndSortSchemes() {
    let list = [...schemesData];

    // Search query
    if (this.searchQuery) {
      const q = this.searchQuery;
      list = list.filter(item => {
        const nameMatch = item.name.toLowerCase().includes(q) || (item.nameHi && item.nameHi.includes(q));
        const descMatch = item.briefDescription.toLowerCase().includes(q) || (item.briefDescriptionHi && item.briefDescriptionHi.includes(q));
        const catMatch = item.category.toLowerCase().includes(q) || (item.categoryHi && item.categoryHi.includes(q));
        const benefitsMatch = item.benefits.toLowerCase().includes(q) || (item.benefitsHi && item.benefitsHi.includes(q));
        return nameMatch || descMatch || catMatch || benefitsMatch;
      });
    }

    // Category filter
    if (this.selectedCategory !== 'all') {
      list = list.filter(item => item.category.toLowerCase() === this.selectedCategory.toLowerCase());
    }

    // Age filter
    if (this.selectedAge !== 'all') {
      list = list.filter(item => {
        if (this.selectedAge === 'students') return item.targetGroup.toLowerCase().includes('student') || item.ageGroup === '15-25';
        if (this.selectedAge === 'youth') return item.ageGroup === '18-35' || item.ageGroup === '15-25';
        if (this.selectedAge === 'adults') return item.ageGroup === '18-59' || item.ageGroup === 'All age groups';
        if (this.selectedAge === 'seniors') return item.ageGroup === '60+' || item.category === 'Senior Citizens';
        return true;
      });
    }

    // Audience filter
    if (this.selectedAudience !== 'all') {
      list = list.filter(item => item.audience.toLowerCase() === this.selectedAudience.toLowerCase());
    }

    // Sorting
    if (this.sortBy === 'recent') {
      list.sort((a, b) => b.id - a.id);
    } else if (this.sortBy === 'eligible') {
      // Prioritize schemes where the citizen marked "Yes"
      list.sort((a, b) => {
        const aScore = this.eligibilityAnswers[a.id] === 'yes' ? 1 : 0;
        const bScore = this.eligibilityAnswers[b.id] === 'yes' ? 1 : 0;
        return bScore - aScore;
      });
    } else {
      // Default: Popular first
      list.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    return list;
  }

  renderSchemes() {
    const isHi = this.currentLang === 'hi';
    const t = translations[this.currentLang] || translations.en;
    const filtered = this.filterAndSortSchemes();

    // Update verified badge count
    if (this.schemesCountBadge) {
      this.schemesCountBadge.textContent = `${filtered.length} ${t.verifiedCountSuffix}`;
    }

    // Render active filters bar
    this.renderActiveFiltersBar();

    if (filtered.length === 0) {
      this.schemesGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3 class="empty-state-title">${isHi ? 'कोई योजना नहीं मिली' : 'No schemes match your filters'}</h3>
          <p class="empty-state-desc">${isHi ? 'कृपया खोज शब्द बदलें या फिल्टर हटाएं।' : 'Try broadening your search term or clearing some category/audience filters.'}</p>
          <button class="btn-check-basic" id="btn-empty-clear" style="max-width:200px; margin:0 auto; border-color:var(--color-primary); color:var(--color-primary);">
            ${t.clearAllFiltersBtn}
          </button>
        </div>
      `;
      const btnEmptyClear = document.getElementById('btn-empty-clear');
      if (btnEmptyClear) {
        btnEmptyClear.addEventListener('click', () => this.btnClearAllFilters.click());
      }
      return;
    }

    // Render cards matching the user's reference mockup
    this.schemesGrid.innerHTML = filtered.map(scheme => {
      const name = isHi ? scheme.nameHi : scheme.name;
      const category = isHi ? scheme.categoryHi : scheme.category;
      const desc = isHi ? scheme.briefDescriptionHi : scheme.briefDescription;
      const question = isHi ? scheme.questionHi : scheme.question;
      const bullets = isHi ? scheme.bulletsHi : scheme.bullets;
      const lastChecked = isHi ? scheme.lastCheckedHi : scheme.lastChecked;
      const answer = this.eligibilityAnswers[scheme.id];
      const isCompared = this.selectedForCompare.has(scheme.id);

      const iconSvg = this.getCategoryIcon(scheme.icon, scheme.iconColor);

      return `
        <article class="scheme-card ${scheme.categoryClass}" data-scheme-id="${scheme.id}">
          <div>
            <!-- Card Header: Icon + Title + Category -->
            <div class="card-top-section">
              <div class="card-icon-box" style="background-color: ${scheme.iconBg}; color: ${scheme.iconColor};">
                ${iconSvg}
              </div>
              <div class="card-title-group">
                <h3 class="card-scheme-name">${name}</h3>
                <span class="card-category-label" style="color: ${scheme.iconColor};">${category}</span>
              </div>
            </div>

            <!-- Card Body: Description & Bullets -->
            <div class="card-body-section">
              <p class="card-brief-desc">${desc}</p>
              <ul class="card-bullets-list">
                ${bullets.map(b => `<li class="card-bullet-item">${b}</li>`).join('')}
              </ul>
            </div>

            <!-- Interactive Quick Eligibility Check Box -->
            <div class="card-eligibility-box">
              <p class="card-question-text">${question}</p>
              <div class="card-yesno-actions">
                <button type="button" 
                  class="btn-yesno btn-yes ${answer === 'yes' ? 'selected-yes' : ''}" 
                  data-scheme-id="${scheme.id}" 
                  data-answer="yes"
                  aria-pressed="${answer === 'yes'}">
                  ${t.btnYes}
                </button>
                <button type="button" 
                  class="btn-yesno btn-no ${answer === 'no' ? 'selected-no' : ''}" 
                  data-scheme-id="${scheme.id}" 
                  data-answer="no"
                  aria-pressed="${answer === 'no'}">
                  ${t.btnNo}
                </button>
              </div>
              <div class="quick-answer-feedback ${answer === 'yes' ? 'show-yes' : answer === 'no' ? 'show-no' : ''}">
                ${answer === 'yes' ? t.eligibleFeedbackYes : answer === 'no' ? t.eligibleFeedbackNo : ''}
              </div>
            </div>
          </div>

          <div>
            <!-- Action Button: Check Basic Eligibility -->
            <div class="card-action-bar">
              <button type="button" 
                class="btn-check-basic btn-open-detail" 
                style="border-color: ${scheme.iconColor}; color: ${scheme.iconColor};"
                data-scheme-id="${scheme.id}">
                ${t.checkBasicEligibility}
              </button>
            </div>

            <!-- Card Footer: Verified Status & Official Portal Link -->
            <div class="card-bottom-footer">
              <div class="card-verified-status">
                <span class="verified-dot-label">
                  <span class="verified-dot"></span>
                  ${t.cardVerifiedBadge}
                </span>
                <span class="last-checked-date">${t.cardLastChecked}: ${lastChecked}</span>
              </div>
              
              <div style="display:flex; flex-direction:column; align-items:flex-end; gap:0.25rem;">
                <a href="${scheme.officialLink}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="official-source-link" 
                  title="Verify on official government portal (opens in new window)">
                  ${t.cardOfficialSource}
                </a>
                
                <label class="compare-checkbox-label">
                  <input type="checkbox" 
                    class="compare-toggle-input" 
                    data-scheme-id="${scheme.id}" 
                    ${isCompared ? 'checked' : ''}>
                  <span>${isHi ? 'तुलना' : 'Compare'}</span>
                </label>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    this.attachCardEventListeners();
  }

  renderActiveFiltersBar() {
    const isHi = this.currentLang === 'hi';
    const chips = [];

    if (this.selectedCategory !== 'all') {
      chips.push({
        type: 'cat',
        label: `${isHi ? 'श्रेणी' : 'Category'}: ${this.selectedCategory}`,
        clear: () => {
          this.selectedCategory = 'all';
          this.filterCategorySelect.value = 'all';
          this.categoryTagButtons.forEach(b => b.classList.remove('active'));
        }
      });
    }

    if (this.selectedAge !== 'all') {
      chips.push({
        type: 'age',
        label: `${isHi ? 'आयु' : 'Age'}: ${this.selectedAge}`,
        clear: () => {
          this.selectedAge = 'all';
          this.filterAgeSelect.value = 'all';
        }
      });
    }

    if (this.selectedAudience !== 'all') {
      chips.push({
        type: 'aud',
        label: `${isHi ? 'वर्ग' : 'Audience'}: ${this.selectedAudience}`,
        clear: () => {
          this.selectedAudience = 'all';
          this.filterAudienceSelect.value = 'all';
        }
      });
    }

    if (this.searchQuery) {
      chips.push({
        type: 'search',
        label: `"${this.searchQuery}"`,
        clear: () => {
          this.searchQuery = '';
          this.searchInput.value = '';
          this.searchClearBtn.classList.remove('visible');
        }
      });
    }

    if (chips.length > 0) {
      this.activeFiltersBar.innerHTML = chips.map((chip, idx) => `
        <span class="active-filter-tag">
          ${chip.label}
          <button type="button" data-chip-idx="${idx}" aria-label="Remove filter">✕</button>
        </span>
      `).join('');

      this.activeFiltersBar.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.dataset.chipIdx, 10);
          if (chips[idx]) {
            chips[idx].clear();
            this.renderSchemes();
          }
        });
      });
      this.activeFiltersBar.style.display = 'flex';
    } else {
      this.activeFiltersBar.innerHTML = '';
      this.activeFiltersBar.style.display = 'none';
    }
  }

  attachCardEventListeners() {
    // Yes / No quick check buttons
    this.schemesGrid.querySelectorAll('.btn-yesno').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(btn.dataset.schemeId, 10);
        const ans = btn.dataset.answer;

        // If clicking already selected answer, toggle off
        if (this.eligibilityAnswers[id] === ans) {
          delete this.eligibilityAnswers[id];
        } else {
          this.eligibilityAnswers[id] = ans;
        }

        this.renderSchemes();
      });
    });

    // "Check basic eligibility" buttons -> open modal
    this.schemesGrid.querySelectorAll('.btn-open-detail').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.schemeId, 10);
        this.openDetailModal(id);
      });
    });

    // Compare checkboxes
    this.schemesGrid.querySelectorAll('.compare-toggle-input').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const id = parseInt(chk.dataset.schemeId, 10);
        if (e.target.checked) {
          if (this.selectedForCompare.size >= 4) {
            alert(this.currentLang === 'hi' 
              ? 'आप एक साथ अधिकतम 4 योजनाओं की तुलना कर सकते हैं।' 
              : 'You can compare a maximum of 4 schemes simultaneously.');
            e.target.checked = false;
            return;
          }
          this.selectedForCompare.add(id);
        } else {
          this.selectedForCompare.delete(id);
        }
        this.updateComparisonBar();
      });
    });
  }

  updateComparisonBar() {
    const count = this.selectedForCompare.size;
    const isHi = this.currentLang === 'hi';

    if (count >= 1) {
      this.comparisonBar.classList.add('active');
      this.compareCountBadge.textContent = isHi 
        ? `${count} योजनाएं चयनित` 
        : `${count} scheme${count > 1 ? 's' : ''} selected`;
    } else {
      this.comparisonBar.classList.remove('active');
    }
  }

  /* ========================================================================
     Scheme Detail Modal (Native Accessible <dialog>)
     ======================================================================== */
  openDetailModal(schemeId) {
    const scheme = schemesData.find(s => s.id === schemeId);
    if (!scheme) return;

    this.activeModalScheme = scheme;
    const isHi = this.currentLang === 'hi';
    const t = translations[this.currentLang] || translations.en;

    const name = isHi ? scheme.nameHi : scheme.name;
    const category = isHi ? scheme.categoryHi : scheme.category;
    const desc = isHi ? scheme.briefDescriptionHi : scheme.briefDescription;
    const authority = isHi ? scheme.sourceAuthorityHi : scheme.sourceAuthority;
    const benefits = isHi ? scheme.benefitsHi : scheme.benefits;
    const timeline = isHi ? scheme.timelineHi : scheme.timeline;
    const criteria = isHi ? scheme.eligibilityCriteriaHi : scheme.eligibilityCriteria;
    const processSteps = isHi ? scheme.applicationProcessHi : scheme.applicationProcess;

    if (!this.checkedDocuments[schemeId]) {
      this.checkedDocuments[schemeId] = new Set();
    }

    // Modal Header
    document.getElementById('modal-header-icon').innerHTML = this.getCategoryIcon(scheme.icon, scheme.iconColor);
    document.getElementById('modal-header-icon').style.backgroundColor = scheme.iconBg;
    document.getElementById('modal-header-title').textContent = name;
    document.getElementById('modal-header-subtitle').textContent = `${category} • ${authority}`;

    // Tabs setup
    const tabBtns = document.querySelectorAll('.modal-tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
      btn.classList.remove('active');
      btn.onclick = () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
      };
    });
    tabBtns[0].classList.add('active');
    tabPanes.forEach((p, idx) => p.classList.toggle('active', idx === 0));

    // Tab 1: Overview & Benefits
    document.getElementById('tab-overview').innerHTML = `
      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
          <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.4rem; color:var(--color-primary-dark);">
            ${isHi ? 'योजना का मुख्य उद्देश्य (सरल शब्दों में)' : 'Plain-Language Purpose'}
          </h4>
          <p style="font-size:0.92rem; color:#334155; line-height:1.5;">${desc}</p>
        </div>

        <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:10px; padding:1.25rem;">
          <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.4rem; color:#15803d;">
            💰 ${isHi ? 'आपको क्या लाभ मिलेगा?' : 'What Benefits Will You Receive?'}
          </h4>
          <p style="font-size:0.92rem; color:#166534; line-height:1.5; font-weight:500;">${benefits}</p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:0.85rem;">
            <span style="font-size:0.75rem; color:#64748b; font-weight:600; text-transform:uppercase;">
              ${isHi ? 'अनुमोदन समय सीमा' : 'Approval Timeline'}
            </span>
            <p style="font-size:0.9rem; font-weight:600; color:#0f172a; margin-top:0.2rem;">⏱️ ${timeline}</p>
          </div>
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:0.85rem;">
            <span style="font-size:0.75rem; color:#64748b; font-weight:600; text-transform:uppercase;">
              ${isHi ? 'आय सीमा' : 'Income Threshold'}
            </span>
            <p style="font-size:0.9rem; font-weight:600; color:#0f172a; margin-top:0.2rem;">📊 ${isHi ? scheme.incomeLimitHi : scheme.incomeLimit}</p>
          </div>
        </div>
      </div>
    `;

    // Tab 2: Eligibility Criteria Checklist
    document.getElementById('tab-criteria').innerHTML = `
      <div>
        <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.85rem; color:#0f172a;">
          ${isHi ? 'पात्रता की बुनियादी शर्तें:' : 'Essential Eligibility Requirements:'}
        </h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:0.65rem;">
          ${criteria.map(c => `
            <li style="display:flex; align-items:flex-start; gap:0.6rem; font-size:0.9rem; color:#334155; line-height:1.45;">
              <span style="color:#16a34a; font-weight:bold; font-size:1.1rem; line-height:1;">✓</span>
              <span>${c}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;

    // Tab 3: Interactive Documents Checklist with Readiness Score!
    this.renderDocsChecklist(schemeId);

    // Tab 4: Step-by-Step How to Apply
    document.getElementById('tab-process').innerHTML = `
      <div>
        <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.85rem; color:#0f172a;">
          ${isHi ? 'आवेदन कैसे करें (कदम दर कदम गाइड):' : 'Step-by-Step Application Procedure:'}
        </h4>
        <ol style="list-style:none; display:flex; flex-direction:column; gap:0.85rem; counter-reset:step-counter;">
          ${processSteps.map(step => `
            <li style="display:flex; align-items:flex-start; gap:0.75rem; font-size:0.9rem; color:#334155; line-height:1.45;">
              <span style="width:26px; height:26px; border-radius:50%; background-color:#ffedd5; color:#ea580c; font-weight:700; font-size:0.82rem; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                ▶
              </span>
              <span>${step}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    `;

    // Tab 5: FAQs
    document.getElementById('tab-faq').innerHTML = `
      <div>
        <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.85rem; color:#0f172a;">
          ${isHi ? 'अक्सर पूछे जाने वाले प्रश्न:' : 'Frequently Asked Questions:'}
        </h4>
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          ${scheme.faqs.map(faq => `
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.9rem;">
              <p style="font-weight:600; font-size:0.9rem; color:#0f172a; margin-bottom:0.25rem;">❓ ${isHi ? faq.qHi : faq.q}</p>
              <p style="font-size:0.86rem; color:#475569; line-height:1.4;">${isHi ? faq.aHi : faq.a}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Modal Footer Link
    const externalLinkBtn = document.getElementById('modal-external-link');
    externalLinkBtn.href = scheme.officialLink;
    externalLinkBtn.textContent = t.modalApplyOfficial;

    this.detailModal.showModal();
  }

  renderDocsChecklist(schemeId) {
    const scheme = schemesData.find(s => s.id === schemeId);
    if (!scheme) return;

    const isHi = this.currentLang === 'hi';
    const t = translations[this.currentLang] || translations.en;
    const checked = this.checkedDocuments[schemeId] || new Set();
    const total = scheme.requiredDocuments.length;
    const count = checked.size;
    const percent = Math.round((count / total) * 100);

    const container = document.getElementById('tab-docs');
    container.innerHTML = `
      <div>
        <div class="docs-progress-card">
          <div class="docs-progress-header">
            <span>${t.docsProgressLabel}</span>
            <span style="color:#16a34a;">${count} / ${total} (${percent}%)</span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${percent}%;"></div>
          </div>
          <p style="font-size:0.75rem; color:#64748b; margin-top:0.45rem;">
            ${count === total ? '🎉 ' + (isHi ? 'आपके पास सभी आवश्यक दस्तावेज़ तैयार हैं!' : 'You have all required documents ready!') : (isHi ? 'नीचे दिए गए दस्तावेज़ों पर टिक लगाएं जो आपके पास उपलब्ध हैं:' : 'Check off the documents you already possess to verify your readiness:')}
          </p>
        </div>

        <ul class="interactive-checklist">
          ${scheme.requiredDocuments.map((doc, idx) => `
            <li class="check-item">
              <input type="checkbox" id="doc-chk-${schemeId}-${idx}" ${checked.has(idx) ? 'checked' : ''}>
              <label for="doc-chk-${schemeId}-${idx}" style="cursor:pointer; flex:1; font-weight:500;">
                ${doc.name}
                ${doc.required ? `<span style="color:#dc2626; font-size:0.75rem; font-weight:600; margin-left:0.3rem;">(${isHi ? 'अनिवार्य' : 'Mandatory'})</span>` : `<span style="color:#64748b; font-size:0.75rem; margin-left:0.3rem;">(${isHi ? 'यदि लागू हो' : 'Optional'})</span>`}
              </label>
            </li>
          `).join('')}
        </ul>
      </div>
    `;

    container.querySelectorAll('input[type="checkbox"]').forEach((chk, idx) => {
      chk.addEventListener('change', (e) => {
        if (e.target.checked) {
          checked.add(idx);
        } else {
          checked.delete(idx);
        }
        this.checkedDocuments[schemeId] = checked;
        this.renderDocsChecklist(schemeId);
      });
    });
  }

  /* ========================================================================
     Side-by-Side Scheme Comparison Modal
     ======================================================================== */
  openComparisonModal() {
    const isHi = this.currentLang === 'hi';
    const selectedIds = Array.from(this.selectedForCompare);
    const schemes = schemesData.filter(s => selectedIds.includes(s.id));

    if (schemes.length === 0) return;

    const content = document.getElementById('comparison-modal-body');
    content.innerHTML = `
      <div class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th style="min-width:140px;">${isHi ? 'योजना का नाम' : 'Scheme Name'}</th>
              ${schemes.map(s => `
                <th style="min-width:200px;">
                  <div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem;">
                    <span style="font-weight:700; color:#0f172a;">${isHi ? s.nameHi : s.name}</span>
                    <button type="button" class="btn-remove-from-compare" data-remove-id="${s.id}" style="background:transparent; border:none; cursor:pointer; color:#ef4444; font-size:1rem;">✕</button>
                  </div>
                  <span style="display:inline-block; font-size:0.72rem; color:${s.iconColor}; font-weight:600; margin-top:0.25rem;">
                    ${isHi ? s.categoryHi : s.category}
                  </span>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>${isHi ? 'मुख्य लाभ' : 'Core Benefits'}</th>
              ${schemes.map(s => `<td>${isHi ? s.benefitsHi : s.benefits}</td>`).join('')}
            </tr>
            <tr>
              <th>${isHi ? 'लक्ष्य लाभार्थी' : 'Beneficiary'}</th>
              ${schemes.map(s => `<td>${isHi ? s.targetGroupHi : s.targetGroup}</td>`).join('')}
            </tr>
            <tr>
              <th>${isHi ? 'आय सीमा' : 'Income Threshold'}</th>
              ${schemes.map(s => `<td>${isHi ? s.incomeLimitHi : s.incomeLimit}</td>`).join('')}
            </tr>
            <tr>
              <th>${isHi ? 'आयु सीमा' : 'Age Limit'}</th>
              ${schemes.map(s => `<td>${isHi ? s.ageLimitHi : s.ageLimit}</td>`).join('')}
            </tr>
            <tr>
              <th>${isHi ? 'समय सीमा' : 'Approval Time'}</th>
              ${schemes.map(s => `<td>⏱️ ${isHi ? s.timelineHi : s.timeline}</td>`).join('')}
            </tr>
            <tr>
              <th>${isHi ? 'प्रमुख दस्तावेज़' : 'Key Documents'}</th>
              ${schemes.map(s => `
                <td>
                  <ul style="padding-left:1.1rem; font-size:0.8rem; line-height:1.4;">
                    ${s.requiredDocuments.slice(0, 4).map(d => `<li>${d.name}</li>`).join('')}
                  </ul>
                </td>
              `).join('')}
            </tr>
            <tr>
              <th>${isHi ? 'आधिकारिक पोर्टल' : 'Official Portal'}</th>
              ${schemes.map(s => `
                <td>
                  <a href="${s.officialLink}" target="_blank" rel="noopener noreferrer" style="color:#0284c7; font-weight:600; text-decoration:none;">
                    ${isHi ? 'पोर्टल पर जाएं ↗' : 'Visit Portal ↗'}
                  </a>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    content.querySelectorAll('.btn-remove-from-compare').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(btn.dataset.removeId, 10);
        this.selectedForCompare.delete(id);
        this.updateComparisonBar();
        this.renderSchemes();
        if (this.selectedForCompare.size === 0) {
          this.comparisonModal.close();
        } else {
          this.openComparisonModal();
        }
      });
    });

    this.comparisonModal.showModal();
  }

  /* ========================================================================
     "Find Schemes For Me" Demographic Matcher Wizard
     ======================================================================== */
  openWizardModal() {
    const isHi = this.currentLang === 'hi';
    const t = translations[this.currentLang] || translations.en;
    let step = 1;
    let userCategory = 'student';
    let userNeed = 'education';

    const wizardBody = document.getElementById('wizard-modal-body');

    const renderStep = () => {
      if (step === 1) {
        wizardBody.innerHTML = `
          <div style="padding:1rem 0;">
            <div style="margin-bottom:1.25rem;">
              <span style="font-size:0.8rem; font-weight:700; color:var(--color-primary); text-transform:uppercase;">
                ${isHi ? 'चरण 1 / 2' : 'Step 1 of 2'}
              </span>
              <h3 style="font-size:1.2rem; font-weight:700; color:#0f172a; margin-top:0.2rem;">
                ${isHi ? 'आप अपने बारे में बताएं:' : 'Tell us about yourself:'}
              </h3>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.75rem; margin-bottom:1.5rem;">
              ${[
                { id: 'student', label: isHi ? '🎓 विद्यार्थी (Student)' : '🎓 Student' },
                { id: 'farmer', label: isHi ? '🌾 किसान (Farmer)' : '🌾 Farmer' },
                { id: 'woman', label: isHi ? '👩 महिला (Woman)' : '👩 Woman' },
                { id: 'senior', label: isHi ? '👴 वरिष्ठ नागरिक (Senior 60+)' : '👴 Senior Citizen (60+)' },
                { id: 'disabled', label: isHi ? '♿ विशेष योग्यजन (Divyangjan)' : '♿ Person with Disability' },
                { id: 'rural', label: isHi ? '🏠 ग्रामीण परिवार (Rural Household)' : '🏠 Rural Resident' }
              ].map(opt => `
                <button type="button" class="wizard-opt-btn ${userCategory === opt.id ? 'active' : ''}" data-cat-id="${opt.id}" style="padding:0.85rem; border:1.5px solid ${userCategory === opt.id ? 'var(--color-primary)' : 'var(--color-border)'}; border-radius:10px; background:${userCategory === opt.id ? 'var(--color-primary-light)' : '#ffffff'}; font-weight:600; font-size:0.9rem; text-align:left; cursor:pointer;">
                  ${opt.label}
                </button>
              `).join('')}
            </div>

            <div style="display:flex; justify-content:flex-end;">
              <button type="button" id="btn-wizard-step1-next" class="btn-header-cta">
                ${t.wizardNext}
              </button>
            </div>
          </div>
        `;

        wizardBody.querySelectorAll('.wizard-opt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            userCategory = btn.dataset.catId;
            renderStep();
          });
        });

        document.getElementById('btn-wizard-step1-next').addEventListener('click', () => {
          step = 2;
          renderStep();
        });

      } else if (step === 2) {
        wizardBody.innerHTML = `
          <div style="padding:1rem 0;">
            <div style="margin-bottom:1.25rem;">
              <span style="font-size:0.8rem; font-weight:700; color:var(--color-primary); text-transform:uppercase;">
                ${isHi ? 'चरण 2 / 2' : 'Step 2 of 2'}
              </span>
              <h3 style="font-size:1.2rem; font-weight:700; color:#0f172a; margin-top:0.2rem;">
                ${isHi ? 'आपको किस प्रकार की सरकारी सहायता चाहिए?' : 'What kind of support are you looking for?'}
              </h3>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.75rem; margin-bottom:1.5rem;">
              ${[
                { id: 'education', label: isHi ? '📚 कॉलेज फीस / छात्रवृत्ति' : '📚 College Fees & Scholarship' },
                { id: 'healthcare', label: isHi ? '🏥 मुफ्त इलाज / स्वास्थ्य बीमा' : '🏥 Cashless Health Insurance' },
                { id: 'housing', label: isHi ? '🏠 पक्का मकान निर्माण' : '🏠 House Construction Aid' },
                { id: 'employment', label: isHi ? '💼 बेरोजगारी भत्ता / कौशल' : '💼 Youth Allowance & Skill Training' },
                { id: 'agriculture', label: isHi ? '🌾 बिजली सब्सिडी / कृषि सहायता' : '🌾 Farm Power & Agricultural Grant' },
                { id: 'financial', label: isHi ? '💳 मासिक पेंशन / आपात सहायता' : '💳 Monthly Pension & Financial Aid' }
              ].map(opt => `
                <button type="button" class="wizard-opt-btn ${userNeed === opt.id ? 'active' : ''}" data-need-id="${opt.id}" style="padding:0.85rem; border:1.5px solid ${userNeed === opt.id ? 'var(--color-primary)' : 'var(--color-border)'}; border-radius:10px; background:${userNeed === opt.id ? 'var(--color-primary-light)' : '#ffffff'}; font-weight:600; font-size:0.9rem; text-align:left; cursor:pointer;">
                  ${opt.label}
                </button>
              `).join('')}
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center;">
              <button type="button" id="btn-wizard-step2-back" style="background:transparent; border:none; color:#64748b; font-weight:600; cursor:pointer;">
                ${t.wizardBack}
              </button>
              <button type="button" id="btn-wizard-step2-finish" class="btn-header-cta">
                ${t.wizardFinish}
              </button>
            </div>
          </div>
        `;

        wizardBody.querySelectorAll('.wizard-opt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            userNeed = btn.dataset.needId;
            renderStep();
          });
        });

        document.getElementById('btn-wizard-step2-back').addEventListener('click', () => {
          step = 1;
          renderStep();
        });

        document.getElementById('btn-wizard-step2-finish').addEventListener('click', () => {
          // Map user choice to filter
          const categoryMap = {
            education: 'Education',
            healthcare: 'Healthcare',
            housing: 'Housing',
            employment: 'Employment',
            agriculture: 'Agriculture',
            financial: 'Financial Support'
          };
          this.selectedCategory = categoryMap[userNeed] || 'all';
          this.filterCategorySelect.value = this.selectedCategory;
          this.categoryTagButtons.forEach(b => {
            b.classList.toggle('active', b.dataset.cat === this.selectedCategory);
          });
          this.wizardModal.close();
          this.renderSchemes();

          // Smooth scroll down to schemes section
          document.getElementById('schemes-section').scrollIntoView({ behavior: 'smooth' });
        });
      }
    };

    renderStep();
    this.wizardModal.showModal();
  }

  /* ========================================================================
     SVG Icon Helpers matching design mockup
     ======================================================================== */
  getCategoryIcon(iconType, strokeColor) {
    switch (iconType) {
      case 'education':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;
      case 'healthcare':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v12M6 12h12"/><circle cx="12" cy="12" r="10"/></svg>`;
      case 'housing':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
      case 'employment':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
      case 'agriculture':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`;
      case 'women':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`;
      case 'financial':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3a4 4 0 0 0 0-8"/></svg>`;
      case 'disability':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2.5"/><path d="m8.5 8.5 3 2.5 3.5-1.5"/><path d="M9 13.5 10 18l3.5 1.5"/><circle cx="16.5" cy="17.5" r="3.5"/></svg>`;
      case 'senior':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`;
    }
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.janSahayApp = new JanSahayApp();
});
