"use client";

import { useState } from "react";

export default function HomePage() {
  const [tab, setTab] = useState("login");

  // حقول تسجيل الدخول
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // حقول طلب الانتساب
  const [fullName, setFullName] = useState("");
  const [applyEmail, setApplyEmail] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [age, setAge] = useState("");

  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setMessage("تم إرسال بيانات تسجيل الدخول للمراجعة.");
  }

  function handleApply(e) {
    e.preventDefault();
    setMessage("تم استلام طلب الانتساب بنجاح.");
  }

  return (
    <main dir="rtl" className="container">
      <header className="header">
        <h1>بوابة الأعضاء والانتساب</h1>
        <div className="tabs">
          <button
            type="button"
            className={tab === "login" ? "tab active" : "tab"}
            onClick={() => {
              setTab("login");
              setMessage("");
            }}
          >
            تسجيل دخول الأعضاء
          </button>
          <button
            type="button"
            className={tab === "apply" ? "tab active" : "tab"}
            onClick={() => {
              setTab("apply");
              setMessage("");
            }}
          >
            طلب انتساب
          </button>
        </div>
      </header>

      {message && <p className="notice">{message}</p>}

      {tab === "login" && (
        <section className="card">
          <h2>تسجيل دخول الأعضاء</h2>
          <p>أدخل بيانات حسابك للوصول إلى ملفك التنظيمي.</p>
          <form onSubmit={handleLogin} className="form">
            <label htmlFor="login-email">البريد الإلكتروني</label>
            <input
              id="login-email"
              type="email"
              placeholder="example@email.com"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />

            <label htmlFor="login-password">كلمة المرور</label>
            <input
              id="login-password"
              type="password"
              placeholder="••••••••"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />

            <button type="submit" className="submit-btn">
              دخول
            </button>
          </form>
        </section>
      )}

      {tab === "apply" && (
        <section className="card">
          <h2>استمارة طلب الانتساب</h2>
          <p>يرجى تعبئة البيانات التالية لإرسال طلبك إلى الإدارة.</p>
          <form onSubmit={handleApply} className="form">
            <label htmlFor="full-name">الاسم الكامل</label>
            <input
              id="full-name"
              type="text"
              placeholder="اكتب الاسم الثلاثي أو الكامل"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <label htmlFor="apply-email">البريد الإلكتروني</label>
            <input
              id="apply-email"
              type="email"
              placeholder="example@email.com"
              value={applyEmail}
              onChange={(e) => setApplyEmail(e.target.value)}
              required
            />

            <label htmlFor="governorate">المحافظة</label>
            <input
              id="governorate"
              type="text"
              placeholder="مثال: البصرة أو بغداد"
              value={governorate}
              onChange={(e) => setGovernorate(e.target.value)}
              required
            />

            <label htmlFor="age">العمر</label>
            <input
              id="age"
              type="number"
              min="16"
              max="100"
              placeholder="العمر"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />

            <button type="submit" className="submit-btn">
              إرسال الطلب
            </button>
          </form>
        </section>
      )}
    </main>
  );
}
