/* ====== DỮ LIỆU NƯỚC UỐNG ======
   c1 / c2  : 2 màu thân lon (logo được vẽ bằng CSS nên không cần file ảnh)
   tx       : màu chữ trên lon
   shape    : 'can' (lon) hoặc 'bottle' (chai)
   style    : '', 'italic', 'script'  -> kiểu chữ của wordmark
*/
const DRINKS = [
  // --- Nước ngọt có gas ---
  {
    id: "coca",
    name: "Coca-Cola",
    vol: "Lon 330ml",
    price: 12000,
    cat: "gas",
    mark: "Coca-Cola",
    logo: "images/coca-cola.png",
  },
  {
    id: "coca-zero",
    name: "Coca-Cola Zero",
    vol: "Lon 330ml",
    price: 12000,
    cat: "gas",
    mark: "Coca Zero",
    c1: "#1c1c1c",
    c2: "#000000",
    tx: "#fff",
    shape: "can",
    style: "script",
  },
  {
    id: "pepsi",
    name: "Pepsi",
    vol: "Lon 330ml",
    price: 12000,
    cat: "gas",
    mark: "PEPSI",
    c1: "#0a4ea2",
    c2: "#03357a",
    tx: "#fff",
    shape: "can",
    style: "italic",
  },
  {
    id: "sprite",
    name: "Sprite",
    vol: "Lon 320ml",
    price: 12000,
    cat: "gas",
    mark: "Sprite",
    c1: "#0aa14b",
    c2: "#067a38",
    tx: "#fff",
    shape: "can",
    style: "italic",
  },
  {
    id: "7up",
    name: "7 Up",
    vol: "Lon 330ml",
    price: 11000,
    cat: "gas",
    mark: "7UP",
    c1: "#2fb457",
    c2: "#1d8b40",
    tx: "#fff",
    shape: "can",
    style: "",
  },
  {
    id: "mirinda",
    name: "Mirinda Cam",
    vol: "Lon 330ml",
    price: 11000,
    cat: "gas",
    mark: "Mirinda",
    c1: "#ff8c1a",
    c2: "#e06a00",
    tx: "#fff",
    shape: "can",
    style: "italic",
  },
  {
    id: "fanta",
    name: "Fanta Cam",
    vol: "Lon 320ml",
    price: 12000,
    cat: "gas",
    mark: "Fanta",
    c1: "#ff7a00",
    c2: "#ef5b00",
    tx: "#fff",
    shape: "can",
    style: "italic",
  },
  {
    id: "schweppes",
    name: "Soda Schweppes",
    vol: "Lon 330ml",
    price: 13000,
    cat: "gas",
    mark: "Schweppes",
    c1: "#f2c200",
    c2: "#d19b00",
    tx: "#7a2200",
    shape: "can",
    style: "",
  },

  // --- Nước tăng lực ---
  {
    id: "sting-do",
    name: "Sting Dâu",
    vol: "Chai 330ml",
    price: 12000,
    cat: "tangluc",
    mark: "Sting",
    c1: "#e01b24",
    c2: "#a80f16",
    tx: "#fff",
    shape: "bottle",
    style: "italic",
    cap: "#7a0b10",
  },
  {
    id: "sting-vang",
    name: "Sting Nhân Sâm",
    vol: "Chai 330ml",
    price: 12000,
    cat: "tangluc",
    mark: "Sting",
    c1: "#ffd21e",
    c2: "#e0a800",
    tx: "#8a3b00",
    shape: "bottle",
    style: "italic",
    cap: "#b07c00",
  },
  {
    id: "redbull",
    name: "Red Bull",
    vol: "Lon 250ml",
    price: 15000,
    cat: "tangluc",
    mark: "RedBull",
    c1: "#1f4a9c",
    c2: "#9b1b2e",
    tx: "#fff",
    shape: "can",
    style: "",
  },
  {
    id: "bohuc",
    name: "Bò Húc Thái",
    vol: "Lon 250ml",
    price: 15000,
    cat: "tangluc",
    mark: "Bò Húc",
    c1: "#c8a11a",
    c2: "#9a7a0a",
    tx: "#5a2b00",
    shape: "can",
    style: "",
  },
  {
    id: "number1",
    name: "Number 1",
    vol: "Chai 330ml",
    price: 11000,
    cat: "tangluc",
    mark: "Number 1",
    c1: "#e8b200",
    c2: "#c78a00",
    tx: "#7a2c00",
    shape: "bottle",
    style: "italic",
    cap: "#a03000",
  },
  {
    id: "monster",
    name: "Monster Xoài",
    vol: "Lon 355ml",
    price: 20000,
    cat: "tangluc",
    mark: "MONSTER",
    c1: "#1b1b1b",
    c2: "#0d0d0d",
    tx: "#8de02a",
    shape: "can",
    style: "",
  },

  // --- Trà & nước suối ---
  {
    id: "tra0do",
    name: "Trà Xanh 0 Độ",
    vol: "Chai 455ml",
    price: 10000,
    cat: "tra",
    mark: "0 Độ",
    c1: "#7fd13b",
    c2: "#4aa018",
    tx: "#fff",
    shape: "bottle",
    style: "",
    cap: "#2f7a0c",
  },
  {
    id: "traolong",
    name: "Trà Ô Long TEA+",
    vol: "Chai 450ml",
    price: 12000,
    cat: "tra",
    mark: "TEA+",
    c1: "#f0a13a",
    c2: "#c9761a",
    tx: "#fff",
    shape: "bottle",
    style: "",
    cap: "#8a4a0a",
  },
  {
    id: "cchanh",
    name: "C2 Chanh",
    vol: "Chai 360ml",
    price: 9000,
    cat: "tra",
    mark: "C2",
    c1: "#ffe14d",
    c2: "#e0bd00",
    tx: "#4a6b00",
    shape: "bottle",
    style: "",
    cap: "#8aa800",
  },
  {
    id: "aquafina",
    name: "Nước Suối Aquafina",
    vol: "Chai 500ml",
    price: 6000,
    cat: "tra",
    mark: "Aquafina",
    c1: "#bfe4f7",
    c2: "#8ec9ea",
    tx: "#0a4c72",
    shape: "bottle",
    style: "",
    cap: "#1275b0",
  },
  {
    id: "lavie",
    name: "Nước Suối Lavie",
    vol: "Chai 500ml",
    price: 6000,
    cat: "tra",
    mark: "LaVie",
    c1: "#d6eefb",
    c2: "#a4d6ef",
    tx: "#14639a",
    shape: "bottle",
    style: "script",
    cap: "#e01b24",
  },
  {
    id: "yaourt",
    name: "Sữa Chua Yakult",
    vol: "Lốc 5 chai",
    price: 30000,
    cat: "tra",
    mark: "Yakult",
    c1: "#ffffff",
    c2: "#eaeaea",
    tx: "#c8102e",
    shape: "bottle",
    style: "",
    cap: "#c8102e",
  },
];

