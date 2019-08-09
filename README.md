# Instalação

Clone o repositório

    git clone https://github.com/bruno7kp/flask-vue-base.git
    
Crie e ative ambiente virtual

    cd flask-vue-base
    python -m venv env
    env\Scripts\activate
    
Instale o Flask e outras bibliotecas

    pip install -r requirements.txt
    
Rode o programa

    set FLASK_ENV='development'
    set FLASK_DEBUG=1
    python -m flask run