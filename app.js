// ==========================================================================
// AR Fibernet - app.js
// Modern Broadband & OTT Service with Cart Flow & 18% GST Billing Engine
// ==========================================================================

// AR Fibernet Packages Definition (Matching arfibernet.lovable.app)
const DEFAULT_PLANS = [
    {
        name: "Starter",
        speed: "30 Mbps",
        speedPercent: 30,
        limit: "1000 GB",
        fupSpeed: "4 Mbps",
        price: 399,
        price3M: 1197,
        price6M: 2394,
        price12M: 4788,
        validity: 30,
        popular: false
    },
    {
        name: "Basic",
        speed: "30 Mbps",
        speedPercent: 30,
        limit: "1000 GB",
        fupSpeed: "4 Mbps",
        price: 399,
        price3M: 1197,
        price6M: 2394,
        price12M: 4788,
        validity: 30,
        popular: false
    },
    {
        name: "Standard",
        speed: "50 Mbps",
        speedPercent: 50,
        limit: "1500 GB",
        fupSpeed: "4 Mbps",
        price: 499,
        price3M: 1497,
        price6M: 2994,
        price12M: 5988,
        validity: 30,
        popular: false
    },
    {
        name: "Value",
        speed: "75 Mbps",
        speedPercent: 65,
        limit: "2500 GB",
        fupSpeed: "5 Mbps",
        price: 599,
        price3M: 1797,
        price6M: 3594,
        price12M: 7188,
        validity: 30,
        popular: false
    },
    {
        name: "Popular",
        speed: "100 Mbps",
        speedPercent: 80,
        limit: "3500 GB",
        fupSpeed: "10 Mbps",
        price: 699,
        price3M: 2097,
        price6M: 4194,
        price12M: 8388,
        validity: 30,
        popular: true // Most Popular badge
    },
    {
        name: "Advanced",
        speed: "150 Mbps",
        speedPercent: 85,
        limit: "3500 GB",
        fupSpeed: "10 Mbps",
        price: 799,
        price3M: 2397,
        price6M: 4794,
        price12M: 9588,
        validity: 30,
        popular: false
    },
    {
        name: "Premium",
        speed: "200 Mbps",
        speedPercent: 90,
        limit: "3500 GB",
        fupSpeed: "10 Mbps",
        price: 999,
        price3M: 2997,
        price6M: 5994,
        price12M: 11988,
        validity: 30,
        popular: false
    },
    {
        name: "Ultra",
        speed: "300 Mbps",
        speedPercent: 95,
        limit: "3500 GB",
        fupSpeed: "10 Mbps",
        price: 1199,
        price3M: 3597,
        price6M: 7194,
        price12M: 14388,
        validity: 30,
        popular: false
    },
    {
        name: "Ultimate",
        speed: "400 Mbps",
        speedPercent: 98,
        limit: "3500 GB",
        fupSpeed: "10 Mbps",
        price: 1499,
        price3M: 4497,
        price6M: 8994,
        price12M: 17988,
        validity: 30,
        popular: false
    },
    {
        name: "Elite",
        speed: "500 Mbps",
        speedPercent: 100,
        limit: "3500 GB",
        fupSpeed: "10 Mbps",
        price: 1999,
        price3M: 5997,
        price6M: 11994,
        price12M: 23988,
        validity: 30,
        popular: false
    }
];

// AR Fibernet Included OTT Apps List
const AR_OTT_APPS = [
    { name: "Zee5", icon: "fas fa-play", color: "#ff2a70" },
    { name: "Aha", icon: "fas fa-fire", color: "#ff4500" },
    { name: "Sun NXT", icon: "fas fa-sun", color: "#ff6a00" },
    { name: "ETV Win", icon: "fas fa-trophy", color: "#0284c7" },
    { name: "FanCode", icon: "fas fa-futbol", color: "#e056fd" },
    { name: "Smart Play", icon: "fas fa-tv", color: "#00c9a7" },
    { name: "OTTplay", icon: "fas fa-film", color: "#eab308" },
    { name: "DistroTV", icon: "fas fa-broadcast-tower", color: "#06b6d4" },
    { name: "Friday", icon: "fas fa-video", color: "#ec4899" },
    { name: "OM TV", icon: "fas fa-om", color: "#f97316" },
    { name: "Run TV", icon: "fas fa-running", color: "#8b5cf6" },
    { name: "Hotstar", icon: "fas fa-star", color: "#00d2f3" },
    { name: "SonyLIV", icon: "fas fa-tv", color: "#00e5ff" }
];

// Default OTT Bundle Plans for OTT Section
const DEFAULT_OTT_PLANS = [
    {
        name: "AR Entertainment Starter",
        speed: "50 Mbps",
        speedPercent: 50,
        limit: "1500 GB",
        fupSpeed: "4 Mbps",
        price1M: 599,
        price3M: 1707,
        price6M: 3234,
        price12M: 5990,
        badge: "Popular Starter",
        ottApps: ["Zee5", "Aha", "Sun NXT", "ETV Win", "FanCode", "Smart Play"],
        description: "Ideal for family streaming with 6 top OTT streaming platforms."
    },
    {
        name: "AR Stream Pro Max",
        speed: "100 Mbps",
        speedPercent: 80,
        limit: "3500 GB",
        fupSpeed: "10 Mbps",
        price1M: 849,
        price3M: 2419,
        price6M: 4584,
        price12M: 8490,
        badge: "Best Seller",
        ottApps: ["Disney+ Hotstar", "SonyLIV", "Zee5", "Sun NXT", "Aha", "FanCode", "OTTplay", "DistroTV", "Smart Play", "Friday", "Run TV"],
        description: "Ultra-fast fiber with 11+ premium OTT platforms including live sports & movies."
    },
    {
        name: "AR CineMax VIP + Netflix / Prime",
        speed: "300 Mbps",
        speedPercent: 100,
        limit: "3500 GB",
        fupSpeed: "10 Mbps",
        price1M: 1299,
        price3M: 3702,
        price6M: 7014,
        price12M: 12990,
        badge: "All-in-One VIP",
        ottApps: ["Netflix", "Amazon Prime", "Disney+ Hotstar", "SonyLIV", "Zee5", "Sun NXT", "Aha", "FanCode", "OTTplay", "DistroTV", "ETV Win", "Friday", "OM TV", "Run TV"],
        description: "All-inclusive 4K streaming powerhouse with Netflix, Amazon Prime & 14 top OTT channels."
    }
];

// Seed initial recharges
const DEFAULT_RECHARGES = [
    {
        id: 1723554000000,
        timestamp: "14/08/2026, 06:30:00 PM",
        custID: "ARF-99887",
        custName: "Vikram P.",
        custMobile: "9876543210",
        custEmail: "vikram@example.com",
        planCategory: "Broadband",
        planName: "Popular (100 Mbps)",
        tenure: "12 Months (365 Days)",
        tenureMonths: 12,
        ottApps: ["Zee5", "Aha", "Sun NXT", "ETV Win", "FanCode", "Smart Play", "OTTplay", "DistroTV"],
        basePrice: 8388,
        gstAmount: 1510,
        planPrice: 9898,
        paymentMethod: "UPI",
        transactionID: "TXN5548972101",
        status: "Success"
    },
    {
        id: 1723554100000,
        timestamp: "14/08/2026, 07:15:00 PM",
        custID: "ARF-44552",
        custName: "Sneha Reddy",
        custMobile: "9900112233",
        custEmail: "sneha.r@example.com",
        planCategory: "OTT",
        planName: "AR Stream Pro Max (100 Mbps)",
        tenure: "3 Months (90 Days)",
        tenureMonths: 3,
        ottApps: ["Disney+ Hotstar", "SonyLIV", "Zee5", "Sun NXT", "Aha", "FanCode"],
        basePrice: 2419,
        gstAmount: 435,
        planPrice: 2854,
        paymentMethod: "Debit Card",
        transactionID: "CARD88941029",
        status: "Pending"
    }
];

