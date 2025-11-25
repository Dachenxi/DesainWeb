// Properties Data
const properties = [
    {
        id: 1,
        title: "Luxury Villa with Pool",
        price: "$1,250,000",
        location: "Beverly Hills, CA",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600",
        type: "villa",
        beds: 5,
        baths: 4,
        area: "5,200 sq ft",
        status: "For Sale"
    },
    {
        id: 2,
        title: "Modern Downtown Apartment",
        price: "$750,000",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
        type: "apartment",
        beds: 3,
        baths: 2,
        area: "2,100 sq ft",
        status: "For Rent"
    },
    {
        id: 3,
        title: "Cozy Family House",
        price: "$580,000",
        location: "Austin, TX",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
        type: "house",
        beds: 4,
        baths: 3,
        area: "3,500 sq ft",
        status: "For Sale"
    },
    {
        id: 4,
        title: "Beachfront Property",
        price: "$2,100,000",
        location: "Malibu, CA",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
        type: "villa",
        beds: 6,
        baths: 5,
        area: "6,800 sq ft",
        status: "For Sale"
    },
    {
        id: 5,
        title: "City Center Penthouse",
        price: "$1,800,000",
        location: "Miami, FL",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
        type: "apartment",
        beds: 4,
        baths: 3,
        area: "4,200 sq ft",
        status: "For Rent"
    },
    {
        id: 6,
        title: "Suburban Dream Home",
        price: "$420,000",
        location: "Portland, OR",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600",
        type: "house",
        beds: 3,
        baths: 2,
        area: "2,800 sq ft",
        status: "For Sale"
    },
    {
        id: 7,
        title: "Mountain View Villa",
        price: "$3,500,000",
        location: "Aspen, CO",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600",
        type: "villa",
        beds: 7,
        baths: 6,
        area: "8,500 sq ft",
        status: "For Sale"
    },
    {
        id: 8,
        title: "Urban Loft Space",
        price: "$620,000",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600",
        type: "apartment",
        beds: 2,
        baths: 2,
        area: "1,800 sq ft",
        status: "For Rent"
    },
    {
        id: 9,
        title: "Prime Land Plot",
        price: "$350,000",
        location: "Seattle, WA",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600",
        type: "land",
        beds: 0,
        baths: 0,
        area: "10,000 sq ft",
        status: "For Sale"
    }
];

// Agents Data
const agents = [
    {
        id: 1,
        name: "Sarah Johnson",
        title: "Senior Real Estate Agent",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
        properties: 145,
        rating: 4.9
    },
    {
        id: 2,
        name: "Michael Chen",
        title: "Property Specialist",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
        properties: 132,
        rating: 4.8
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        title: "Luxury Home Expert",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
        properties: 98,
        rating: 5.0
    },
    {
        id: 4,
        name: "David Thompson",
        title: "Commercial Real Estate",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
        properties: 87,
        rating: 4.7
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "Jennifer Williams",
        role: "Homeowner",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
        text: "LuxuryHomes made our dream home a reality. The team was professional, attentive, and went above and beyond to ensure we found the perfect property. Highly recommended!",
        rating: 5
    },
    {
        id: 2,
        name: "Robert Anderson",
        role: "Property Investor",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        text: "As an investor, I need reliable partners. LuxuryHomes has consistently delivered excellent properties and market insights. Their expertise is unmatched in the industry.",
        rating: 5
    },
    {
        id: 3,
        name: "Lisa Martinez",
        role: "First-time Buyer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
        text: "Being a first-time buyer was intimidating, but the team at LuxuryHomes guided me through every step. I'm now a proud homeowner thanks to their patience and expertise!",
        rating: 5
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initHeroSlider();
    initStats();
    loadProperties();
    loadAgents();
    loadTestimonials();
    initFilters();
    initScrollEffects();
    initForms();
    initSearchModal();
});

// Navigation
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide
    setInterval(nextSlide, 5000);
}

