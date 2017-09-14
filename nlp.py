import spacy
import pandas as pd
nlp = spacy.load('en')

# load and prepare data
def process_texts(texts):
    for doc in nlp.pipe(texts, batch_size=10000, n_threads=3):
        for proc in nlp.pipeline:
            proc(doc)
        yield doc


def run(path='./app/src/data/reviews_books_100.json', n_reviews=100):
    data = pd.read_json(path)
    data = data[:n_reviews]
    reviews = data['reviewText']
    text_gen = process_texts(reviews)
    analysis = []

    for review in range(n_reviews):
        tokens = []
        doc = next(text_gen)
        for word in doc:
            token = {}
            token['text'] = word.text
            token['lemma'] = word.lemma_
            token['entity'] = word.ent_type_
            token['pos'] = word.pos_
            token['tag'] = word.tag_
            token['dep'] = word.dep_
            tokens.append(token)
        
        analysis.append(tokens)
    
    print(len(analysis))
    data['analysis'] = analysis
    data.to_json('./app/src/data/reviews_books_analysis_100.json', orient='records')

run()



