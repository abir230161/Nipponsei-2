// ==================== 🛒 PRODUCTS DATA ====================
let products = [
    {
        id: 1,
        name: "Ichikami Moisturizing Shampoo (Refill pack) 330 ml",
        category: "Hair care",
        subcategory: "Shampoo",
        price: 1200,
        oldPrice: 1350,
        rating: 5.0,
        reviews: 1,
        inStock: true,
        brand: "Ichikami",
        description: "Moisturizing shampoo with natural ingredients for damaged hair.",
        image: "https://via.placeholder.com/300x300/ff6b6b/ffffff?text=Ichikami"
    },
    {
        id: 2,
        name: "Skin Life Fluffy Foaming Face wash 160 ml",
        category: "Skin care",
        subcategory: "Face wash & Cleansers",
        price: 1290,
        oldPrice: null,
        rating: 5.0,
        reviews: 1,
        inStock: true,
        brand: "Skin Life",
        description: "Fluffy foaming face wash that gently cleanses and removes impurities.",
        image: "https://via.placeholder.com/300x300/4ecdc4/ffffff?text=Skin+Life"
    },
    {
        id: 3,
        name: "Rohto Mentholatum Acnes Medicated Foaming Face Wash 160 ml",
        category: "Skin care",
        subcategory: "Face wash & Cleansers",
        price: 2100,
        oldPrice: null,
        rating: 5.0,
        reviews: 1,
        inStock: true,
        brand: "Rohto",
        description: "Medicated foaming face wash for acne-prone skin.",
        image: "https://via.placeholder.com/300x300/45b7d1/ffffff?text=Rohto"
    },
    {
        id: 4,
        name: "Diane Extra Damage Repair Shampoo 450 ml",
        category: "Hair care",
        subcategory: "Shampoo",
        price: 2100,
        oldPrice: null,
        rating: 5.0,
        reviews: 2,
        inStock: true,
        brand: "Diane",
        description: "Extra damage repair shampoo for dry and damaged hair.",
        image: "https://via.placeholder.com/300x300/f9d56e/ffffff?text=Diane"
    },
    {
        id: 5,
        name: "Omi Brothers Menturm The Sun UV Protect Gel SPF50+ PA++++ 100g",
        category: "Skin care",
        subcategory: "Sunscreen",
        price: 1450,
        oldPrice: null,
        rating: 5.0,
        reviews: 2,
        inStock: false,
        brand: "Omi",
        description: "UV protect gel with SPF50+ PA++++ for maximum sun protection.",
        image: "https://via.placeholder.com/300x300/f8a5c2/ffffff?text=Omi"
    },
    {
        id: 6,
        name: "Skin Aqua Tone Up UV Essence SPF50+ PA++++ (Lavender) 80 g",
        category: "Skin care",
        subcategory: "Sunscreen",
        price: 1370,
        oldPrice: null,
        rating: 5.0,
        reviews: 2,
        inStock: false,
        brand: "Skin Aqua",
        description: "Tone up UV essence with lavender color correction.",
        image: "https://via.placeholder.com/300x300/c44569/ffffff?text=Skin+Aqua"
    },
    {
        id: 7,
        name: "Biore Asrim Protective Essence Sunscreen UV Sunscreen SPF50+ PA++++ 90 g",
        category: "Skin care",
        subcategory: "Sunscreen",
        price: 2500,
        oldPrice: null,
        rating: 5.0,
        reviews: 2,
        inStock: false,
        brand: "Biore",
        description: "Protective essence sunscreen with SPF50+ PA++++.",
        image: "https://via.placeholder.com/300x300/574b90/ffffff?text=Biore"
    },
    {
        id: 8,
        name: "Kracie Naive Peach Leaf Foaming Face wash 130 g",
        category: "Skin care",
        subcategory: "Face wash & Cleansers",
        price: 980,
        oldPrice: null,
        rating: 5.0,
        reviews: 1,
        inStock: true,
        brand: "Kracie",
        description: "Peach leaf foaming face wash with refreshing scent.",
        image: "https://via.placeholder.com/300x300/f78fb3/ffffff?text=Kracie"
    }
];

// Categories Data
const categories = {
    "Skin care": ["Face wash & Cleansers", "Toner/Face Lotion", "Serum & Emulsion", "Moisturizers", "Sunscreen"],
    "Hair care": ["Shampoo", "Conditioner", "Hair Mask", "Hair Oil"],
    "Make Up": ["Foundation", "Lipstick", "Eyeshadow", "Mascara"],
    "Bath & Body Care": ["Body Wash", "Lotion", "Scrub"],
    "Others": ["Tools", "Accessories"]
};