// Stats Counter
function initStats() {
    const statNumbers = document.querySelectorAll('.stats-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });

    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 30);
}

// Load Properties
function loadProperties(filter = 'all') {
    const grid = document.getElementById('propertiesGrid');
    let filteredProperties = properties;

    if (filter !== 'all') {
        filteredProperties = properties.filter(p => p.type === filter);
    }

    grid.innerHTML = filteredProperties.map(property => `
        <div class="property-card" data-type="${property.type}">
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <span class="property-badge">${property.status}</span>
                <button class="property-favorite" onclick="toggleFavorite(${property.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="property-content">
                <div class="property-price">${property.price}</div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${property.location}</span>
                </div>
                <div class="property-features">
                    ${property.beds > 0 ? `
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.beds} Beds</span>
                    </div>
                    ` : ''}
                    ${property.baths > 0 ? `
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.baths} Baths</span>
                    </div>
                    ` : ''}
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.area}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Toggle Favorite
function toggleFavorite(id) {
    event.stopPropagation();
    const btn = event.currentTarget;
    const icon = btn.querySelector('i');
    
    btn.classList.toggle('active');
    
    if (btn.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
}

// Load Agents
function loadAgents() {
    const grid = document.getElementById('agentsGrid');
    grid.innerHTML = agents.map(agent => `
        <div class="agent-card">
            <div class="agent-image">
                <img src="${agent.image}" alt="${agent.name}">
            </div>
            <div class="agent-info">
                <h3 class="agent-name">${agent.name}</h3>
                <p class="agent-title">${agent.title}</p>
                <div class="agent-stats">
                    <div class="agent-stat">
                        <div class="agent-stat-number">${agent.properties}</div>
                        <div class="agent-stat-label">Properties</div>
                    </div>
                    <div class="agent-stat">
                        <div class="agent-stat-number">${agent.rating}</div>
                        <div class="agent-stat-label">Rating</div>
                    </div>
                </div>
                <div class="agent-contact">
                    <button onclick="contactAgent(${agent.id})"><i class="fas fa-phone"></i></button>
                    <button onclick="emailAgent(${agent.id})"><i class="fas fa-envelope"></i></button>
                    <button onclick="whatsappAgent(${agent.id})"><i class="fab fa-whatsapp"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

function contactAgent(id) {
    alert(`Calling agent ${id}...`);
}

function emailAgent(id) {
    alert(`Opening email to agent ${id}...`);
}

function whatsappAgent(id) {
    alert(`Opening WhatsApp to agent ${id}...`);
}

