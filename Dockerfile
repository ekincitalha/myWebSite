# Resmi Nginx image'ını kullanıyoruz
FROM nginx:alpine

# Build edilmiş React dosyalarını Nginx'e kopyala
COPY build/ /usr/share/nginx/html

# Nginx için portu açıyoruz
EXPOSE 80

# Nginx başlatılıyor
CMD ["nginx", "-g", "daemon off;"]