// Default contact settings
const DEFAULT_CONTACT_SETTINGS = {
    phone: "+91-9740898901",
    whatsapp: "+91-9740898901",
    email: "contact@arfibernet.com",
    altEmail: "",
    customerCare: "+91-9740898902",
    emergencySupport: "+91-9740898903",
    address: "Ramesh Building, KEB Office Rd, Kadugodi, Channasandra",
    city: "Bangalore",
    state: "Karnataka",
    pinCode: "560067",
    serviceArea: "Kadugodi, Channasandra, and surrounding areas in Bangalore",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.896791851214!2d77.7479427!3d12.9784365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e2cd3354b5f%3A0xe21262d193d508e3!2sKadugodi!5e0!3m2!1sen!2sin!4v1723554100000!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    lat: "12.9784",
    lng: "77.7479",
    workingDays: "Monday - Saturday",
    openingTime: "09:00 AM",
    closingTime: "06:00 PM",
    holidayMessage: "Closed on Sundays and Public Holidays",
    showPhone: true,
    showWhatsapp: true,
    showEmail: true,
    showLocation: true,
    showHours: true,
    showMap: true
};

const DEFAULT_CONTACT_MESSAGES = [
    {
        id: 1723554000000,
        timestamp: "14/08/2026, 06:15:00 PM",
        name: "Rajesh Kumar",
        mobile: "9876500112",
        email: "rajesh@example.com",
        subject: "New Fiber Connection Inquiry",
        message: "Hello, I want to request a new AR Fibernet connection at Kadugodi Channasandra near KEB Office. Please call me back."
    }
];

// State variables
let plans = [];
let ottPlans = [];
let recharges = [];
let cartItems = []; // Array of { id: number, category: 'broadband'|'ott', planIndex: number, tenure: number, quantity: number }
let activePlanDuration = "1"; // '1' | '3' | '6' | '12'
let expandedOttCards = {};
let currentRechargeCategory = "broadband"; // 'broadband' | 'ott'
let currentRechargeTenure = 1; // 1 | 3 | 6 | 12
let contactSettings = {};
let contactMessages = [];

// GST constant (18%)
const GST_RATE = 0.18;

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    initLocalStorage();
    
    renderPlans();
    renderOttPlans();
    updateCartNavBadge();
    renderCartPage();
    populateRechargeDropdown();
    updateRechargeFormPrices();
    renderContactPage();
    
    // Bind Navigation events
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Bind Forms
    const rechargeForm = document.getElementById("rechargeForm");
    if (rechargeForm) {
        rechargeForm.addEventListener("submit", handleRechargeSubmit);
    }
    
    const rechargePlanSelect = document.getElementById("rechargePlan");
    if (rechargePlanSelect) {
        rechargePlanSelect.addEventListener("change", handlePlanSelectChange);
    }

    const rechargeOttPlanSelect = document.getElementById("rechargeOttPlan");
    if (rechargeOttPlanSelect) {
        rechargeOttPlanSelect.addEventListener("change", handlePlanSelectChange);
    }
    
    const paymentMethodSelect = document.getElementById("paymentMethod");
    if (paymentMethodSelect) {
        paymentMethodSelect.addEventListener("change", handlePaymentMethodChange);
    }



    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", handleContactSubmit);
    }

    const contactSettingsForm = document.getElementById("contactSettingsForm");
    if (contactSettingsForm) {
        contactSettingsForm.addEventListener("submit", handleSettingsSave);
    }
});

// Initialize LocalStorage
function initLocalStorage() {
    const storedPlans = localStorage.getItem("arb_plans_v2");
    if (storedPlans) {
        plans = JSON.parse(storedPlans);
    } else {
        plans = [...DEFAULT_PLANS];
        localStorage.setItem("arb_plans_v2", JSON.stringify(plans));
    }

    const storedOttPlans = localStorage.getItem("arb_ott_plans");
    if (storedOttPlans) {
        ottPlans = JSON.parse(storedOttPlans);
    } else {
        ottPlans = [...DEFAULT_OTT_PLANS];
        localStorage.setItem("arb_ott_plans", JSON.stringify(ottPlans));
    }

    const storedRecharges = localStorage.getItem("arb_recharges");
    if (storedRecharges) {
        recharges = JSON.parse(storedRecharges);
    } else {
        recharges = [...DEFAULT_RECHARGES];
        localStorage.setItem("arb_recharges", JSON.stringify(recharges));
    }

    const storedCart = localStorage.getItem("arb_cart");
    if (storedCart) {
        try {
            cartItems = JSON.parse(storedCart);
            if (!Array.isArray(cartItems)) {
                cartItems = cartItems ? [cartItems] : [];
            }
        } catch (e) {
            cartItems = [];
        }
    } else {
        cartItems = [{
            id: Date.now(),
            category: "broadband",
            planIndex: 4, // Popular Plan (100 Mbps)
            tenure: 1,
            quantity: 1
        }];
        localStorage.setItem("arb_cart", JSON.stringify(cartItems));
    }

    const storedContactSettings = localStorage.getItem("arb_contact_settings");
    if (storedContactSettings) {
        contactSettings = JSON.parse(storedContactSettings);
    } else {
        contactSettings = { ...DEFAULT_CONTACT_SETTINGS };
        localStorage.setItem("arb_contact_settings", JSON.stringify(contactSettings));
    }

    const storedContactMessages = localStorage.getItem("arb_contact_messages");
    if (storedContactMessages) {
        contactMessages = JSON.parse(storedContactMessages);
    } else {
        contactMessages = [...DEFAULT_CONTACT_MESSAGES];
        localStorage.setItem("arb_contact_messages", JSON.stringify(contactMessages));
    }


}