// Load Testimonials
function loadTestimonials() {
    const slider = document.getElementById('testimonialsSlider');
    const dots = document.getElementById('testimonialDots');
    
    slider.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-item ${index === 0 ? 'active' : ''}">
            <div class="testimonial-image">
                <img src="${testimonial.image}" alt="${testimonial.name}">
            </div>
            <div class="testimonial-text">"${testimonial.text}"</div>
            <div class="testimonial-author">${testimonial.name}</div>
            <div class="testimonial-role">${testimonial.role}</div>
            <div class="testimonial-rating">
                ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
            </div>
        </div>
    `).join('');

    dots.innerHTML = testimonials.map((_, index) => `
        <span class="testimonial-dot ${index === 0 ? 'active' : ''}" onclick="showTestimonial(${index})"></span>
    `).join('');

    // Auto rotate testimonials
    let currentTestimonial = 0;
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 6000);
}

function showTestimonial(index) {
    const items = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    items[index].classList.add('active');
    dots[index].classList.add('active');
}

// Filter Properties
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            loadProperties(filter);
        });
    });

    // Search tabs
    const searchTabs = document.querySelectorAll('.search-tab');
    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            searchTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    const scrollTop = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animate on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.property-card, .service-card, .agent-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Forms
function initForms() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = 'Message Sent! ✓';
            btn.style.background = 'var(--success-color)';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1500);
    });

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = newsletterForm.querySelector('button[type="submit"]');
        const input = newsletterForm.querySelector('input');
        const originalText = btn.textContent;
        
        btn.textContent = 'Subscribing...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = 'Subscribed! ✓';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                input.value = '';
            }, 2000);
        }, 1500);
    });
}

// Search Modal
function initSearchModal() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });

    closeSearch.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });

    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        const filtered = properties.filter(p => 
            p.title.toLowerCase().includes(query) ||
            p.location.toLowerCase().includes(query) ||
            p.type.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = '<p style="padding: 1rem; text-align: center; color: #999;">No properties found</p>';
            return;
        }

        searchResults.innerHTML = filtered.map(property => `
            <div style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid var(--border-color); cursor: pointer; transition: background 0.3s ease;" 
                 onmouseover="this.style.background='var(--light-color)'" 
                 onmouseout="this.style.background='white'"
                 onclick="viewProperty(${property.id})">
                <img src="${property.image}" alt="${property.title}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
                <div>
                    <div style="font-weight: 600; margin-bottom: 0.3rem;">${property.title}</div>
                    <div style="color: var(--primary-color); font-weight: bold;">${property.price}</div>
                    <div style="font-size: 0.9rem; color: var(--text-color);">
                        <i class="fas fa-map-marker-alt"></i> ${property.location}
                    </div>
                </div>
            </div>
        `).join('');
    });
}

function viewProperty(id) {
    const property = properties.find(p => p.id === id);
    document.getElementById('searchModal').classList.remove('active');
    
    // Scroll to properties section
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
    
    // Highlight the property (optional enhancement)
    setTimeout(() => {
        const cards = document.querySelectorAll('.property-card');
        cards.forEach((card, index) => {
            if (index === id - 1) {
                card.style.outline = '3px solid var(--primary-color)';
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                setTimeout(() => {
                    card.style.outline = '';
                }, 3000);
            }
        });
    }, 500);
}

// Load More Properties
document.getElementById('loadMore').addEventListener('click', function() {
    const btn = this;
    btn.textContent = 'Loading...';
    btn.disabled = true;

    setTimeout(() => {
        // Simulate loading more properties
        const grid = document.getElementById('propertiesGrid');
        const currentCount = grid.children.length;
        
        // Add 3 more properties (reusing existing data)
        const moreProperties = properties.slice(0, 3);
        
        moreProperties.forEach(property => {
            const card = document.createElement('div');
            card.className = 'property-card';
            card.setAttribute('data-type', property.type);
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            card.innerHTML = `
                <div class="property-image">
                    <img src="${property.image}" alt="${property.title}">
                    <span class="property-badge">${property.status}</span>
                    <button class="property-favorite" onclick="toggleFavorite(${property.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="property-content">
                    <div class="property-price">${property.price}</div>
                    <h3 class="property-title">${property.title}</h3>
                    <div class="property-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${property.location}</span>
                    </div>
                    <div class="property-features">
                        ${property.beds > 0 ? `
                        <div class="feature">
                            <i class="fas fa-bed"></i>
                            <span>${property.beds} Beds</span>
                        </div>
                        ` : ''}
                        ${property.baths > 0 ? `
                        <div class="feature">
                            <i class="fas fa-bath"></i>
                            <span>${property.baths} Baths</span>
                        </div>
                        ` : ''}
                        <div class="feature">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${property.area}</span>
                        </div>
                    </div>
                </div>
            `;
            
            grid.appendChild(card);
            
            // Animate in
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });

        btn.textContent = 'Load More Properties';
        btn.disabled = false;
    }, 1000);
});

// Favorite Button Handler
document.getElementById('favoriteBtn').addEventListener('click', function() {
    const favorites = document.querySelectorAll('.property-favorite.active');
    
    if (favorites.length === 0) {
        alert('You have no favorite properties yet. Click the heart icon on any property to add it to your favorites!');
    } else {
        alert(`You have ${favorites.length} favorite properties!`);
    }
});

// Search Filter
document.querySelector('.btn-search').addEventListener('click', function() {
    const location = document.getElementById('filterLocation').value;
    const type = document.getElementById('filterType').value;
    const price = document.getElementById('filterPrice').value;
    
    if (!location && !type && !price) {
        alert('Please select at least one filter option to search.');
        return;
    }
    
    let filtered = properties;
    
    if (location) {
        filtered = filtered.filter(p => 
            p.location.toLowerCase().includes(location.toLowerCase())
        );
    }
    
    if (type) {
        filtered = filtered.filter(p => p.type === type);
    }
    
    if (price) {
        // Price filtering logic would go here
        // For demo purposes, we'll just show all
    }
    
    const grid = document.getElementById('propertiesGrid');
    
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; font-size: 1.2rem; color: var(--text-color);">No properties found matching your criteria. Try adjusting your filters.</p>';
    } else {
        grid.innerHTML = filtered.map(property => `
            <div class="property-card" data-type="${property.type}">
                <div class="property-image">
                    <img src="${property.image}" alt="${property.title}">
                    <span class="property-badge">${property.status}</span>
                    <button class="property-favorite" onclick="toggleFavorite(${property.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="property-content">
                    <div class="property-price">${property.price}</div>
                    <h3 class="property-title">${property.title}</h3>
                    <div class="property-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${property.location}</span>
                    </div>
                    <div class="property-features">
                        ${property.beds > 0 ? `
                        <div class="feature">
                            <i class="fas fa-bed"></i>
                            <span>${property.beds} Beds</span>
                        </div>
                        ` : ''}
                        ${property.baths > 0 ? `
                        <div class="feature">
                            <i class="fas fa-bath"></i>
                            <span>${property.baths} Baths</span>
                        </div>
                        ` : ''}
                        <div class="feature">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${property.area}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Scroll to results
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
});