const CATS = [
  { key: "all", label: "🥤 Tất cả" },
  { key: "gas", label: "🧊 Nước ngọt" },
  { key: "tangluc", label: "⚡ Tăng lực" },
  { key: "tra", label: "🍃 Trà & nước suối" },
];

/* ====== STATE ====== */
const CART_KEY = "lt1_cart";
const HIST_KEY = "lt1_orders";

let cart = loadJSON(CART_KEY, {}); // { id: qty }
let activeCat = "all";
let keyword = "";

// Số bàn lấy từ mã QR:  index.html?table=5
const params = new URLSearchParams(location.search);
const table = (params.get("table") || params.get("ban") || "").trim();

/* ====== HELPERS ====== */
function loadJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (e) {
    return fallback;
  }
}
function saveJSON(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}
function money(n) {
  return n.toLocaleString("vi-VN") + " đ";
}
function find(id) {
  return DRINKS.find((d) => d.id === id);
}
function $(sel) {
  return document.querySelector(sel);
}

function cartQty() {
  return Object.values(cart).reduce((a, b) => a + b, 0);
}
function cartKinds() {
  return Object.keys(cart).length;
}
function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, q]) => {
    const d = find(id);
    return d ? sum + d.price * q : sum;
  }, 0);
}

/* ====== RENDER: danh sách nước ====== */
function logoHTML(d) {
  const shape = d.shape === "bottle" ? "bottle" : "can";
  const styleCls = d.style ? " " + d.style : "";
  return `<div class="logo ${shape}" style="--c1:${d.c1};--c2:${d.c2};--tx:${d.tx};--cap:${d.cap || "#b0b0b0"}">
            <span class="wordmark${styleCls}">${d.mark}</span>
          </div>`;
}

function renderTabs() {
  $("#tabs").innerHTML = CATS.map(
    (c) =>
      `<button class="tab${c.key === activeCat ? " active" : ""}" data-cat="${c.key}">${c.label}</button>`,
  ).join("");
}

