import http.server
import socketserver

PORT = 8080
HOST = "192.168.1.35"  # Permet à tous les périphériques sur le réseau local d'accéder au serveur

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer((HOST, PORT), Handler) as httpd:
    print(f"Serveur en marche sur http://{HOST}:{PORT}")
    httpd.serve_forever()
