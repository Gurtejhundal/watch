@echo off
echo Starting Luxury Watch Platform...

:: Start Django Backend
echo Starting Django Backend...
start cmd /k "cd backend && .\venv\Scripts\activate && python manage.py runserver"

:: Start Next.js Frontend
echo Starting Next.js Frontend...
start cmd /k "cd frontend && npm run dev"

echo Both servers are starting!
echo Backend: http://127.0.0.1:8000
echo Frontend: http://localhost:3000