// Duration pills switcher (1M, 3M, 6M, 12M)
function switchPlanDuration(durationKey) {
    activePlanDuration = durationKey;
    
    const buttons = document.querySelectorAll(".duration-pill-btn");
    buttons.forEach(btn => {
        if (btn.getAttribute("data-duration") === durationKey) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    renderPlans();
}

function toggleCardOtt(cardIdx) {
    expandedOttCards[cardIdx] = !expandedOttCards[cardIdx];
    renderPlans();
}

// Helper to get base taxable plan price by tenure
function getPlanPriceByDuration(plan, durationKey) {
    const d = String(durationKey);
    if (d === "1") return plan.price || plan.price1M || 0;
    if (d === "3") return plan.price3M || Math.round((plan.price || plan.price1M) * 3 * 0.95);
    if (d === "6") return plan.price6M || Math.round((plan.price || plan.price1M) * 6 * 0.90);
    if (d === "12") return plan.price12M || ((plan.price || plan.price1M) * 10);
    return plan.price || plan.price1M || 0;
}

function getTenurePrice(baseMonthlyPrice, tenure, plan = null) {
    if (plan && plan.price1M !== undefined) {
        if (tenure === 1) return plan.price1M;
        if (tenure === 3) return plan.price3M || Math.round(plan.price1M * 3 * 0.95);
        if (tenure === 6) return plan.price6M || Math.round(plan.price1M * 6 * 0.90);
        if (tenure === 12) return plan.price12M || (plan.price1M * 10);
    }
    if (plan && plan.price3M !== undefined) {
        if (tenure === 1) return plan.price;
        if (tenure === 3) return plan.price3M;
        if (tenure === 6) return plan.price6M;
        if (tenure === 12) return plan.price12M;
    }
    if (tenure === 1) return baseMonthlyPrice;
    if (tenure === 3) return Math.round(baseMonthlyPrice * 3 * 0.95);
    if (tenure === 6) return Math.round(baseMonthlyPrice * 6 * 0.90);
    if (tenure === 12) return baseMonthlyPrice * 10;
    return baseMonthlyPrice;
}

// ==========================================================================
// CART ENGINE (Add to Cart, 18% GST Breakdown, Highlight Details, Bottom Total)
// ==========================================================================

function updateCartNavBadge() {
    const badge = document.getElementById("cartNavCount");
    if (!badge) return;
    const count = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
    badge.textContent = count;
    if (count > 0) {
        badge.classList.add("pulse");
        setTimeout(() => badge.classList.remove("pulse"), 400);
    }
}

// Add chosen plan to cart and navigate to Cart review page
function addToCart(category, planIndex, tenure = 1) {
    const parsedIndex = parseInt(planIndex);
    const parsedTenure = parseInt(tenure);
    
    // Check if the exact item exists
    const existing = cartItems.find(item => item.category === category && item.planIndex === parsedIndex && item.tenure === parsedTenure);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cartItems.push({
            id: Date.now() + Math.random(),
            category: category,
            planIndex: parsedIndex,
            tenure: parsedTenure,
            quantity: 1
        });
    }
    
    localStorage.setItem("arb_cart", JSON.stringify(cartItems));
    updateCartNavBadge();
    renderCartPage();
    showSection("cart");
    showToast("Plan added to Cart! Review your 18% GST tax breakdown below.", "success");
}

function updateItemTenure(itemId, tenure) {
    const item = cartItems.find(i => i.id === itemId);
    if (!item) return;
    item.tenure = parseInt(tenure);
    localStorage.setItem("arb_cart", JSON.stringify(cartItems));
    renderCartPage();
}

function updateItemQty(itemId, change) {
    const item = cartItems.find(i => i.id === itemId);
    if (!item) return;
    item.quantity = (item.quantity || 1) + change;
    if (item.quantity <= 0) {
        cartItems = cartItems.filter(i => i.id !== itemId);
        showToast("Item removed from Cart.", "warning");
    } else {
        showToast("Cart quantity updated.", "success");
    }
    localStorage.setItem("arb_cart", JSON.stringify(cartItems));
    updateCartNavBadge();
    renderCartPage();
}

function removeFromCartItem(itemId) {
    cartItems = cartItems.filter(i => i.id !== itemId);
    localStorage.setItem("arb_cart", JSON.stringify(cartItems));
    updateCartNavBadge();
    renderCartPage();
    showToast("Item removed from Cart.", "warning");
}

// Proceed directly from Cart into checkout details
function proceedFromCartToRecharge() {
    const checkForm = document.getElementById("checkoutName");
    if (checkForm) {
        checkForm.focus();
        checkForm.scrollIntoView({ behavior: 'smooth' });
    }
}

// Render dynamic Cart Page
function renderCartPage() {
    const container = document.getElementById("cartContentContainer");
    if (!container) return;

    if (!cartItems || cartItems.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <div class="cart-empty-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h3>Your Cart is Currently Empty</h3>
                <p>You haven't selected any broadband or OTT entertainment package yet. Choose a plan to view its highlighted specs and 18% GST invoice breakdown.</p>
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-primary" onclick="showSection('packages')"><i class="fas fa-wifi"></i> Browse Fiber Packages</button>
                    <button class="btn btn-ott-hero" onclick="showSection('ott')"><i class="fas fa-tv"></i> Browse OTT Combos</button>
                </div>
            </div>
        `;
        return;
    }

    let totalTaxableSubtotal = 0;
    let totalSavings = 0;
    
    let itemsHtml = "";
    let lineItemsHtml = "";

    cartItems.forEach((item) => {
        const isOtt = item.category === "ott";
        const dataset = isOtt ? ottPlans : plans;
        const plan = dataset[item.planIndex] || dataset[0];
        const tenure = item.tenure || 1;
        const qty = item.quantity || 1;

        const baseMonthly = isOtt ? (plan.price1M || 0) : (plan.price || 0);
        const standardMultiplied = baseMonthly * tenure * qty;
        const taxableSubtotal = getTenurePrice(baseMonthly, tenure, plan) * qty;
        const savings = standardMultiplied - taxableSubtotal;
        
        totalTaxableSubtotal += taxableSubtotal;
        totalSavings += savings;

        const durationTitle = tenure === 12 ? "12 Months" : `${tenure} Month${tenure > 1 ? 's' : ''}`;

        // OTT Apps list for badge
        let ottList = [];
        if (isOtt) {
            ottList = plan.ottApps || [];
        } else if (tenure > 1) {
            ottList = AR_OTT_APPS.map(a => a.name);
        }

        const ottBadgesHtml = ottList.length > 0 ? `
            <div class="cart-ott-showcase-box">
                <div class="cart-ott-title"><i class="fas fa-sparkles"></i> Included Streaming Subscriptions (${ottList.length} Apps)</div>
                <div class="cart-ott-badges-list">
                    ${ottList.map(app => `<span class="cart-ott-pill-item"><i class="fas fa-tv"></i> ${app}</span>`).join("")}
                </div>
            </div>
        ` : '';

        // Left side item block
        itemsHtml += `
            <div class="cart-plan-highlight-card" style="margin-bottom: 20px;">
                <div class="cart-plan-header">
                    <div>
                        <span class="cart-plan-category-badge">
                            <i class="${isOtt ? 'fas fa-tv' : 'fas fa-wifi'}"></i> ${isOtt ? 'Fiber + OTT Entertainment Combo' : 'Pure Fiber Broadband'}
                        </span>
                        <h3 class="cart-plan-title">${plan.name}</h3>
                    </div>
                    <button class="cart-remove-btn" onclick="removeFromCartItem(${item.id})" title="Remove from Cart">
                        <i class="fas fa-trash-alt"></i> Remove
                    </button>
                </div>

                <div class="cart-plan-body">
                    <!-- Key Highlighted Specs Grid -->
                    ${(plan.speed || plan.limit || plan.fupSpeed) ? `
                    <div class="cart-specs-highlight-grid">
                        ${plan.speed ? `
                        <div class="cart-spec-badge-box">
                            <div class="cart-spec-icon-wrap"><i class="fas fa-bolt"></i></div>
                            <div class="cart-spec-name">Speed</div>
                            <div class="cart-spec-value">${plan.speed}</div>
                        </div>` : ''}
                        ${plan.limit ? `
                        <div class="cart-spec-badge-box">
                            <div class="cart-spec-icon-wrap"><i class="fas fa-database"></i></div>
                            <div class="cart-spec-name">Data Limit</div>
                            <div class="cart-spec-value">${plan.limit}</div>
                        </div>` : ''}
                        ${plan.fupSpeed ? `
                        <div class="cart-spec-badge-box">
                            <div class="cart-spec-icon-wrap"><i class="fas fa-tachometer-alt"></i></div>
                            <div class="cart-spec-name">FUP Speed</div>
                            <div class="cart-spec-value">${plan.fupSpeed}</div>
                        </div>` : ''}
                    </div>` : ''}

                    <!-- Interactive Duration Changer -->
                    <div class="cart-tenure-changer-box">
                        <div class="cart-tenure-changer-title">
                            <span><i class="far fa-calendar-alt"></i> Selected Duration Sub-Plan:</span>
                            <strong style="color:#0284c7;">${durationTitle}</strong>
                        </div>
                        <div class="cart-tenure-pills">
                            <div class="cart-tenure-pill ${tenure === 1 ? 'active' : ''}" onclick="updateItemTenure(${item.id}, 1)">
                                <div class="cart-tenure-pill-duration">1 Month</div>
                                <div class="cart-tenure-pill-rate">₹${getTenurePrice(baseMonthly, 1, plan)}</div>
                            </div>
                            <div class="cart-tenure-pill ${tenure === 3 ? 'active' : ''}" onclick="updateItemTenure(${item.id}, 3)">
                                <div class="cart-tenure-pill-duration">3 Months</div>
                                <div class="cart-tenure-pill-rate">₹${getTenurePrice(baseMonthly, 3, plan)}</div>
                            </div>
                            <div class="cart-tenure-pill ${tenure === 6 ? 'active' : ''}" onclick="updateItemTenure(${item.id}, 6)">
                                <div class="cart-tenure-pill-duration">6 Months</div>
                                <div class="cart-tenure-pill-rate">₹${getTenurePrice(baseMonthly, 6, plan)}</div>
                            </div>
                            <div class="cart-tenure-pill ${tenure === 12 ? 'active' : ''}" onclick="updateItemTenure(${item.id}, 12)">
                                <div class="cart-tenure-pill-duration">12 Months</div>
                                <div class="cart-tenure-pill-rate">₹${getTenurePrice(baseMonthly, 12, plan)}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Quantity Selector -->
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px; padding-top: 15px; border-top: 1px solid #f1f5f9;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 13px; font-weight: 600; color: #64748b;">Quantity:</span>
                            <div style="display: flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 6px; overflow: hidden; background: #fff;">
                                <button type="button" onclick="updateItemQty(${item.id}, -1)" style="padding: 4px 10px; border: none; background: #f8fafc; color: #475569; font-weight: bold; cursor: pointer; transition: background 0.2s;">-</button>
                                <span style="padding: 4px 12px; font-size: 14px; font-weight: 700; color: #0f172a; min-width: 24px; text-align: center;">${qty}</span>
                                <button type="button" onclick="updateItemQty(${item.id}, 1)" style="padding: 4px 10px; border: none; background: #f8fafc; color: #475569; font-weight: bold; cursor: pointer; transition: background 0.2s;">+</button>
                            </div>
                        </div>
                        <div style="text-align: right;">
                            <span style="font-size: 11px; color: #64748b; display: block;">Subtotal</span>
                            <span style="font-size: 15px; font-weight: 800; color: #0f172a;">₹${taxableSubtotal}</span>
                        </div>
                    </div>

                    ${ottBadgesHtml}
                </div>
            </div>
        `;

        // Right side invoice line items
        lineItemsHtml += `
            <div class="invoice-line-row" style="margin-bottom: 8px;">
                <div style="display: flex; flex-direction: column;">
                    <span style="font-weight: 600; color: #0f172a;">${plan.name}</span>
                    <span style="font-size: 11px; color: #64748b;">${durationTitle} x ${qty}</span>
                </div>
                <strong style="color: #0f172a;">₹${taxableSubtotal}</strong>
            </div>
        `;
    });

    const gstAmount = Math.round(totalTaxableSubtotal * GST_RATE);
    const totalPayable = totalTaxableSubtotal + gstAmount;

    container.innerHTML = `
        <div class="cart-grid-layout">
            <!-- Left Column: List of items -->
            <div style="display: flex; flex-direction: column;">
                ${itemsHtml}
            </div>

            <!-- Right Column: GST Tax Invoice & Checkout -->
            <div class="cart-invoice-card" style="align-self: flex-start;">
                <div class="invoice-header">
                    <i class="fas fa-file-invoice-dollar"></i>
                    <span>GST Tax Invoice Summary</span>
                </div>

                <div class="invoice-line-items" style="max-height: 250px; overflow-y: auto; padding-right: 5px;">
                    ${lineItemsHtml}
                    <div class="invoice-divider"></div>
                    ${totalSavings > 0 ? `
                        <div class="invoice-line-row discount-row" style="margin-bottom: 8px;">
                            <span><i class="fas fa-tag"></i> Total Tenure Savings:</span>
                            <strong style="color: var(--success-color);">- ₹${totalSavings}</strong>
                        </div>
                    ` : ''}
                    <div class="invoice-line-row">
                        <span>Taxable Plan Subtotal:</span>
                        <strong>₹${totalTaxableSubtotal}</strong>
                    </div>
                    <div class="invoice-line-row tax-row">
                        <span><span class="gst-badge-pill">18% GST</span> Goods & Services Tax:</span>
                        <strong>+ ₹${gstAmount}</strong>
                    </div>
                </div>

                <div class="invoice-divider"></div>

                <!-- Final Price at the Bottom -->
                <div class="invoice-total-bottom-box">
                    <div>
                        <span class="invoice-total-label">Total Payable Amount</span>
                        <span class="invoice-total-subtext">Inclusive of 18% GST (CGST 9% + SGST 9%)</span>
                    </div>
                    <div class="invoice-total-price">₹${totalPayable}</div>
                </div>

                <!-- Checkout Form right inside Cart for multi-item checkout -->
                <form id="cartCheckoutForm" onsubmit="handleCartCheckout(event)" style="margin-top: 20px; border-top: 1px solid #e2e8f0; padding-top: 15px; text-align: left;">
                    <h4 style="margin-bottom: 12px; font-size: 14px; font-weight: 700; color: #0f172a;"><i class="fas fa-user-check"></i> Customer Checkout Details</h4>
                    
                    <div class="form-row-2" style="margin-bottom: 10px;">
                        <div class="form-group" style="margin-bottom: 0;">
                            <label for="checkoutName" style="font-size: 11px; font-weight: 600; color: #64748b; display: block; margin-bottom: 4px; text-transform: uppercase;">Full Name</label>
                            <input type="text" id="checkoutName" placeholder="Enter full name" required style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
                        </div>
                        <div class="form-group" style="margin-bottom: 0;">
                            <label for="checkoutUsername" style="font-size: 11px; font-weight: 600; color: #64748b; display: block; margin-bottom: 4px; text-transform: uppercase;">Username</label>
                            <input type="text" id="checkoutUsername" placeholder="e.g. user_name" required style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
                        </div>
                    </div>

                    <div class="form-row-2" style="margin-bottom: 12px;">
                        <div class="form-group" style="margin-bottom: 0;">
                            <label for="checkoutMobile" style="font-size: 11px; font-weight: 600; color: #64748b; display: block; margin-bottom: 4px; text-transform: uppercase;">Mobile Number</label>
                            <input type="tel" id="checkoutMobile" placeholder="10-digit mobile" pattern="[0-9]{10}" required style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
                        </div>
                        <div class="form-group" style="margin-bottom: 0;">
                            <label for="checkoutEmail" style="font-size: 11px; font-weight: 600; color: #64748b; display: block; margin-bottom: 4px; text-transform: uppercase;">Email Address</label>
                            <input type="email" id="checkoutEmail" placeholder="Enter email" required style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
                        </div>
                    </div>

                    <div class="form-group" style="margin-bottom: 12px;">
                        <label for="checkoutMethod" style="font-size: 11px; font-weight: 600; color: #64748b; display: block; margin-bottom: 4px; text-transform: uppercase;">Payment Method</label>
                        <select id="checkoutMethod" required style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;" onchange="toggleCheckoutQR()">
                            <option value="" disabled selected>Select method...</option>
                            <option value="UPI">UPI (GPay, PhonePe, Paytm)</option>
                            <option value="Debit Card">Debit / Credit Card</option>
                            <option value="Net Banking">Net Banking</option>
                        </select>
                    </div>

                    <div id="checkoutUPIQR" style="display: none; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 12px; margin-bottom: 12px; text-align: center;">
                        <p style="font-size: 12px; font-weight: 600; margin-bottom: 6px;">Scan & Pay UPI QR:</p>
                        <i class="fas fa-qrcode fa-3x" style="color: #475569; margin-bottom: 8px; display: block;"></i>
                        <input type="text" id="checkoutUTR" placeholder="Enter 12-digit UPI UTR / Ref ID" style="width: 100%; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 12px; text-align: center;">
                    </div>

                    <div class="cart-actions-stack">
                        <button type="submit" class="btn-proceed-recharge" style="width: 100%;">
                            <i class="fas fa-bolt"></i> PAY & RECHARGE NOW (₹${totalPayable})
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function toggleCheckoutQR() {
    const method = document.getElementById("checkoutMethod").value;
    const qrBox = document.getElementById("checkoutUPIQR");
    if (qrBox) {
        if (method === "UPI") {
            qrBox.style.display = "block";
            document.getElementById("checkoutUTR").required = true;
        } else {
            qrBox.style.display = "none";
            document.getElementById("checkoutUTR").required = false;
        }
    }
}

function handleCartCheckout(e) {
    e.preventDefault();
    const name = document.getElementById("checkoutName").value.trim();
    const username = document.getElementById("checkoutUsername").value.trim();
    const mobile = document.getElementById("checkoutMobile").value.trim();
    const email = document.getElementById("checkoutEmail").value.trim();
    const method = document.getElementById("checkoutMethod").value;
    const utr = document.getElementById("checkoutUTR") ? document.getElementById("checkoutUTR").value.trim() : "";
    
    if (method === "UPI" && (!utr || utr.length < 10)) {
        showToast("Please enter a valid 10-12 digit UPI Reference ID / UTR.", "error");
        return;
    }
    
    // Generate transaction records for all items in the cart
    cartItems.forEach(item => {
        const isOtt = item.category === "ott";
        const dataset = isOtt ? ottPlans : plans;
        const plan = dataset[item.planIndex] || dataset[0];
        const tenure = item.tenure || 1;
        const qty = item.quantity || 1;
        
        const baseMonthly = isOtt ? (plan.price1M || 0) : (plan.price || 0);
        const basePrice = getTenurePrice(baseMonthly, tenure, plan) * qty;
        const gstAmount = Math.round(basePrice * GST_RATE);
        const finalPrice = basePrice + gstAmount;

        const durationText = tenure === 12 ? "12 Months" : `${tenure} Month${tenure > 1 ? 's' : ''}`;
        
        const newRecharge = {
            id: Date.now() + Math.random(),
            timestamp: new Date().toLocaleString(),
            custID: username,
            custName: name,
            custMobile: mobile,
            custEmail: email,
            planCategory: isOtt ? "Broadband + OTT" : "Broadband",
            planName: `${plan.name} (${isOtt ? 'OTT Bundle' : plan.speed}) x${qty}`,
            tenure: `${durationText} (${tenure * 30} Days)`,
            tenureMonths: tenure,
            ottApps: isOtt ? (plan.ottApps || []) : (tenure > 1 ? AR_OTT_APPS.map(a => a.name) : []),
            basePrice: basePrice,
            gstAmount: gstAmount,
            planPrice: finalPrice,
            paymentMethod: method,
            transactionID: method === "UPI" ? utr : "TXN" + Math.floor(10000000 + Math.random() * 90000000),
            status: "Success"
        };
        
        recharges.unshift(newRecharge);
    });
    
    localStorage.setItem("arb_recharges", JSON.stringify(recharges));
    
    // Reset Cart
    cartItems = [];
    localStorage.setItem("arb_cart", JSON.stringify(cartItems));
    
    updateCartNavBadge();
    renderCartPage();
    if (typeof renderRechargeLogs === "function") {
        renderRechargeLogs();
    }
    
    showToast("Payment Successful! All recharges processed.", "success");
    
    // Redirect to home page
    setTimeout(() => {
        showSection("home");
    }, 1500);
}

// ==========================================================================
// RENDER AR FIBER NET PLAN CARDS (Matching arfibernet.lovable.app)
// ==========================================================================
function renderPlans() {
    const plansGrid = document.getElementById("plansGrid");
    if (!plansGrid) return;

    plansGrid.innerHTML = "";
    
    const hasOtt = activePlanDuration !== "1"; // 3M, 6M, 12M include OTT
    const displayPlans = activePlanDuration === "1" ? plans : plans.filter(p => p.name !== "Starter");
    
    displayPlans.forEach((plan, index) => {
        const card = document.createElement("div");
        const isPopular = plan.popular === true;
        card.className = `ar-plan-card ${isPopular ? 'is-popular' : ''}`;
        
        const price = getPlanPriceByDuration(plan, activePlanDuration);
        const periodSuffix = activePlanDuration === "1" ? "/month" : `/${activePlanDuration}months`;

        let ottHtml = "";
        if (hasOtt) {
            const isExpanded = !!expandedOttCards[index];
            const visibleApps = isExpanded ? AR_OTT_APPS : AR_OTT_APPS.slice(0, 8);
            const showToggle = AR_OTT_APPS.length > 8;
            
            const ottItemsHtml = visibleApps.map(app => `
                <div class="ar-ott-item" title="${app.name}">
                    <i class="${app.icon}" style="color: ${app.color};"></i>
                    <span>${app.name}</span>
                </div>
            `).join("");

            ottHtml = `
                <div class="ar-card-ott-box">
                    <div class="ar-ott-header">
                        <i class="fas fa-sparkles"></i> Included OTT Apps
                    </div>
                    <div class="ar-ott-grid">
                        ${ottItemsHtml}
                    </div>
                    ${showToggle ? `
                        <button class="ar-ott-toggle-btn" onclick="toggleCardOtt(${index})">
                            ${isExpanded ? 'Show Less <i class="fas fa-chevron-up"></i>' : `+${AR_OTT_APPS.length - 8} More <i class="fas fa-chevron-down"></i>`}
                        </button>
                    ` : ''}
                </div>
            `;
        } else {
            ottHtml = "";
        }

        const originalIndex = plans.indexOf(plan);

        card.innerHTML = `
            ${isPopular ? `
                <div class="ar-popular-badge">
                    <i class="fas fa-star"></i> Most Popular
                </div>
            ` : ''}
            
            <h3 class="ar-plan-name">${plan.name}</h3>
            
            <div class="ar-specs-stack">
                <!-- Speed -->
                <div class="ar-spec-row spec-speed">
                    <div class="ar-spec-icon icon-speed"><i class="fas fa-bolt"></i></div>
                    <div class="ar-spec-content">
                        <span class="ar-spec-label">Speed</span>
                        <p class="ar-spec-val">${plan.speed}</p>
                    </div>
                </div>

                <!-- Data/mo -->
                <div class="ar-spec-row spec-data">
                    <div class="ar-spec-icon icon-data"><i class="fas fa-database"></i></div>
                    <div class="ar-spec-content">
                        <span class="ar-spec-label">Data/mo</span>
                        <p class="ar-spec-val">${plan.limit}</p>
                    </div>
                </div>

                <!-- FUP Speed -->
                <div class="ar-spec-row spec-fup">
                    <div class="ar-spec-icon icon-fup"><i class="fas fa-tachometer-alt"></i></div>
                    <div class="ar-spec-content">
                        <span class="ar-spec-label">FUP Speed</span>
                        <p class="ar-spec-val">${plan.fupSpeed}</p>
                    </div>
                </div>
            </div>
            
            ${ottHtml}
            
            <div style="flex: 1; min-height: 15px;"></div>
            
            <div class="ar-plan-price-wrap" style="justify-content: center; margin-top: 10px; margin-bottom: 15px;">
                ₹${price} <span class="ar-plan-period">${periodSuffix}</span>
            </div>
            
            <button class="ar-recharge-btn ${isPopular ? 'btn-popular' : 'btn-outline'}" onclick="addToCart('broadband', ${originalIndex}, ${activePlanDuration})">
                <i class="fas fa-shopping-cart"></i> Recharge / Add to Cart
            </button>
        `;
        plansGrid.appendChild(card);
    });
}

// Render dynamic OTT plan cards in OTT grid
function renderOttPlans() {
    const ottGrid = document.getElementById("ottPlansGrid");
    if (!ottGrid) return;

    ottGrid.innerHTML = "";
    
    ottPlans.forEach((plan, index) => {
        const card = document.createElement("div");
        card.className = "ott-plan-card";
        
        const appsList = (plan.ottApps || []).map(app => {
            return `<span class="ott-app-tag"><i class="fas fa-check"></i> ${app}</span>`;
        }).join("");
        
        const price1M = plan.price1M || 0;
        const price3M = plan.price3M || Math.round(price1M * 3 * 0.95);
        const price6M = plan.price6M || Math.round(price1M * 6 * 0.90);
        const price12M = plan.price12M || (price1M * 10);
        
        card.innerHTML = `
            ${plan.badge ? `<span class="ott-card-badge">${plan.badge}</span>` : ''}
            <div class="ott-card-header">
                <h3>${plan.name}</h3>
                ${plan.speed ? `<div class="ott-card-speed"><i class="fas fa-bolt"></i> ${plan.speed} Pure Optical Fiber</div>` : ''}
            </div>
            
            <div class="ott-card-body">
                <div class="ott-apps-header">
                    <span>Bundled OTT Subscriptions</span>
                    <span class="ott-app-count-tag">${(plan.ottApps || []).length} Apps</span>
                </div>
                <div class="ott-apps-list">
                    ${appsList}
                </div>
                <ul class="ott-specs-list">
                    ${plan.limit ? `<li><span>Data Limit:</span> <strong>${plan.limit}</strong></li>` : ''}
                    ${plan.fupSpeed ? `<li><span>Post-FUP Speed:</span> <strong>${plan.fupSpeed}</strong></li>` : ''}
                    <li><span>Multi-Device 4K:</span> <strong>Supported</strong></li>
                </ul>
            </div>

            <div style="flex: 1; min-height: 15px;"></div>

            <div class="ott-card-price-box" style="margin-top: 10px; margin-bottom: 15px;">
                <div class="ott-card-price"><sup>₹</sup>${price1M}<sub>/Month</sub></div>
                <div class="ott-tenure-rates">
                    <div class="ott-rate-pill">
                        <span class="rate-duration">3 Months</span>
                        <span class="rate-val">₹${price3M}</span>
                    </div>
                    <div class="ott-rate-pill">
                        <span class="rate-duration">6 Months</span>
                        <span class="rate-val">₹${price6M}</span>
                    </div>
                    <div class="ott-rate-pill">
                        <span class="rate-duration">12 Months</span>
                        <span class="rate-val">₹${price12M}</span>
                    </div>
                </div>
            </div>

            <div class="ott-card-footer">
                <button class="btn btn-ott-hero btn-block" onclick="addToCart('ott', ${index}, 1)">
                    <i class="fas fa-shopping-cart"></i> ADD TO CART & RECHARGE
                </button>
            </div>
        `;
        ottGrid.appendChild(card);
    });
}

// Switch between Broadband and OTT in Recharge Portal
function switchRechargeCategory(category) {
    currentRechargeCategory = category;
    
    const catBtnBroadband = document.getElementById("catBtnBroadband");
    const catBtnOtt = document.getElementById("catBtnOtt");
    const rechargeOttPlanContainer = document.getElementById("rechargeOttPlanContainer");
    const rechargePlanLabel = document.getElementById("rechargePlanLabel");
    const rechargeOttSelect = document.getElementById("rechargeOttPlan");
    
    if (category === "ott") {
        if (catBtnOtt) catBtnOtt.classList.add("active");
        if (catBtnBroadband) catBtnBroadband.classList.remove("active");
        if (rechargeOttPlanContainer) rechargeOttPlanContainer.style.display = "block";
        if (rechargePlanLabel) rechargePlanLabel.innerHTML = '<i class="fas fa-box"></i> Select Broadband Package';
        if (rechargeOttSelect) rechargeOttSelect.required = true;
    } else {
        if (catBtnBroadband) catBtnBroadband.classList.add("active");
        if (catBtnOtt) catBtnOtt.classList.remove("active");
        if (rechargeOttPlanContainer) rechargeOttPlanContainer.style.display = "none";
        if (rechargePlanLabel) rechargePlanLabel.innerHTML = '<i class="fas fa-box"></i> Select Broadband Package';
        if (rechargeOttSelect) {
            rechargeOttSelect.required = false;
            rechargeOttSelect.value = "";
        }
    }
    
    populateRechargeDropdown();
    updateRechargeFormPrices();
}

// Populate plans dropdown in the recharge form
function populateRechargeDropdown(selectedIdx = null) {
    const bbSelect = document.getElementById("rechargePlan");
    const ottSelect = document.getElementById("rechargeOttPlan");
    
    if (bbSelect) {
        bbSelect.innerHTML = '<option value="" disabled selected>Choose a package...</option>';
        plans.forEach((plan, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `${plan.name} (${plan.speed} • ${plan.limit}) - ₹${plan.price}/Mo`;
            bbSelect.appendChild(option);
        });
        if (selectedIdx !== null && selectedIdx !== undefined && currentRechargeCategory !== "ott") {
            bbSelect.value = selectedIdx;
        }
    }
    
    if (ottSelect) {
        ottSelect.innerHTML = '<option value="" disabled selected>Choose an OTT package...</option>';
        ottPlans.forEach((plan, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `${plan.name} (${(plan.ottApps || []).length} Apps) - ₹${plan.price1M || plan.price1m || plan.price}/Mo`;
            ottSelect.appendChild(option);
        });
        if (selectedIdx !== null && selectedIdx !== undefined && currentRechargeCategory === "ott") {
            ottSelect.value = selectedIdx;
        }
    }
}

// Tenure Sub-Plan Selection in Recharge Portal (1M, 3M, 6M, 12M)
function selectRechargeTenure(months) {
    currentRechargeTenure = parseInt(months);
    const tenureHidden = document.getElementById("selectedTenure");
    if (tenureHidden) tenureHidden.value = currentRechargeTenure;
    
    const tenureCards = document.querySelectorAll(".tenure-card");
    tenureCards.forEach(card => {
        const t = parseInt(card.getAttribute("data-tenure"));
        const radioIcon = card.querySelector(".tenure-radio");
        if (t === currentRechargeTenure) {
            card.classList.add("active");
            if (radioIcon) radioIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        } else {
            card.classList.remove("active");
            if (radioIcon) radioIcon.innerHTML = '<i class="far fa-circle"></i>';
        }
    });
    
    updateRechargeFormPrices();
}

function handlePlanSelectChange() {
    updateRechargeFormPrices();
}

// Dynamic Recharge Form Updates with Highlighted Specs & 18% GST Calculation
function updateRechargeFormPrices() {
    const planSelect = document.getElementById("rechargePlan");
    const ottSelect = document.getElementById("rechargeOttPlan");
    const amountInput = document.getElementById("rechargeAmount");
    const summaryPlanName = document.getElementById("summaryPlanName");
    const summaryDuration = document.getElementById("summaryDuration");
    const summaryBasePrice = document.getElementById("summaryBasePrice");
    const summarySavingsRow = document.getElementById("summarySavingsRow");
    const summarySavings = document.getElementById("summarySavings");
    const summaryGst = document.getElementById("summaryGst");
    const summaryTotal = document.getElementById("summaryTotal");
    const rechargeSubmitBtn = document.getElementById("rechargeSubmitBtn");
    
    const highlightBox = document.getElementById("rechargePlanHighlightBox");
    const highlightCategory = document.getElementById("highlightPlanCategory");
    const highlightTitle = document.getElementById("highlightPlanTitle");
    const highlightSpecsRow = document.getElementById("highlightSpecsRow");
    const ottBadges = document.getElementById("ottAppPreviewBadges");
    
    const tPrice1 = document.getElementById("tenurePrice1");
    const tPrice3 = document.getElementById("tenurePrice3");
    const tPrice6 = document.getElementById("tenurePrice6");
    const tPrice12 = document.getElementById("tenurePrice12");

    if (!planSelect) return;
    
    const bbIndex = planSelect.value;
    const ottIndex = ottSelect ? ottSelect.value : "";
    
    if (bbIndex !== "" && plans[bbIndex]) {
        const bbPlan = plans[bbIndex];
        let baseMonthly = bbPlan.price || 0;
        let planNameText = `${bbPlan.name} (${bbPlan.speed})`;
        let bundledApps = [];
        
        let ottPlan = null;
        if (currentRechargeCategory === "ott" && ottIndex !== "" && ottPlans[ottIndex]) {
            ottPlan = ottPlans[ottIndex];
            baseMonthly += (ottPlan.price1M || ottPlan.price1m || ottPlan.price || 0);
            planNameText += ` + ${ottPlan.name}`;
            bundledApps = ottPlan.ottApps || [];
        }
        
        const price1 = getTenurePrice(bbPlan.price || 0, 1, bbPlan) + (ottPlan ? getTenurePrice(ottPlan.price1M || ottPlan.price1m || ottPlan.price || 0, 1, ottPlan) : 0);
        const price3 = getTenurePrice(bbPlan.price || 0, 3, bbPlan) + (ottPlan ? getTenurePrice(ottPlan.price1M || ottPlan.price1m || ottPlan.price || 0, 3, ottPlan) : 0);
        const price6 = getTenurePrice(bbPlan.price || 0, 6, bbPlan) + (ottPlan ? getTenurePrice(ottPlan.price1M || ottPlan.price1m || ottPlan.price || 0, 6, ottPlan) : 0);
        const price12 = getTenurePrice(bbPlan.price || 0, 12, bbPlan) + (ottPlan ? getTenurePrice(ottPlan.price1M || ottPlan.price1m || ottPlan.price || 0, 12, ottPlan) : 0);
        
        if (tPrice1) tPrice1.textContent = `₹ ${price1}`;
        if (tPrice3) tPrice3.textContent = `₹ ${price3}`;
        if (tPrice6) tPrice6.textContent = `₹ ${price6}`;
        if (tPrice12) tPrice12.textContent = `₹ ${price12}`;

        const taxablePrice = getTenurePrice(bbPlan.price || 0, currentRechargeTenure, bbPlan) + (ottPlan ? getTenurePrice(ottPlan.price1M || ottPlan.price1m || ottPlan.price || 0, currentRechargeTenure, ottPlan) : 0);
        const rawFullPrice = baseMonthly * currentRechargeTenure;
        const savings = rawFullPrice - taxablePrice;
        
        // 18% GST calculation
        const gstAmount = Math.round(taxablePrice * GST_RATE);
        const finalPayable = taxablePrice + gstAmount;

        if (amountInput) amountInput.value = `₹ ${finalPayable}`;
        if (summaryPlanName) summaryPlanName.textContent = planNameText;
        if (summaryBasePrice) summaryBasePrice.textContent = `₹ ${taxablePrice}`;
        
        let durationText = `${currentRechargeTenure} Month (${currentRechargeTenure * 30} Days)`;
        if (currentRechargeTenure === 12) durationText = "12 Months (365 Days Annual)";
        if (summaryDuration) summaryDuration.textContent = durationText;

        if (savings > 0) {
            if (summarySavingsRow) summarySavingsRow.style.display = "flex";
            if (summarySavings) summarySavings.textContent = `- ₹ ${savings}`;
        } else {
            if (summarySavingsRow) summarySavingsRow.style.display = "none";
        }

        if (summaryGst) summaryGst.textContent = `+ ₹ ${gstAmount}`;
        if (summaryTotal) summaryTotal.textContent = `₹ ${finalPayable}`;
        if (rechargeSubmitBtn) rechargeSubmitBtn.innerHTML = `<i class="fas fa-bolt"></i> PAY & SUBMIT RECHARGE (₹ ${finalPayable})`;

        // Highlight Plan Box
        if (highlightBox) {
            highlightBox.style.display = "block";
            if (highlightCategory) highlightCategory.textContent = currentRechargeCategory === "ott" ? "FIBER + OTT ENTERTAINMENT" : "FIBER BROADBAND";
            if (highlightTitle) highlightTitle.textContent = ottPlan ? `${bbPlan.name} (${bbPlan.speed}) + ${ottPlan.name}` : `${bbPlan.name} - ${bbPlan.speed}`;
            if (highlightSpecsRow) {
                highlightSpecsRow.innerHTML = `
                    <span class="highlight-spec-chip"><i class="fas fa-bolt"></i> ${bbPlan.speed}</span>
                    <span class="highlight-spec-chip"><i class="fas fa-database"></i> ${bbPlan.limit}</span>
                    <span class="highlight-spec-chip"><i class="fas fa-tachometer-alt"></i> ${bbPlan.fupSpeed} FUP</span>
                    ${ottPlan ? `<span class="highlight-spec-chip" style="background:#0284c7; color:#fff;"><i class="fas fa-tv" style="color:#fff;"></i> ${ottPlan.name}</span>` : ''}
                    <span class="highlight-spec-chip" style="background:#0284c7; color:#fff;"><i class="far fa-calendar-alt" style="color:#fff;"></i> ${durationText}</span>
                `;
            }
        }

        // OTT Preview Badges
        if (currentRechargeCategory === "ott" && ottPlan && bundledApps.length > 0) {
            if (ottBadges) {
                ottBadges.innerHTML = bundledApps.map(a => `<span class="ott-badge-pill"><i class="fas fa-tv"></i> ${a}</span>`).join("");
            }
        } else if (currentRechargeCategory === "broadband" && currentRechargeTenure > 1) {
            if (ottBadges) {
                ottBadges.innerHTML = AR_OTT_APPS.map(a => `<span class="ott-badge-pill" style="border-color:${a.color}; color:${a.color};"><i class="${a.icon}"></i> ${a.name}</span>`).join("");
            }
        } else {
            if (ottBadges) ottBadges.innerHTML = "";
        }
    } else {
        if (tPrice1) tPrice1.textContent = "₹ 0";
        if (tPrice3) tPrice3.textContent = "₹ 0";
        if (tPrice6) tPrice6.textContent = "₹ 0";
        if (tPrice12) tPrice12.textContent = "₹ 0";
        if (amountInput) amountInput.value = "₹ 0";
        if (summaryPlanName) summaryPlanName.textContent = "No plan selected";
        if (summaryBasePrice) summaryBasePrice.textContent = "₹ 0";
        if (summarySavingsRow) summarySavingsRow.style.display = "none";
        if (summaryGst) summaryGst.textContent = "+ ₹ 0";
        if (summaryTotal) summaryTotal.textContent = "₹ 0";
        if (highlightBox) highlightBox.style.display = "none";
        if (ottBadges) ottBadges.innerHTML = "";
    }
}

// Payment method display
function handlePaymentMethodChange() {
    const methodSelect = document.getElementById("paymentMethod");
    const qrContainer = document.getElementById("upiQRContainer");
    
    if (!methodSelect || !qrContainer) return;
    
    if (methodSelect.value === "UPI") {
        qrContainer.style.display = "block";
    } else {
        qrContainer.style.display = "none";
    }
}

// Customer Recharge Submission Handler
function handleRechargeSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById("custName").value.trim();
    const custID = document.getElementById("custID").value.trim();
    const mobile = document.getElementById("custMobile").value.trim();
    const email = document.getElementById("custEmail").value.trim();
    const bbIndex = document.getElementById("rechargePlan").value;
    const ottSelect = document.getElementById("rechargeOttPlan");
    const ottIndex = ottSelect ? ottSelect.value : "";
    const method = document.getElementById("paymentMethod").value;
    const transID = document.getElementById("transactionID").value.trim();
    
    const isOtt = currentRechargeCategory === "ott";
    
    if (!name || !custID || !mobile || !email || bbIndex === "" || (isOtt && ottIndex === "") || !method || !transID) {
        showToast("Please fill in all the required fields.", "error");
        return;
    }
    
    const selectedPlan = plans[bbIndex];
    const ottPlan = isOtt ? ottPlans[ottIndex] : null;
    
    const baseMonthly = (selectedPlan.price || 0) + (ottPlan ? (ottPlan.price1M || ottPlan.price1m || ottPlan.price || 0) : 0);
    const taxablePrice = getTenurePrice(selectedPlan.price || 0, currentRechargeTenure, selectedPlan) + 
                         (ottPlan ? getTenurePrice(ottPlan.price1M || ottPlan.price1m || ottPlan.price || 0, currentRechargeTenure, ottPlan) : 0);
    const gstAmount = Math.round(taxablePrice * GST_RATE);
    const finalAmount = taxablePrice + gstAmount;
    
    let durationText = `${currentRechargeTenure} Month (${currentRechargeTenure * 30} Days)`;
    if (currentRechargeTenure === 12) durationText = "12 Months (365 Days Annual)";

    const bundledApps = isOtt 
        ? (ottPlan.ottApps || [])
        : (currentRechargeTenure > 1 ? AR_OTT_APPS.map(a => a.name) : []);

    const newRecharge = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        custID: custID,
        custName: name,
        custMobile: mobile,
        custEmail: email,
        planCategory: isOtt ? "Broadband + OTT" : "Broadband",
        planName: ottPlan ? `${selectedPlan.name} (${selectedPlan.speed}) + ${ottPlan.name}` : `${selectedPlan.name} (${selectedPlan.speed})`,
        tenure: durationText,
        tenureMonths: currentRechargeTenure,
        ottApps: bundledApps,
        basePrice: taxablePrice,
        gstAmount: gstAmount,
        planPrice: finalAmount,
        paymentMethod: method,
        transactionID: transID,
        status: "Pending"
    };
    
    recharges.unshift(newRecharge);
    localStorage.setItem("arb_recharges", JSON.stringify(recharges));
    
    document.getElementById("rechargeForm").reset();
    document.getElementById("upiQRContainer").style.display = "none";
    selectRechargeTenure(1);
    updateRechargeFormPrices();
    
    // Clear cart items upon completing recharge
    cartItems = [];
    localStorage.removeItem("arb_cart");
    updateCartNavBadge();
    renderCartPage();

    showReceiptModal(newRecharge);
    showToast("Recharge registration submitted successfully!", "success");
    

}

// Receipt Modal Controls with 18% GST Breakdown
function showReceiptModal(recharge) {
    const detailsContainer = document.getElementById("receiptDetails");
    if (!detailsContainer) return;
    
    const ottAppsHtml = (recharge.ottApps && recharge.ottApps.length > 0)
        ? `<div class="receipt-row"><span>Included OTTs:</span> <strong style="color:#e50914;">${recharge.ottApps.join(", ")}</strong></div>`
        : "";
    
    detailsContainer.innerHTML = `
        <div class="receipt-row"><span>Date & Time:</span> <strong>${recharge.timestamp}</strong></div>
        <div class="receipt-row"><span>Transaction ID / Ref:</span> <strong>${recharge.transactionID}</strong></div>
        <div class="receipt-row"><span>Username:</span> <strong>${recharge.custID}</strong></div>
        <div class="receipt-row"><span>Customer Name:</span> <strong>${recharge.custName}</strong></div>
        <div class="receipt-row"><span>Mobile No:</span> <strong>${recharge.custMobile}</strong></div>
        <div class="receipt-row"><span>Plan Subscribed:</span> <strong>${recharge.planName}</strong></div>
        <div class="receipt-row"><span>Duration / Tenure:</span> <strong>${recharge.tenure}</strong></div>
        ${ottAppsHtml}
        <div class="receipt-row"><span>Taxable Base Amount:</span> <strong>₹${recharge.basePrice || Math.round(recharge.planPrice / 1.18)}</strong></div>
        <div class="receipt-row" style="color:#0284c7;"><span>Goods & Services Tax (18% GST):</span> <strong>+ ₹${recharge.gstAmount || Math.round((recharge.planPrice / 1.18) * 0.18)}</strong></div>
        <div class="receipt-row" style="border-top: 1px solid #cbd5e1; padding-top: 8px;"><span>Total Paid (incl. 18% GST):</span> <strong style="color: var(--primary-color); font-size: 18px;">₹${recharge.planPrice}/-</strong></div>
        <div class="receipt-row"><span>Payment Method:</span> <strong>${recharge.paymentMethod}</strong></div>
        <div class="receipt-row" style="margin-top: 15px; border-top: 1px solid var(--border-color); padding-top: 10px;">
            <span>Current Status:</span> 
            <span class="status-badge status-pending" id="receiptStatus">PENDING VERIFICATION</span>
        </div>
        <p style="font-size: 11px; color: var(--text-muted); text-align: center; margin-top: 15px;">
            Your transaction is securely registered. Once the administrator verifies payment reference, your internet line & OTT subscription validity will be credited.
        </p>
    `;
    
    document.getElementById("receiptModal").style.display = "flex";
}

function closeReceiptModal() {
    document.getElementById("receiptModal").style.display = "none";
}

// Toast Popup Controller
function showToast(message, type = "success") {
    const toast = document.getElementById("toastNotification");
    const icon = document.getElementById("toastIcon");
    const msgEl = document.getElementById("toastMessage");
    
    if (!toast || !icon || !msgEl) return;
    
    toast.className = "toast-card";
    
    if (type === "success") {
        toast.classList.add("success");
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else if (type === "error") {
        toast.classList.add("error");
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    } else {
        toast.classList.add("warning");
        icon.innerHTML = '<i class="fas fa-info-circle"></i>';
    }
    
    msgEl.textContent = message;
    toast.style.display = "block";
    
    setTimeout(() => {
        toast.style.display = "none";
    }, 4000);
}

// SPA Section Switcher
function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(sec => sec.classList.remove("active"));

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => link.classList.remove("active"));

    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add("active");
    }

    const activeLink = Array.from(navLinks).find(link => {
        const onclickAttr = link.getAttribute("onclick");
        return onclickAttr && onclickAttr.includes(`'${sectionId}'`);
    });
    if (activeLink) {
        activeLink.classList.add("active");
    }

    const navMenu = document.getElementById("navMenu");
    if (navMenu) navMenu.classList.remove("active");

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId === "cart") {
        renderCartPage();

    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const mobile = document.getElementById("contactMobile").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    
    if (!name || !mobile || !email || !subject || !message) {
        showToast("Please fill in all fields.", "error");
        return;
    }
    
    const newMsg = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        name,
        mobile,
        email,
        subject,
        message
    };
    
    contactMessages.unshift(newMsg);
    localStorage.setItem("arb_contact_messages", JSON.stringify(contactMessages));
    document.getElementById("contactForm").reset();
    showToast("Your message has been sent successfully! Our team will contact you shortly.", "success");
    

}