function renderGrid() {
  const kw = keyword.toLowerCase();
  const list = DRINKS.filter(
    (d) =>
      (activeCat === "all" || d.cat === activeCat) &&
      (!kw ||
        d.name.toLowerCase().includes(kw) ||
        d.mark.toLowerCase().includes(kw)),
  );

  $("#empty").classList.toggle("hidden", list.length > 0);

  $("#grid").innerHTML = list
    .map((d) => {
      const q = cart[d.id] || 0;
      return `
      <article class="card${q ? " in-cart" : ""}">
        ${q ? `<span class="qty-badge">${q}</span>` : ""}
        <div class="thumb">${logoHTML(d)}</div>
        <h3 class="name">${d.name}</h3>
        <p class="vol">${d.vol}</p>
        <div class="row">
          <span class="price">${money(d.price)}</span>
          <div class="stepper">
            ${
              q
                ? `<button class="step minus" data-minus="${d.id}" aria-label="Bớt 1">−</button>
                   <span class="step-val">${q}</span>`
                : ""
            }
            <button class="step plus" data-plus="${d.id}" aria-label="Thêm 1">+</button>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

/* ====== RENDER: giỏ hàng ====== */
function renderCart() {
  const qty = cartQty(),
    total = cartTotal();

  $("#cartbar").classList.toggle("hidden", qty === 0);
  $("#cartCount").textContent = qty;
  $("#cartTotal").textContent = money(total);
  $("#cartItems").textContent = cartKinds() + " món • " + qty + " ly/lon";

  $("#cartlist").innerHTML =
    Object.entries(cart)
      .map(([id, q]) => {
        const d = find(id);
        if (!d) return "";
        return `
      <li>
        <div class="mini" style="--c1:${d.c1};--c2:${d.c2}"></div>
        <div class="ci-name">${d.name}<small>${money(d.price)} × ${q} = ${money(d.price * q)}</small></div>
        <div class="stepper">
          <button class="step minus" data-minus="${id}">−</button>
          <span class="step-val">${q}</span>
          <button class="step plus" data-plus="${id}">+</button>
        </div>
      </li>`;
      })
      .join("") ||
    '<li style="justify-content:center;color:var(--muted)">Giỏ đang trống</li>';

  $("#sumSub").textContent = money(total);
  $("#sumTotal").textContent = money(total);
  $("#placeOrder").disabled = qty === 0;

  saveJSON(CART_KEY, cart);
}

function refresh() {
  renderGrid();
  renderCart();
}

/* ====== THAY ĐỔI SỐ LƯỢNG ====== */
function add(id) {
  cart[id] = (cart[id] || 0) + 1;
  if (cart[id] > 99) cart[id] = 99;
  refresh();
}
function sub(id) {
  if (!cart[id]) return;
  cart[id]--;
  if (cart[id] <= 0) delete cart[id];
  refresh();
}

/* ====== SHEET / MODAL ====== */
function openSheet() {
  $("#sheet").classList.remove("hidden");
  $("#overlay").classList.remove("hidden");
}
function closeSheet() {
  $("#sheet").classList.add("hidden");
  $("#overlay").classList.add("hidden");
}

function placeOrder() {
  if (cartQty() === 0) return;

  const order = {
    code: "#" + String(Date.now()).slice(-5),
    table: table || null,
    time: new Date().toLocaleString("vi-VN"),
    note: $("#note").value.trim(),
    total: cartTotal(),
    items: Object.entries(cart).map(([id, q]) => {
      const d = find(id);
      return { name: d.name, qty: q, price: d.price };
    }),
  };

  const hist = loadJSON(HIST_KEY, []);
  hist.unshift(order);
  saveJSON(HIST_KEY, hist.slice(0, 20));

  $("#orderCode").textContent = order.code;
  $("#orderMeta").textContent =
    (order.table ? "Bàn " + order.table + " • " : "") +
    cartQty() +
    " món • " +
    money(order.total);

  cart = {};
  $("#note").value = "";
  refresh();
  closeSheet();
  $("#doneModal").classList.remove("hidden");
}

function renderHistory() {
  const hist = loadJSON(HIST_KEY, []);
  $("#histBody").innerHTML =
    hist.length === 0
      ? '<p class="muted">Chưa có đơn nào.</p>'
      : hist
          .map(
            (o) => `
        <div class="hist-item">
          <b>${o.code}</b> — ${money(o.total)}${o.table ? " — Bàn " + o.table : ""}
          <div class="muted">${o.time}</div>
          <ul>${o.items.map((i) => `<li>${i.name} × ${i.qty}</li>`).join("")}</ul>
          ${o.note ? `<div class="muted">Ghi chú: ${o.note}</div>` : ""}
        </div>`,
          )
          .join("");
  $("#histModal").classList.remove("hidden");
}

/* ====== SỰ KIỆN ====== */
document.addEventListener("click", (e) => {
  const plus = e.target.closest("[data-plus]");
  const minus = e.target.closest("[data-minus]");
  const tab = e.target.closest(".tab");

  if (plus) return add(plus.dataset.plus);
  if (minus) return sub(minus.dataset.minus);
  if (tab) {
    activeCat = tab.dataset.cat;
    renderTabs();
    renderGrid();
  }
});

$("#search").addEventListener("input", (e) => {
  keyword = e.target.value;
  renderGrid();
});
$("#viewCart").addEventListener("click", openSheet);
$("#closeSheet").addEventListener("click", closeSheet);
$("#overlay").addEventListener("click", closeSheet);
$("#placeOrder").addEventListener("click", placeOrder);
$("#clearCart").addEventListener("click", () => {
  if (confirm("Xoá toàn bộ giỏ hàng?")) {
    cart = {};
    refresh();
    closeSheet();
  }
});
$("#doneOk").addEventListener("click", () =>
  $("#doneModal").classList.add("hidden"),
);
$("#historyBtn").addEventListener("click", renderHistory);
$("#histClose").addEventListener("click", () =>
  $("#histModal").classList.add("hidden"),
);

/* ====== KHỞI ĐỘNG ====== */
$("#tableLabel").textContent = table ? "Bàn số " + table : "Gọi nước tại bàn";
document.title = table ? `Bàn ${table} — Gọi nước` : "Gọi nước — Quán LT1";
renderTabs();
refresh();