// Property Card Click Handler
document.addEventListener('click', function(e) {
    const card = e.target.closest('.property-card');
    if (card && !e.target.closest('.property-favorite')) {
        const propertyId = Array.from(card.parentElement.children).indexOf(card) + 1;
        showPropertyDetails(propertyId);
    }
});

function showPropertyDetails(id) {
    const property = properties[id - 1];
    if (!property) return;
    
    const modal = document.createElement('div');
    modal.className = 'search-modal active';
    modal.innerHTML = `
        <div class="search-content" style="max-width: 800px;">
            <button class="close-modal" onclick="this.closest('.search-modal').remove()">&times;</button>
            <h2>${property.title}</h2>
            <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 12px; margin: 1rem 0;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1rem 0;">
                <div>
                    <strong>Price:</strong> ${property.price}
                </div>
                <div>
                    <strong>Status:</strong> ${property.status}
                </div>
                <div>
                    <strong>Location:</strong> ${property.location}
                </div>
                <div>
                    <strong>Type:</strong> ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </div>
                <div>
                    <strong>Bedrooms:</strong> ${property.beds}
                </div>
                <div>
                    <strong>Bathrooms:</strong> ${property.baths}
                </div>
                <div>
                    <strong>Area:</strong> ${property.area}
                </div>
            </div>
            <p style="margin: 1.5rem 0; line-height: 1.8; color: var(--text-color);">
                This stunning ${property.type} offers exceptional living spaces with modern amenities. 
                Located in the prestigious ${property.location} area, this property provides the perfect 
                combination of luxury and comfort. Features include spacious rooms, high-end finishes, 
                and premium appliances throughout.
            </p>
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                <button class="btn-primary" style="flex: 1;" onclick="alert('Schedule a tour feature coming soon!')">
                    <i class="fas fa-calendar"></i> Schedule Tour
                </button>
                <button class="btn-secondary" style="flex: 1;" onclick="alert('Contact agent feature coming soon!')">
                    <i class="fas fa-phone"></i> Contact Agent
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

console.log('LuxuryHomes Real Estate Website Loaded Successfully! 🏠');