from flask import Flask, render_template
from iniciar import calcular_tempo, obter_legendas

app = Flask(__name__)

@app.route('/')
def index():

    tempo_desde_conhecimento = calcular_tempo()
    legendas = obter_legendas()
    return render_template('index.html', tempo=tempo_desde_conhecimento, legendas=legendas)

if __name__ == '__main__':
    app.run(debug=True)
