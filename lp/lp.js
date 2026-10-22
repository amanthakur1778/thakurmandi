/**
 * Chalo Himachal — Google Ads Landing Page Interaction & Conversion Engine
 * Curated by Aman Thakur (+91 6230135697)
 */

(function () {
  'use strict';

  // Aman Thakur Official Contact
  const AMAN_PHONE = '916230135697';

  // Optional Google Ads Conversion Trigger Hook
  function triggerAdsConversion(actionName) {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'send_to': window.GOOGLE_ADS_CONVERSION_ID || 'AW-DEFAULT',
          'event_category': 'Leads',
          'event_label': actionName
        });
      }
      if (typeof window.dataLayer !== 'undefined' && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          'event': 'google_ads_lead_submission',
          'lead_action': actionName
        });
      }
    } catch (e) {
      console.warn('Analytics event trigger:', e);
    }
  }

  // 1. Lead Form Handling & Direct WhatsApp Dispatch
  const leadForm = document.getElementById('adLeadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('travelerName');
      const phoneInput = document.getElementById('travelerPhone');
      const destSelect = document.getElementById('destSelect');
      const dateSelect = document.getElementById('travelDate');
      const travelerCount = document.getElementById('travelerCount');
      const tripType = document.getElementById('tripType');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const dest = destSelect ? destSelect.value : 'All Himachal';
      const date = dateSelect ? dateSelect.value : 'Upcoming';
      const travelers = travelerCount ? travelerCount.value : '2 Persons';
      const type = tripType ? tripType.value : 'Holiday';

      if (!name) {
        alert('Please enter your full name.');
        if (nameInput) nameInput.focus();
        return;
      }

      if (!phone || phone.length < 10) {
        alert('Please enter a valid 10-digit mobile or WhatsApp number.');
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Track Conversion
      triggerAdsConversion('form_lead_whatsapp');

      // Construct WhatsApp Payload
      const message = 
`🏔️ *Himachal Tour Package Inquiry*
--------------------------------
• *Destination*: ${dest}
• *Travel Month/Dates*: ${date}
• *Travelers*: ${travelers} (${type})
• *Lead Name*: ${name}
• *Mobile / WhatsApp*: ${phone}

Hi Aman! I saw your Google Ad and would like to get a personalized itinerary and best quote for our Himachal holiday.`;

      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${AMAN_PHONE}?text=${encodedMsg}`;

      // Open WhatsApp in new tab/app
      window.open(whatsappUrl, '_blank');

      // Visual feedback
      const submitBtn = document.getElementById('btnSubmitLead');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Connecting to Aman Thakur on WhatsApp... ✓</span>';
        submitBtn.style.background = '#25D366';
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
        }, 3500);
      }
    });
  }

  // 2. Package Card "Inquire on WhatsApp" Pre-selection
  document.querySelectorAll('.btn-package-inquire').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const pkgName = this.getAttribute('data-package') || '';
      const destValue = this.getAttribute('data-dest') || '';

      // Check if user wants direct WhatsApp or form prefill
      if (window.innerWidth < 768) {
        // Direct WhatsApp on mobile for immediate conversion
        triggerAdsConversion('package_direct_whatsapp');
        const text = encodeURIComponent(
          `Hi Aman! I saw your Google Ad for the *${pkgName}* package. Please share the detailed itinerary and discounted price for this trip.`
        );
        window.open(`https://wa.me/${AMAN_PHONE}?text=${text}`, '_blank');
      } else {
        // On desktop: scroll to form and prefill
        const destSelect = document.getElementById('destSelect');
        if (destSelect && destValue) {
          destSelect.value = destValue;
        }
        const formCard = document.getElementById('leadCaptureForm');
        if (formCard) {
          formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const nameInput = document.getElementById('travelerName');
          if (nameInput) nameInput.focus();
        }
      }
    });
  });

  // 3. Quick FAQ Accordion Toggle
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      if (!item) return;

      const isOpen = item.classList.contains('active');
      // Close all other items
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });

  // 4. Call Click Tracking
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function () {
      triggerAdsConversion('phone_call_click');
    });
  });

})();
