@echo off
echo Starting BrainBoard Development Server...
start /b npm run dev
timeout /t 3 /nobreak > nul
echo Opening browser...
start http://localhost:5173
echo BrainBoard is running!
pause