function renderContactPage() {
    const topBar = document.getElementById("topInfoBar");
    const infoContainer = document.getElementById("contactInfoContainer");
    const footerContacts = document.getElementById("footerContacts");
    
    const s = contactSettings;
    
    if (topBar) {
        topBar.innerHTML = `
            <span><i class="fas fa-phone-alt"></i> <a href="tel:${s.phone}">${s.phone}</a></span>
            <span><i class="fas fa-map-marker-alt"></i> ${s.address}, ${s.city}: ${s.pinCode}</span>
            <span><i class="far fa-clock"></i> ${s.openingTime} to ${s.closingTime}</span>
        `;
    }
    
    if (infoContainer) {
        let cardsHtml = "";
        if (s.showPhone !== false) {
            cardsHtml += `
                <div class="mini-contact-card">
                    <div class="mini-card-icon"><i class="fas fa-phone-alt"></i></div>
                    <div>
                        <div class="mini-card-title">Phone & Support</div>
                        <div class="mini-card-text">Sales: <a href="tel:${s.phone}">${s.phone}</a><br>Care: <a href="tel:${s.customerCare}">${s.customerCare}</a></div>
                    </div>
                </div>
            `;
        }
        if (s.showWhatsapp !== false) {
            cardsHtml += `
                <div class="mini-contact-card">
                    <div class="mini-card-icon"><i class="fab fa-whatsapp" style="color:#25d366;"></i></div>
                    <div>
                        <div class="mini-card-title">WhatsApp Support</div>
                        <div class="mini-card-text"><a href="https://wa.me/${(s.whatsapp||'').replace(/[^0-9]/g,'')}" target="_blank">Chat with us on WhatsApp</a></div>
                    </div>
                </div>
            `;
        }
        if (s.showEmail !== false) {
            cardsHtml += `
                <div class="mini-contact-card">
                    <div class="mini-card-icon"><i class="fas fa-envelope"></i></div>
                    <div>
                        <div class="mini-card-title">Email Us</div>
                        <div class="mini-card-text"><a href="mailto:${s.email}">${s.email}</a></div>
                    </div>
                </div>
            `;
        }
        if (s.showLocation !== false) {
            cardsHtml += `
                <div class="mini-contact-card">
                    <div class="mini-card-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div>
                        <div class="mini-card-title">Office Address</div>
                        <div class="mini-card-text">${s.address}, ${s.city} - ${s.pinCode}</div>
                    </div>
                </div>
            `;
        }
        if (s.showHours !== false) {
            cardsHtml += `
                <div class="mini-contact-card">
                    <div class="mini-card-icon"><i class="far fa-clock"></i></div>
                    <div>
                        <div class="mini-card-title">Working Hours</div>
                        <div class="mini-card-text">${s.workingDays}: ${s.openingTime} - ${s.closingTime}<br><small style="color:#e65100;">${s.holidayMessage}</small></div>
                    </div>
                </div>
            `;
        }
        infoContainer.innerHTML = cardsHtml;
    }
    

    
    if (footerContacts) {
        footerContacts.innerHTML = `
            <p><i class="fas fa-phone-alt"></i> ${s.phone}</p>
            <p><i class="fas fa-envelope"></i> ${s.email}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${s.address}, ${s.city}</p>
        `;
    }
}
