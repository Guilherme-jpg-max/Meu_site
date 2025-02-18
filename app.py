from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

# Data em que vocês se conheceram
data_conhecimento = datetime(2022, 5, 19)

@app.route('/')
def index():
    # Calcula o número de dias desde que se conheceram
    dias_desde_conhecimento = (datetime.now() - data_conhecimento).days
    return render_template('index.html', dias=dias_desde_conhecimento)

if __name__ == '__main__':
    app.run(debug=True)