// Brands Data
const brands = [
    "SHISEIDO", "nature", "NIVEA", "ROSETTE", "QSEIKA", "Biore", "Diane", 
    "KOSE", "Kracie", "KAO", "SANNA", "DHIC", "ROHR3", "DAISO", "COW"
];

// ==================== DOM ELEMENTS ====================
const productGrid = document.getElementById('productGrid');
const categoryList = document.getElementById('categoryList');
const brandsContainer = document.getElementById('brandsContainer');
const sectionTitle = document.getElementById('sectionTitle');
const searchIcon = document.getElementById('searchIcon');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const productModal = document.getElementById('productModal');
const productDetail = document.getElementById('productDetail');
const homeLink = document.getElementById('homeLink');
const logo = document.getElementById('logo');
const closeSearch = document.getElementById('closeSearch');
const closeProduct = document.getElementById('closeProduct');

// 🔐 Admin Elements
const adminTrigger = document.getElementById('adminTrigger');
const passwordModal = document.getElementById('passwordModal');
const adminPassword = document.getElementById('adminPassword');
const submitPassword = document.getElementById('submitPassword');
const closePassword = document.getElementById('closePassword');
const adminPanel = document.getElementById('adminPanel');
const closeAdmin = document.getElementById('closeAdmin');
const productSelect = document.getElementById('productSelect');
const imageUpload = document.getElementById('imageUpload');
const uploadBtn = document.getElementById('uploadBtn');
const uploadMessage = document.getElementById('uploadMessage');

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadBrands();
    loadProducts(products);
    setupEventListeners();
    populateProductSelect();
});

// ==================== LOAD CATEGORIES ====================
function loadCategories() {
    let html = '';
    for (let [category, subcategories] of Object.entries(categories)) {
        html += `
            <li class="has-submenu" data-category="${category}">
                <span>${category} <i class="fas fa-chevron-right"></i></span>
                <ul class="submenu">
                    ${subcategories.map(sub => `<li data-subcategory="${sub}">${sub}</li>`).join('')}
                </ul>
            </li>
        `;
    }
    categoryList.innerHTML = html;

    // Category click events
    document.querySelectorAll('.has-submenu > span').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.closest('li').dataset.category;
            filterByCategory(category);
        });
    });

    // Subcategory click events
    document.querySelectorAll('.submenu li').forEach(item => {
        item.addEventListener('click', function() {
            const subcategory = this.dataset.subcategory;
            filterBySubcategory(subcategory);
        });
    });
}

// ==================== LOAD BRANDS ====================
function loadBrands() {
    let html = '';
    brands.forEach(brand => {
        html += `<div class="brand" data-brand="${brand}">${brand}</div>`;
    });
    brandsContainer.innerHTML = html;

    document.querySelectorAll('.brand').forEach(brand => {
        brand.addEventListener('click', function() {
            const brandName = this.dataset.brand;
            filterByBrand(brandName);
        });
    });
}

// ==================== LOAD PRODUCTS ====================
function loadProducts(productsToShow) {
    if (productsToShow.length === 0) {
        productGrid.innerHTML = '<div style="grid-column:1/-1; text-align:center">No products found</div>';
        return;
    }

    let html = '';
    productsToShow.forEach(product => {
        html += `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300/cccccc/ffffff?text=No+Image'">
                    <span class="category-badge">${product.subcategory}</span>
                    ${!product.inStock ? '<span class="stock-badge">OUT OF STOCK</span>' : ''}
                </div>
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <div class="rating">
                        <span class="stars">${'★'.repeat(Math.floor(product.rating))}</span>
                        <span class="rating-text">${product.rating}★(${product.reviews})</span>
                    </div>
                    <div class="price">
                        <span class="current-price">৳${product.price}</span>
                        ${product.oldPrice ? `<span class="old-price">৳${product.oldPrice}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    });
    productGrid.innerHTML = html;

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.dataset.productId;
            showProductDetails(productId);
        });
    });
}

// ==================== FILTER FUNCTIONS ====================
function filterByCategory(category) {
    sectionTitle.textContent = category.toUpperCase();
    const filtered = products.filter(p => p.category === category);
    loadProducts(filtered);
}

function filterBySubcategory(subcategory) {
    sectionTitle.textContent = subcategory.toUpperCase();
    const filtered = products.filter(p => p.subcategory === subcategory);
    loadProducts(filtered);
}

function filterByBrand(brand) {
    sectionTitle.textContent = brand.toUpperCase();
    const filtered = products.filter(p => p.brand === brand);
    loadProducts(filtered);
}

function searchProducts(query) {
    query = query.toLowerCase().trim();
    if (query === '') {
        loadProducts(products);
        sectionTitle.textContent = 'RESTOCKED RECENTLY';
        return;
    }
    
    sectionTitle.textContent = `SEARCH: "${query}"`;
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
    );
    loadProducts(filtered);
}

