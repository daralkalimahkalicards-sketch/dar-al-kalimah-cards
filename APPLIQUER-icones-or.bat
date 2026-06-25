@echo off
echo Application de la correction icones couleur or #C8A462 sur TOUT le projet...
echo (modules + lecons + quiz)
echo.

REM ── MODULES (module2, 3, 4, 5 + modules.html) ──────────────────────────────

powershell -Command "(Get-Content 'module2.html') -replace 'color: var\(--gold-light\); font-size: 1\.6rem; transition: all 0\.3s ease; text-decoration: none; \}', 'color: var(--gold); font-size: 1.6rem; transition: all 0.3s ease; text-decoration: none; }' | Set-Content 'module2.html' -Encoding UTF8"

powershell -Command "(Get-Content 'module3.html') -replace 'color: var\(--gold-light\); font-size: 1\.6rem; transition: all 0\.3s ease; text-decoration: none; \}', 'color: var(--gold); font-size: 1.6rem; transition: all 0.3s ease; text-decoration: none; }' | Set-Content 'module3.html' -Encoding UTF8"

powershell -Command "(Get-Content 'module4.html') -replace 'color: var\(--gold-light\); font-size: 1\.6rem; transition: all 0\.3s ease; text-decoration: none; \}', 'color: var(--gold); font-size: 1.6rem; transition: all 0.3s ease; text-decoration: none; }' | Set-Content 'module4.html' -Encoding UTF8"

powershell -Command "(Get-Content 'module5.html') -replace 'color: var\(--gold-light\); font-size: 1\.6rem; transition: all 0\.3s ease; text-decoration: none; z-index: 20; \}', 'color: var(--gold); font-size: 1.6rem; transition: all 0.3s ease; text-decoration: none; z-index: 20; }' | Set-Content 'module5.html' -Encoding UTF8"

powershell -Command "(Get-Content 'modules.html') -replace '            color: var\(--gold-light\); text-decoration: none; font-size: 1\.5rem;', '            color: var(--gold); text-decoration: none; font-size: 1.5rem;' | Set-Content 'modules.html' -Encoding UTF8"

REM ── LECONS ──────────────────────────────────────────────────────────────────

powershell -Command "(Get-Content 'lecon1.html') -replace 'color: var\(--burgundy\);(\r?\n)      font-size: 1\.05rem;', 'color: var(--gold);$1      font-size: 1.05rem;' | Set-Content 'lecon1.html' -Encoding UTF8"

powershell -Command "(Get-Content 'lecon5.html') -replace ""style='color:#E8A317;'"", ""style='color:#C8A462;'"" | Set-Content 'lecon5.html' -Encoding UTF8"

powershell -Command "(Get-Content 'lecon7.html') -replace '\.btn-back-menu\{position:absolute;top:8px;left:0;color:var\(--burgundy\);', '.btn-back-menu{position:absolute;top:8px;left:0;color:var(--gold);' | Set-Content 'lecon7.html' -Encoding UTF8"

powershell -Command "(Get-Content 'lecon8.html') -replace '\.btn-back-lesson\{color:var\(--burgundy\);font-size:1\.5rem;', '.btn-back-lesson{color:var(--gold);font-size:1.5rem;' | Set-Content 'lecon8.html' -Encoding UTF8"

powershell -Command "(Get-Content 'lecon9.html') -replace 'fa-link theme-icon"" style=""color:#7b5ea7;', 'fa-link theme-icon"" style=""color:var(--gold);' | Set-Content 'lecon9.html' -Encoding UTF8"

powershell -Command "(Get-Content 'lecon9.html') -replace 'fa-book-open theme-icon"" style=""color:var\(--text-soft\);', 'fa-book-open theme-icon"" style=""color:var(--gold);' | Set-Content 'lecon9.html' -Encoding UTF8"

powershell -Command "(Get-Content 'lecon12.html') -replace '\.btn-back-menu\{position:absolute;top:8px;left:0;color:var\(--burgundy\);', '.btn-back-menu{position:absolute;top:8px;left:0;color:var(--gold);' | Set-Content 'lecon12.html' -Encoding UTF8"

powershell -Command "(Get-Content 'lecon12.html') -replace '\.theme-icon-green\{font-size:3\.6rem;color:var\(--burgundy\);', '.theme-icon-green{font-size:3.6rem;color:var(--gold);' | Set-Content 'lecon12.html' -Encoding UTF8"

echo.
echo Correction appliquee ! Toutes les icones sont en or #C8A462.
pause
