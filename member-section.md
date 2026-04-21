---
layout: default
title: 團員專區
permalink: /member-section/
---

<section class="member-section">
    <div class="container">
        <div class="section-header">
            <h2>團員專區</h2>
            <p id="member-section-subtitle">團員專屬資源區 - 請輸入密碼</p>
        </div>

        <!-- Login View -->
        <div id="login-view" class="auth-card">
            <h3>登入系統</h3>
            <div class="form-group password-wrapper">
                <input type="password" id="password-input" placeholder="請輸入密碼" style="text-align: center;">
                <i class="far fa-eye" id="toggle-password"></i>
            </div>
            <button id="login-button" class="btn btn-primary" style="width: 100%; background: #a82212; color: white;">進入</button>
            <p id="error-message" style="color: #a82212; margin-top: 1rem; display: none; font-size: 0.875rem;">密碼不正確，請再試一次。</p>
        </div>

        <!-- Files View (Hidden by default) -->
        <div id="files-view" style="display: none;">
            <div class="services-grid">
                <a href="#tally-open=obVZ2e&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave" class="service-card" style="text-decoration: none; cursor: pointer;">
                    <div class="service-icon">📅</div>
                    <h3>我要請假</h3>
                    <p>提交請假申請</p>
                </a>
                <a href="{{ '/sheet-music/' | relative_url }}" class="service-card" style="text-decoration: none; cursor: pointer;">
                    <div class="service-icon">🎵</div>
                    <h3>歌譜下載</h3>
                    <p>查看並下載合唱團最新歌譜資源</p>
                </a>
            </div>
            
            <div style="text-align: center; margin-top: 4rem;">
                <button id="logout-button" class="btn btn-secondary" style="color: #a82212; border-color: #a82212;">登出系統</button>
            </div>
        </div>
    </div>
</section>

<script>
    const SUPABASE_URL = 'https://ppyadrakhujcqixlprht.supabase.co'; 
    // your actual Anon Key from Supabase
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBweWFkcmFraHVqY3FpeGxwcmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MjQ5OTksImV4cCI6MjA5MjMwMDk5OX0.j7gstnFgT7kyD_E7CgQYm9YpvYG0IbUv130YEb_JhWU'; 
    const SHARED_EMAIL = 'fullchoir@vopc.ca'; 

    // Initialize the Supabase client using the global 'supabase' object from the CDN
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    const loginView = document.getElementById('login-view');
    const filesView = document.getElementById('files-view');
    const passwordInput = document.getElementById('password-input');
    const loginBtn = document.getElementById('login-button');
    const togglePassword = document.getElementById('toggle-password');
    const errorMsg = document.getElementById('error-message');

    async function init() {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            showFiles();
        }
    }

    async function handleLogin() {
        const password = passwordInput.value;
        if (!password) return;

        loginBtn.disabled = true;
        loginBtn.innerText = '處理中...';

        const { error } = await supabaseClient.auth.signInWithPassword({
            email: SHARED_EMAIL,
            password: password
        });

        if (error) {
            errorMsg.style.display = 'block';
            passwordInput.value = '';
            loginBtn.disabled = false;
            loginBtn.innerText = '進入';
        } else {
            errorMsg.style.display = 'none';
            showFiles();
        }
    }

    async function showFiles() {
        loginView.style.display = 'none';
        filesView.style.display = 'block';
        document.getElementById('member-section-subtitle').innerText = '團員專屬資源區';
    }
    async function handleLogout() {
        await supabaseClient.auth.signOut();
        window.location.reload();
    }

    loginBtn.addEventListener('click', handleLogin);
    document.getElementById('logout-button').addEventListener('click', handleLogout);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
    
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    init();
</script>