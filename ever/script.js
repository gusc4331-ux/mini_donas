// BASE DE DATOS DE PRODUCTOS
const products = [
    // --- CHOCOLATES ---
    { id: 101, name: "Corazón de Chocolate Relleno", category: "chocolates", price: 15.00, img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=500&q=80", desc: "Chocolate fino con relleno cremoso de manjar o frutilla." },
    { id: 102, name: "Ositos de Chocolate Especiales", category: "chocolates", price: 12.00, img: "data:image/jpeg;base64,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", desc: "Tiernos ositos de chocolate con leche y detalles en blanco." },
    { id: 103, name: "Caja Personalizada con Nombre", category: "chocolates", price: 20.00, img: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=500&q=80", desc: "Bombones moldeados con letras para mensajes especiales." },
    { id: 104, name: "Trufas Gourmet Surtidas", category: "chocolates", price: 18.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCgI1QWBFLm762FJxcLeQAQJ3DWzit1jLt3lFoHNZe9ZrwiccM1Yztyk-2ymSoA2HHbnjX3mleXpju8mHpVPH6kBALOqvDtYyMRmwmHTM&s=10", desc: "Pack de trufas bañadas en cacao amargo y frutos secos." },
    { id: 105, name: "Chocotejas de Manjar Blanco", category: "chocolates", price: 8.00, img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=500&q=80", desc: "Chocotejas artesanales rellenas de manjar y nueces." },
    { id: 106, name: "Bombones de Chocolate Blanco", category: "chocolates", price: 10.00, img: "https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&w=500&q=80", desc: "Suaves bombones de chocolate blanco de alta calidad." },
    { id: 107, name: "Barra de Chocolate Artesanal 70%", category: "chocolates", price: 14.00, img: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=500&q=80", desc: "Chocolate semi amargo ideal para paladares exigentes." },
    { id: 108, name: "Figura de Chocolate 'Flores'", category: "chocolates", price: 16.00, img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&w=500&q=80", desc: "Diseños florales en relieve de chocolate mixto." },
    { id: 109, name: "Choco-Paletas Temáticas", category: "chocolates", price: 5.00, img: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=500&q=80", desc: "Divertidas paletas de chocolate ideales para los más pequeños." },
    { id: 110, name: "Monedas y Minis de Chocolate", category: "chocolates", price: 3.00, img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=500&q=80", desc: "Bolsita de mini chocolates surtidos para degustar." },

    // --- DONAS ---
    { id: 201, name: "Dona Clásica Glaseada de Vainilla", category: "donas", price: 5.00, img: "data:image/jpeg;base64,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", desc: "Masa esponjosa con glaseado tradicional de vainilla." },
    { id: 202, name: "Dona Cobertura de Chocolate", category: "donas", price: 6.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPaw3GoOX-47xUwRWYK0XDNEAnIsNqFFsBtvOzUYe9upzyd05JL-efm1T&s=10", desc: "Bañada con espeso chocolate fundido y chispas." },
    { id: 203, name: "Dona Rellena de Manjar Blanco", category: "donas", price: 7.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeVp8nHWXr79Reww3PVBdOhhM9g2EQQLa_-7OoRbz2mWCLMmtSZOXJDU&s=10", desc: "Abundante relleno de dulce de leche o manjar." },
    { id: 204, name: "Dona Frutilla con Grageas Colores", category: "donas", price: 6.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dkWUYXf2WlAoC_Nt3bYkjPKi11ZF_62a5TQTcSTXgw&s=10", desc: "Glaseado rosa de frutilla decorada con chispitas." },
    { id: 205, name: "Dona Especial Oreo", category: "donas", price: 8.00, img: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=500&q=80", desc: "Cobertura de crema de galleta y trozos de galleta Oreo." },
    { id: 206, name: "Dona Rellena de Nutella", category: "donas", price: 9.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WFweBWJB0Mau6Qc0rkmyFFKRcC-bIwmkY4rDQd0-og&s=10", desc: "Cremosa por dentro con auténtica Nutella." },
    { id: 207, name: "Dona de Coco Rallado", category: "donas", price: 6.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTYCL7r9yPm9Zwg7ZYHNOcDhQOZV2wj_UcUaRv_mS8Q&s=10", desc: "Glaseado suave cubierto con finas hojuelas de coco." },
    { id: 208, name: "Dona Mermelada de Mora", category: "donas", price: 7.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJ1RXjffgjDxc0-dHl5IVSUZNF8BfghVXyfbi8cQiYw&s=10", desc: "Relleno frutal ácido y dulce elaborado en casa." },
    { id: 209, name: "Mini Donas (Caja de 6 unidades)", category: "donas", price: 15.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvefmN3KmrZlJDjbnZ7rRRsdil7Ltu4OpaUJOMDgyPsg&s=10", desc: "Surtido de mini donas con varios glaseados." },
    { id: 210, name: "Dona Especial de Maracuyá", category: "donas", price: 8.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThA82BU1EDJ06G0BkoJKS5qY_c-MhsM7wYG-e2N6_1Pg&s=10", desc: "Glaseado de fruta de la pasión cítrico y refrescante." },

    // --- BUÑUELOS ---
    { id: 301, name: "Buñuelo Tradicional Caliente", category: "bunuelos", price: 4.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIkFTl44Lkyb8_305Dt7Du2PPorqXlHnwbtIs5zmx3A&s=10", desc: "Masa estirada frita al momento, bien crujiente con miel o azúcar." },
    { id: 302, name: "Combo: Buñuelo + Api Morado", category: "bunuelos", price: 10.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5nlL8U59zZPitTkenSl1Sa5KxRkfA-GFiv-9UmolRw&s=10", desc: "Buñuelo crujiente acompañado de vaso de Api Morado caliente." },
    { id: 303, name: "Combo: Buñuelo + Api Blanco", category: "bunuelos", price: 10.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ox3HIaO2AMarfOUOfXydmdjsVonACU_F__Q0dPUOfg&s=10", desc: "Buñuelo recién hecho con api blanco espumoso." },
    { id: 304, name: "Combo Mixto (Api Dos Colores + Buñuelo)", category: "bunuelos", price: 12.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCPkeHEerMq3oyT_aTPGdbpAr_WjYac7WoCawDPJXMA&s=10", desc: "Api mezclado morado y blanco con un buñuelo grande." },

    // --- REFRESCOS ---
    { id: 401, name: "Refresco de Piña Hervido", category: "refrescos", subcategory: "hervidos", price: 3.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTThzlmf5tszQp7o3zZcnXgGCY6H2tK-kY8RfnIwfkQw&s=10", desc: "Bebida natural hervida con cáscaras de piña, canela y clavo." },
    { id: 402, name: "Refresco de Quisa / Mocochinchi", category: "refrescos", subcategory: "hervidos", price: 3.50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Txs8s6nDjuXDIKqVvGeoxNvCcz7ghtW2Bplu6oQv9Q&s=10", desc: "Tradicional refresco de durazno deshidratado hervido." },
    { id: 403, name: "Refresco Hervido de Linaza", category: "refrescos", subcategory: "hervidos", price: 3.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUtv39CNu3tx8NzylMstyuKRM45Y_O8TSlHTjtAmZFg&s=10", desc: "Refresco nutritivo de linaza hervida con toque de limón." },
    { id: 404, name: "Refresco Tradicional Somó", category: "refrescos", subcategory: "hervidos", price: 4.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWz74IWieRYxvMi18VDnycrQ71sKcGIiyItca6TOnY-Q&s=10", desc: "Preparado a base de maíz frangollo cocido con leche y canela." },
    { id: 405, name: "Coca-Cola 500ml", category: "refrescos", subcategory: "gaseosas", price: 6.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80", desc: "Gaseosa Coca-Cola helada." },
    { id: 406, name: "Fanta Naranja 500ml", category: "refrescos", subcategory: "gaseosas", price: 6.00, img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=500&q=80", desc: "Gaseosa Fanta sabor Naranja." },
    { id: 407, name: "Pepsi 500ml", category: "refrescos", subcategory: "gaseosas", price: 5.50, img: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?auto=format&fit=crop&w=500&q=80", desc: "Gaseosa Pepsi refrescante." },
    { id: 408, name: "Sprite 500ml", category: "refrescos", subcategory: "gaseosas", price: 6.00, img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=500&q=80", desc: "Gaseosa Sprite sabor lima-limón." }
];

// VARIABLES DE ESTADO
let currentCategory = 'chocolates';
let currentSubCategory = 'todos';
let selectedProduct = null;

// RENDERIZADO DE PRODUCTOS
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    const filtered = products.filter(p => {
        if (p.category !== currentCategory) return false;
        if (currentCategory === 'refrescos' && currentSubCategory !== 'todos') {
            return p.subcategory === currentSubCategory;
        }
        return true;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-8 text-gray-500">No se encontraron productos en esta categoría.</div>`;
        return;
    }

    filtered.forEach(prod => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-amber-100 flex flex-col justify-between group";
        
        card.innerHTML = `
            <div>
                <div class="relative h-48 overflow-hidden bg-gray-100">
                    <img src="${prod.img}" alt="${prod.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <span class="absolute top-3 right-3 bg-brand-dark/90 text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                        ${prod.price.toFixed(2)} Bs
                    </span>
                </div>
                <div class="p-5">
                    <h3 class="font-bold text-lg text-brand-dark mb-1 leading-snug">${prod.name}</h3>
                    <p class="text-xs text-gray-500 line-clamp-2 leading-relaxed">${prod.desc}</p>
                </div>
            </div>
            <div class="p-5 pt-0">
                <button onclick="openModal(${prod.id})" class="w-full bg-amber-500 hover:bg-amber-600 text-brand-dark font-bold py-2.5 rounded-xl shadow transition flex items-center justify-center space-x-2">
                    <i class="fa-solid fa-cart-plus"></i>
                    <span>Comprar</span>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// CAMBIO DE CATEGORÍA
function filterCategory(cat) {
    currentCategory = cat;
    currentSubCategory = 'todos';

    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.className = "cat-btn bg-white text-brand-dark hover:bg-brand-primary hover:text-white font-semibold px-5 py-2.5 rounded-full shadow border border-amber-200 transition text-sm sm:text-base";
    });

    const activeBtn = document.getElementById(`btn-${cat}`);
    if (activeBtn) {
        activeBtn.className = "cat-btn bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-full shadow transition text-sm sm:text-base";
    }

    const subContainer = document.getElementById('subcat-refrescos-container');
    if (cat === 'refrescos') {
        subContainer.classList.remove('hidden');
        subContainer.classList.add('flex');
    } else {
        subContainer.classList.add('hidden');
        subContainer.classList.remove('flex');
    }

    renderProducts();
}

// CAMBIO DE SUBCATEGORÍA
function filterSubCategory(sub) {
    currentSubCategory = sub;
    document.querySelectorAll('.subcat-btn').forEach(btn => {
        btn.className = "subcat-btn bg-white text-brand-dark font-medium px-4 py-1.5 rounded-lg text-xs sm:text-sm hover:bg-amber-200";
    });
    const activeSub = document.getElementById(`sub-btn-${sub}`);
    if (activeSub) {
        activeSub.className = "subcat-btn bg-brand-accent text-white font-medium px-4 py-1.5 rounded-lg text-xs sm:text-sm";
    }
    renderProducts();
}

// LÓGICA DE MODAL
function openModal(productId) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    document.getElementById('modal-product-id').value = selectedProduct.id;
    document.getElementById('modal-product-img').src = selectedProduct.img;
    document.getElementById('modal-product-name').innerText = selectedProduct.name;
    document.getElementById('modal-product-price').innerText = `${selectedProduct.price.toFixed(2)} Bs p/u`;
    document.getElementById('client-quantity').value = 1;
    document.getElementById('order-notes').value = '';
    
    updateTotal();
    document.getElementById('purchase-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('purchase-modal').classList.add('hidden');
}

function adjustQuantity(delta) {
    const input = document.getElementById('client-quantity');
    let val = parseInt(input.value) || 1;
    val = Math.max(1, val + delta);
    input.value = val;
    updateTotal();
}

function updateTotal() {
    if (!selectedProduct) return;
    const qty = parseInt(document.getElementById('client-quantity').value) || 1;
    const total = selectedProduct.price * qty;
    document.getElementById('modal-total-price').innerText = `${total.toFixed(2)} Bs`;
}

// ENVIAR A WHATSAPP
function sendWhatsAppOrder(e) {
    e.preventDefault();
    if (!selectedProduct) return;

    const name = document.getElementById('client-name').value.trim();
    const qty = document.getElementById('client-quantity').value;
    const delivery = document.getElementById('delivery-method').value;
    const notes = document.getElementById('order-notes').value.trim();
    const total = (selectedProduct.price * qty).toFixed(2);

    const phone = "59164118741";

    let text = `*¡NUEVO PEDIDO - REPOSTERÍA EVER POMA!*%0A%0A`;
    text += `👤 *Cliente:* ${name}%0A`;
    text += `🧁 *Producto:* ${selectedProduct.name}%0A`;
    text += `🔢 *Cantidad:* ${qty}%0A`;
    text += `💵 *Precio Total:* ${total} Bs%0A`;
    text += `🛵 *Entrega:* ${delivery}%0A`;
    if (notes) {
        text += `📝 *Nota Adicional:* ${notes}%0A`;
    }
    text += `%0A_Enviado desde el sitio web en Viacha_`;

    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;
    window.open(whatsappUrl, '_blank');
    closeModal();
}

// CARRUSEL DE IMÁGENES
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((s, i) => {
        s.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    document.getElementById('next-slide').addEventListener('click', nextSlide);
    document.getElementById('prev-slide').addEventListener('click', prevSlide);
    setInterval(nextSlide, 5000);

    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.getElementById('purchase-modal').addEventListener('click', (e) => {
        if (e.target.id === 'purchase-modal') closeModal();
    });
});