# iniciar.py
from datetime import datetime

# Data em que nós nos conhecemos
data_conhecimento = datetime(2022, 5, 19)

# Lista com as legendas para cada foto
legendas = [
    "Nosso primeiro encontro, que momento especial!",
    "O sorriso dela é o que me faz feliz todos os dias.",
    "Em nossa primeira viagem, criando memórias inesquecíveis.",
    "Aquele dia que tudo parecia perfeito, só nós dois.",
    "O carinho que faz tudo valer a pena.",
    "Nosso primeiro pôr do sol juntos.",
    "Feliz por ter encontrado alguém tão incrível.",
    "Nosso momento de paz, em meio a tantas aventuras.",
    "O dia em que decidimos fazer algo novo e diferente.",
    "Olha o brilho no olhar, sempre juntos.",
    "O amor é feito desses pequenos momentos.",
    "Compartilhando risadas e muito mais.",
    "O lugar que marcou o nosso primeiro 'eu te amo'.",
    "Criando memórias que vamos carregar para sempre.",
    "Nosso primeiro encontro, que momento especial!",
    "O melhor de tudo é fazer tudo ao seu lado.",
    "Às vezes, tudo o que precisamos é de um abraço.",
    "Compartilhando sonhos e planos para o futuro.",
    "A felicidade está nos pequenos gestos de carinho.",
    "O tempo passa rápido quando estamos juntos.",
    "A primeira vez que fomos ao nosso lugar especial.",
    "Sempre ao seu lado, enfrentando o mundo juntos.",
    "Dançando como se ninguém estivesse olhando.",
    "O sorriso dela ilumina qualquer lugar.",
    "Nosso lugar feliz, onde tudo faz sentido.",
    "O que mais importa é estarmos juntos, não importa onde."
]

# Função para calcular os dias desde que se conheceram
def calcular_tempo():
    # Calcula a diferença entre a data atual e a data do conhecimento
    delta = datetime.now() - data_conhecimento

    # Obtém os dias, horas, minutos e segundos
    dias = delta.days
    horas = delta.seconds // 3600
    minutos = (delta.seconds // 60) % 60
    segundos = delta.seconds % 60

    # Retorna como uma string formatada
    return f"{dias} dias, {horas} horas, {minutos} minutos, {segundos} segundos"
# Função para retornar as legendas
def obter_legendas():
    return legendas
