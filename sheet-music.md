---
layout: default
title: 歌譜下載
permalink: /sheet-music/
---

<section class="member-section">
    <div class="container">
        <div class="section-header">
            <h2>歌譜下載</h2>
            <p>團員專屬資源區</p>
        </div>

        <div id="auth-check" style="text-align: center; padding: 2rem;">
            <p>正在驗證權限...</p>
        </div>

        <div id="files-view" style="display: none;">
            <div style="margin-bottom: 2rem;">
                <a href="{{ '/member-section/' | relative_url }}" class="btn btn-secondary" style="color: #a82212; border-color: #a82212;"><i class="fas fa-arrow-left"></i> 返回專區</a>
            </div>
            <h3 style="font-size: 1.5rem; font-weight: 600; color: #1f2937; margin-bottom: 1.5rem;">歌譜列表</h3>
            <div class="table-responsive">
                <table class="music-table">
                    <thead>
                        <tr>
                            <th>檔案名稱</th>
                            <th>上傳時間</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody id="music-list"></tbody>
                </table>
            </div>
        </div>
    </div>
</section>

<script>
    const SUPABASE_URL = 'https://ppyadrakhujcqixlprht.supabase.co'; 
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBweWFkcmFraHVqY3FpeGxwcmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MjQ5OTksImV4cCI6MjA5MjMwMDk5OX0.j7gstnFgT7kyD_E7CgQYm9YpvYG0IbUv130YEb_JhWU'; 
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    async function init() {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) {
            window.location.href = "{{ '/member-section/' | relative_url }}";
        } else {
            document.getElementById('auth-check').style.display = 'none';
            showFiles();
        }
    }

    async function showFiles() {
        const musicList = document.getElementById('music-list');
        document.getElementById('files-view').style.display = 'block';
        musicList.innerHTML = '<tr><td colspan="3" style="text-align: center; padding: 2rem;">正在載入列表...</td></tr>';

        const { data, error } = await supabaseClient.storage.from('sheet-music').list('sheets', {
            sortBy: { column: 'created_at', order: 'desc' }
        });

        if (error) {
            musicList.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #a82212;">讀取失敗: ${error.message}</td></tr>`;
            return;
        }

        const files = data ? data.filter(file => file.name !== '.emptyFolderPlaceholder' && file.id !== null) : [];

        if (files.length === 0) {
            musicList.innerHTML = '<tr><td colspan="3" style="text-align: center;">目前沒有可用的歌譜。</td></tr>';
            return;
        }

        musicList.innerHTML = files.map(file => `
            <tr>
                <td class="file-name-cell"><i class="far fa-file-pdf" style="color: #a82212; margin-right: 10px;"></i>${file.name}</td>
                <td style="color: #6b7280;">${new Date(file.created_at).toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                <td>
                    <div style="display: flex; gap: 8px;">
                        <button onclick="openFile('sheets/${file.name}')" class="btn btn-secondary" style="color: #a82212; border-color: #a82212; padding: 6px 12px; font-size: 0.875rem;">查看</button>
                        <button onclick="downloadFile('sheets/${file.name}')" class="btn btn-primary" style="background: #a82212; color: white; padding: 6px 12px; font-size: 0.875rem;">下載</button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    async function openFile(path) {
        const { data, error } = await supabaseClient.storage.from('sheet-music').createSignedUrl(path, 3600);
        if (data) window.open(data.signedUrl, '_blank');
    }

    async function downloadFile(path) {
        const { data, error } = await supabaseClient.storage.from('sheet-music').download(path);
        if (data) {
            const blobUrl = window.URL.createObjectURL(data);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = path.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        }
    }

    init();
</script>