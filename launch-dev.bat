@echo off
setlocal

REM Launch FrontEnd
start "FrontEnd" cmd /k "cd /d %~dp0ProductFrontend && npm run dev"

REM Launch BackEnd
start "BackEnd" cmd /k "cd /d %~dp0ProductBackend && nodemon server.js"