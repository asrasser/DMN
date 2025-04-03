// الرصيد الابتدائي
let defaultBalance = 2.50;

// key مميز لمستخدم 1
const STORAGE_KEY = "walletBalance_user2";

/**
 * تهيئة الرصيد: إذا لا يوجد رصيد، ضع defaultBalance
 */
function initBalanceUser1() {
  let stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, defaultBalance);
  }
}

/**
 * عرض الرصيد في العناصر المطابقة
 */
function showBalanceUser1(selector) {
  let balance = parseFloat(localStorage.getItem(STORAGE_KEY) || 0);
  document.querySelectorAll(selector).forEach(el => {
    el.textContent = `$${balance.toFixed(2)}`;
  });
}

/**
 * سحب من الرصيد
 */
function withdrawUser1(amount) {
  let balance = parseFloat(localStorage.getItem(STORAGE_KEY) || 0);
  if (amount < 10) {
    alert("Minimum withdrawal is $10.");
    return;
  }
  if (amount > balance) {
    alert(`Insufficient balance! You only have $${balance.toFixed(2)}`);
    return;
  }
  balance -= amount;
  localStorage.setItem(STORAGE_KEY, balance);
  alert(`Withdrawal of $${amount} successful!\nNew balance: $${balance.toFixed(2)}`);
}

/**
 * إضافة أرباح للمستخدم 1 (من جانبك فقط)
 */
function addProfitUser1(amount) {
  let balance = parseFloat(localStorage.getItem(STORAGE_KEY) || 0);
  balance += amount;
  localStorage.setItem(STORAGE_KEY, balance);
  alert(`Added $${amount} to user1.\nNew balance: $${balance.toFixed(2)}`);
}

