"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("login");

  return (
    <main>
      <header className="header">
        <h1>حركة إيرس الوطنية</h1>
        <p>البوابة التنظيمية الرسمية</p>
        <p>الهوية • الانتماء • العمل الوطني</p>
      </header>

      <div className="container">
        <div className="card" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#d8c3ff" }}>مرحباً بك في بوابة إيرس</h2>
          <p>منصة الأعضاء والانتساب والتنظيم الداخلي</p>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setTab("login")}>تسجيل الدخول</button>
            <button onClick={() => setTab("apply")}>طلب انتساب</button>
          </div>
        </div>

        {tab === "login" && (
          <section className="card">
            <h2>تسجيل دخول الأعضاء</h2>
            <p>أدخل بيانات حسابك للوصول إلى ملفك التنظيمي.</p> form>
              <label>البريد الإلكتروني</label>
              <input type="email" placeholder="البريد الإلكتروني" required />
              <label>كلمة المرور</label>
              <input type="password" placeholder="كلمة المرور" required />
              <button type="button">دخول</button>
            </form>
          </section>
        }

        {tab === "apply" && (
          <section className="card">
            <h2>استمارة طلب الانتساب</h2>
            <p>املأ المعلومات التالية لإرسال طلبك إلى الإدارة.</p>
            <form>
              <label>الاسم الكامل</label>
              <input type="text" placeholder="الاسم الكامل" required />
              <label>البريد الإلكتروني</label>
              <input type="email" placeholder="البريد الإلكتروني" required />
              <label>المحافظة</label>
              <input type="text" placeholder="المحافظة" required />
              <label>العمر</label>
              <select required style={{ width: "100%", padding: 13, margin:"10px 0", background: "#130e1d", color: "white" }}>
                <option value="">اختر الفئة العمرية</option>
                <option value="under_18">أقل من 18 سنة</option>
                <option value="18_or_over">18 سنة فأكثر</option>
              </select>
              <label>كلمة المرور</label>
              <input type="password" placeholder="أنشئ كلمة مرور" required />
              <p style={{ color: "#c8b5e8", fontSize: 13 }}>
                يخضع طلب الانتساب لمراجعة الإدارة قبل تفعيل العضوية.
                ومن هم دون 18 سنة يلزمهم استكمال موافقة ولي الأمر وفق الإجراءات المعتمدة.
              </p>
              <button type="button">إرسال طلب الانتساب</button>
            </form>
          </section>
        )}

        <footer style={{ textAlign: "center", padding: 25, color: "#b8a5d1" }}>
          © 2026 حركة إيرس الوطنية
        </footer>
      </div>
    </main>
  );
}