// ==================== SHOW PRODUCT DETAILS ====================
function showProductDetails(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    const html = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300/cccccc/ffffff?text=No+Image'">
        <div class="rating">
            <span class="stars">${'★'.repeat(Math.floor(product.rating))}</span>
            <span>${product.rating}★ (${product.reviews} reviews)</span>
        </div>
        <div class="price">
            <span class="current-price">৳${product.price}</span>
            ${product.oldPrice ? `<span class="old-price">৳${product.oldPrice}</span>` : ''}
        </div>
        <p>${product.description}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Category:</strong> ${product.category} > ${product.subcategory}</p>
        <p><strong>Status:</strong> ${product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    `;
    productDetail.innerHTML = html;
    productModal.style.display = 'flex';
}

// ==================== GO TO HOME ====================
function goToHome() {
    sectionTitle.textContent = 'RESTOCKED RECENTLY';
    loadProducts(products);
}

// ==================== 🔐 ADMIN FUNCTIONS ====================

// Populate product select dropdown
function populateProductSelect() {
    let html = '';
    products.forEach(product => {
        html += `<option value="${product.id}">${product.name}</option>`;
    });
    productSelect.innerHTML = html;
}

// Show message in admin panel
function showMessage(text, type) {
    uploadMessage.textContent = text;
    uploadMessage.className = `upload-message ${type}`;
    setTimeout(() => {
        uploadMessage.style.display = 'none';
    }, 3000);
}

// ==================== 🔐 IMAGE UPLOAD FUNCTION ====================
uploadBtn.addEventListener('click', function() {
    const productId = productSelect.value;
    const files = imageUpload.files;
    
    if (files.length === 0) {
        showMessage('দয়া করে একটি image select করুন!', 'error');
        return;
    }

    const file = files[0]; // প্রথম ফাইলটা নিন
    
    // Check if it's an image
    if (!file.type.startsWith('image/')) {
        showMessage('অনুগ্রহ করে একটি valid image file select করুন!', 'error');
        return;
    }

    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imageData = e.target.result;
        
        // Find product and update image
        const productIndex = products.findIndex(p => p.id == productId);
        if (productIndex !== -1) {
            products[productIndex].image = imageData;
            
            // Reload products
            loadProducts(products);
            
            showMessage('✅ Image সফলভাবে upload হয়েছে!', 'success');
            
            // Clear input
            imageUpload.value = '';
        }
    };
    
    reader.onerror = function() {
        showMessage('❌ Image upload করতে সমস্যা হয়েছে!', 'error');
    };
    
    reader.readAsDataURL(file);
});

// ==================== SETUP EVENT LISTENERS ====================
function setupEventListeners() {
    // 🔐 Admin Trigger - ডান পাশের নিচের দিকে ক্লিক করলে password modal আসবে
    adminTrigger.addEventListener('click', function() {
        passwordModal.style.display = 'flex';
        adminPassword.value = '';
        adminPassword.focus();
    });

    // 🔐 Close password modal
    closePassword.addEventListener('click', function() {
        passwordModal.style.display = 'none';
    });

    // 🔐 Submit password
    submitPassword.addEventListener('click', function() {
        const password = adminPassword.value;
        
        // এখানে আপনার পছন্দের password দিন
        if (password === "shinrin@2024") { // আপনি এই password change করতে পারেন
            passwordModal.style.display = 'none';
            adminPanel.style.display = 'block';
            showMessage('✅ Admin login successful!', 'success');
        } else {
            showMessage('❌ Wrong password!', 'error');
        }
    });

    // 🔐 Enter key press in password field
    adminPassword.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitPassword.click();
        }
    });

    // 🔐 Close admin panel
    closeAdmin.addEventListener('click', function() {
        adminPanel.style.display = 'none';
    });

    // Search icon click
    searchIcon.addEventListener('click', function() {
        searchModal.style.display = 'flex';
        searchInput.value = '';
        searchInput.focus();
    });

    // Close search modal
    closeSearch.addEventListener('click', function() {
        searchModal.style.display = 'none';
    });

    // Close product modal
    closeProduct.addEventListener('click', function() {
        productModal.style.display = 'none';
    });

    // Search on Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts(this.value);
            searchModal.style.display = 'none';
        }
    });

    // Home link click
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        goToHome();
    });

    // Logo click
    logo.addEventListener('click', function() {
        goToHome();
    });

    // Close modals on outside click
    window.addEventListener('click', function(e) {
        if (e.target === searchModal) searchModal.style.display = 'none';
        if (e.target === productModal) productModal.style.display = 'none';
        if (e.target === passwordModal) passwordModal.style.display = 'none';
    });
}