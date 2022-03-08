echo $TLS_CERT | base64 -d > cert.pem
echo $TLS_KEY | base64 -d > key.pem

serve --ssl-cert cert.pem --ssl-key key.pem -l tcp://0.0.0.0:443 -s build
